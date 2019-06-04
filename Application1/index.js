let a = 10
let b = 20
console.log(a + " + " + b + " = " + somme(a, b)) // args d'appel / args réels

// Fonction ANONYME (ne peut pas être appelée avant son AFFECTATION)
let s = function (a, b) { return a + b }
console.log("fonction anonyme : " + s(a, b))

// Renvoie la somme de 2 paramètres (HOISTING : toutes les DECLARATIONS sont remontées pour pouvoir être utilisées)
function somme(a, b) { // args formels
    return a + b
}