const validate = require('./validator');

const isValid = validate('heba', 'heba@icloud.com', 'password123', 21, 'Female');
console.log(isValid);