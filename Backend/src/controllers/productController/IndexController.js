import ProductModel from '../../models/ProductModel;'

class IndexController {
    async index(req, res) {
        try {
            const products = await ProductModel.findAll();
            return res.json(users);
        } catch(error) {
            console.error(new Date().toUTCString(), '-', error);
            return res.status(500).json({ message: 'internal error' });
        }
    }
}

export default new IndexController();