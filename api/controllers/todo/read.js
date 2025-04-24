module.exports = {


  friendlyName: 'Read',


  description: 'Read todo.',


  inputs: {
    id: {
      type: 'number',
      required: true
    }

  },


  exits: {
    notFound : {
      responseType: 'json',
      description: 'There is no such object with such id.'
    }

  },


  fn: async function (inputs) {

    const getTodo = await Todo.findOne({ id: inputs.id });
    if (!getTodo) {
      throw {notFound:'Task non trovato.' };
    }
    return getTodo;

  }


};
