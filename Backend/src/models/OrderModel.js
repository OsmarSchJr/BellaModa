import Sequelize, {Model} from 'sequelize';

export default class OrderModel extends Model {
    static init(sequelize) {
        super.init({
            freight_name: Sequelize.STRING,
            freight_price: Sequelize.DECIMAL,
            total_price: Sequelize.DECIMAL,
            payment_method: Sequelize.STRING,
            status: Sequelize.STRING,
            boleto_url: Sequelize.STRING,
            tracking_code: Sequelize.STRING,

        }, {
            tableName: 'orders',
            sequelize: sequelize,
        });
        return this;
    }
    static associate(models) {
        this.belongsTo(models.UserModel, {
            foreignKey: 'user_id',
            as: 'users'
        });

        this.belongsTo(models.AddressModel, {
            foreignKey: 'address_id',
            as: 'address'
        })

        this.belongsToMany(models.ProductModel, {
            through: OrdersProducts,
            foreignKey: 'order_id',
            as: 'products',
        })
    }
}