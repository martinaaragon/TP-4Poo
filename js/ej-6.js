class Libro {
        constructor(ISBNParam, tituloParam, autorParam, numPaginasParam) {
          this._ISBN = ISBNParam;
          this._titulo = tituloParam;
          this._autor = autorParam;
          this._numPaginas = numPaginasParam;
        }

        get ISBN() {
          return this._ISBN;
        }
      
        set ISBN(newISBN) {
          this._ISBN = newISBN;
        }
      
        get titulo() {
          return this._titulo;
        }
      
        set titulo(newTitulo) {
          this._titulo = newTitulo;
        }
      
        get autor() {
          return this._autor;
        }
      
        set autor(newAutor) {
          this._autor = newAutor;
        }
      
        get numPaginas() {
          return this._numPaginas;
        }
      
        set numPaginas(newNumPaginas) {
          this._numPaginas = newNumPaginas;
        }
      
        mostrarLibro() {
         document.write(`El libro ${this.titulo}${"<br>"} con ISBN ${this.ISBN}${"<br>"} creado por el autor ${this.autor}${"<br>"} tiene ${this.numPaginas} páginas.`);
        }
      }

      const libro1 = new Libro('978-3-16-148410-0', 'Cien años de soledad', 'Gabriel García Márquez', 432);
      const libro2 = new Libro('978-0-14-200067-0', '1984', 'George Orwell', 328);
      
      libro1.mostrarLibro();
      libro2.mostrarLibro();
      
      if (libro1.numPaginas > libro2.numPaginas) {
        document.write(`${libro1.titulo} tiene más páginas que ${libro2.titulo}.`);
      } else if (libro1.numPaginas < libro2.numPaginas) {
        document.write(`${libro2.titulo} tiene más páginas que ${libro1.titulo}.`);
      } else {
        document.write(`${libro1.titulo} y ${libro2.titulo} tienen la misma cantidad de páginas.`);
      }
      