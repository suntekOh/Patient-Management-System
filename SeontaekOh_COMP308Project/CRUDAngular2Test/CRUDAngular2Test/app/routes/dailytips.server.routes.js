const users = require('../../app/controllers/users.server.controller');
const dailytips = require('../../app/controllers/dailytips.server.controller');

module.exports = function (app) {

    app.route('/api/dailytips')
        .get(dailytips.list)
        .post(users.requiresLogin, dailytips.create);

    app.route('/api/dailytips/ml4hepatitis')
        .post(users.requiresLogin, dailytips.predict4hepatitis);
    

    app.route('/api/dailytips/:dailytipsId')
        .get(dailytips.read)
        .put(users.requiresLogin, dailytips.hasAuthorization, dailytips.
            update)
        .delete(users.requiresLogin, dailytips.hasAuthorization, dailytips.
            delete);
    app.param('dailytipsId', dailytips.dailytipsByID);









    

};

