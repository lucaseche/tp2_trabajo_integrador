import Joi from "joi";

const peliculaSchema = Joi.object({
  _id: Joi.string().optional(),
  title: Joi.string().min(1).max(100).required(),
  year: Joi.number().integer().min(1800).max(new Date().getFullYear()).required(),
  genre: Joi.array().items(Joi.string().required())
});

const UserSchema = Joi.object({
  _id: Joi.string().optional(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  mail:     Joi.string().required()
});

export default {
  peliculaSchema,
  UserSchema
};
