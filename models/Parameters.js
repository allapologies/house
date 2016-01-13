"use strict";

/**
 * Parameters for house evaluation
 * @type {{foundationThickness: number, metallStep: number, metallLayers: number, roomtypes: string[]}}
 */
const parameters = {
  foundationThickness: 0.3,
  wallsThickness: 0.3,
  glueConsumption : 25,
  insulationThickness : 0.1,
  plasterySpecificWeight: 8.5,
  metallStep : 0.2,
  metallLayers : 2,
  roomtypes : ["bedroom", "wc", "bathroom", "kitchen", "dining", "boiler"]
};

module.exports = parameters;