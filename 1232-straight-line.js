// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point.
// Check if these points make a straight line in the XY plane.

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
  if (coordinates.length <= 2) {
    return true;
  }

  let tan = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0]);
  let cotan =  (coordinates[1][0] - coordinates[0][0]) / (coordinates[1][1] - coordinates[0][1]);
  for (let i = 1; i < coordinates.length; i++) {
    if (tan !== Infinity) {
      if ((coordinates[i][1] - coordinates[0][1]) / (coordinates[i][0] - coordinates[0][0]) !== tan) {
        return false;
      }
    } else {
      if ((coordinates[i][0] - coordinates[0][0]) / (coordinates[i][1] - coordinates[0][1]) !== cotan) {
        return false;
      }
    }
  }
  return true;
};

let coordinates = [[0,0],[0,1],[0,-1]];
console.log(checkStraightLine(coordinates))
