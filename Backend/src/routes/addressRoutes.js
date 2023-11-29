import { Router } from 'express';

import indexController from '../controllers/addressController/IndexController';
import storeController from '../controllers/addressController/StoreController';
import showController from '../controllers/addressController/ShowController';
import updateController from '../controllers/addressController/UpdateController';
import deleteController from '../controllers/addressController/DeleteController';

const router = new Router();

router.get('/', indexController.index);
router.post('/', storeController.store);
router.get('/:id', showController.show);
router.put('/:id', updateController.update);
router.delete('/:id', deleteController.delete);


export default router;