const { constants } = require("../Constants/constants");

const errorHandler = (err, req, res, next) => {
    const statuscode = res.statuscode ? res.statuscode : 500;
    switch (statuscode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation Error",
                message: err.message,
                stackTrace: err.stack,
            })
            break;

        case constants.FORBIDEN:
            res.json({
                title: "forbidden Error",
                message: err.message,
                stackTrace: err.stack,
            })
            break;
        case constants.UNAUHTORIZED:
            res.json({
                title: "Unauthorized Error",
                message: err.message,
                stackTrace: err.stack,
            })
            break;

        case constants.NOT_FOUND:
            res.json({
                title: "notforund Error",
                message: err.message,
                stackTrace: err.stack,
            })
            break;
        case constants.SERVER_ERROR:
            res.json({
                title: "Server Error",
                message: err.message,
                stackTrace: err.stack,
            })
            break;




        default:
            console.log("No Error ");
            break;
    }

}
module.exports = errorHandler;