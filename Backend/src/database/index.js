import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import CategoryModel from '../models/CategoryModel';
import ProductModel from '../models/ProductModel';

const models = [CategoryModel, ProductModel ];

const connection = new Sequelize(databaseConfig);

for (let model in models) {
    models[model].init(connection);
}

for (let model in models) {
    if (models[model].associate) {
        models[model].associate(connection.models);
    }
}

module.exports = connection;