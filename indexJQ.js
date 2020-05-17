// $(document).ready(function() {
//     if($.fn.cloudinary_fileupload !== undefined) {
//       $("input.cloudinary-fileupload[type=file]").cloudinary_fileupload();
//     }
// });

$(function() {
    if($.fn.cloudinary_fileupload !== undefined) {
        $("input.cloudinary-fileupload[type=file]").cloudinary_fileupload();
        console.log($("input.cloudinary-fileupload[type=file]"))
    }
});

// $(document).ready(function() {
//     $('.cloudinary-fileupload').cloudinary_fileupload({
//       disableImageResize: false,
//       imageMaxWidth: 800,                   // 800 is an example value - no default
//       imageMaxHeight: 600,                  // 600 is an example value - no default
//       maxFileSize: 20000000,                // 20 MB is an example value - no default
//       loadImageMaxFileSize: 20000000,       // default is 10 MB
//       acceptFileTypes: /(\.|\/)(gif|jpe?g|png|bmp|ico)$/i
//     });
//   });


$('form').submit(function(event){
    // event.preventDefault();
    // alert('Enviado');
    var server = 'http://localhost:8080';
    $.post({
        url: server + "/upload",
        success: function(){
            alert('Imagen subida');
            // window.location.href = "index.html";
        },
        error: function(error){
            alert('Error al dubir la imagen')
            // window.location.href = "error.html";
        }
    });
});

// Al finalizarse de cargar el DOM:
// $(function() {
// 	// Se obtiene el id en la URL usando la función en helpers.js
// 	var idCompetencia = getQueryParam("id");
// 	// Se obtienen del backend y cargan en el DOM los detalles de la competencia
// 	var competenciasController = new CompetenciasController();
// 		competenciasController.obtenerCompetencia(idCompetencia)
// 	// Al enviarse el formulario, se debe ejecutar un PUT al servidor
// 	$("#formCompetencia").ajaxForm({url: server + '/competencias/' + idCompetencia, type: 'put', 
// 		// En caso de éxito, se redirige a index.html
// 		success: function(res) {
// 			window.location.replace("./index.html?exito=True");
// 		},
// 		// En caso de error por validación, se muestra el mensaje de error en el contenedor para tal fin
// 		error: function(response, status, xhr) {
// 			if (response.status == 422){
// 				$("#mensajeDeError").text(response.responseText);
// 			}
// 		}
// 	});
// 	// Si el usuario cancela, se redirige a index.html
// 	$(".cancelar").click(function(){
// 		window.location.replace("./index.html");
// 	});
// });


// $('#new').click(function(event){
//     event.preventDefault();
//     var server = 'http://localhost:8080';
//     var name = $('#exampleInputName1').val();
//     var email = $('#exampleInputEmail1').val();
//     var password = $('#exampleInputPassword1').val();
    

//     // si uso $.post y no hace falta especificar el metodo
//     $.ajax({
//         url: server + "/usuario/crear",
//         method: 'post',
//         data: {"nombre": name, "email": email, 'password': password},
//         success: function(){
//             alert('Usuario creado con exito');
//             window.location.href = "index.html";
//         },
//         error: function(error){
//             window.location.href = "error.html";
//         }
//     });
// });