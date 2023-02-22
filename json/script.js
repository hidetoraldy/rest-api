//!JSON Stringify

// let mahasiswa = {
//     nama    : "Aldy Ramadhan",
//     NIM     : "10517082",
//     email   : "hidetoraldy@gmail.com"
// }

// console.log(JSON.stringify(mahasiswa));

//!AJAX

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if(xhr.readyState == 4 && xhr.status == 200){
//         let mahasiswa = JSON.parse(this.responseText);
//         console.log(mahasiswa);
//     }
// }

// xhr.open('GET', 'coba.json', true);
// xhr.send();

//!JQuery
$.getJSON('coba.json', function(data){
    console.log(data);
});