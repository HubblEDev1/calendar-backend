/*
    Auth users
    host + /api/auth
*/
const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
//const router = express.Router;
const { createUser, revalidateToken, loginUser } = require('../controllers/auth');
const { fieldValidator } = require('../middlewares/field-validator');

router.post(
        '/new',
        [//Middleware
            check('name', 'Name is required').not().isEmpty(),
            check('email', 'Email is required').isEmail(),
            check('password', 'Password length must be 6 characters').isLength({ min: 6 }),
            fieldValidator
        ],
        createUser
);

router.post(
        '/',
        [//Middleware
            check('email', 'Email is required').isEmail(),
            check('password', 'Password length must be 6 characters').isLength({ min: 6 }),
            fieldValidator
        ],
        loginUser
);

router.get('/renew', revalidateToken);


module.exports = router;
