const users = require('../../app/controllers/users.server.controller');
const emergencyalert = require('../../app/controllers/emergencyalert.server.controller');

module.exports = function (app) {

    app.route('/api/emergencyalert')
        .get(emergencyalert.list)
        .post(users.requiresLogin, emergencyalert.create);

    app.route('/api/emergencyalert/list4nurses')
        .get(emergencyalert.list4nurses)

    app.route('/api/emergencyalert/:emergencyalertId')
        .get(emergencyalert.read)
        .put(users.requiresLogin, emergencyalert.hasAuthorization, emergencyalert.
            update)
        .delete(users.requiresLogin, emergencyalert.hasAuthorization, emergencyalert.
            delete);
    app.param('emergencyalertId', emergencyalert.emergencyalertByID);


    //app.route('/api/emergencyalert/read4edit/:edit4emergencyalertId')
    //    .get(emergencyalert.read4edit)
    //app.param('edit4emergencyalertId', emergencyalert.list4nurses);







    

};

