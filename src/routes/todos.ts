import { Router } from 'express';

import { createTodo } from '../controllers/todos';

const router = Router();

router.post('/', createTodo);

router.get('/', (req, res) => {
    res.json({
        msg: "ok"
    })
});

router.patch('/');

router.delete('/');


export default router;