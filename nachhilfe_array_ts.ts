let tiere: string[] = ["Hüh", "Kamel", "Kaninchen", "Hamster"]; // eckige Klammer hinter string Erkennung array

console.log(tiere[2]); // Ausgabe "Kaninchen", da bei 0 angefangen

tiere[2] = "Einhorn"; // ändert Position 2 im Array Tiere in Sophie's Einhorn

console.log(tiere[2]); 


// Array Methoden


// Ausgabe Länge des Arrays
// punkt = immer Funktion. Klammer hinter "length", weil eigenständige Funktion. Length ist die einzige Methode, die KEINE runden Klammern hat


console.log(tiere.length);


// wir schmeißen das letzte Element raus mit der pop Methode

console.log(tiere.pop());
console.log(tiere.length);

// Wir werfen hinten ein neues Tier rein

console.log(tiere.push("Glitzereinhorn"));
console.log(tiere[3]); 


// Shift Methode - löscht das erste Element


console.log(tiere.shift());

console.log(tiere);


// Pummeleinhorn wird in die Herde integriert


console.log(tiere.push("Pummeleinhorn"));
console.log(tiere);

// 2 Arrays verbinden - indem wir die zwei Arrays in ein drittes Array speichern (das Dritte wird ausgegeben)

let insekten: string[] = ["Bienen", "Muecken", "Schmetterlinge"];  // neues Array
let allemeinetiere: string[] = tiere.concat(insekten);

console.log(allemeinetiere);




// Funktion schreiben, die das da oben macht

function tierZusammenfuehrung(array1: string[], array2: string[]): string[] {  // 2. string: array soll ausgegeben werden, deshalb  []


    let allemeinearrays: string[] = array1.concat(array2);
    return allemeinearrays;
    
    }

console.log(tierZusammenfuehrung(tiere, insekten));

let Farben1: string[] = ["blau", "gruen", "gelb"];
let Farben2: string[] = ["lila", "schwarz"];

console.log(tierZusammenfuehrung(Farben1, Farben2));




let gemischterArray:(number | string)[] = ["Laptop", 1, "Rechner", 2, "Bildschirm", 3];

let strengerArray:number[]|string[]=[1, 2, 3]; // entweder string ODER number





type pony={

    stockmaß:number,
    farbe: string,
    rasse: string,
}

let cookie:pony={

    stockmaß:100,
    farbe:"braun",
    rasse:"shetlandpony",
}


let brownie: pony={

    stockmaß:140,
    farbe:"Rappe",
    rasse:"welshB",
}

let ponyArray: pony[]=[cookie, brownie];

console.log(ponyArray);