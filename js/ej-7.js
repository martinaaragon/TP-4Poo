class Contacto {
        constructor(nombreParam, telefonoParam) {
          this.nombre = nombreParam;
          this.telefono = telefonoParam;
        }
      
        equals(otroContacto) {
          return this.nombre === otroContacto.nombre;
        }
      }
      
      class Agenda {
        constructor(tamano = 10) {
          this.tamano = tamano;
          this.contactos = [];
        }
      
        aniadirContacto(contacto) {
          if (!this.agendaLlena() && !this.existeContacto(contacto)) {
            this.contactos.push(contacto);
            document.write(`Contacto ${contacto.nombre} añadido a la agenda.`);
          } else {
            document.write("La agenda está llena o el contacto ya existe.");
          }
        }
      
        existeContacto(contacto) {
          return this.contactos.some(c => c.equals(contacto));
        }
      
        listarContactos() {
          document.write("Lista de contactos:");
          this.contactos.forEach(contacto => console.log(`${contacto.nombre}: ${contacto.telefono}`));
        }
      
        buscarContacto(nombre) {
          const contactoEncontrado = this.contactos.find(contacto => contacto.nombre === nombre);
          if (contactoEncontrado) {
            document.write(`Teléfono de ${nombre}: ${contactoEncontrado.telefono}`);
          } else {
            document.write(`No se encontró ningún contacto con el nombre ${nombre}.`);
          }
        }
      
        eliminarContacto(contacto) {
          const indice = this.contactos.findIndex(c => c.equals(contacto));
          if (indice !== -1) {
            this.contactos.splice(indice, 1);
            console.log(`Contacto ${contacto.nombre} eliminado de la agenda.`);
          } else {
            console.log(`No se encontró ningún contacto con el nombre ${contacto.nombre}.`);
          }
        }
      
        agendaLlena() {
          return this.contactos.length === this.tamano;
        }
      
        huecosLibres() {
          return this.tamano - this.contactos.length;
        }
      }
      
      function mostrarMenu() {
        const agenda = new Agenda();
      
        while (true) {
          const opcion = prompt(
            "Seleccione una opción:\n1. Añadir contacto\n2. Buscar contacto\n3. Eliminar contacto\n4. Listar contactos\n5. Huecos libres\n6. Salir"
          );
      
          switch (opcion) {
            case "1":
              const nombre = prompt("Ingrese el nombre del contacto:");
              const telefono = prompt("Ingrese el teléfono del contacto:");
              const nuevoContacto = new Contacto(nombre, telefono);
              agenda.aniadirContacto(nuevoContacto);
              break;
      
            case "2":
              const nombreBuscar = prompt("Ingrese el nombre del contacto a buscar:");
              agenda.buscarContacto(nombreBuscar);
              break;
      
            case "3":
              const nombreEliminar = prompt("Ingrese el nombre del contacto a eliminar:");
              const contactoEliminar = new Contacto(nombreEliminar, "");
              agenda.eliminarContacto(contactoEliminar);
              break;
      
            case "4":
              agenda.listarContactos();
              break;
      
            case "5":
              document.write(`Huecos libres en la agenda: ${agenda.huecosLibres()}`);
              break;
      
            case "6":
              document.write("Saliendo del programa.");
              return;
      
            default:
              document.write("Opción no válida. Inténtelo de nuevo.");
          }
        }
      }
      

      mostrarMenu();
      