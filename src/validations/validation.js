import Joi from "joi";

const peliculaSchema = Joi.object({
  name: Joi.string().min(1).max(255).required(),
  year: Joi.number().integer().min(1888).max(new Date().getFullYear()).required(),
  genre: Joi.string().min(1).max(100).required(),
  country: Joi.string().min(1).max(100).required()
});

const UserSchema = Joi.object({
  _id: Joi.string().optional(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  mail: Joi.string().required()
});

export default {
  peliculaSchema,
  UserSchema
};
