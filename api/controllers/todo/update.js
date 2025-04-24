module.exports = {

  friendlyName: 'Update',
  description: 'Update todo.',

  inputs: {
    id: {
      type: 'number',
      required: true
    },
    title: {
      type: 'string',
    },
    done: {
      type: 'boolean',
    }

  },

  exits: {
    notFound: {
      responseType: 'json',
      description: 'There is no such object with such id.'
    },
    invalidType: {
      responseType: 'badRequest'
    }
  },


  fn: async function ({id, title, done}) { // Al posto di passare "inputs"come argomento e poi fare inputs.id, inputs.title... possiamo passare gli argomenti anche in questo modo

    // Se assente funziona ma se non è Booleano esplode da terminale direttamente.
    if(typeof done !== 'boolean'){
      throw {
        invalidType: `Il valore ${done} non è un booleano` 
      }
    } 
        
    const updatedTodo = await Todo.updateOne({ id }).set({
      title,
      done
    });

    if (!updatedTodo) {
      throw {notFound: 'Task non trovato'};
    }

    return updatedTodo;

  }

};
