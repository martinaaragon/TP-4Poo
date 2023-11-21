// Definición de la clase Animal
class Animal {
        constructor(nombreParam, edadParam) {
          this.nombre = nombreParam;
          this.edad = edadParam;
        }
      
        emitirSonido() {
         document.write("Sonido genérico de animal");
        }
      }
      
      class Perro extends Animal {
        constructor(nombreParam, edadParam, razaParam) {
          super(nombreParam, edadParam);
          this.raza = razaParam;
        }
      
        emitirSonido() {
          document.write("Guau! Guau!");
        }
      }
      
  
      class Gato extends Animal {
        constructor(nombreParam, edadParam, colorParam) {
          super(nombreParam, edadParam);
          this.color = colorParam;
        }
      
        emitirSonido() {
          document.write("¡Miau! ¡Miau!");
        }
      }
      
 
      const miPerro = new Perro("Buddy", 3, "Labrador");
      
    
      const miGato = new Gato("Mittens", 2, "Gris");
      
      miPerro.emitirSonido();
      miGato.emitirSonido();

      