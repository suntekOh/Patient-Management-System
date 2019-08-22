﻿//const mongoose = require('mongoose');
//const Article = mongoose.model('Course');
//const User = mongoose.model('User');
////
//function getErrorMessage(err) {
//    if (err.errors) {
//        for (let errName in err.errors) {
//            if (err.errors[errName].message) return err.errors[errName].
//                message;
//        }
//    } else {
//        return 'Unknown server error';
//    }
//};
////
//exports.create = function (req, res) {
//    const article = new Article(req.body);
//    article.creator = req.user;
//    article.save((err) => {
//        if (err) {
//            return res.status(400).send({
//                message: getErrorMessage(err)
//            });
//        } else {
//            res.status(200).json(article);
//        }
//    });
//};

////
//exports.list = function (req, res) {
//    const id = req.user.id;
//    Article.find({creator:id}).sort('-created').populate('creator', 'firstName lastName fullName').exec((err, articles) => {
//    if (err) {
//        return res.status(400).send({
//            message: getErrorMessage(err)
//        });
//    } else {
//        res.status(200).json(articles);
//    }
//    });
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


//exports.articleByID = function (req, res, next, id) {
//    Article.findById(id).populate('creator', 'firstName lastName fullName').exec((err, article) => {if (err) return next(err);
//if (!article) return next(new Error('Failed to load article '
//        + id));
//    req.article = article;
//    next();
//});
//};
////
//exports.read = function (req, res) {
//    res.status(200).json(req.article);
//};
////
//exports.update = function (req, res) {
//    const article = req.article;
//    //article.title = req.body.title;
//    //article.content = req.body.content;

//    article.courseCode = req.body.courseCode;
//    article.courseName = req.body.courseName;
//    article.section = req.body.section;
//    article.semester = req.body.semester;

//    article.save((err) => {
//        if (err) {
//            return res.status(400).send({
//                message: getErrorMessage(err)
//            });
//        } else {
//            res.status(200).json(article);
//        }
//    });
//};
////
//exports.delete = function (req, res) {
//    const article = req.article;
//    article.remove((err) => {
//        if (err) {
//            return res.status(400).send({
//                message: getErrorMessage(err)
//            });
//        } else {
//            res.status(200).json(article);
//        }
//    });
//};
////The hasAuthorization() middleware uses the req.article and req.user objects
////to verify that the current user is the creator of the current article
//exports.hasAuthorization = function (req, res, next) {
//    if (req.article.creator.id !== req.user.id) {
//        return res.status(403).send({
//            message: 'User is not authorized'
//        });
//    }
//    next();
//};


