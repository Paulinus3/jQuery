/* $('#btn-download').on('click', function()
{
  $.getJSON(' https://akademia108.pl/api/ajax/get-post.php', function(dane)
{
$('<p>').text('Imie: ' + dane.imie).appendTo('#dane-programisty');
$('<p>').text('Naziwsko: ' +dane.nazwisko).appendTo('#dane-programisty');
$('<p>').text('Zawód: ' + dane.zawod).appendTo('#dane-programisty');
$('<p>').text('Firma: ' + dane.firma).appendTo('#dane-programisty');
});
}) */


let btnGetData = document.getElementById('btn-download');

/* function do pobrania danych */
const getData = () => {
    fetch('https://akademia108.pl/api/ajax/get-post.php')
    .then(res => res.json())
    .then(data => {

        let pId = document.createElement('p');
        let pUserId = document.createElement('p');
        let pTitle = document.createElement('p');
        let pBody = document.createElement('p');
        let hr = document.createElement('hr');

        pId.innerText = 'Post ID: ${data.id}';
        pUserId.innerText = 'Post UserID: ${data.userId}';
        pTitle.innerText = 'Title: ${data.title}';
        pBody.innerText = 'Body: ${data.body}';

        document.body.appendChild(pId);
        document.body.appendChild(pUserId);
        document.body.appendChild(pTitle);
        document.body.appendChild(pBody);
        document.body.appendChild(hr);
    })
    /* obsługa błędu */
    .catch(error => {
        console.log(error)
    })
}

btnGetData.addEventListener('click', getData);
