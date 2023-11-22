import UserModel from '../../models/UserModel';

import validateCpf from '../../util/validateCpf';

class UpdateController {
    async update(req, res) {
        
        const { name, email, cpf, currentPassword, newPassword } = req.body;

        if (cpf && validateCpf(cpf) == false) {
            return res.status(400).json({ message: 'invalid cpf' });
        }
        try {
            let password;
            const user = await UserModel.findByPk(req.params.id);

            if (!req.params.id) {
                return res.status(400).json({
                    errors: ['Missing id.'],
                });
            }
            if (!user) {
                return res.status(400).json({
                    errors: ["User doesn't found."],
                });
            }
            if (currentPassword && newPassword) {
                if (await user.checkPassword(currentPassword)) {
                    password = newPassword;
                } else {
                    return res.status(400).json({ message: 'wrong current password' });
                }
            }

            if( !password) password = undefined;

            const newUser = await user.update(req.body);
            
            return res.json(newUser);
        } catch(error) {
            console.error(new Date().toUTCString(), '-', error);
            return res.status(500).json({ message: 'internal error' });
        }
    }
}

export default new UpdateController();
