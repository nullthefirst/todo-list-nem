const mongoose = require('mongoose');
const Todo = require('./todoModels');

const sectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  todos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Todo' }],
});

module.exports = mongoose.model('Section', sectionSchema);
