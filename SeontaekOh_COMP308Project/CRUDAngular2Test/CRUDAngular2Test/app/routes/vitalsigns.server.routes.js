const users = require('../../app/controllers/users.server.controller');
const vitalsigns = require('../../app/controllers/vitalsigns.server.controller');

module.exports = function (app) {

    app.route('/api/vitalsigns')
        .get(vitalsigns.list)
        .post(users.requiresLogin, vitalsigns.create);

    app.route('/api/vitalsigns/patients')
        .get(vitalsigns.list4patients);


    app.route('/api/vitalsigns/:vitalsignsId')
        .get(vitalsigns.read)
        .put(users.requiresLogin, vitalsigns.hasAuthorization, vitalsigns.
            update)
        .delete(users.requiresLogin, vitalsigns.hasAuthorization, vitalsigns.
            delete);
    app.param('vitalsignsId', vitalsigns.vitalsignsByID);









    

};

