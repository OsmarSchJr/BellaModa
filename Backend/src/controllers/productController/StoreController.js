import ProductModel from '../../models/ProductModel';


class StoreController {
    async store(req, res) {
        const {name, email, cpf, password} = req.body;
        try {
            const newProduct = await ProductModel.create({ name, email, cpf, password });
            return res.json({ product: newProduct });
        } catch(error) {
            console.error(new Date().toUTCString(), '-', error);
            return res.status(500).json({ message: 'internal error' });
        }

    }
}

export default new StoreController();