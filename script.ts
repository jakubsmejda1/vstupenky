abstract class Ticket {

    //data

    protected name: string;
    protected price: number;      //základní hodnota, od které se odvýjí ceny

    //consturctor

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    //metody

    getPrice(): number {
        return this.price;
    }
    getname(): string{
        return this.name;
    }
    getDescription(): string {
        return `Vstupenka pro ${this.name} za cenu ${this.price} Kč.`;
    }
}
class AdultTicket extends Ticket {

    //constructor

        constructor(name: string, price: number) {
        super("dospělý", price);
        this.price = price * 1;
        }

    //metody
}
class ChildTicket extends Ticket {

    //constructor

    constructor(name: string, price: number) {
        super("dětský", price);
        this.price = price * 0.75;
    }

    //metody
}
class SeniorTicket extends Ticket {

    //constructor

    constructor(name: string, price: number) {
        super("senior", price);
        this.price = price * 0.75;
    }

    //metody
}
class VIPTicket extends Ticket {

    //constructor

    constructor(name: string, price: number) {
        super("VIP", price);
        this.price = price * 1.5;
    }

    //metody
}
function vypsaniCen(price: number): void {
document.getElementById("ticketPriceAdult")!.textContent = new AdultTicket("dospělý", price).getDescription();
document.getElementById("ticketPriceChild")!.textContent = new ChildTicket("dětský", price).getDescription();
document.getElementById("ticketPriceSenior")!.textContent = new SeniorTicket("senior", price).getDescription();
document.getElementById("ticketPriceVIP")!.textContent = new VIPTicket("VIP", price).getDescription();
};
const ticket = new AdultTicket("základní", 160); //nelze vytvořit instanci abstraktní třídy, ale můžeme ji použít pro získání základní ceny
vypsaniCen(ticket.getPrice());
//testování
console.log(new AdultTicket("dospělý", 160).getDescription());
console.log(new ChildTicket("dětský", 160).getDescription());
console.log(new SeniorTicket("senior", 160).getDescription());
console.log(new VIPTicket("VIP", 160).getDescription());