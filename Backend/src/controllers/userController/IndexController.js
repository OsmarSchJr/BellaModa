import UserModel from '../../models/UserModel';

class IndexController {
    async index(req, res) {
        try {
            const categories = await UserModel.findAll();
            return res.json(categories);
        } catch(error) {
            console.error(new Date().toUTCString(), '-', error);
            return res.status(500).json({ message: 'internal error' });
        }
    }
}

export default new IndexController();