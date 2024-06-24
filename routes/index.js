const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/', blogController.getblogs);
router.get('/blog/:id', blogController.getblogById);
router.get('/add-blog', blogController.addblog);
router.post('/add-blog', blogController.createblog);
router.get('/edit-blog/:id', blogController.editblog);
router.post('/edit-blog/:id', blogController.updateblog);
router.post('/delete-blog/:id', blogController.deleteblog);

router.post('/login', blogController.login);
router.get('/login', blogController.loginPage);
router.post('/signup', blogController.signup);
router.get('/signup', blogController.signupPage);
router.get('/logout', blogController.logout);
module.exports = router;


