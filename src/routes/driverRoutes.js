import express from 'express';
import { createDriver, getDrivers } from '../controllers/driversController.js';

const router = express.Router();
router.post('/create', createDriver);
router.get('/', getDrivers);

export default router;