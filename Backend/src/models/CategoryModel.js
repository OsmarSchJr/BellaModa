import Sequelize, {Model} from 'sequelize';

export default class CategoryModel extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            parent_id: Sequelize.INTEGER,
        }, {
            tableName: 'categories',
            sequelize: sequelize,
        });
        return this
    }
    static associate(models) {
        this.hasMany(models.ProductModel, {
            foreignKey: 'category_id',
            as:'products',
        });
    }
}