import { Router } from 'express';

import storeController from '../controllers/categoryController/StoreController';

const router = new Router();

router.post('/',storeController.store);

export default router;