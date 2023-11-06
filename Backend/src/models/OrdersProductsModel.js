import Sequelize, {Model} from 'sequelize';

export default class OrdersProductsModel extends Model {
    static init(sequelize) {
        super.init({
            order_id: Sequelize.INTEGER,
            product_id: Sequelize.INTEGER,
            quantity_buyed: Sequelize.INTEGER,
            product_price: Sequelize.DECIMAL,
            product_discount_percent: Sequelize.DECIMAL,
        }, {
            tableName: 'orders_products',
            modelName: 'orders_products',
            sequelize: sequelize,
        })
    }
}