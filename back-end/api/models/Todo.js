const Joi = require('joi');

const schema = Joi.object({
  id: Joi.number()
    .required(),

  createdByName: Joi.string()
    .alphanum()
    .min(3)
    .max(50)
    .required(),

  createdByEmail: Joi.string()
    .alphanum()
    .min(5)
    .max(80)
    .required(),

  content: Joi.string()
    .alphanum()
    .max(200),

  timesCompleted: Joi.number()
    .max(2)
    .required(),

  timesEdited: Joi.number()
    .max(2)
    .required(),

  isCompleted: Joi.boolean()
    .required(),


  isPinned: Joi.boolean()
    .required(),
});

exports.validateTodo = function (todo) {
  return schema.validate(todo);
}
