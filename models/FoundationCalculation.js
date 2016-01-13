"use strict";

/**
 * Calculation model
 */
class Calculation{
  constructor(house){
    this.house = house;
  };
  countAreas(){
    let perimeter   = (this.house.walls.sideA*this.house.walls.sideB)*2,
      foundation  = this.house.walls.sideA*this.house.walls.sideB,
      walls       = perimeter * 4;

    return {"perimeter":perimeter,
      "foundation": foundation,
      "walls": walls
    };
  };
}

module.exports = Calculation;

"use strict";
var Calculation = require('./calculation');

class FoundationCalculation extends Calculation{
  constructor(house){
    super(house);
    this.stage = "Foundation";
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

"use strict";
var Calculation = require('./calculation');

class WallsCalculation extends Calculation{
  constructor(house){
    super(house);
    this.stage = "Walls";
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