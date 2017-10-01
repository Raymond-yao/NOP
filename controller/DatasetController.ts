/**
 * In memory representation of all datasets.
 */
import fs = require("fs");

export class CourseRecord {
    classID: string;
    Date: number;
    knowledgePoint: string;
}

export interface Form {
    classID: string;
    Date: number;
    knowledgePoints: string[];
}


export default class DatasetController {

    // private dataset : Dataset = {};
    private values : CourseRecord[] = [];

    constructor() {
        console.log('DatasetController::init()');
    }

    public getDatasets() : string {
        let courses : string;
        let links = fs.readdirSync("./data/");
        for (let link of links) {
            let id = link.split(".")[0];
             courses = JSON.parse(fs.readFileSync("./data/" + link, 'utf-8'));
        }
        return courses;
    }

    public processForm(form : string) {
        let that = this;
        let formValues : Form = JSON.parse(form);
        for (let i = 0; i < formValues.knowledgePoints.length; i++) {
            console.log(formValues.classID, formValues.Date, formValues.knowledgePoints[i]);
            let tmp : CourseRecord = new CourseRecord();
            tmp.classID = formValues.classID;
            tmp.Date = formValues.Date;
            tmp.knowledgePoint = formValues.knowledgePoints[i];
            that.values.push(tmp);
        }
        that.save(that.values);
    }

    public save(values : CourseRecord[]) {
        let that = this;

        let filePath = "./data/" + "course.json";
        try {
            fs.statSync("./data");
        } catch(e) {
            fs.mkdirSync("./data");
        }
        console.log("value is : " + JSON.stringify(values));
        fs.writeFile(filePath, JSON.stringify(values), (err) => {
            console.info('DatasetController::save(..) - success');
        })
    }
}