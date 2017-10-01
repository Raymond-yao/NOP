/**
 * In memory representation of all datasets.
 */
import fs = require("fs");

export class CourseRecord {
    classID: string;
    Date: Date;
    knowledgePoint: string;
}

export interface Form {
    classID: string;
    Date: Date;
    knowledgePoints: string[];
}

export interface Word {
    text: string;
    size?: number;
}

export default class DatasetController {

    // private dataset : Dataset = {};
    private values: CourseRecord[] = [];

    constructor() {
        console.log('DatasetController::init()');
    }

    public getCourseDatasets(): any {
        // let courses : string;
        // let links = fs.readdirSync("./data/");
        // for (let link of links) {
        //     let id = link.split(".")[0];
        //      courses = JSON.parse(fs.readFileSync("./data/" + link, 'utf-8'));
        // }
        return JSON.parse(fs.readFileSync("./data/course.json", "utf-8"));
    }

    public getWordCloudDatasets(): any {

        // try {
        return JSON.parse(fs.readFileSync("./data/wordCloud.json", "utf-8"));
        // } catch (err) {
        //     return fs.readFileSync("./data/wordCloud.json", "utf-8");
        // }
    }

    public processWordCloud(word: string) {
        let that = this;
        let wordValue: Word = JSON.parse(word);
        let wordCloud: Word[] = JSON.parse(fs.readFileSync("./data/wordCloud.json", "utf-8"));
        let flag: boolean = false;
        let i = 0;
        for (; i < wordCloud.length; i++) {
            if (wordCloud[i].text == wordValue.text) {
                flag = true;
                break;
            }
        }
        if (flag) {
            wordCloud[i].size++;
        } else {
            wordValue.size = 1;
            wordCloud.push(wordValue);
        }
        console.log(JSON.stringify(wordCloud));
        fs.writeFile("./data/wordCloud.json", JSON.stringify(wordCloud), (err) => {
            console.info('DatasetController::processWordCloud(..) - success');
        })
    }


    public processForm(form: string) {
        let that = this;
        let formValues: Form = JSON.parse(form);
        for (let i = 0; i < formValues.knowledgePoints.length; i++) {
            console.log(formValues.classID, formValues.Date, formValues.knowledgePoints[i]);
            let tmp: CourseRecord = new CourseRecord();
            tmp.classID = formValues.classID;
            tmp.Date = formValues.Date;
            tmp.knowledgePoint = formValues.knowledgePoints[i];
            that.values.push(tmp);
        }
        that.save(that.values);
    }

    public save(values: CourseRecord[]) {
        let that = this;

        let filePath = "./data/" + "course.json";
        try {
            fs.statSync("./data");
        } catch (e) {
            fs.mkdirSync("./data");
        }
        console.log("value is : " + JSON.stringify(values));
        fs.writeFile(filePath, JSON.stringify(values), (err) => {
            console.info('DatasetController::save(..) - success');
        })
    }
}