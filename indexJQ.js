$(document).ready(function() {
    if($.fn.cloudinary_fileupload !== undefined) {
      $("input.cloudinary-fileupload[type=file]").cloudinary_fileupload();
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
        url: server,
        success: function(){
            alert('Usuario creado con exito');
            // window.location.href = "index.html";
        },
        error: function(error){
            alert('Error')
            // window.location.href = "error.html";
        }
    });
});

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