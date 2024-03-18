// Bienvenida
alert("Bienvenido a la tiendita de Casanova")
// Constantes
const precioCamiseta = 15000;
const precioGorra = 20000;
const precioHoodie = 60000;

// Array
const carrito = [];

// Función: Agregar productos al carrito
function agregarProductoAlCarrito(producto) {
    carrito.push(producto);
}

// Función: Eliminar productos del carrito
function eliminarProductoDelCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío. No hay productos para eliminar.");
    } else {
        let indice = prompt("Ingresa el número del producto que deseas eliminar:");
        if (isNaN(indice) || indice < 1 || indice > carrito.length) {
            alert("Por favor, ingresa un número válido.");
        } else {
            let productoEliminado = carrito.splice(indice - 1, 1);
            alert(`Has eliminado "${productoEliminado}" del carrito.`);
        }
    }
}

// Función: Mostrar carrito
function mostrarCarrito() {
    let mensaje = "Productos en tu carrito:\n";
    carrito.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto}\n`;
    });
    mensaje += `Total a pagar: $${calcularTotal()}`;
    alert(mensaje);
}

// Función: Calcular total a pagar
function calcularTotal() {
    let total = 0;
    carrito.forEach(producto => {
        switch (producto) {
            case "camiseta":
                total += precioCamiseta;
                break;
            case "gorra":
                total += precioGorra;
                break;
            case "hoodie":
                total += precioHoodie;
                break;
            default:
                break;
        }
    });
    return total;
}

// Función principal
function main() {
    let opcion;
    do {
        opcion = prompt(`Selecciona una opción:\n1. Agregar producto\n2. Eliminar producto\n3. Mostrar carrito\n4. Finalizar compra\n5. Salir`);
        
        switch (opcion) {
            case "1":
                let producto = prompt(`Selecciona un producto:\n1. Camiseta - $${precioCamiseta}\n2. Gorra - $${precioGorra}\n3. Hoodie - $${precioHoodie}`);
                switch (producto) {
                    case "1":
                        agregarProductoAlCarrito("camiseta");
                        break;
                    case "2":
                        agregarProductoAlCarrito("gorra");
                        break;
                    case "3":
                        agregarProductoAlCarrito("hoodie");
                        break;
                    default:
                        alert("Opción no válida");
                        break;
                }
                break;
            case "2":
                eliminarProductoDelCarrito();
                break;
            case "3":
                mostrarCarrito();
                break;
            case "4":
                if (carrito.length === 0) {
                    alert("El carrito está vacío. Por favor, agrega productos antes de finalizar la compra.");
                } else {
                    let confirmacion = confirm(`El precio total de su compra es $${calcularTotal()} ¿Estás seguro de finalizar la compra?`);
                    if (confirmacion) {
                        alert("¡Muchas gracias por tu compra! Pronto te llegará un correo con la información del despacho");
                        carrito = [];
                    }
                }
                break;
            case "5":
                alert("Gracias por visitarnos. ¡Hasta luego!");
                break;
            default:
                alert("Opción no válida");
                break;
        }
    } while (opcion !== "5");
}

// Iniciar programa
main();