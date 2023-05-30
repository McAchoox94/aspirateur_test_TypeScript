// Définition de la classe Aspirateur
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
// Exemple de test
var grilleX = 10;
var grilleY = 10;
var positionInitialeX = 5;
var positionInitialeY = 5;
var orientationInitiale = 'N';
var instructions = 'DADADADAA';
var aspirateur = new Aspirateur(positionInitialeX, positionInitialeY, orientationInitiale);
aspirateur.executerInstructions(instructions);
console.log(aspirateur.getPosition());
