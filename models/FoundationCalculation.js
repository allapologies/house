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
        materials = {
          beton : Math.round(areas.foundation * parameters.foundationThickness),
          metall : Math.round(this.house.walls.sideA * this.house.walls.sideB / parameters.metallStep * parameters.metallLayers)
        };
        break;
      case "lenta":
        materials = {
          beton : Math.round(areas.foundation * parameters.foundationThickness),
          metall : Math.round(this.house.walls.sideA * this.house.walls.sideB / parameters.metallStep * parameters.metallLayers)
        };
        break;
      case "stolb":
        materials = {
          svai : Math.round(areas.foundation / parameters.svaiConsumption)
        };
        break;
      default:
        break;
    };

    return materials;
  };
}

module.exports = FoundationCalculation;