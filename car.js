var Car = function (mpg) {
  this.gallons =  0
  this.mpg = mpg || 0
  this.odometer = 0
  this.trips = []
};

Car.prototype.fill = function (gallons) {
  this.gallons += gallons
};

Car.prototype.drive = function(distance) {
  this.odometer += distance
  this.trips.push(distance + " miles")
  var gasUsed = distance/this.mpg
  this.gallons -= gasUsed
}
module.exports = Car;
