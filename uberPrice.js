class Uber{
    constructor(rate,distance,waitingperiod){
        this.rate=rate;
        this.distance=distance;
        this.waitingperiod=waitingperiod;
    }
    setDistance(newDistance){
        this.distance=newDistance;
    }
    getDetails(){
            return(`The Price is Rs.${this.rate} for the distance of ${this.distance}km and waiting period is ${this.waitingperiod}mins `);
        }
    getPrice(){
        let price=(this.rate*this.distance)+(this.waitingperiod*5);
        return price;
    }
    
}
let travel1=new Uber(120,5,5);
console.log(travel1.getDetails());
travel1.setDistance(10);
console.log(travel1.getDetails());