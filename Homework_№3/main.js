
function CoffeMake(){};

CoffeMake.prototype.on = function(){
    console.log("it's turned on")
}

CoffeMake.prototype.off = function(){
    console.log("it's turned off")
}

function DripCoffee(){};

DripCoffee.prototype = CoffeMake.prototype;
DripCoffee.prototype.process = function() {
    console.log('Drip coffee maker works :)')
}

function CarobCoffee(){};
CarobCoffee.prototype = CoffeMake.prototype;
CarobCoffee.prototype.process = function() {
    console.log('Carob coffee maker works :)')
}

function CoffeMachine(){};
CoffeMachine.prototype = CoffeMake.prototype;
CoffeMachine.prototype.process = function() {
    console.log('Coffee machine works :)')
}

const drip = new DripCoffee;
const  carob = new CarobCoffee;
const machine = new CoffeMachine;

