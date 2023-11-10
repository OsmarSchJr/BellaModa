import CategoryModel from "../../models/CategoryModel";

class StoreController {
    async store(req, res) {
        try {
            if (req.body.parent_id) {
                const parent = await CategoryModel.findByPk(req.body.parent_id);

                if(!parent)
                    return res
                .status(400)
                .json({ message: 'parent category id not found' })
            }

            const category = await CategoryModel.create(req.body);

            return res.json(category);
            
        } catch(err) {
            console.err(new Date().toUTCString(), '-', err);
            return res.status(500).json({ message: 'internal error' });
        }

    }
}

export default new StoreController();