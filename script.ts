// Položka v košíku (bez dalších násobků ceny)
class CartItem {
    name: string;
    price: number;
    
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    
    getDescription(): string {
        return `Vstupenka pro ${this.name} za cenu ${this.price} Kč.`;
    }
    
    getPrice(): number {
        return this.price;
    }
}

// Globální košík
let globalKosik: CartItem[] = [];

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
    abstract pridatDoKosiku(): void;     //abstraktní metoda pro přidání do košíku, implementace bude v konkrétních třídách
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
    pridatDoKosiku(): void {
        globalKosik.push(new CartItem(this.name, this.price));
        console.log(`Přidáno do košíku: ${this.getDescription()}`);
        vypsaniKosiku(globalKosik);
    }
}
class ChildTicket extends Ticket {

    //constructor

    constructor(name: string, price: number) {
        super("dětský", price);
        this.price = price * 0.75;
    }

    //metody
    pridatDoKosiku(): void {
        globalKosik.push(new CartItem(this.name, this.price));
        console.log(`Přidáno do košíku: ${this.getDescription()}`);
        vypsaniKosiku(globalKosik);
    }
}
class SeniorTicket extends Ticket {

    //constructor

    constructor(name: string, price: number) {
        super("senior", price);
        this.price = price * 0.75;
    }

    //metody
    pridatDoKosiku(): void {
        globalKosik.push(new CartItem(this.name, this.price));
        console.log(`Přidáno do košíku: ${this.getDescription()}`);
        vypsaniKosiku(globalKosik);
    }
}
class VIPTicket extends Ticket {

    //constructor

    constructor(name: string, price: number) {
        super("VIP", price);
        this.price = price * 1.5;
    }

    //metody
    pridatDoKosiku(): void {
        globalKosik.push(new CartItem(this.name, this.price));
        console.log(`Přidáno do košíku: ${this.getDescription()}`);
        vypsaniKosiku(globalKosik);
    }
}
function vypsaniCen(price: number): void {
    const adult = new AdultTicket("dospělý", price);
    const child = new ChildTicket("dětský", price);
    const senior = new SeniorTicket("senior", price);
    const vip = new VIPTicket("VIP", price);
    
    document.getElementById("ticketPriceAdult")!.textContent = adult.getPrice() + " Kč";
    document.getElementById("ticketPriceChild")!.textContent = child.getPrice() + " Kč";
    document.getElementById("ticketPriceSenior")!.textContent = senior.getPrice() + " Kč";
    document.getElementById("ticketPriceVIP")!.textContent = vip.getPrice() + " Kč";
}
function vypsaniKosiku(kosik: CartItem[]): void {
    console.log("Obsah košíku:");
    const cartContainer = document.getElementById("cart-container")!;
    let totalPrice = 0;
    let html = "";
    
    if (kosik.length === 0) {
        html = "<p class='w3-text-grey w3-center'>Vyberte vstupenky a budou se zde zobrazovat...</p>";
    } else {
        html = "<ul class='w3-ul'>";
        kosik.forEach((ticket, index) => {
            console.log(ticket.getDescription());
            html += `<li class='w3-padding-small'>${ticket.getDescription()} <button class='w3-button w3-small w3-red' onclick='odebratZKosiku(${index})'>Odstranit</button></li>`;
            totalPrice += ticket.getPrice();
        });
        html += "</ul>";
    }
    
    cartContainer.innerHTML = html;
    document.getElementById("total-price")!.textContent = totalPrice.toString();
}
// Globální funkce pro přidání do košíku (volán z HTML)
function pridatDoKosiku(type: string): void {
    switch (type) {
        case 'adult':
            new AdultTicket("dospělý", 160).pridatDoKosiku();
            break;
        case 'child':
            new ChildTicket("dětský", 160).pridatDoKosiku();
            break;
        case 'senior':
            new SeniorTicket("senior", 160).pridatDoKosiku();
            break;
        case 'vip':
            new VIPTicket("VIP", 160).pridatDoKosiku();
            break;
    }
}

function odebratZKosiku(index: number): void {
    globalKosik.splice(index, 1);
    vypsaniKosiku(globalKosik);
}