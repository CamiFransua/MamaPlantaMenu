//Variables + arrays
const pasta = [
    {
        nombre: "Ñoquis",
        categoria: "sin relleno",
        precio: 13.00
    },

    {
        nombre: "Sorrentinos de champignones y queso",
        categoria: "con relleno",
        precio: 14.00
    },

    {
        nombre: "Tallarines",
        categoria: "sin relleno",
        precio: 12.00
    },

    {
        nombre: "Canelones de verdura",
        categoria: "sin relleno",
        precio: 15.00
    }
];

const salsa = [
    {
        nombre: "Roja",
        precio: 2.00
    },

    {
        nombre: "Blanca",
        precio: 3.00
    },

    {
        nombre: "Mixta",
        precio: 3.00
    },

    {
        nombre: "de Espinaca",
        precio: 4.00
    }
];

//Funcion
function tomarOrden() {
    let continuarOrdenando = true;

    //Ciclo while
    while (continuarOrdenando) {
        let totalPedido = 0;

        //Ciclo for + flecha
        for (let i = 0; i < 2; i++) {
            let opcionesPasta = prompt("¿Qué pasta desea comer? (Ñoquis, Sorrentinos de champignones y queso, Tallarines, Canelones de verdura)").toLowerCase();

            let pastaSeleccionada = pasta.find(item => item.nombre.toLowerCase() === opcionesPasta);

            if (!pastaSeleccionada) {
                alert("Lo sentimos, la pasta seleccionada no está disponible.");
                i--;
                continue;
            }

            let opcionesSalsa = prompt("¿Con qué salsa desea sus " + opcionesPasta + "? (Roja, Blanca, Mixta, de Espinaca)").toLowerCase();

            let salsaSeleccionada = salsa.find(item => item.nombre.toLowerCase() === opcionesSalsa);

            if (!salsaSeleccionada) {
                alert("Lo sentimos, la salsa seleccionada no está disponible.");
                i--;
                continue;
            }

            totalPedido += pastaSeleccionada.precio + salsaSeleccionada.precio;
        }

        alert("El total de su pedido es " + totalPedido);

        continuarOrdenando = confirm("¿Desea agregar más platos?");
    }

    alert("Su pedido está en camino. Gracias por su compra. ¡Buen provecho!");
}

tomarOrden();
