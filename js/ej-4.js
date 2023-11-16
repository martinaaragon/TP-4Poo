class Producto {
        constructor(codigoParam, nombreParam, precioParam) {
          this.codigo = codigoParam;
          this.nombre = nombreParam;
          this.precio = precioParam;
        }
      
        imprimeDatos() {
          document.write(`Código: ${this.codigo} ${"<br>"} Nombre: ${this.nombre} ${"<br>"} Precio: ${this.precio}`);
        }
      }
      
      const producto1 = new Producto(1, "Producto A", 20.5);
      const producto2 = new Producto(2, "Producto B", 15.75);
      const producto3 = new Producto(3, "Producto C", 30.0);
      
      const Productos = [producto1, producto2, producto3];
      

      for (const producto of Productos) {
        producto.imprimeDatos();
      }
      