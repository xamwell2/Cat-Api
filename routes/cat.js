
import express from 'express';
import catController from '../controllers/cat.js';

const router = express.Router();

// GET all cats
router.get('/', catController.getCats);

// GET a specific cat by ID
router.get('/:id', catController.getCatById);

// POST a new cat
router.post('/', catController.addCat);

// PUT (update) an existing cat
router.put('/:id', catController.updateCat);

// DELETE a cat
router.delete('/:id', catController.deleteCat);

// routes

export default router;
