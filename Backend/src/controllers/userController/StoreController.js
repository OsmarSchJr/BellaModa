import UserModel from '../../models/UserModel';
import validateCpf from '../../util/validateCpf';

class StoreController {
    async store(req, res) {
        const {name, email, cpf, password} = req.body;
        try {
            const user = await UserModel.findOne({ where: { email } });

            if(user) return res.status(400).json({ message: "email already in use" });
            if(validateCpf(cpf) == false) return res.status(400).json({ message: "invalid cpf" });

            const newUser = await UserModel.create({ name, email, cpf, password });
            
            return res.json({ user: newUser });
        } catch(error) {
            console.error(new Date().toUTCString(), '-', error);
            return res.status(500).json({ message: 'internal error' });
        }

    }
}

export default new StoreController();