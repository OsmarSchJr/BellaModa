import CategoryModel from "../../models/CategoryModel";

class ShowController {
    async show(req, res) {
        try {
            const categorie = await CategoryModel.findByPk(req.params.id, {
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                },
                order: [["name", "ASC"]],
            });
            return res.json(categorie);
        } catch(error) {
            console.error(new Date().toUTCString(), '-', error);
            return res.status(500).json({ message: 'internal error' });
        }
    }
}

export default new ShowController();