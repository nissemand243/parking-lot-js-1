class FotexPriceStrategy {
    getDescription() {
        return "Velkommen til Føtex' parkeringsplads. Her koster det 15 kr pr påbegyndt kvarter.";
    }

    calculatePrice(from, to) {
        const time = (to - from) / 1000;
        return 15 * (Math.floor(time/15) + 1);
    }
}
class DecoratorFotex{

    constructor(parkingLot){
        this.parkingLot = parkingLot
    }
    getDescription() {
        return this.parkingLot.getDescription();
        console.log(getDescription);
    }

    checkin(licensePlate) {
        const stolenPlate = ['TP34800', 'FC43733','123']
        if(stolenPlate.includes(licensePlate)){
            throw new Error("du er et fjols, aflever bilen");
        }else{
            const resultat = this.parkingLot.checkin(licensePlate);
            console.log(licensePlate + " er ankommet");
            return resultat;
        }
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
    const strategy = new FotexPriceStrategy;
    const parkingLot = new ParkingLot(strategy);
    const decoratorFotex = new DecoratorFotex(parkingLot);
    main(decoratorFotex);
});