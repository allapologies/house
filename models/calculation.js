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

    return {"perimeter":perimeter, "foundation": foundation, "walls": walls};
  };
}

module.exports = Calculation;