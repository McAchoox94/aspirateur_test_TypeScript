import * as readline from 'readline';

class Aspirateur {
  private positionX: number;
  private positionY: number;
  private orientation: string;

  constructor(x: number, y: number, orientation: string) {
    this.positionX = x;
    this.positionY = y;
    this.orientation = orientation;
  }

  private pivoterDroite(): void {
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
  }

  private pivoterGauche(): void {
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
  }

  private avancer(): void {
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
  }

  public executerInstructions(instructions: string): void {
    for (let i = 0; i < instructions.length; i++) {
      const instruction = instructions[i];
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
  }

  public getPosition(): string {
    const orientations: { [key: string]: string } = {
      N: 'Nord',
      E: 'Est',
      W: 'Ouest',
      S: 'Sud',
    };

    return `Position finale : x=${this.positionX} y=${this.positionY} orientation=${orientations[this.orientation]}`;
  }
}

const rl = readline.createInterface({
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



rl.question('Entrer la dimension de la grille (x y): ', (dimensions) => {
  const [grilleX, grilleY] = dimensions.split(' ').map(Number);

  rl.question('Entrer la position initiale de l’aspirateur (x y orientation): ', (positionInitiale) => {
    const [positionInitialeX, positionInitialeY, orientationInitiale] = positionInitiale.split(' ');

    rl.question('Entrer les instructions: ', (instructions) => {
      const aspirateur = new Aspirateur(parseInt(positionInitialeX), parseInt(positionInitialeY), orientationInitiale);
      aspirateur.executerInstructions(instructions);

      console.log(aspirateur.getPosition());

      rl.close();
    });
  });
});
