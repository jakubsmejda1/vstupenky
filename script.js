"use strict";
class Ticket {
    //data
    name;
    price;
    //consturctor
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class AdultTicket extends Ticket {
    //constructor
    constructor(name, price) {
        super("dospělý", price);
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
    }
    //metody
    getDescription() {
        return `Vstupenka pro ${this.name} za cenu ${this.price} Kč.`;
    }
}
