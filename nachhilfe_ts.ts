// Funktion mit Konsolenausgabe (theoretisch)

function lieblingsTier():void {

    let lieblingsTier: string = "Hüh"
    console.log("Mein Lieblingstier ist " + lieblingsTier);

}

lieblingsTier();


// Funktion return (gibt einen Wert zurück, wenn die Funktion aufgerufen wird) - ausgeführt

function lieblingsTier1(): string {

let lieblingsTier: string = "Hüh"
return("Mein 1. Lieblingstier ist " + lieblingsTier);

}


function lieblingsTier2(): string {

    let lieblingsTier: string = "Hamster"
    return("Mein 2. Lieblingstier ist " + lieblingsTier);
    
    }

function lieblingsTier3(): string {

    let lieblingsTier: string = "Kamel"
    return("Mein 3. Lieblingstier ist " + lieblingsTier);
    
    }

console.log(lieblingsTier1()); 
console.log(lieblingsTier2());
console.log(lieblingsTier3());// 2. Klammer weil FUNKTION KÜHNE




function lieblingsTier4(lieblingsTier: string): string {   // Tiername = automatisch Variable
    return("Meine weiteren Lieblingstiere sind " + lieblingsTier);

}

console.log(lieblingsTier4("Hamster"));

//

function dreiTiere(Tier1: string, Tier2: string, Tier3: string): void {

console.log(Tier1, Tier2, Tier3);

}

// wenn es kein return ist, dann void!!!!

dreiTiere("Hamster, ", "Kamel, ", "Hüh, ");

// !!!!

function dreiTiere2(): void {

    let Tier1: string = "Hamster";
    let Tier2: string = "Hüh";
    let Tier3: string = "Kamel";

    console.log(Tier1, Tier2, Tier3);
    
    }

dreiTiere2(); // führt die Funktion aus


