abstract class Ticket {

    //data

    protected name: string;
    protected price: number = 150;      //základní hodnota, od které se odvýjí ceny

    //consturctor

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    //metody

    abstract getDescription(): string       //abstraktní metoda pro získání popisu vstupenky
    getPrice(): number {
        return this.price;
    }
    getname(): string{
        return this.name;
    }
}
class AdultTicket extends Ticket {

    //constructor

        constructor(name: string, price: number) {
        super("dospělý", price);
        this.price = price * 1;
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
        this.price = price * 0.75;
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
        this.price = price * 0.75;
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
        this.price = price * 1.5;
    }

    //metody

    getDescription(): string {
        return `Vstupenka pro ${this.name} za cenu ${this.price} Kč.`;
    }
}
//testování
console.log(new AdultTicket("dospělý", 150).getDescription());
console.log(new ChildTicket("dětský", 150).getDescription());
console.log(new SeniorTicket("senior", 150).getDescription());
console.log(new VIPTicket("VIP", 150).getDescription());