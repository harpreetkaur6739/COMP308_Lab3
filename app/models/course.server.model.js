const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    courseCode: String,
    courseName: String,
    section: Number,
    semester: Number
});

// Create the 'Course' model out of the 'CourseSchema'
mongoose.model('Course', CourseSchema);