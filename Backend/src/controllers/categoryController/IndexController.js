import CategoryModel from "../../models/CategoryModel";

class IndexController {
    async index(req, res) {
        try {
            const categories = await CategoryModel.findAll();
            return res.json(categories);
        } catch(err) {
            return res.json(null);
        }
    }
}

export default new IndexController();