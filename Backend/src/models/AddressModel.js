import Sequelize, {Model} from 'sequelize';

export default class AddressModel extends Model {
    static init(sequelize) {
        super.init({
            street: Sequelize.STRING,
            number: Sequelize.INTEGER,
            neighborhood: Sequelize.STRING,
            city: Sequelize.STRING,
            state: Sequelize.STRING,
            zipcode: Sequelize.STRING,

        }, {
            tableName: 'addresses',
            sequelize: sequelize,
        });
        return this
    }
    static associate(models) {
        this.belongsTo(models.UserModel, {
            foreignKey: 'user.id',
            as:'user',
        });

        this.hasMany(models.OrderModel, {
            foreignKey: 'address_id',
            as: 'orders',
        });
    }
}