import Sequelize, {Model, DataTypes} from 'sequelize';

export default class ProductModel extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            price: DataTypes.DECIMAL,
            quantity_stock: DataTypes.INTEGER,
            quantity_sold: DataTypes.INTEGER,
            discount_percent: DataTypes.INTEGER,
            discount_datetime_start: DataTypes.DATE,
            discount_datetime_end: DataTypes.DATE,
        }, {
            tableName: 'products',
            sequelize: sequelize,
        });
    }
    static associate(models) {
        this.belongsTo(models.CategoryModel, {
            foreignKey: 'category_id',
            as:'category',
        });
    }
}