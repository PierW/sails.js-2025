module.exports = {


    friendlyName: 'Create',
  
  
    description: 'Create todo.',
  
  
    inputs: {},
  
  
    exits: {
      success: {
        responseType: 'inertia'
      }
    },
  
  
    fn: async function (inputs) {
        return {
            page: 'todo/create'
          };
    }
  
  
  };
  