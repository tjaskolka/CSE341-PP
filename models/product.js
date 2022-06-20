module.exports = (mongoose) => {
  const Product = mongoose.model(
    'products',
    mongoose.Schema({
      inv_id: {
        type: String
      },
      name: {
        type: String
      },
      description: {
        type: String
      },
      qty: {
        type: Number
      },
      size: {
        type: String
      },
      price: {
        type: String
      }
    })
  );
  return Product;
};
