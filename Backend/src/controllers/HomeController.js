import CategoryModel from '../models/CategoryModel'

 class HomeClontroller {
    async index(req, res) {
        const newCategory = await CategoryModel.create({
            name: 'Camisa',

        });
        res.json(newCategory)
    }
 }

 export default new HomeClontroller();