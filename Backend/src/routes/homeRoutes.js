import { Router } from 'express';

import homeClontroller from '../controllers/HomeController';

const router = new Router;

router.get('/', homeClontroller.index);

export default router;