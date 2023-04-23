export class Template {
    id: string;
    templateObj: string;
    name: string;
    creationDate: Date;

    constructor(id:string,templateObj:string,name:string,creationDate:Date){
        this.id=id;
        this.templateObj=templateObj;
        this.creationDate=creationDate;
        this.name=name;
    }
}
