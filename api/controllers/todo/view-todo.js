module.exports = {


  friendlyName: 'View todo',


  description: 'Display "Todo" page.',

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
    },
    success: {
       responseType: 'inertia'
    }
  },


  fn: async function (inputs) {

    // All done.
    const todo = await Todo.findOne({id: inputs.id});

    if (!todo) {
      throw {notFound:'Task non trovato.' };
    }

    return {
     page: 'todo/single',
     props:{ todo }
   };

 }


};
