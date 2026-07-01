const calcul = require('./app');

// Test 1 : couvre la branche "else" (a <= 10)
test('calcul(1, 2) retourne 3', () => {
  expect(calcul(1, 2)).toBe(3);
});

// Test 2 : couvre la branche "if" (a > 10) -> couverture 100 %
test('calcul(20, 5) retourne 26 (avec majoration)', () => {
  expect(calcul(20, 5)).toBe(26);
});
