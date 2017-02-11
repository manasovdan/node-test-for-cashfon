import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Box } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Box.create(body)
    .then((box) => box.view(true))
    .then(success(res, 201))
    .catch(next);

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Box.find(query, select, cursor)
    .then((boxes) => boxes.map((box) => box.view()))
    .then(success(res))
    .catch(next);

export const update = ({ bodymen: { body }, params }, res, next) =>
  Box.findOne({ name: params.name })
    .then(notFound(res))
    .then((box) => box ? _.merge(box, { sold: body.sold, changed: ++box.changed }).save() : null)
    .then(Box.findOne({ name: params.name }))
    .then((box) => box ? box.changed : null)
    .then(success(res))
    .catch(next);
