import Sequelize, {Model, DataTypes} from 'sequelize';

export default class Category extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            parent_id: DataTypes.INTEGER,
        }, {
            sequelize
        });
    }
    static associate(models) {
        this.hasMany(models.ProductModel, {
            foreignKey: 'category_id',
            as:'products',
        });
    }
}