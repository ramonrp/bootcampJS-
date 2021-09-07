// bookings
const bookings = [
  {
    roomType: "standard",
    breakfast: false,
    pax: 1,
    nights: 3,
  },
  {
    roomType: "standard",
    breakfast: false,
    pax: 1,
    nights: 4,
  },
  {
    roomType: "suite",
    breakfast: true,
    pax: 2,
    nights: 1,
  },
];
//vat in all cases
const vat = 1.21;

//class definition
class CalculateBookingPrice {
  constructor(priceRooms) {
    this._subtotal = 0;
    this._total = 0;
    this.priceRooms = priceRooms;
    this._bookings = [];
  }
  static roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
  }

  calculateSubtotal() {
    const totalPrice = this._bookings.reduce(
      (acc, { roomType, pax, nights, breakfast }) => {
        const paxExtra = pax === 1 ? 0 : pax - 1;
        const breakfastPrice = breakfast ? 15 * pax : 0;
        return (
          acc +
          (this.priceRooms[roomType] + paxExtra * 40 + breakfastPrice) * nights
        );
      },
      0
    );

    this._subtotal = CalculateBookingPrice.roundToTwo(totalPrice);
  }
  calculateTotal() {
    this._total = CalculateBookingPrice.roundToTwo(this._subtotal * vat);
  }
  set bookings(bookings) {
    this._bookings = bookings;
    this.calculateSubtotal();
    this.calculateTotal();
  }

  get subtotal() {
    return this._subtotal;
  }

  get total() {
    return this._total;
  }
}

//case1
const case1Prices = {
  standard: 100,
  suite: 150,
};
const case1 = new CalculateBookingPrice(case1Prices);

case1.bookings = bookings;

//case2
class TourAgencyBookingPrice extends CalculateBookingPrice {
  calculateSubtotal() {
    super.calculateSubtotal();
    const priceWithDiscount = this._subtotal * 0.85;
    this._subtotal = TourAgencyBookingPrice.roundToTwo(priceWithDiscount);
  }
}
const priceTourAgency = {
  standard: 100,
  suite: 100,
};
const case2 = new TourAgencyBookingPrice(priceTourAgency);
case2.bookings = bookings;
