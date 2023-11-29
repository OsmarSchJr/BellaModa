import UserModel from '../../models/UserModel';

class IndexController {
    async index(req, res) {
        try {
            const user = await UserModel.findByPk(req.params.id, {
                include: { association: "addresses" },
            });

            if (!user) return res.status(400).json({ message: "user not found" });

            return res.json(user.addresses);
        } catch(error) {
            console.error(new Date().toUTCString(), '-', error);
            return res.status(500).json({ message: 'internal error' });
        }
    }
}

export default new IndexController();