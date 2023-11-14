import CategoryModel from '../../models/CategoryModel';

class DeleteController {
    async delete(req, res) {
        try {
            if(!req.params.id) {
                return res.status(400).json({
                    errors: ['Missing id.'],
                });
            }

            const category = await CategoryModel.findByPk(req.params.id);

            if(!category) {
                return res.status(400).json({
                    errors: ["Category doesn't exist."],
                });
            }

            await category.destroy();
            
            return res.json(null);
        } catch (err) {
            return res.json(null);
        }
    }
}

export default new DeleteController();
