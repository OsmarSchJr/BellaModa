import Sequelize, {Model} from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class UserModel extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            cpf: Sequelize.STRING,
            password: Sequelize.STRING,
            admin: Sequelize.BOOLEAN,
            reset_password_token: Sequelize.STRING,
            reset_password_expires: Sequelize.DATE,

        }, {
            tableName: 'users',
            sequelize: sequelize,
            hooks: {
                beforeSave: async (user) => {
                    if(user._changed.password) {
                        user.password = await bcryptjs.hash(user.password, 8);
                    }
                }
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