const mongoose = require('mongoose');
const VitalSigns = mongoose.model('VitalSigns');
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
    const vitalsigns = new VitalSigns(req.body);
    vitalsigns.taker = req.user;
    vitalsigns.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(vitalsigns);
        }
    });
};

//{ $or: [{ "groupA": data }, { "groupB": data }] }
//
exports.list = function (req, res) {
    const sort = req.user.sort;
    const id = req.user.id;

    if (sort === 'N') {
        VitalSigns.find({})
            .sort('-created')
            .populate('taker', 'firstName lastName fullName')
            .populate('patient', 'firstName lastName fullName')
            .exec((err, vitalsigns) => {
                if (err) {
                    return res.status(400).send({
                        message: getErrorMessage(err)
                    });
                } else {
                    res.status(200).json(vitalsigns);
                }
            });

    } else {
        //VitalSigns.find(
        //    { $or: [{ taker: id }, { patient: id }] })
        VitalSigns.find({patient: id})
            .sort('-created')
            .populate('taker', 'firstName lastName fullName')
            .populate('patient', 'firstName lastName fullName')
            .exec((err, vitalsigns) => {
                if (err) {
                    return res.status(400).send({
                        message: getErrorMessage(err)
                    });
                } else {
                    res.status(200).json(vitalsigns);
                }
            });

    }

};

exports.list4patients = function (req, res) {
    const sort = req.user.sort;
    const id = req.user.id;
    if (sort === 'N') {
        User.find({ sort: 'P' }).sort('-created').exec((err, users) => {
            if (err) {
                return res.status(400).send({
                    message: getErrorMessage(err)
                });
            } else {
                res.status(200).json(users);
            }
        });
    } else {
        User.find({ _id: id }).sort('-created').exec((err, users) => {
            if (err) {
                return res.status(400).send({
                    message: getErrorMessage(err)
                });
            } else {
                res.status(200).json(users);
            }
        });

    }

};



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


exports.vitalsignsByID = function (req, res, next, id) {
    VitalSigns.findById(id)
        .populate('taker', 'firstName lastName fullName')
        .populate('patient', 'firstName lastName fullName')
        .exec((err, vitalsigns) => {
            if (err) return next(err);
        if (!vitalsigns) return next(new Error('Failed to load article '
        + id));
        req.vitalsigns = vitalsigns;
    next();
});
};

//
exports.read = function (req, res) {
    res.status(200).json(req.vitalsigns);
};

exports.update = function (req, res) {
    const vitalsigns = req.vitalsigns;


    vitalsigns.temperature = req.body.temperature;
    vitalsigns.heartRate = req.body.heartRate;
    vitalsigns.bloodPressure = req.body.bloodPressure;
    vitalsigns.respiratoryRate = req.body.respiratoryRate;
    vitalsigns.weight = req.body.weight;
    vitalsigns.measuredDate = req.body.measuredDate;

    vitalsigns.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(vitalsigns);
        }
    });
};
//
exports.delete = function (req, res) {
    const vitalsigns = req.vitalsigns;
    vitalsigns.remove((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(vitalsigns);
        }
    });
};
//The hasAuthorization() middleware uses the req.article and req.user objects
//to verify that the current user is the creator of the current article
exports.hasAuthorization = function (req, res, next) {
    if (req.vitalsigns.taker.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    next();
};


