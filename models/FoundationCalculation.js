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

    return {
      stage: this.stage,
      beton : areas.foundation * parameters.foundationThickness,
      metall : this.house.walls.sideA * this.house.walls.sideB / parameters.metallStep * parameters.metallLayers
    };
  };
}

module.exports = FoundationCalculation;