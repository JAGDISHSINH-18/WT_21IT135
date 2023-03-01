class Bike {
    constructor(type, avgspeed) {
        this.type = type;
        this.avgspeed = avgspeed;
        document.write(`<br> Type :- ${type}<br> Average-Speed:- ${avgspeed} in bike`);
    }
    displayBike(){
        document.write(`<br> Inside bike class`);   
    }
}
class Electric extends Bike {
    constructor(price, model) {
        super(price, model);
        this.price = price;
        this.model = model;
        document.write(`<br> Price :- ${this.price}<br> Model :- ${this.model} in Electric`);
    }
    displayEle(){
        document.write(`<br> Inside Electric class`);   
    }
}
let r = new Electric(200000,"20EC");
r.displayEle();
r.displayBike();
