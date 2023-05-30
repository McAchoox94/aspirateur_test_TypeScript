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
    return `Position finale : x=${this.positionX} y=${this.positionY} orientation=${this.orientation}`;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Dimension de la grille (x y): ', (dimensions) => {
  const [grilleX, grilleY] = dimensions.split(' ').map(Number);

  rl.question('Position initiale de l’aspirateur (x y orientation): ', (positionInitiale) => {
    const [positionInitialeX, positionInitialeY, orientationInitiale] = positionInitiale.split(' ');

    rl.question('Instructions: ', (instructions) => {
      const aspirateur = new Aspirateur(parseInt(positionInitialeX), parseInt(positionInitialeY), orientationInitiale);
      aspirateur.executerInstructions(instructions);

      console.log(aspirateur.getPosition());

      rl.close();
    });
  });
});
