import Sequelize, {Model} from 'sequelize';
import bcryptjs from 'bcryptjs';


export default class UserModel extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args : [3, 255],
                        msg: 'the name field must have between 3 and 255 caracters',
                    },
                }
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    isEmail: {
                        msg: 'invalid email',
                    }
                }
            },
            cpf: {
                type: Sequelize.STRING,
                defaultValue: '',
            },
            password_hash: {
                type: Sequelize.STRING,
                defaultValue: '',
                
            },
            password: {
                type: Sequelize.VIRTUAL,
                validate: {
                    len: {
                        args: [6, 50],
                        msg: 'password must contain between 6 to 50 characters',
                    }
                }
            },
            admin: {
                type: Sequelize.BOOLEAN,
            },
            reset_password_token: {
                type: Sequelize.STRING,
            },
            reset_password_expires: {
                type: Sequelize.DATE,
            },

        }, {
            tableName: 'users',
            sequelize: sequelize,
        });

        this.addHook('beforeSave', async user => {
            if (user.password) {
                user.password_hash = await bcryptjs.hash(user.password, 8);
            }
            
        });
        return this;
    }
    static associate(models) {
        this.hasMany(models.AddressModel, {
            foreignKey: 'user_id',
            as:'addresses',
        });
        
        this.hasMany(models.OrderModel, {
            foreignKey: 'user_id',
            as: 'orders'
        });
    }
}