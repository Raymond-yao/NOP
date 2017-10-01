"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * In memory representation of all datasets.
 */
var fs = require("fs");
var CourseRecord = /** @class */ (function () {
    function CourseRecord() {
    }
    return CourseRecord;
}());
exports.CourseRecord = CourseRecord;
var DatasetController = /** @class */ (function () {
    function DatasetController() {
        // private dataset : Dataset = {};
        this.values = [];
        console.log('DatasetController::init()');
    }
    DatasetController.prototype.getDatasets = function () {
        var courses;
        var links = fs.readdirSync("./data/");
        for (var _i = 0, links_1 = links; _i < links_1.length; _i++) {
            var link = links_1[_i];
            var id = link.split(".")[0];
            courses = JSON.parse(fs.readFileSync("./data/" + link, 'utf-8'));
        }
        return courses;
    };
    DatasetController.prototype.processForm = function (form) {
        var that = this;
        var formValues = JSON.parse(form);
        for (var i = 0; i < formValues.knowledgePoints.length; i++) {
            console.log(formValues.classID, formValues.Date, formValues.knowledgePoints[i]);
            var tmp = new CourseRecord();
            tmp.classID = formValues.classID;
            tmp.Date = formValues.Date;
            tmp.knowledgePoint = formValues.knowledgePoints[i];
            that.values.push(tmp);
        }
        that.save(that.values);
    };
    DatasetController.prototype.save = function (values) {
        var that = this;
        var filePath = "./data/" + "course.json";
        try {
            fs.statSync("./data");
        }
        catch (e) {
            fs.mkdirSync("./data");
        }
        console.log("value is : " + JSON.stringify(values));
        fs.writeFile(filePath, JSON.stringify(values), function (err) {
            console.info('DatasetController::save(..) - success');
        });
    };
    return DatasetController;
}());
exports.default = DatasetController;
