import Sequelize, {Model} from 'sequelize';

export default class CategoryModel extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: Sequelize.STRING,
                validate: {
                    len: {
                        args: [3, 45],
                        msg: 'Campo deve ter entre 3 a 45 caracteres.'
                    },
                },
            },
            parent_id: {
                type: Sequelize.INTEGER,
            },
        }, {
            tableName: 'categories',
            sequelize: sequelize,
        });
        return this;
    }
    static associate(models) {
        this.hasMany(models.ProductModel, {
            foreignKey: 'category_id',
            as:'products',
        });
    }
}