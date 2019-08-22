const mongoose = require('mongoose');
const EmergencyAlert = mongoose.model('EmergencyAlert');
const User = mongoose.model('User');
//
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
//
exports.create = function (req, res) {
    const emergencyalert = new EmergencyAlert(req.body);
    emergencyalert.patient = req.user;
    emergencyalert.state = "R";
    emergencyalert.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(emergencyalert);
        }
    });
};

exports.list = function (req, res) {
    const sort = req.user.sort;
    const id = req.user.id;

    if (sort === 'N') {
        EmergencyAlert.find({})
            .sort('-created')
            .populate('patient', 'firstName lastName fullName')
            .populate('responder', 'firstName lastName fullName')
            .exec((err, emergencyalert) => {
                if (err) {
                    return res.status(400).send({
                        message: getErrorMessage(err)
                    });
                } else {
                    res.status(200).json(emergencyalert);
                }
            });

    } else {
        EmergencyAlert
            .find({ patient: id })
            .sort('-created')
            .populate('patient', 'firstName lastName fullName')
            .populate('responder', 'firstName lastName fullName')
            .exec((err, emergencyalert) => {
                if (err) {
                    return res.status(400).send({
                        message: getErrorMessage(err)
                    });
                } else {
                    res.status(200).json(emergencyalert);
                }
            });

    }

};

//exports.list4nurses = function (req, res) {
    //const sort = req.user.sort;
    //const id = req.user.id;
    //if (sort === 'N') {
    //    User.find({ sort: 'P' }).sort('-created').exec((err, users) => {
    //        if (err) {
    //            return res.status(400).send({
    //                message: getErrorMessage(err)
    //            });
    //        } else {
    //            res.status(200).json(users);
    //        }
    //    });
    //} else {
    //    User.find({ _id: id }).sort('-created').exec((err, users) => {
    //        if (err) {
    //            return res.status(400).send({
    //                message: getErrorMessage(err)
    //            });
    //        } else {
    //            res.status(200).json(users);
    //        }
    //    });

    //}

//};



//exports.articleByCourseCode = function (req, res, next, courseCode) {

//    Article.find({ courseCode: courseCode }).sort('-created').populate('creator', 'firstName lastName fullName').exec((err, articles) => {
//        if (err) {
//            return res.status(400).send({
//                message: getErrorMessage(err)
//            });
//        } else {
//            if (!articles) return next(new Error('Failed to load article '
//                + courseCode));
//            req.articles = articles;
//            next();

//        }
//    });


//};

//exports.sendCourses = function (req, res) {
//    res.status(200).json(req.articles);
//};

//exports.listAllStudents = function (req, res) {

//    //Student.find({}).sort('studentNumber').exec((err, students) => {
//    //    if (err) {
//    //        return res.status(400).send({
//    //            message: getErrorMessage(err)
//    //        });
//    //    } else {
//    //        res.status(200).json(students);
//    //    }
//    //});
//};

//exports.listAllCourses = function (req, res) {

//    Article.aggregate(
//        [{
//            "$group": {
//                "_id": { courseCode: "$courseCode", courseName: "$courseName" }
//            }
//        }
//        ]).cursor({}).exec().toArray(function (err, docs) {
//            if (err) {
//                return res.status(400).send({
//                    message: getErrorMessage(err)
//                });
//            } else {
//                res.status(200).json(docs);
//            }
//        });

//};


exports.emergencyalertByID = function (req, res, next, id) {
    EmergencyAlert.findById(id)
        .populate('patient', 'firstName lastName fullName')
        .populate('responder', 'firstName lastName fullName')
        .exec((err, emergencyalert) => {
            if (err) return next(err);
            if (!emergencyalert) return next(new Error('Failed to load article '
                + id));
            req.emergencyalert = emergencyalert;
            next();
        });
};


//
exports.read = function (req, res) {
    res.status(200).json(req.emergencyalert);
};

exports.list4nurses = function (req, res) {

    User.find({ sort: 'N' }).sort('-created').exec((err, users) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(users);
        }
    });


};

//exports.list4nurses = function (req, res, next, id) {

//    User.find({ sort: 'N' })
//        .sort('-created').exec((err, nurses) => {
//        if (err) return next(err);
//        if (!nurses) return next(new Error('Failed to load article '));
//        req.edit4nurses = nurses;
//        req.edit4id = id;
//        next();
//    });
//};

//exports.read4edit = function (req, res) {
//    const id = req.edit4id;

//    EmergencyAlert.findById(id)
//        .populate('patient', 'firstName lastName fullName')
//        .populate('responder', 'firstName lastName fullName')
//        .exec((err, emergencyalert) => {
//            if (err) return next(err);
//            if (!emergencyalert) return next(new Error('Failed to load article '
//                + id));
//            req.emergencyalert = emergencyalert;
//            req.emergencyalert.nurses = req.edit4nurses;
//            res.status(200).json(req.emergencyalert);
//        });
//};


exports.update = function (req, res) {
    const emergencyalert = req.emergencyalert;

    emergencyalert.responder = req.body.responder;
    emergencyalert.state = 'S';
    emergencyalert.responded = Date.now();

    emergencyalert.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(emergencyalert);
        }
    });
};
//
exports.delete = function (req, res) {
    const emergencyalert = req.emergencyalert;
    emergencyalert.remove((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(emergencyalert);
        }
    });
};
//The hasAuthorization() middleware uses the req.article and req.user objects
//to verify that the current user is the creator of the current article
exports.hasAuthorization = function (req, res, next) {
    if (req.user.sort !== 'N') {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    next();
};


