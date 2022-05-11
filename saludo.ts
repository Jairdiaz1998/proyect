class Persona {
    private nacimiento: number;
    private nombre: string;


    constructor(anioNacimiento: number, nombre: string) {
        this.nacimiento =anioNacimiento;
        this.nombre = nombre;

    };

    public cualEsTuNombre(): string{
    return "Mi nombre es " + this.nombre.split(" ")
    
    };

    public cualEsTuEdad(): string{
    return "Mi edad es ";
    };
    public calcularEdad(){
        let edad: number = 2022 - this.nacimiento;
        return "mi edad es " + edad + " años"
    };


    public cualEsTuGeneracion() {
        if (this.nacimiento < 1975){
            return "Soy un baby boomer"
        }
        if (this.nacimiento >= 1975 && this.nacimiento < 1999){
            return "Soy un mileneal";
        }
        if (this.nacimiento >= 1999 && this.nacimiento < 2010){
            return "Soy un Centenial";
        }
        if (this.nacimiento >=2010){
            return "Soy de la generacion z";
        }
    }
};

//terminamos la definicion de la clase persona

let fede = new Persona(2002, "Joaquin Sanchez");
console.log(fede.cualEsTuNombre());
console.log(fede.cualEsTuGeneracion());
console.log(fede.calcularEdad());