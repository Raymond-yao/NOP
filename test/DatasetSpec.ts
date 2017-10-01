import {} from 'mocha';
import {expect} from 'chai';
import {CourseRecord} from "../controller/DatasetController";
import DatasetController from "../controller/DatasetController";

describe('my test', () => {

    beforeEach(function () {

    });

    afterEach(function () {
    });

    it("Store data in json file.", function () {
        let datasetController = new DatasetController();
        let obj = {
            "classID": "213",
            "Date": 123,
            "knowledgePoints": ["static variable","scalar and arrays","memory allocation","pointer"]
        }
        datasetController.processForm(JSON.stringify(obj));
        expect(true).to.equal(true);
    });

    it("Retrieve data from course.json", function () {
        let datasetController = new DatasetController();
        let ans : string = datasetController.getCourseDatasets();
        let obj = [{"classID":"213","Date": 123,"knowledgePoint":"static variable"},
            {"classID":"213","Date": 123,"knowledgePoint":"scalar and arrays"},
            {"classID":"213","Date": 123,"knowledgePoint":"memory allocation"},
            {"classID":"213","Date": 123,"knowledgePoint":"pointer"}];
        expect(JSON.stringify(ans)).to.equal(JSON.stringify(obj));
    });

    it.only("Retrieve data from wordCloud.json", function () {
        let datasetController = new DatasetController();
        let text = {"text" : "forces", "size" : 1};
        datasetController.processWordCloud(JSON.stringify(text));
        let obj = [
            { "text": "study", "size": 41 }, { "text": "motion", "size": 39 }, { "text": "forces", "size": 10 }
        ];
        let ans = datasetController.getWordCloudDatasets();
        expect(JSON.stringify(ans)).to.equal(JSON.stringify(obj));
    });
});