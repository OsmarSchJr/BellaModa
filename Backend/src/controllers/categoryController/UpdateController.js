import CategoryModel from '../../models/CategoryModel';

class UpdateController {
    async update(req, res) {
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

            const newCategory = await category.update(req.body);
            
            return res.json(newCategory);
        } catch (err) {
            return res.json(null);
        }
    }
}

export default new UpdateController();
