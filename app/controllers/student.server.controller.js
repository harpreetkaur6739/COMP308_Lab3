const mongoose = require('mongoose');
const Student = mongoose.model('Student');

function getErrorMessage(err) {
    if (err.errors) {
        for (let errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].
                message;
        }
    } else {
        return 'Unknown server error';
    }
};

exports.create = function (req, res) {
    const student = new Student(req.body);
   
    student.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(student);
        }
    });
};

exports.list = function (req, res) {
    Student.find().sort('-studentNumber').exec((err, students) => {
if (err) {
        return res.status(400).send({
            message: getErrorMessage(err)
        });
    } else {
        res.status(200).json(students);
    }
});
};

exports.read = function (req, res) {
    res.status(200).json(req.student);
};

exports.studentByID = function (req, res, next, id) {
    Student.findById(id).exec((err, student) => {if (err) return next(err);
    if (!student) return next(new Error('Failed to load student '
            + id));
        req.student = student;
        next();
    });
};

exports.update = function (req, res) {
    const student = req.student;
   
    student.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(student);
        }
    });
};
//
exports.delete = function (req, res) {
    const article = req.article;
    article.remove((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(article);
        }
    });
};

exports.hasAuthorization = function (req, res, next) {
    if (req.student.studentNumber !== req.user.id) {
        return res.status(403).send({
            message: 'Student is not authorized'
        });
    }
    next();
};