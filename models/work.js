const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  imageUrl: String,
  author: String,
  url: String,
  // user_id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Users'
  // }
});

module.exports = mongoose.model('Work', workSchema);
