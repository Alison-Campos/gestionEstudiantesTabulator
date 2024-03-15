document.addEventListener('DOMContentLoaded', function () {
    var ApiInsertarEstudiante = 'https://paginas-web-cr.com/Api/apis/InsertarEstudiantes.php';
    var createForm = document.getElementById('form');
    var modalConfirm = new bootstrap.Modal(document.getElementById('Confirmacion'));

    function showConfirmacion() {
        modalConfirm.show();
    }
    
    createForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Función para obtener el valor de un elemento por su ID
        var getValueById = (id) => document.getElementById(id).value;

        // Obtener los valores del formulario utilizando desestructuración
        var datosenviar = {
            cedula: getValueById("identificador"),
            correoelectronico: getValueById("email"),
            telefono: getValueById("telefono"),
            telefonocelular: getValueById("telefonocelular"),
            fechanacimiento: getValueById("fechaN"),
            sexo: getValueById("sexo"),
            direccion: getValueById("direccion"),
            nombre: getValueById("nombre"),
            apellidopaterno: getValueById("apellidoP"),
            apellidomaterno: getValueById("apellidoM"),
            nacionalidad: getValueById("nacionalidad"),
            idCarreras: getValueById("grupo"),
            usuario: getValueById("usuario")
        };



        // Función para manejar la respuesta de la API
        var handleApiResponse = (datos) => {
            console.log('Respuesta de la API:', datos);

            // Mostrar el modal de confirmación
            showConfirmacion();
            //retrasar el redireccionamiento
            setTimeout(function () {
                window.location.href = "listaEstudiantes.html";
            }, 2000);
        };

        // Función para manejar errores en la solicitud
        var handleApiError = (error) => {
            console.error('Error al enviar los datos a la API:', error);
        };

        // Realizar la solicitud a la API
        fetch(ApiInsertarEstudiante, {
            method: 'POST',
            body: JSON.stringify(datosenviar),
        })
            .then(response => response.json())
            .then(handleApiResponse)
            .catch(handleApiError);
    });
});