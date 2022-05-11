var Persona = /** @class */ (function () {
    function Persona(anioNacimiento, nombre) {
        this.nacimiento = anioNacimiento;
        this.nombre = nombre;
    }
    ;
    Persona.prototype.cualEsTuNombre = function () {
        return "Mi nombre es " + this.nombre.split(" ");
    };
    ;
    Persona.prototype.cualEsTuEdad = function () {
        return "Mi edad es ";
    };
    ;
    Persona.prototype.calcularEdad = function () {
        var edad = 2022 - this.nacimiento;
        return "mi edad es " + edad + " años";
    };
    ;
    Persona.prototype.cualEsTuGeneracion = function () {
        if (this.nacimiento < 1975) {
            return "Soy un baby boomer";
        }
        if (this.nacimiento >= 1975 && this.nacimiento < 1999) {
            return "Soy un mileneal";
        }
        if (this.nacimiento >= 1999 && this.nacimiento < 2010) {
            return "Soy un Centenial";
        }
        if (this.nacimiento >= 2010) {
            return "Soy de la generacion z";
        }
    };
    return Persona;
}());
;
//terminamos la definicion de la clase persona
var fede = new Persona(2002, "Joaquin Sanchez");
console.log(fede.cualEsTuNombre());
console.log(fede.cualEsTuGeneracion());
console.log(fede.calcularEdad());
