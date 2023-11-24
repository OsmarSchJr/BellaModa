import ProductModel from '../../models/ProductModel';

class ShowController {
    async show(req, res) {
        try {
            const product = await ProductModel.findByPk(req.params.id, {
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                },
                order: [["name", "ASC"]],
            });
            return res.json(product);
        } catch(error) {
            console.error(new Date().toUTCString(), '-', error);
            return res.status(500).json({ message: 'internal error' });
        }
    }
}

export default new ShowController();