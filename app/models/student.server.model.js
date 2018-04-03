const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    studentNumber: Number,
    password: {
        type: String,
        required: 'Password is required',
        // Validate the 'password' value length
        validate: [
            (password) => password && password.length > 6,
            'Password should be longer'
        ]
    },
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    phone: Number,
    email: {
        type: String,
        // Validate the email format
        match: [/.+\@.+\..+/, "Please fill a valid email address"]
    },
    program: String
});

// Create an instance method for hashing a password
StudentSchema.methods.hashPassword = function (password) {
    //digest parameter required in version 9 of Node.js
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('base64');
};

// Create an instance method for authenticating student
StudentSchema.methods.authenticate = function (password) {
    return this.password === this.hashPassword(password);
};

// Create the 'Student' model out of the 'StudentSchema'
mongoose.model('Student', StudentSchema);