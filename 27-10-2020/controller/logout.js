//declaration
const express  = require('express');
const router   = express.Router();

router.get('/', (request, response)=>{
    response.render('/logout');
});




module.exports = router;
