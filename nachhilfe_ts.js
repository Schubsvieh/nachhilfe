// Funktion mit Konsolenausgabe (theoretisch)
function lieblingsTier() {
    var lieblingsTier = "Hüh";
    console.log("Mein Lieblingstier ist " + lieblingsTier);
}
lieblingsTier();
// Funktion return (gibt einen Wert zurück, wenn die Funktion aufgerufen wird) - ausgeführt
function lieblingsTier1() {
    var lieblingsTier = "Hüh";
    return ("Mein 1. Lieblingstier ist " + lieblingsTier);
}
function lieblingsTier2() {
    var lieblingsTier = "Hamster";
    return ("Mein 2. Lieblingstier ist " + lieblingsTier);
}
function lieblingsTier3() {
    var lieblingsTier = "Kamel";
    return ("Mein 3. Lieblingstier ist " + lieblingsTier);
}
console.log(lieblingsTier1());
console.log(lieblingsTier2());
console.log(lieblingsTier3()); // 2. Klammer weil FUNKTION KÜHNE
function lieblingsTier4(lieblingsTier) {
    return ("Meine weiteren Lieblingstiere sind " + lieblingsTier);
}
console.log(lieblingsTier4("Hamster"));
//
function dreiTiere(Tier1, Tier2, Tier3) {
    console.log(Tier1, Tier2, Tier3);
}
// wenn es kein return ist, dann void!!!!
dreiTiere("Hamster, ", "Kamel, ", "Hüh, ");
// !!!!
function dreiTiere2() {
    var Tier1 = "Hamster";
    var Tier2 = "Hüh";
    var Tier3 = "Kamel";
    console.log(Tier1, Tier2, Tier3);
}
dreiTiere2(); // führt die Funktion aus
