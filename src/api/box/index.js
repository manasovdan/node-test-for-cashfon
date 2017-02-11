import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, update } from './controller'
import { schema } from './model'
export Box, { schema } from './model'

const router = new Router()
const { name, sold, changed } = schema.tree

router.post('/', body({ name, sold }), create)

router.get('/', query(), index)

router.put('/:name', body({ sold }), update)

export default router
