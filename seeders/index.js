/**
 * seeder.js
 * @description :: functions that seeds mock data to run the application
 */
const model = require('../model');
const dbService = require('../utils/dbService');
const bcrypt = require('bcrypt');
const authConstant = require('../constants/authConstant');

/* seeds default users */
async function seedUser () {
  try {
    let userToBeInserted = {};
    userToBeInserted = await dbService.findOne(model.user,{ 'username':'Neva.Parisian' });
    if (!userToBeInserted) {  
      userToBeInserted = {
        'password':'Tv13D1DJPuuIiDl',
        'isDeleted':false,
        'username':'Neva.Parisian',
        'email':'Althea97@yahoo.com',
        'isActive':true,
        'userType':authConstant.USER_TYPES.User
      };
      await dbService.createOne(model.user,userToBeInserted);
    } else {
      userToBeInserted = {
        'password':'Tv13D1DJPuuIiDl',
        'isDeleted':false,
        'username':'Neva.Parisian',
        'email':'Althea97@yahoo.com',
        'isActive':true,
        'userType':authConstant.USER_TYPES.User
      };
      userToBeInserted.password = await bcrypt.hash(userToBeInserted.password, 8);
      await dbService.update(model.user, { 'username':'Neva.Parisian' }, userToBeInserted);
    }
    console.info('User model seeded 🍺');
  } catch (error){
    console.log('User seeder failed due to ', error.message);
  }
}

/* calls of functions to seed mock data into multiple collections */
async function seedData (){
  await seedUser();
};
module.exports = seedData;