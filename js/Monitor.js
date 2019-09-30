class Monitor {

    lookOut = false;
    count = 0;
    
    constructor(parkingLot) {
        this.parkingLot = parkingLot;
        this.checkedInCars = parkingLot.checkedInCars;
        this.entranceGate = parkingLot.entranceGate;
        this.exitGate = parkingLot.exitGate;

        console.log("Nu overvåges P-pladsen");

    }

    getDescription() {
        return this.parkingLot.getDescription();
    }

    checkout(licensePlate) { 
        console.log("...det var " + licensePlate);
        this.parkingLot.checkout(licensePlate);
        this.lookOut = false;
    }

    checkin(licensePlate) { 
        console.log("...det er " + licensePlate);
        this.parkingLot.checkin(licensePlate);
        this.lookOut = false;
    }
    
    pay(licensePlate, amount) {
        this.parkingLot.pay(licensePlate, amount)
    }


}