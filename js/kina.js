// Kina prisstrategi-klasse

class KinaEmbassyStrategy {

    customerInformation ="Det er gratis at holde her, \n - men VI holder øje med DIG!";

    constructor() {
    }

    calculatePrice(from, to) {
            return 0;
    }
    
    getDescription() {
        return this.customerInformation;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const parkingLot = new ParkingLot(new KinaEmbassyStrategy());

    // Decorator-pattern: Pakker P-pladsen ind i en Monitor, før main kaldes
    // Monitor har alle de samme felter og metoder som ParkingLot, så main tror
    // det er en helt almindelig parkeringsplads, den kan ikke se forskel

    main(new Monitor(parkingLot));
    

});