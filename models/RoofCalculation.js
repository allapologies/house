"use strict";

var Calculation = require('./calculation');
var parameters = require('./parameters');

class FoundationCalculation extends Calculation{
  constructor(house){
    super(house);
    this.stage = "Фундамент";
  };
  countFoundation(){
    let areas = super.countAreas();
    var materials;
    switch(this.house.foundation){
      case "plita":
        console.log("plita");
        materials = {
          beton : areas.foundation * parameters.foundationThickness,
          metall : this.house.walls.sideA * this.house.walls.sideB / parameters.metallStep * parameters.metallLayers
        };
        break;
      case "lenta":
        console.log("lenta");
        materials = {
          beton : areas.foundation * parameters.foundationThickness,
          metall : this.house.walls.sideA * this.house.walls.sideB / parameters.metallStep * parameters.metallLayers
        };
        break;
      case "stolb":
        console.log("stolb");
        materials = {
          svai : areas.foundation / parameters.svaiConsumption
        };
        break;
      default:
        console.log("plita");
        break;
    };

    return {
      stage: this.stage,
      foundation: this.house.foundation,
      materials: materials
    };
  };
}

module.exports = FoundationCalculation;