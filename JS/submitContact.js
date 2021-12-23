 $(document).ready(function () {
     // Variable to hold request
     var request;

     // Bind to the submit event of our form
     $("#contactform").submit(function (event) {
         // Abort any pending request
         if (request) {
             request.abort();
         }
         // setup some local variables
         var $form = $(this);
         var form = document.getElementById("contactform");


         // Let's select and cache all the fields
         var $inputs = $form.find("input, textarea, button");

         // Serialize the data in the form
         var serializedData = $form.serialize();

         // Let's disable the inputs for the duration of the Ajax request.
         // Note: we disable elements AFTER the form data has been serialized.
         // Disabled form elements will not be serialized.
         $inputs.prop("disabled", true);

         // Fire off the request to the server google app script
         request = $.ajax({
             url: "https://script.google.com/macros/s/AKfycbwb4cMkZCQKreQ95sKDD8bmBpKgcHOH0iDBUhefoPl2oM9ia-M31g4e52uQ0I0RFNZl/exec",
             type: "post",
             data: serializedData
         });

         // Callback handler that will be called on success
         request.done(function (response, textStatus, jqXHR) {
             // Log a message to the console
             /* console.log("your data is sent!");
              console.log(response);
              console.log(textStatus);
              console.log(jqXHR);*/
             document.getElementById("postal").innerHTML = "<p style=\"text-align:center; color:black;\"><br><br><br>We have received your message.<br>You will hear from us shortly.<br>Thanks for visiting us.</p>";
             $("#postal").show(50);
             form.reset();
             setTimeout(function () {
                 $("#postal").hide(50);
             }, 10000);
             //Success message
         });

         // Callback handler that will be called on failure
         request.fail(function (jqXHR, textStatus, errorThrown) {
             // Log the error to the console
             console.error(
                 "The following error occurred: "
                 + textStatus, errorThrown
             );
             document.getElementById("postal").innerHTML = "<b style=\"color:red; text-align:center\">An error has occurred. Please, check your console for the error code and report it to us.</b>";
             $("#postal").show(50);
             setTimeout(function () {
                 $("#postal").hide(50);
             }, 10000);
             //Error message
         });

         // Callback handler that will be called regardless
         // if the request failed or succeeded
         request.always(function () {
             // Reenable the inputs
             $inputs.prop("disabled", false);
         });

         // Prevent default posting of form
         event.preventDefault();
     });
 });
