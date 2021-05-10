/**
 * Middleware para validação de uma requisição
 */
function validate(validator) {
  return function (req, res, next) {
    const result = validator(req.body);

    if (result.error) {
      res.status(400).send(result.error)
    } else {
      next();
    }
  }
}

module.exports = validate;
