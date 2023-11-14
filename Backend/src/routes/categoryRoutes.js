import { Router } from 'express';

import indexController from '../controllers/categoryController/IndexController';
import storeController from '../controllers/categoryController/StoreController';
import showController from '../controllers/categoryController/ShowController';
import updateController from '../controllers/categoryController/UpdateController';
import deleteController from '../controllers/categoryController/DeleteController';

const router = new Router();

router.get('/', indexController.index);
router.post('/', storeController.store);
router.get('/:id', showController.show);
router.put('/:id', updateController.update);
router.delete('/:id', deleteController.delete);


export default router;