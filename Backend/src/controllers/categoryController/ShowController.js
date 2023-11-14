import CategoryModel from "../../models/CategoryModel";

class ShowController {
    async show(req, res) {
        try {
            const categorie = await CategoryModel.findByPk(req.params.id);
            return res.json(categorie);
        } catch(err) {
            return res.json(null);
        }
    }
}

export default new ShowController();