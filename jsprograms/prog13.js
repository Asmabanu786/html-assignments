class Fruit{
    constructor(fruitname,price){
        this.fruitname=fruitname;
        this.price=price;
    }
    estimateFor(quantity){
        return quantity*this.price;
    }   
        discountedEstimateFor(quantity,discPercent){
            let estimate=this.estimateFor(quantity);
            return estimate * discPercent/100;
        }
        static getShopFruitname(){
            return "Fresh fruit shop";
        }
}
    console.log(Fruit.getShopFruitname());
    f1=new Fruit("Pine apple",30);
    console.log(f1);
    console.log(f1.estimateFor(100));
    console.log(f1.discountedEstimateFor(100,20));


