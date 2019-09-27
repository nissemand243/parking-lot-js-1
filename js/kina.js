// Fakta prisstrategi-klasse

class KinaEmbassyStrategy {

    customerInformation ="Det er gratis, men vi holder øje med dig!";

    constructor() {

    }

    calculatePrice(from, to) {

            return 0;

    }
}

document.addEventListener('DOMContentLoaded', () => {
    const parkingLot = new ParkingLot(new KinaEmbassyStrategy());
    new Monitor(parkingLot);
});