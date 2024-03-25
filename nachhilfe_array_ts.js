var tiere = ["Hüh", "Kamel", "Kaninchen", "Hamster"]; // eckige Klammer hinter string Erkennung array
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
var insekten = ["Bienen", "Muecken", "Schmetterlinge"]; // neues Array
var allemeinetiere = tiere.concat(insekten);
console.log(allemeinetiere);
// Funktion schreiben, die das da oben macht
function tierZusammenfuehrung(array1, array2) {
    var allemeinearrays = array1.concat(array2);
    return allemeinearrays;
}
console.log(tierZusammenfuehrung(tiere, insekten));
var Farben1 = ["blau", "gruen", "gelb"];
var Farben2 = ["lila", "schwarz"];
console.log(tierZusammenfuehrung(Farben1, Farben2));
var gemischterArray = ["Laptop", 1, "Rechner", 2, "Bildschirm", 3];
var strengerArray = [1, 2, 3]; // entweder string ODER number
var cookie = {
    stockmaß: 100,
    farbe: "braun",
    rasse: "shetlandpony",
};
var brownie = {
    stockmaß: 140,
    farbe: "Rappe",
    rasse: "welshB",
};
var ponyArray = [cookie, brownie];
console.log(ponyArray);
