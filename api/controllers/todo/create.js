module.exports = {


  friendlyName: 'Create',


  description: 'Create todo.',


  inputs: {
    title: {
      type: 'string',
      required: true
    }
  },


  exits: {
    
  },


  fn: async function (inputs) {
   return await Todo.create({ title: inputs.title }).fetch();
  }


};
