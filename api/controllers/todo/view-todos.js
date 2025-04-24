module.exports = {


  friendlyName: 'View todos',


  description: 'Display "Todos" page.',

  inputs: {},


  exits: {

    success: {
      responseType: 'inertia'
    }

  },


  fn: async function (inputs) {

     // All done.
     const todos = await Todo.find();
     return {
      page: 'todo/index',
      props:{ todos }
    };

  }


};
