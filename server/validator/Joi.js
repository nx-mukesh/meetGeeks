
const Joi = require('joi');


const schema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});


const data = {
  username: 'john_doe',
  email: 'john@example.com',
  password: 'password123',
};

const validationResult = schema.validate(data);

if (validationResult.error) {
  // Validation failed
  console.error(validationResult.error.details);
} else {
  // Validation passed
  console.log('Data is valid');
}
