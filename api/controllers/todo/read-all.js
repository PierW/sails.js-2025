module.exports = {


  friendlyName: 'Read all',


  description: 'Get all task',


  inputs: {

  },


  exits: {
    notFound: {
      responseType: 'json',
      description: 'There is no such object with such id.'
    }
  },


  fn: async function (inputs) {

    // All done.
    return await Todo.find();

  }


};
