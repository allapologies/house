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

    let materials =[
      {name:"bricks", quantity : bricks},
      {name:"glue", quantity : glue},
      {name:"foamPlastic", quantity : foamPlastic},
      {name:"plaster", quantity : plaster}
    ];

    return materials;

  };
}

module.exports = WallsCalculation;