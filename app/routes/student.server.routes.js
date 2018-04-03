const students = require('../../app/controllers/student.server.controller');
const users = require('../../app/controllers/user.server.controller');

module.exports = function (app) {
    app.route('/api/students')
        .get(students.list)
        .post(users.requiresLogin, students.create);
    app.route('/api/students/:studentId')
        .get(students.read)
        .put(users.requiresLogin, students.hasAuthorization, students.
            update)
        .delete(users.requiresLogin, students.hasAuthorization, students.
            delete);
    app.param('studentId', students.studentByID);
};