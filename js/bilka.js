class BilkaPriceStrategy {
    getDescription() {
        return "Parkering koster 10 kr pr. kvarter";
    }

    calculatePrice(from, to) {    
       const time = (to - from) / 1000;
       return 10 * (Math.floor(time/15) + 1);
   }
}

document.addEventListener('DOMContentLoaded', () => {
    main(new ParkingLot(new BilkaPriceStrategy()));
});