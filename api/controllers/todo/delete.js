module.exports = {


  friendlyName: 'Delete',


  description: 'Delete todo.',


  inputs: {
    id: {
      type: 'number',
      required: true
    }
  },


  exits: {
    notFound: {
      responseType: 'json',
      description: 'There is no such object with such id.'
    }
  },


  fn: async function (inputs) {

    const deletedTodo = await Todo.destroyOne({ id: inputs.id });
    if (!deletedTodo) {
      throw {notFound:'Task non trovato.' };
    }
    return {success: 'Todo eliminato con successo.'};

  }


};
