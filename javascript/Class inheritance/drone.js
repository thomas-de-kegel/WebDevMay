//parent class Drone

class Drone {
  constructor(type = "drone", speed = 0, battery = 100) {
    this.type = type;
    this.speed = speed;
    this.battery = battery;
  }
}

//Child class drone
class CivilDrone extends Drone {
  constructor(type = "civil drone", speed = 50, battery = 100) {
    super(type, speed, battery);
    this.owners = [];
  }

  registeredDroneOwner(deviceId, fullName, address) {
    this.owners.push({
      type: this.type,
      speed: this.speed,
      battery: this.battery,
      deviceId,
      fullName,
      address,
    });
  }

  getDroneOwners() {
    return this.owners;
  }

  //toString
  toString() {
    console.log(
      `${this.deviceId} specs:\nspeed: ${this.speed}\nbattery: ${this.battery}\n####################\nOwner: ${this.fullName}, registered at ${this.address}`
    );
  }
}

//Child class drone
class MilitaryDrone extends Drone {
  constructor(type = "military drone", speed = 150, battery = 100) {
    super(type, speed, battery);
    this.owners = [];
  }

  registeredDroneOwner(deviceId, fullName, address) {
    this.owners.push({
      type: this.type,
      speed: this.speed,
      battery: this.battery,
      deviceId,
      fullName,
      address,
    });
  }

  getDroneOwners() {
    return this.owners;
  }

  //toString
  toString() {
    console.log(
      `${this.deviceId} specs:\nspeed: ${this.speed}\nbattery: ${this.battery}\n####################\nOwner: ${this.fullName}, registered at ${this.address}`
    );
  }
}

let drone1 = new CivilDrone();
drone1.registeredDroneOwner("Drone#001", "Winnand", "Brussels");
drone1.registeredDroneOwner("Drone#002", "Joe", "Auderghem");
drone1.registeredDroneOwner("Drone#003", "John", "Stalingrad");
drone1.toString();

let drone2 = new MilitaryDrone();
drone2.registeredDroneOwner("MilDrone #001", "Billybob Johnson", "NYC");
//console.log(drone2.getDroneOwners());
