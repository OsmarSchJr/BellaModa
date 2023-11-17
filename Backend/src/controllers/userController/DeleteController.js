import UserModel from '../../models/UserModel';

class DeleteController {
    async delete(req, res) {
        try {
            if(!req.params.id) {
                return res.status(400).json({
                    errors: ['Missing id.'],
                });
            }

            const category = await UserModel.findByPk(req.params.id);

            if(!category) {
                return res.status(400).json({
                    errors: ["Category doesn't exist."],
                });
            }

            await category.destroy();
            
            return res.json(null);
        } catch(error) {
            console.error(new Date().toUTCString(), '-', error);
            return res.status(500).json({ message: 'internal error' });
        }
    }
}

export default new DeleteController();
