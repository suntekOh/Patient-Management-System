const mongoose = require('mongoose');
const DailyTips = mongoose.model('DailyTips');
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
    const dailytips = new DailyTips(req.body);
    dailytips.creator = req.user;
    dailytips.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(dailytips);
        }
    });
};



//
exports.list = function (req, res) {
    const sort = req.user.sort;
    const id = req.user.id;

    if (sort === 'N') {
        DailyTips.find({})
            .sort('-created')
            .populate('patient', 'firstName lastName fullName')
            .populate('creator', 'firstName lastName fullName')
            .exec((err, dailytips) => {
                if (err) {
                    return res.status(400).send({
                        message: getErrorMessage(err)
                    });
                } else {
                    res.status(200).json(dailytips);
                }
            });

    } else {
        DailyTips.find({ patient: id })
            .sort('-created')
            .populate('patient', 'firstName lastName fullName')
            .populate('creator', 'firstName lastName fullName')
            .exec((err, dailytips) => {
                if (err) {
                    return res.status(400).send({
                        message: getErrorMessage(err)
                    });
                } else {
                    res.status(200).json(dailytips);
                }
            });

    }

};


exports.dailytipsByID = function (req, res, next, id) {
    DailyTips.findById(id)
        .populate('patient', 'firstName lastName fullName')
        .populate('creator', 'firstName lastName fullName')
        .exec((err, dailytips) => {
            if (err) return next(err);
            if (!dailytips) return next(new Error('Failed to load article '
        + id));
            req.dailytips = dailytips;
    next();
});
};

//
exports.read = function (req, res) {
    res.status(200).json(req.dailytips);
};

exports.update = function (req, res) {
    const dailytips = req.dailytips;


    dailytips.tips = req.body.tips;
    dailytips.url4video = req.body.url4video;

    dailytips.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(dailytips);
        }
    });
};
//
exports.delete = function (req, res) {
    const dailytips = req.dailytips;
    dailytips.remove((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(dailytips);
        }
    });
};
//The hasAuthorization() middleware uses the req.article and req.user objects
//to verify that the current user is the creator of the current article
exports.hasAuthorization = function (req, res, next) {
    if (req.dailytips.creator.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    next();
};

exports.predict4hepatitis = function (req, res) {
    const tf = require('@tensorflow/tfjs');
    require('@tensorflow/tfjs-node');
    //load iris training and testing data
    const hep = require('../../hep.json');

    const age = parseFloat(req.body.age);
    const sex = parseFloat(req.body.sex);
    const steroid = parseFloat(req.body.steroid);
    const antivirals = parseFloat(req.body.antivirals);
    const fatigue = parseFloat(req.body.fatigue);
    const malaise = parseFloat(req.body.malaise);
    const anorexia = parseFloat(req.body.anorexia);
    const liver_big = parseFloat(req.body.liver_big);
    const liver_firm = parseFloat(req.body.liver_firm);
    const spleen_palpable = parseFloat(req.body.spleen_palpable);
    const spiders = parseFloat(req.body.spiders);
    const ascites = parseFloat(req.body.ascites);
    const varices = parseFloat(req.body.varices);
    const bilurubin = parseFloat(req.body.bilurubin);
    const alk_phosphate = parseFloat(req.body.alk_phosphate);
    const sgot = parseFloat(req.body.sgot);
    const albumin = parseFloat(req.body.albumin);
    const protime = parseFloat(req.body.protime);
    const histology = parseFloat(req.body.histology);
    //
    // convert/setup our data for tensorflow.js
    //
    //tensor of features for training data
    //console.log('trainingData')
    const trainingData = tf.tensor2d(hep.map(item => [
        item.Age,
        item.Sex,
        item.Steroid,
        item.Antivirals,
        item.Fatigue,
        item.Malaise,
        item.Anorexia,
        item.Liver_big,
        item.Liver_firm,
        item.Spleen_palpable,
        item.Spiders,
        item.Ascites,
        item.Varices,
        item.Bilurubin,
        item.Alk_phosphate,
        item.Sgot,
        item.Albumin,
        item.Protime,
        item.Histology
    ]))
    //
    //tensor of output for training data
    //console.log(trainingData.dataSync())
    //
    //tensor of output for training data
    //the values for species will be:
    // Die_Live 1:       1,0
    // Die_Live 2:       0,1
    const outputData = tf.tensor2d(hep.map(item => [
        item.Die_Live === 1 ? 1 : 0,
        item.Die_Live === 2 ? 1 : 0
    ]))
    //tensor of features for testing data
    const testingData = tf.tensor2d([
        age,
        sex,
        steroid,
        antivirals,
        fatigue,
        malaise,
        anorexia,
        liver_big,
        liver_firm,
        spleen_palpable,
        spiders,
        ascites,
        varices,
        bilurubin,
        alk_phosphate,
        sgot,
        albumin,
        protime,
        histology
    ], [1, 19])


    //console.log(testingData.dataSync())
    testingData.array().then(array => {
        //console.log(array)
    })

    // build neural network using a sequential model
    const model = tf.sequential()
    //add the first layer
    model.add(tf.layers.dense({
        inputShape: [19], // 19 input neurons
        activation: "sigmoid",
        units: 20, //dimension of output space (first hidden layer)
    }))
    //add the hidden layer
    model.add(tf.layers.dense({
        inputShape: [20], //dimension of hidden layer
        activation: "sigmoid",
        units: 2, //dimension of final output
    }))
    //add output layer
    model.add(tf.layers.dense({
        activation: "sigmoid",
        units: 2, //dimension of final output
    }))
    //compile the model with an MSE loss function and Adam algorithm
    model.compile({
        loss: "meanSquaredError",
        optimizer: tf.train.adam(.001),
        metrics: ['accuracy'],
    })
    //console.log(model.summary())
    // train/fit the model for the fixed number of epochs
    const startTime = Date.now()
    //
    async function run() {
        const startTime = Date.now()
        await model.fit(trainingData, outputData,
            {
                epochs: 1000,
                callbacks: {
                    onEpochEnd: async (epoch, log) => {
                        //console.log(`Epoch ${epoch}: loss = ${log.loss}`);
                        elapsedTime = Date.now() - startTime;
                        //console.log('elapsed time: ' + elapsedTime)
                    }
                }
            }

        ) //fit
        //
        const results = model.predict(testingData);
        //results.print()
        // get the values from the tf.Tensor
        //var tensorData = results.dataSync();


        results.array().then(array => {
            var result = {
                probability4die : array[0][0],
                probability4live : array[0][1]
            }
            res.status(200).json(result);
        })
    } //end of run function
    run()
};
