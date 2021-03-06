"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var DatasetController_1 = require("../controller/DatasetController");
describe('my test', function () {
    beforeEach(function () {
    });
    afterEach(function () {
    });
    it("Store data in json file.", function () {
        var datasetController = new DatasetController_1.default();
        var obj = {
            "classID": "213",
            "Date": 123,
            "knowledgePoints": ["static variable", "scalar and arrays", "memory allocation", "pointer"]
        };
        datasetController.processForm(JSON.stringify(obj));
        chai_1.expect(true).to.equal(true);
    });
    it("Retrieve data from course.json", function () {
        var datasetController = new DatasetController_1.default();
        var ans = datasetController.getCourseDatasets();
        var obj = [{ "classID": "213", "Date": 123, "knowledgePoint": "static variable" },
            { "classID": "213", "Date": 123, "knowledgePoint": "scalar and arrays" },
            { "classID": "213", "Date": 123, "knowledgePoint": "memory allocation" },
            { "classID": "213", "Date": 123, "knowledgePoint": "pointer" }];
        chai_1.expect(JSON.stringify(ans)).to.equal(JSON.stringify(obj));
    });
    it.only("Retrieve data from wordCloud.json", function () {
        var datasetController = new DatasetController_1.default();
        var text = { "text": "forces", "size": 1 };
        datasetController.processWordCloud(JSON.stringify(text));
        var obj = [
            { "text": "study", "size": 41 }, { "text": "motion", "size": 39 }, { "text": "forces", "size": 10 }
        ];
        var ans = datasetController.getWordCloudDatasets();
        chai_1.expect(JSON.stringify(ans)).to.equal(JSON.stringify(obj));
    });
});
