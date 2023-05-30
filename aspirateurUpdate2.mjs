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
        return "Position finale : x=".concat(this.positionX, " y=").concat(this.positionY, " orientation=").concat(this.orientation);
    };
    return Aspirateur;
}());
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Dimension de la grille (x y): ', function (dimensions) {
    var _a = dimensions.split(' ').map(Number), grilleX = _a[0], grilleY = _a[1];
    rl.question('Position initiale de l’aspirateur (x y orientation): ', function (positionInitiale) {
        var _a = positionInitiale.split(' '), positionInitialeX = _a[0], positionInitialeY = _a[1], orientationInitiale = _a[2];
        rl.question('Instructions: ', function (instructions) {
            var aspirateur = new Aspirateur(parseInt(positionInitialeX), parseInt(positionInitialeY), orientationInitiale);
            aspirateur.executerInstructions(instructions);
            console.log(aspirateur.getPosition());
            rl.close();
        });
    });
});
