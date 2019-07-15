import faker from 'faker'
import Joi from '@hapi/joi'

export default {
  request: {
    title: faker.lorem.word(),
    body: faker.lorem.paragraphs(),
    userId: faker.random.number(),
  },
  schema: Joi.object().keys({
    title: Joi.string(),
    body: Joi.string(),
    userId: Joi.number(),
    id: Joi.number(),
  }),
}
