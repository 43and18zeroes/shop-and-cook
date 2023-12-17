export class Recipe {
    // Variablen-Deklaration;
    public name: string;
    public description: string;
    public imagePath: string;

    constructor (name:string, desc: string, imagePath: string) {
        //variable = parameter
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }

    // Der Constructor ist wie eine Funktion
    // constructor (parameter, parameter, parameter) {
    //      this.variable = parameter;
    //      this.variable = parameter;
    //      this.variable = parameter;
    // }
}