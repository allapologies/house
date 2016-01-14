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
    let bricks = areas.walls * parameters.wallsThickness;
    let glue = bricks * parameters.glueConsumption;
    let foamPlastic = areas.walls * parameters.insulationThickness;
    let plaster = areas.walls*parameters.plasterySpecificWeight;

    return {
      bricks : bricks,
      glue: glue,
      foamPlastic: foamPlastic,
      plaster: plaster
    };
  };
}

module.exports = WallsCalculation;