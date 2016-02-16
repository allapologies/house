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
        materials = [
          {name:"ruberoid", quantity : Math.round(areas.foundation *7)},
          {name:"metall", quantity : Math.round(this.house.walls.sideA * this.house.walls.sideB / parameters.metallStep * parameters.metallLayers)}
        ];
        break;
      case "2skat":
        materials = [
          {name:"tile", quantity : Math.round(areas.perimeter * 3)},
          {name:"wood", quantity : Math.round(this.house.walls.sideA * 25)}
        ];
        break;
      case "valma":
        materials = [
          {name:"tile", quantity : Math.round(this.areas.perimeter * 1,5)},
          {name:"wood", quantity : Math.round(this.house.walls.sideA * 15)}
        ];
        break;
      default:
        break;
    };

    return materials;
  };
}

module.exports = RoofCalculation;