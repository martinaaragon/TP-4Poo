class Persona {
        constructor(nombreParam, edadParam, profesionParm) {
          this.nombre = nombreParam;
          this.edad = edadParam;
          this.profesion = profesionParm;
        }
      
        saludar() {
          document.write(`Hola, soy ${this.nombre}${"<br>"} tengo ${this.edad} años ${"<br>"} soy ${this.profesion}. ¡Mucho gusto!`);
        }
      
        despedirse() {
          document.write(`Adiós, me despido.${"<br>"}`);
        }
      }
      
      // Crear dos objetos de la clase Persona con diferentes valores
      const persona1 = new Persona("Juan", 30, "Ingeniero");
      const persona2 = new Persona("María", 25, "Doctora");
      
      // Llamar a los métodos de los objetos
      persona1.saludar();
      persona2.saludar();
      
      persona1.despedirse();
      persona2.despedirse();
      