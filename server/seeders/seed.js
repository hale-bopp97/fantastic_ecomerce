const db = require('../config/connection');
const { User, Product } = require('../models');
const userSeeds = require('./userSeed.json');
const productSeeds = require('./productSeed.json');

db.once('open', async () => {
  try {
   
    await Product.deleteMany({});

    await User.deleteMany({});

    await User.create(userSeeds);

    await Product.create(productSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
