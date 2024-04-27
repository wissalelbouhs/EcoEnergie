
class Battrie  {
    constructor(id, model, capacity, voltage, etat, networkSeller, networkBuyer) {
        
        this.networkSeller = networkSeller; // Represents the network from which the battery is sold
        this.networkBuyer = networkBuyer; // Represents the network from which the battery is bought=
        this.id=id
        this.model=model
        this.capacity=capacity
        this.voltage=voltage
        this.etat=etat
    }
}

module.exports = Battrie;
