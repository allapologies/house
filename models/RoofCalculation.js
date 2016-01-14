"use strict";

var Calculation = require('./calculation');
var parameters = require('./parameters');

class RoofCalculation extends Calculation{
  constructor(house){
    super(house);
    this.stage = "Кровля";
  };
  count(){
    var areas = super.countAreas();
    var materials;
    switch(this.house.roof){
      case "flat":
        materials = {
          ruberoid : Math.round(areas.foundation *7),
          beton : Math.round(areas.foundation * parameters.foundationThickness),
          metall : Math.round(this.house.walls.sideA * this.house.walls.sideB / parameters.metallStep * parameters.metallLayers)
        };
        break;
      case "2skat":
        materials = {
          tile: Math.round(areas.perimeter * 3),
          wood: Math.round(this.house.walls.sideA * 25)
        };
        break;
      case "valma":
        materials = {
          tile: Math.round(this.areas.perimeter * 1,5),
          wood: Math.round(this.house.walls.sideA * 15)
        };
        break;
      default:
        break;
    };

    return materials;
  };
}

module.exports = RoofCalculation;