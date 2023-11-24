import ProductModel from '../../models/ProductModel';

class DeleteController {
    async delete(req, res) {
        try {
            if(!req.params.id) {
                return res.status(400).json({
                    errors: ['Missing id.'],
                });
            }

            const user = await ProductModel.findByPk(req.params.id);

            if(!user) {
                return res.status(400).json({
                    errors: ["User doesn't exist."],
                });
            }

            await user.destroy();
            
            return res.sendStatus(200);
        } catch(error) {
            console.error(new Date().toUTCString(), '-', error);
            return res.status(500).json({ message: 'internal error' });
        }
    }
}

export default new DeleteController();
