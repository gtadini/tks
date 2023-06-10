document.getElementById('numberForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que el formulario se envíe

    // Obtén el valor ingresado en el campo de nombre
    var name = document.getElementById('name').value;

    // Genera un número único para la persona
    var number = generateNumber();

    // Muestra el número asignado en el elemento HTML
    document.getElementById('numberDisplay').innerHTML = '¡Hola ' + name + '! Tu número asignado es: ' + number;
});

function generateNumber() {
    // Implementa aquí la lógica para generar un número único
    // Puede ser un número aleatorio, un número secuencial, etc.
    // Por simplicidad, puedes usar la función Date.now() para obtener un número basado en la fecha y hora actual
    return Date.now();
}

