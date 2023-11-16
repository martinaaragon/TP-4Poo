const auto = {
        Marca: 'Peugot',
        Modelo: 'E-208',
        Color: 'Negro',
        Anio: '2022',
        encendido: false,

        encender: function(){
                this.encendido = true
        },
        apagar: function(){
                this.encendido = false;
        },
        mostarEstado: function(){
                if(this.encendido){
                        document.write(`<p>Auto encendido.</p>`)
                }else{
                        document.write(`<p>El auto se apagó. ${"<br>"}</p>`)
                }
        }
};

document.write(auto);
document.write(`<h2>El auto es de la marca: ${auto.Marca} </h2>`);
document.write(`<h2>El auto es del modelo: ${auto.Modelo} </h2>`);
document.write(`<h2>El auto es del año: ${auto.Anio} </h2>`);
document.write(`<h2>El auto es del color : ${auto.color} </h2>`);

auto.encender();
auto.mostarEstado();
auto.apagar();
auto.mostarEstado();