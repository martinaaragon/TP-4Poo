class Rectangulo {
        constructor(alto, ancho) {
          this.alto = alto;
          this.ancho = ancho;
        }
      
        setAlto(nuevoAlto) {
          if (nuevoAlto > 0) {
            this.alto = nuevoAlto;
            document.write(`Altura modificada a: ${nuevoAlto} ${'<br>'}`);
          } else {
            document.write(`La altura debe ser mayor que cero. ${'<br>'}`);
          }
        }
      
        setAncho(nuevoAncho) {
          if (nuevoAncho > 0) {
            this.ancho = nuevoAncho;
            document.write(`Ancho modificado a: ${nuevoAncho} ${'<br>'}`);
          } else {
            document.write(`El ancho debe ser mayor que cero.${'<br>'}`);
          }
        }
      
        mostrarPropiedades() {
          document.write(`Rectángulo - Alto: ${this.alto}, Ancho: ${this.ancho}${'<br>'}`);
        }
      
        
        calcularPerimetro() {
          return 2 * (this.alto + this.ancho);
        }
      
        calcularArea() {
          return this.alto * this.ancho;
        }
      }
      
    
      const miRectangulo = new Rectangulo(5, 8);
      
      
      miRectangulo.mostrarPropiedades();
      
   
      miRectangulo.setAlto(7);
      miRectangulo.setAncho(10);
      
      
      miRectangulo.mostrarPropiedades();
      
     
      document.write(`Perímetro: ${miRectangulo.calcularPerimetro()} ${'<br>'}`);
      document.write(`Área: ${miRectangulo.calcularArea()}`);
      