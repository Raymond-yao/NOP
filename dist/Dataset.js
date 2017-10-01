"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * In memory representation of all datasets.
 */
var fs = require("fs");
var DatasetController = (function () {
    function DatasetController() {
        this.datasets = {};
        this.values = [];
        console.log('DatasetController::init()');
    }
    DatasetController.prototype.processForm = function (form) {
        var that = this;
        var formValues = JSON.parse(form);
        for (var i = 0; i < formValues.knowledgePoints.length; i++) {
            var tmp = void 0;
            tmp.classID = formValues.classID;
            tmp.Date = formValues.Date;
            tmp.knowledgePoint = formValues.knowledgePoints[i];
            that.values.push(tmp);
        }
        return this.values;
    };
    DatasetController.prototype.save = function (id, processedDataset) {
        // add it to the memory model
        this.datasets[id] = processedDataset;
        var filePath = "./data/" + id + ".json";
        // TODO: actually write to disk in the ./data directory
        try {
            fs.statSync("./data");
        }
        catch (e) {
            fs.mkdirSync("./data");
        }
        if (processedDataset) {
            fs.writeFile(filePath, JSON.stringify(processedDataset), function (err) {
                //if (err) throw err;
                Log.trace('DatasetController::save(..) - success');
            });
        }
        else {
            var result = void 0;
            if (fs.statSync(filePath)) {
                fs.unlinkSync(filePath);
                result = true;
            }
            else {
                result = false;
            }
            Log.trace('DatasetController::save(..) - remove success');
            return result;
        }
    };
    return DatasetController;
}());
exports.default = DatasetController;
//# sourceMappingURL=Dataset.js.map