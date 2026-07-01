function calcul(a, b) {
    // Au-dessus de 10, on applique une petite majoration
    if (a > 10) {
        return a + b + 1;
    }
    return a + b;
}
module.exports = calcul;
