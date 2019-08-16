var myVar;



/**

 * Created by Vilmantas on 2017.01.05.

 */

$.ajaxSetup({

    headers: {

        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')

    }

});



$(function()



{

    // Variable to store your files



    var files;



    // Add events



    $('input[type=file]').on('change', prepareUpload);



    var form = $('#ajax-form');

    form.on('submit', uploadFiles);



    var formAction = form.attr('action');

    var formMethod = form.attr('method');



    // Grab the files and set them to our variable



    function prepareUpload(event)

    {

        files = event.target.files;

    }



    // Catch the form submit and upload the files



    function uploadFiles(event)

    {



        event.stopPropagation(); // Stop stuff happening



        event.preventDefault(); // Totally stop stuff happening





        // START A LOADING SPINNER HERE



        // Create a formdata object and add the files



        var formSelector = document.querySelector('form');

        var data = new FormData(formSelector);





        $.ajax({



            url: formAction,



            type: formMethod,



            data: data,



            cache: false,



            dataType: 'json',



            processData: false, // Don't process the files



            contentType: false, // Set content type to false as jQuery will tell the server its a query string request



            success: function(data, textStatus, jqXHR)



            {



                if(typeof data.error === 'undefined')



                {

                    // Success so call function to process the form



                    submitForm(event, data);

                }



                else



                {

                    // Handle errors here



                    console.log('ERRORS: ' + data.error);

                }



            },



            error: function(jqXHR, textStatus, errorThrown)



            {

                // Handle errors here

                console.log('ERRORS: ' + textStatus);



                // STOP LOADING SPINNER

            }



        });



    }





    function submitForm(event, data)

    {

        // Create a jQuery object from the form



        $form = $(event.target);





        // Serialize the form data

        var formData = $form.serialize();





        // You should sterilise the file names

        $.each(data.files, function(key, value)



        {

            formData = formData + '&filenames[]=' + value;

        });



        $.ajax({



            url: formAction,



            type: formMethod,



            data: formData,



            cache: false,



            dataType: 'json',



            success: function(data, textStatus, jqXHR)



            {

                if(typeof data.error === 'undefined')



                {

                    // Success so call function to process the form

                    console.log('SUCCESS: ' + data.success);

                }

                else



                {

                    // Handle errors here

                    console.log('ERRORS: ' + data.error);

                }



            },



            error: function(jqXHR, textStatus, errorThrown)



            {

                // Handle errors here

                console.log('ERRORS: ' + textStatus);

            },



            complete: function()

            {

                // STOP LOADING SPINNER

            }



        });



    }    

});