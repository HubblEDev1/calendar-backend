const { response } = require('express');
const { validationResult } = require('express-validator');


const fieldValidator = (req, res = response, next) => {
    
    const errors = validationResult(req); //It allow us to find the error
    if( !errors.isEmpty() ){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    next();
};

module.exports = {
    fieldValidator
}