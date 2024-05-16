$(document).ready(function() {
    // Datos de ejemplo de clientes
    let clientes = [
        {
            "name": "Birhan Fedez Fedez",
            "image": "imperio.jpg",
            "phone": "123-456-7890",
            "email": "birhan@gmail.com"
        },
        {
            "name": "Maria Gonzalez",
            "image": "Maria.jpg",
            "phone": "098-765-4321",
            "email": "maria@gmail.com"
        },
        {
            "name": "John Doe",
            "image": "John.jpg",
            "phone": "555-555-5555",
            "email": "john@gmail.com"
        },
        {
            "name": "Luisa Martínez",
            "image": "Luisa.jpg",
            "phone": "555-123-4567",
            "email": "luisa@gmail.com"
        },
        {
            "name": "Michael Johnson",
            "image": "Michael.jpg",
            "phone": "555-987-6543",
            "email": "michael@gmail.com"
        },
        {
            "name": "Sara Smith",
            "image": "Sara.jpg",
            "phone": "555-567-8901",
            "email": "sara@gmail.com"
        },
        {
            "name": "Ana Pérez",
            "image": "Ana.jpg",
            "phone": "555-321-9876",
            "email": "ana@gmail.com"
        },
        {
            "name": "Carlos Rodríguez",
            "image": "Carlos.jpg",
            "phone": "555-654-3210",
            "email": "carlos@gmail.com"
        },
        {
            "name": "Patricia García",
            "image": "Patricia.jpg",
            "phone": "555-789-0123",
            "email": "patricia@gmail.com"
        },
        {
            "name": "José Torres",
            "image": "José.jpg",
            "phone": "555-901-2345",
            "email": "jose@gmail.com"
        }
        
    ];

    // Iterar sobre cada cliente y agregar la tarjeta dinámicamente
    for(let i = 0; i < clientes.length; i++) {
        $("#Cartas").append(
            '<div class="Carta">' +
                '<div class="Imagen">' +
                    '<img src="' + clientes[i].image + '" class="card-image" alt="Imagen de ' + clientes[i].name + '">' +
                '</div>' +
                '<div class="Carta-texto">' +
                    '<p class="nombre">' + clientes[i].name + '</p>' +
                    '<p class="apellidos">' + clientes[i].name.split(' ').slice(1).join(' ') + '</p>' +
                    '<p class="Info">Teléfono: ' + clientes[i].phone + '<br>Email: ' + clientes[i].email + '</p>' +
                '</div>' +
            '</div>'
        );
    }

    // Función de búsqueda
    $('.boton').click(function() {
        var searchTerm = $('.Barrabus').val().toLowerCase();
        $('.nombre').each(function() {
            var text = $(this).text().toLowerCase();
            var tarjeta = $(this).closest('.Carta');
            if (text.indexOf(searchTerm) === -1) {
                tarjeta.hide();
            } else {
                tarjeta.show();
            }
        });
    });
});
