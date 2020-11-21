const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const peopleSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please your name is required...'],
  },
  age: {
    type: Number,
    required: [true, 'Please your age is required and input must be a number'],
  },
  sex: {
    type: String,
    required: [true, 'Please your sex is required...'],
  },
  complexion: {
    type: String,
    required: [true, 'Please your complexion is required...'],
  },
  height: {
    type: Number,
    required: [true, 'Please your height is required...'],
  },
  race: {
    type: String,
    required: [true, 'Please your race is required...'],
  },
});

const people = mongoose.model('People', peopleSchema);

module.exports = people;
