import UserModel from '../../models/UserModel';

class ShowController {
    async show(req, res) {
        try {
            const user = await UserModel.findByPk(req.params.id, {
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                },
                order: [["name", "ASC"]],
            });
            return res.json(user);
        } catch(error) {
            console.error(new Date().toUTCString(), '-', error);
            return res.status(500).json({ message: 'internal error' });
        }
    }
}

export default new ShowController();