"use strict";
var Calculation = require('./calculation');
var parameters = require('./parameters');

class WallsCalculation extends Calculation{
  constructor(house){
    super(house);
    this.stage = "Стены";
  };
  count(){
    let areas = super.countAreas();
    let bricks = Math.round(areas.walls * parameters.wallsThickness);
    let glue = Math.round(bricks * parameters.glueConsumption);
    let foamPlastic = Math.round(areas.walls * parameters.insulationThickness);
    let plaster = Math.round(areas.walls*parameters.plasterySpecificWeight);

    return {
      bricks : bricks,
      glue: glue,
      foamPlastic: foamPlastic,
      plaster: plaster
    };
  };
}

module.exports = WallsCalculation;