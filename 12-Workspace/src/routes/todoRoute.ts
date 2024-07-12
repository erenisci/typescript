import { Router } from 'express';
import todoController from '../controllers/todoController';

const router = Router();

router.get('/', todoController.getTodos);
router.post('/', todoController.createTodo);
router.patch('/:id', todoController.updateTodos);
router.delete('/:id', todoController.deleteTodos);

export default router;
