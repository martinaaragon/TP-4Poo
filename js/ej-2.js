class Cuenta {
        constructor(titular, saldo = 0) {
          this.titular = titular;
          this.saldo = saldo;
        }
      
        ingresar(cantidad) {
          if (cantidad > 0) {
            this.saldo += cantidad;
            document.write(`Se ingresaron ${cantidad} unidades. Saldo actual: ${this.saldo} ${'<br>'}`);
          } else {
            document.write(`La cantidad ingresada debe ser mayor que cero. ${'<br>'}`);
          }
        }
      
        extraer(cantidad) {
          if (cantidad > 0 && cantidad <= this.saldo) {
            this.saldo -= cantidad;
            document.write(`Se extrajeron ${cantidad} unidades. Saldo actual: ${this.saldo} ${'<br>'}`);
          } else {
            document.write(`Cantidad inválida o saldo insuficiente.${'<br>'}`);
          }
        }
      
        informar() {
          document.write(`Titular: ${this.titular}, Saldo: ${this.saldo} ${'<br>'}`);
        }
      }
      
      
      const cuentaAlex = new Cuenta("Alex");
      
      
      cuentaAlex.informar();
      
     
      cuentaAlex.ingresar(100);
      
      
      cuentaAlex.extraer(30);
      
      
      cuentaAlex.informar();
      