const People = require('../models/people.model');

class peopleController {
  async addPeople(req, res) {
    try {
      const { name, age, sex, complexion, height, race } = req.body;
      const people = new People({ name, age, sex, complexion, height, race });
      const results = await people.save();
      return res.status(201).json({
        status: 'success',
        data: {
          message: 'people created successfully',
          result: results,
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: error,
        data: {
          message: 'Error',
        },
      });
    }
  }

  async getPeople(req, res) {
    const results = await People.find({});
    return res.status(200).json({
      status: 'success',
      users: results.length,
      data: {
        message: 'People retrieve successfully',
        result: results,
      },
    });
  }

  async removePeople(req, res) {
    const { id } = req.params;
    const results = await People.findOneAndDelete({ _id: id });
    return res.status(200).json({
      status: 'success',
      data: {
        message: 'People Deleted successfully',
        result: results,
      },
    });
  }
}

module.exports = new peopleController();
