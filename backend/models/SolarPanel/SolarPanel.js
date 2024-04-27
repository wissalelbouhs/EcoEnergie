

class SolarPanel   {
    constructor(id, model, capacity, voltage, etat, name, manufacturer, efficiency, width, height, installationDate) {
       
        this.name = name;
        this.manufacturer = manufacturer;
        this.efficiency = efficiency; // as a percentage
        this.width = width; // in meters or inches
        this.height = height; // in meters or inches
        this.installationDate = installationDate; // Date object
        this.id=id
        this.model=model
        this.capacity=capacity
        this.voltage=voltage
        this.etat=etat
    }
}

module.exports = SolarPanel;