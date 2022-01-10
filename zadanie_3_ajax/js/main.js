/* WERSJA 1 */

$(document).ready(function () {

  
    $('#btn-getData').click(function () {


        $.get('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {

                let pId = $('<p></p>').text('Post ID: ' + data.id);
                let pUserId = $('<p></p>').text('IUserID: ' + data.userId);
                let pTitle = $('<p></p>').text('Title: ' + data.title);
                let pBody = $('<p></p>').text('Body: ' + data.body);
                let hr = $('<hr></hr>');

                let container = $('#container');

                container.append(pId);
                container.append(pUserId);
                container.append(pTitle);
                container.append(pBody);
                container.append(hr);
            })
            .fail(function(error) {
                console.error(error)
            });

    }) 
})




/* WERSJA 2 */

/* $(document).ready(function () {

  
    $('#btn-getData').click(function () {


        $.getjson('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {

                let pId = $('<p></p>').text('Post ID: ' + data.id);
                let pUserId = $('<p></p>').text('IUserID: ' + data.userId);
                let pTitle = $('<p></p>').text('Title: ' + data.title);
                let pBody = $('<p></p>').text('Body: ' + data.body);
                let hr = $('<hr></hr>');

                let container = $('#container');

                container.append(pId);
                container.append(pUserId);
                container.append(pTitle);
                container.append(pBody);
                container.append(hr);
            })
            .fail(function(error) {
                console.error(error)
            });

    }) 
}) */