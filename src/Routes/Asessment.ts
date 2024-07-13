import express from 'express'
import { getAllQuestions, CreateQuestion, UpdateQuestion, DeleteQuestion } from '../Controllers/Asessment'
import { authenticateToken } from '../middleware/Auth'
const router = express.Router()

router.get('/:id', getAllQuestions)
router.post('/:courseId',  CreateQuestion)
router.patch('/:id',  UpdateQuestion)
router.delete('/:id',  DeleteQuestion)

export default router