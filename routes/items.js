const { getItems, getItem, addItem, deleteItem, updateItem } = require('../controllers/items'); 

// Item schema
const itemSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    name: {
      type: 'string'
    }
  }
}

// Options for get all items
const getItemsOptions = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: itemSchema
      }
    }
  },
  handler: getItems
}

// Options for get single item
const getItemOptions = {
  schema: {
    response: {
      200: itemSchema
    }
  },
  handler: getItem
}

// Options for add item
const addItemOptions = {
  schema: {
    body: {
      type: 'object',
      required: ['name'],
      properties: {
        name: {
          type: 'string'
        }
      }
    },
    response: {
      201: itemSchema
    }
  },
  handler: addItem
}

// Options for delete item
const deleteItemOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: {
            type: 'string'
          }
        }
      }
    }
  },
  handler: deleteItem
}

// Options for update item
const updateItemOptions = {
  schema: {
    response: {
      200: itemSchema
    }
  },
  handler: updateItem
}


function itemRoutes (fastify, options, done) {

  // Get all items
  fastify.get('/items', getItemsOptions);
  
  // Get single item
  fastify.get('/items/:id', getItemOptions);

  // Add item
  fastify.post('/items', addItemOptions);

  // Delete item
  fastify.delete('/items/:id', deleteItemOptions);

  // Update item
  fastify.put('/items/:id', updateItemOptions);

  done();
};

module.exports = itemRoutes;