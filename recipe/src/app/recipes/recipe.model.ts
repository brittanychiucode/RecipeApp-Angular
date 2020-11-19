export class Recipe {
    // Properties (can access outside this class)
    public name: string;
    public description: string;
    public imagePath: string; //url

    constructor(newName: string, newDesc: string, newImg: string) {
        this.name = newName;
        this.description = newDesc;
        this.imagePath = newImg;
    }

}