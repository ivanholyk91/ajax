$(function() {
   $('#btn-submit').click(function(e) {
       e.preventDafault();
       $.ajax({
      url: "https://formspree.io/ivanholyk91@gmail.com",
      method: "POST",
    data: {
        name: $('#name').val(),
        email: $('#email').val()
    },
    dataType: "json"
       }).done(function() {
           $('form').html('<h1>Thank you!</h1>');
 
});
   }); 
});