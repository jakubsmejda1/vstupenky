"use strict";
class Ticket {
    //data
    kosik = []; //globální pole pro uložení zakoupených vstupenek
    name;
    price; //základní hodnota, od které se odvýjí ceny
    //consturctor
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
    getname() {
        return this.name;
    }
    getDescription() {
        return `Vstupenka pro ${this.name} za cenu ${this.price} Kč.`;
    }
}
class AdultTicket extends Ticket {
    //constructor
    constructor(name, price) {
        super("dospělý", price);
        this.price = price * 1;
    }
    //metody
    pridatDoKosiku() {
        this.kosik.push(new AdultTicket(this.name, this.price));
        console.log(`Přidáno do košíku: ${this.getDescription()}`);
        // implementace pro přidání dospělé vstupenky do košíku
    }
}
class ChildTicket extends Ticket {
    //constructor
    constructor(name, price) {
        super("dětský", price);
        this.price = price * 0.75;
    }
    //metody
    pridatDoKosiku() {
        this.kosik.push(new ChildTicket(this.name, this.price));
        console.log(`Přidáno do košíku: ${this.getDescription()}`);
    }
}
class SeniorTicket extends Ticket {
    //constructor
    constructor(name, price) {
        super("senior", price);
        this.price = price * 0.75;
    }
    //metody
    pridatDoKosiku() {
        this.kosik.push(new SeniorTicket(this.name, this.price));
        console.log(`Přidáno do košíku: ${this.getDescription()}`);
    }
}
class VIPTicket extends Ticket {
    //constructor
    constructor(name, price) {
        super("VIP", price);
        this.price = price * 1.5;
    }
    //metody
    pridatDoKosiku() {
        this.kosik.push(new VIPTicket(this.name, this.price));
        console.log(`Přidáno do košíku: ${this.getDescription()}`);
    }
}
function vypsaniCen(price) {
    document.getElementById("ticketPriceAdult").textContent = new AdultTicket("dospělý", price).getDescription();
    document.getElementById("ticketPriceChild").textContent = new ChildTicket("dětský", price).getDescription();
    document.getElementById("ticketPriceSenior").textContent = new SeniorTicket("senior", price).getDescription();
    document.getElementById("ticketPriceVIP").textContent = new VIPTicket("VIP", price).getDescription();
}
;
const ticket = new AdultTicket("základní", 160); //nelze vytvořit instanci abstraktní třídy, ale můžeme ji použít pro získání základní ceny
vypsaniCen(ticket.getPrice()); //vypsání cen pro všechny typy vstupenek na základě základní ceny
//testování
console.log(new AdultTicket("dospělý", 160).getDescription());
console.log(new ChildTicket("dětský", 160).getDescription());
console.log(new SeniorTicket("senior", 160).getDescription());
console.log(new VIPTicket("VIP", 160).getDescription());
