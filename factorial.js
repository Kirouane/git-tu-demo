function factorial(n) {
  if (n === 0) {
    return 1;
  }

  let resultat = 1;
  for (let i = 1; i <= n; i++) {
    resultat *= i;
  }

  return resultat;
}
