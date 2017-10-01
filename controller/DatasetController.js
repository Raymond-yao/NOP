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
    DatasetController.prototype.getCourseDatasets = function () {
        // let courses : string;
        // let links = fs.readdirSync("./data/");
        // for (let link of links) {
        //     let id = link.split(".")[0];
        //      courses = JSON.parse(fs.readFileSync("./data/" + link, 'utf-8'));
        // }
        return JSON.parse(fs.readFileSync("./data/course.json", "utf-8"));
    };
    DatasetController.prototype.getWordCloudDatasets = function () {
        // try {
        return JSON.parse(fs.readFileSync("./data/wordCloud.json", "utf-8"));
        // } catch (err) {
        //     return fs.readFileSync("./data/wordCloud.json", "utf-8");
        // }
    };
    DatasetController.prototype.processWordCloud = function (word) {
        var that = this;
        var wordValue = JSON.parse(word);
        var wordCloud = JSON.parse(fs.readFileSync("./data/wordCloud.json", "utf-8"));
        var flag = false;
        var i = 0;
        for (; i < wordCloud.length; i++) {
            if (wordCloud[i].text == wordValue.text) {
                flag = true;
                break;
            }
        }
        if (flag) {
            wordCloud[i].size+=30;
        }
        else {
            wordValue.size = 30;
            wordCloud.push(wordValue);
        }
        console.log(JSON.stringify(wordCloud));
        fs.writeFile("./data/wordCloud.json", JSON.stringify(wordCloud), function (err) {
            console.info('DatasetController::processWordCloud(..) - success');
        });
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
