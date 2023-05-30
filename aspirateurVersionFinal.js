"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var Aspirateur = /** @class */ (function () {
    function Aspirateur(x, y, orientation) {
        this.positionX = x;
        this.positionY = y;
        this.orientation = orientation;
    }
    Aspirateur.prototype.pivoterDroite = function () {
        switch (this.orientation) {
            case 'N':
                this.orientation = 'E';
                break;
            case 'E':
                this.orientation = 'S';
                break;
            case 'S':
                this.orientation = 'W';
                break;
            case 'W':
                this.orientation = 'N';
                break;
        }
    };
    Aspirateur.prototype.pivoterGauche = function () {
        switch (this.orientation) {
            case 'N':
                this.orientation = 'W';
                break;
            case 'E':
                this.orientation = 'N';
                break;
            case 'S':
                this.orientation = 'E';
                break;
            case 'W':
                this.orientation = 'S';
                break;
        }
    };
    Aspirateur.prototype.avancer = function () {
        switch (this.orientation) {
            case 'N':
                this.positionY++;
                break;
            case 'E':
                this.positionX++;
                break;
            case 'S':
                this.positionY--;
                break;
            case 'W':
                this.positionX--;
                break;
        }
    };
    Aspirateur.prototype.executerInstructions = function (instructions) {
        for (var i = 0; i < instructions.length; i++) {
            var instruction = instructions[i];
            switch (instruction) {
                case 'D':
                    this.pivoterDroite();
                    break;
                case 'G':
                    this.pivoterGauche();
                    break;
                case 'A':
                    this.avancer();
                    break;
            }
        }
    };
    Aspirateur.prototype.getPosition = function () {
        var orientations = {
            N: 'Nord',
            E: 'Est',
            W: 'Ouest',
            S: 'Sud',
        };
        return "Position finale : x=".concat(this.positionX, " y=").concat(this.positionY, " orientation=").concat(orientations[this.orientation]);
    };
    return Aspirateur;
}());
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("");
console.log("Les orientations possibles sont :");
console.log("N: pour le Nord");
console.log("E: pour l'Est");
console.log("W: pour l'Ouest");
console.log("S: pour le Sud");
console.log("");
console.log("Les commandes possibles sont :");
console.log("D: pour Droite");
console.log("G: pour Gauche");
console.log("A: pour Avancer");
console.log("");
console.log("===> Exemple : ");
console.log("Entrer la dimension de la grille (x y): 10 10");
console.log("Entrer la position initiale de l’aspirateur (x y orientation): 5 5 N");
console.log("Entrer les instructions: DADADADAA");
console.log("Position finale : x=5 y=6 orientation=Nord");
console.log("");
console.log("");
rl.question('Entrer la dimension de la grille (x y): ', function (dimensions) {
    var _a = dimensions.split(' ').map(Number), grilleX = _a[0], grilleY = _a[1];
    rl.question('Entrer la position initiale de l’aspirateur (x y orientation): ', function (positionInitiale) {
        var _a = positionInitiale.split(' '), positionInitialeX = _a[0], positionInitialeY = _a[1], orientationInitiale = _a[2];
        rl.question('Entrer les instructions: ', function (instructions) {
            var aspirateur = new Aspirateur(parseInt(positionInitialeX), parseInt(positionInitialeY), orientationInitiale);
            aspirateur.executerInstructions(instructions);
            console.log(aspirateur.getPosition());
            rl.close();
        });
    });
});
