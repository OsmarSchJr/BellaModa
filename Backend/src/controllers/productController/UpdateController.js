import ProductModel from '../../models/ProductModel';

class UpdateController {
    async update(req, res) {
        
        try {
            const product = await ProductModel.findByPk(req.params.id);

            if (!product) {
                return res.status(400).json({
                    errors: ["product doesn't found."],
                });
            }
            
            const newProduct = await product.update(req.body);
            
            return res.json(newProduct);
        } catch(error) {
            console.error(new Date().toUTCString(), '-', error);
            return res.status(500).json({ message: 'internal error' });
        }
    }
}

export default new UpdateController();
