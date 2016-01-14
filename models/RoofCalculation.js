"use strict";

var Calculation = require('./calculation');
var parameters = require('./parameters');

class RoofCalculation extends Calculation{
  constructor(house){
    super(house);
    this.stage = "Кровля";
  };
  count(){
    let areas = super.countAreas();
    var materials;
    switch(this.house.roof){
      case "flat":
        console.log("flat");
        materials = {
          beton : areas.foundation * parameters.foundationThickness,
          metall : this.house.walls.sideA * this.house.walls.sideB / parameters.metallStep * parameters.metallLayers
        };
        break;
      case "2skat":
        console.log("2skat");
        materials = {
          wood: this.house.walls.sideA * 25,
          metall : this.house.walls.sideA * this.house.walls.sideB / parameters.metallStep * parameters.metallLayers
        };
        break;
      case "valma":
        console.log("valma");
        materials = {
          svai : areas.foundation / parameters.svaiConsumption
        };
        break;
      default:
        console.log("none");
        break;
    };

    return materials;
  };
}

module.exports = RoofCalculation;