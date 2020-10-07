export class Task{
    public name:string;
    public description:string;
    public image_url:string;
    public dateStarted:string;
    public inWork:boolean;
    public Done:boolean;
    constructor(name:string,description:string,image_url:string,dateStarted:string,
        inWork:boolean){
        this.name=name;
        this.description=description;
        this.image_url=image_url;
        this.dateStarted=dateStarted;
        this.inWork=inWork;
        this.Done=false;
    }
    }