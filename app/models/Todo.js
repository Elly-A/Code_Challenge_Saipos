const Joi = require('joi');

const schema = Joi.object({
  id: Joi.number(),

  createdByName: Joi.string()
    .min(2)
    .max(50)
    .required(),

  createdByEmail: Joi.string()
    .min(5)
    .max(80)
    .required(),

  content: Joi.string()
    .max(500),

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

/**
 * Retorna um objeto de validação com base no schema de uma Todo
 * @returns Joi.ValidationResult
 */
exports.validateTodo = function (todo) {
  return schema.validate(todo);
}
