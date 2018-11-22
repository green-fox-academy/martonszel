interface Reservationy {
    getDowBooking(): string;
    getCodeBooking(): string;
  }
  
  export { Reservationy };


class Reservation implements Reservationy {

  getCodeBooking(): string {
    let letters = "ABCDEFGHIJKMNPQRSTUXYZ123456789";
    let text = "";
    for (var i = 0; i < 8; i++) {
      text += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return text;
  }
  getDowBooking(): string {
    let week: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    let randomDay = week[Math.floor(Math.random() * week.length)];
    return randomDay;
  }
}


let reservation = new Reservation;
console.log(`Booking# ${reservation.getCodeBooking()} for ${reservation.getDowBooking()}`);

let reservation1 = new Reservation;
console.log(`Booking# ${reservation1.getCodeBooking()} for ${reservation1.getDowBooking()}`);

let reservation2 = new Reservation;
console.log(`Booking# ${reservation2.getCodeBooking()} for ${reservation2.getDowBooking()}`);
