import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import CategoryModel from '../models/CategoryModel';
import ProductModel from '../models/ProductModel';
import OrderModel from '../models/OrderModel';
import OrdersProductsModel from '../models/OrdersProductsModel';
import UserModel from '../models/UserModel';
import AddressModel from '../models/AddressModel';

const models = [CategoryModel, ProductModel, OrderModel, OrdersProductsModel, UserModel, AddressModel];

const connection = new Sequelize(databaseConfig);

models.forEach(model => model.init(connection));

for(let model in models) {
    if(models[model].associate) {
        models[model].associate(connection.models);
    }
}