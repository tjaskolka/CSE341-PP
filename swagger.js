const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'UPS Store Inventory API',
    description: 'API for UPS Store Inventory'
  }
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
