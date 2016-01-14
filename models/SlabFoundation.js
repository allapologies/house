"use strict";

class SlabFoundation{
  countFoundation(){

    return {
      stage: this.stage,
      beton : areas.foundation * parameters.foundationThickness,
      metall : this.house.walls.sideA * this.house.walls.sideB / parameters.metallStep * parameters.metallLayers
    };
  };
}

module.exports = SlabFoundation;