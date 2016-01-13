"use strict";
var Calculation = require('./calculation');
var parameters = require('./parameters');

class WallsCalculation extends Calculation{
  constructor(house){
    super(house);
    this.stage = "Стены";
  };
  countWalls(){
    let areas = super.countAreas();
    let bricks = areas.walls * parameters.wallsThickness;
    let glue = bricks * parameters.glueConsumption;
    let foamPlastic = areas.walls * parameters.insulationThickness;
    let plaster = areas.walls*parameters.plasterySpecificWeight;
    return {
      stage: this.stage,
      bricks : bricks,
      glue: glue,
      foamPlastic: foamPlastic,
      plaster: plaster
    };
  };
}

module.exports = WallsCalculation;