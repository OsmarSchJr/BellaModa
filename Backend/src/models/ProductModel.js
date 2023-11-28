import Sequelize, {Model, DataTypes} from 'sequelize';

export default class ProductModel extends Model {
    static init(sequelize) {
        super.init({
            title: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 60],
                        msg: 'the title field must have between 3 and 60 caracters'
                    },
                },
            },
            description: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [0, 4000],
                        msg: 'maximum description length is 4000 characters',
                    },
                },
            },
            price: {
                type: Sequelize.DECIMAL,
                defaultValue: 0,
            },
            quantity_stock: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
                validate: {
                    customValidator(value) {
                        if( value < 0) {
                            throw new Error('invalid value');
                        }
                    }
                }
            },
            quantity_sold: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
            },
            discount_percent: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
            },
            discount_datetime_start: {
                type: Sequelize.DATE,
            },
            discount_datetime_end: {
                type: Sequelize.DATE,
            },
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