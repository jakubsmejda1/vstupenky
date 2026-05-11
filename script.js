"use strict";
class Ticket {
    //data
    name;
    price = 150; //základní hodnota, od které se odvýjí ceny
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
}
class AdultTicket extends Ticket {
    //constructor
    constructor(name, price) {
        super("dospělý", price);
        this.price = price * 1;
    }
    //metody
    getDescription() {
        return `Vstupenka pro ${this.name} za cenu ${this.price} Kč.`;
    }
}
class ChildTicket extends Ticket {
    //constructor
    constructor(name, price) {
        super("dětský", price);
        this.price = price * 0.75;
    }
    //metody
    getDescription() {
        return `Vstupenka pro ${this.name} za cenu ${this.price} Kč.`;
    }
}
class SeniorTicket extends Ticket {
    //constructor
    constructor(name, price) {
        super("senior", price);
        this.price = price * 0.75;
    }
    //metody
    getDescription() {
        return `Vstupenka pro ${this.name} za cenu ${this.price} Kč.`;
    }
}
class VIPTicket extends Ticket {
    //constructor
    constructor(name, price) {
        super("VIP", price);
        this.price = price * 1.5;
    }
    //metody
    getDescription() {
        return `Vstupenka pro ${this.name} za cenu ${this.price} Kč.`;
    }
}
