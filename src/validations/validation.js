import Joi from "joi";

const peliculaSchema = Joi.object({
  _id: Joi.string().optional(),
  title: Joi.string().min(1).max(100).required(),
  year: Joi.number().integer().min(1800).max(new Date().getFullYear()).required(),
  runningTime: Joi.string().pattern(/^\d+h\s\d+m$/).required(), // requiere formato "2h 7m"
  description: Joi.string().min(10).max(1000).required(),
  genre: Joi.array().items(Joi.string().valid("Adventure", "Action", "Sci-Fi", "Drama", "Comedy", "Horror",
        "Romance")).min(1).required()
});

export default {
  peliculaSchema
};
