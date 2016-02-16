"use strict";

var Calculation = require('./calculation');
var parameters = require('./parameters');

class FoundationCalculation extends Calculation{
  constructor(house){
    super(house);
    this.stage = "Фундамент";
  };
  count(){
    var areas = super.countAreas();
    var materials;
    switch(this.house.foundation){
      case "plita":
        materials = [
          {name:"beton", quantity : Math.round(areas.foundation * parameters.foundationThickness)},
          {name:"metall",quantity : Math.round(this.house.walls.sideA * this.house.walls.sideB / parameters.metallStep * parameters.metallLayers)}
        ];
        break;
      case "lenta":
        materials = [
          {name:"beton", quantity : Math.round(areas.foundation * parameters.foundationThickness)},
          {name:"metall",quantity : Math.round(this.house.walls.sideA * this.house.walls.sideB / parameters.metallStep * parameters.metallLayers)}
        ];
        break;
      case "stolb":
        materials = [
          {name:"svai",quantity : Math.round(areas.foundation / parameters.svaiConsumption)}
        ];
        break;
      default:
        break;
    };

    return materials;
  };
}

module.exports = FoundationCalculation;