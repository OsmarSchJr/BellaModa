import { Router } from 'express';

import indexController from '../controllers/productController/IndexController';
import storeController from '../controllers/productController/StoreController';
import showController from '../controllers/productController/ShowController';
import updateController from '../controllers/productController/UpdateController';
import deleteController from '../controllers/productController/DeleteController';

const router = new Router();

router.get('/', indexController.index);
router.post('/', storeController.store);
router.get('/:id', showController.show);
router.put('/:id', updateController.update);
router.delete('/:id', deleteController.delete);


export default router;