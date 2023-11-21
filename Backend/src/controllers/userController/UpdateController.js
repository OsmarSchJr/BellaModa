import UserModel from '../../models/UserModel';

import validateCpf from '../../util/validateCpf';

class UpdateController {
    async update(req, res) {
        try {
            if(!req.params.id) {
                return res.status(400).json({
                    errors: ['Missing id.'],
                });
            }

            const user = await UserModel.findByPk(req.params.id);

            if(!user) {
                return res.status(400).json({
                    errors: ["User doesn't exist."],
                });
            }

            const newUser = await user.update(req.body);
            
            return res.json(newUser);
        } catch(error) {
            console.error(new Date().toUTCString(), '-', error);
            return res.status(500).json({ message: 'internal error' });
        }
    }
}

export default new UpdateController();
