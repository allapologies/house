"use strict";

/**
 * House entity
 */
class House{
  constructor(data){
    this.floors = data.floors;         // {1:{height:3}, 2: {height:1.2}}
    this.walls = data.walls;           // {width:7, length:8}
    this.foundation = data.foundation; // string
    this.roof = data.roof;             // string
    this.rooms=data.rooms;             // {   {floor, type, area, windows: {{id, width, height}} {}   }
  }
}

module.exports = House;