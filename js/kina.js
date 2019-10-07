class KinaStrategi {
    getDescription() {
        return "Gratis, men du er produktet.";
    }

    calculatePrice() {
        return 0;
    }
}

class LoggingParkingLotDecorator {
    constructor(parkingLot) {
        this.parkingLot = parkingLot;
    }
    
    getDescription() {
        return this.parkingLot.getDescription();
        console.log(getDescription);
    }

    checkin(licensePlate) {
        const resultat = this.parkingLot.checkin(licensePlate);
        console.log(licensePlate + " er ankommet");
        return resultat;
    }

    checkout(licensePlate) {
        const resolve = this.parkingLot.checkout(licensePlate);
        console.log(licensePlate + " er lige kørt sin vej");
        return resolve;
    }

    pay(licensePlate, amount) {
        const supper = this.parkingLot.pay(licensePlate, amount);
        console.log(licensePlate + " har lige betalt " + amount + " kr for parkering, tak for dine oplysninger");
        return supper;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const prisStrategi = new KinaStrategi();
    const parkingLot = new ParkingLot(prisStrategi);
    const decoratedParkingLot = new LoggingParkingLotDecorator(parkingLot);
    main(decoratedParkingLot);
});