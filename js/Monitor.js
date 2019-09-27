class Monitor {
    constructor(parkingLot) {
        this.parkingLot = parkingLot;
        this.targets = this.parkingLot.checkedInCars;
        console.log("Nu overvåges P-pladsen");

        main(parkingLot);        
    }
    

}