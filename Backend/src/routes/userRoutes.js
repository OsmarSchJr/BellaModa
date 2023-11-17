import { Router } from 'express';

import indexController from '../controllers/userController/IndexController';
import storeController from '../controllers/userController/StoreController';
import showController from '../controllers/userController/ShowController';
import updateController from '../controllers/userController/UpdateController';
import deleteController from '../controllers/userController/DeleteController';

const router = new Router();

router.get('/', indexController.index);
router.post('/', storeController.store);
router.get('/:id', showController.show);
router.put('/:id', updateController.update);
router.delete('/:id', deleteController.delete);


export default router;