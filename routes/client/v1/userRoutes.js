/**
 * userRoutes.js
 * @description :: CRUD API routes for user
 */

const express = require('express');
const router = express.Router();
const userController = require('../../../controller/client/v1/userController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
router.route('/client/api/v1/user/me').get(auth(PLATFORM.CLIENT),userController.getLoggedInUserInfo);
router.route('/client/api/v1/user/create').post(auth(PLATFORM.CLIENT),userController.addUser);
router.route('/client/api/v1/user/list').post(auth(PLATFORM.CLIENT),userController.findAllUser);
router.route('/client/api/v1/user/count').post(auth(PLATFORM.CLIENT),userController.getUserCount);
router.route('/client/api/v1/user/softDeleteMany').put(auth(PLATFORM.CLIENT),userController.softDeleteManyUser);
router.route('/client/api/v1/user/addBulk').post(auth(PLATFORM.CLIENT),userController.bulkInsertUser);
router.route('/client/api/v1/user/updateBulk').put(auth(PLATFORM.CLIENT),userController.bulkUpdateUser);
router.route('/client/api/v1/user/deleteMany').post(auth(PLATFORM.CLIENT),userController.deleteManyUser);
router.route('/client/api/v1/user/softDelete/:id').put(auth(PLATFORM.CLIENT),userController.softDeleteUser);
router.route('/client/api/v1/user/partial-update/:id').put(auth(PLATFORM.CLIENT),userController.partialUpdateUser);
router.route('/client/api/v1/user/update/:id').put(auth(PLATFORM.CLIENT),userController.updateUser);    
router.route('/client/api/v1/user/:id').get(auth(PLATFORM.CLIENT),userController.getUser);
router.route('/client/api/v1/user/delete/:id').delete(auth(PLATFORM.CLIENT),userController.deleteUser);
router.route('/client/api/v1/user/change-password').put(auth(PLATFORM.CLIENT),userController.changePassword);
router.route('/client/api/v1/user/update-profile').put(auth(PLATFORM.CLIENT),userController.updateProfile);

module.exports = router;
