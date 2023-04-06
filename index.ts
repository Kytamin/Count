class Application {
    private name:string;
    static count:number = 0;

    constructor(name:string) {
        this.name = name;
        // Application.count++

    }
   static countIndex(){
        Application.count++

    }

}
console.log(Application.count);
let app1 = new Application('App One');
Application.countIndex()
console.log(Application.count);
let app2 = new Application('App Two');
Application.countIndex()
console.log(Application.count);