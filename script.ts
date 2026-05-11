abstract class Ticket {
    //data
    protected name: string;
    protected price: number;

    //consturctor
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    //metody
    abstract getDescription(): string

}
class AdultTicket extends Ticket {
    //constructor
        constructor(name: string, price: number) {
        super("dospělý", price);
        }
    //metody
    getDescription(): string {
        return `Vstupenka pro ${this.name} za cenu ${this.price} Kč.`;
    }
}
class ChildTicket extends Ticket {
    //constructor
    constructor(name: string, price: number) {
        super("dětský", price);
    }
    //metody
    getDescription(): string {
        return `Vstupenka pro ${this.name} za cenu ${this.price} Kč.`;
    }
}
class SeniorTicket extends Ticket {
    //constructor
    constructor(name: string, price: number) {
        super("senior", price);
    }

    //metody
    getDescription(): string {
        return `Vstupenka pro ${this.name} za cenu ${this.price} Kč.`;
    }

}
class VIPTicket extends Ticket {
    //constructor
    constructor(name: string, price: number) {
        super("VIP", price);
    }

    //metody
    getDescription(): string {
        return `Vstupenka pro ${this.name} za cenu ${this.price} Kč.`;
    }
}