$('#btn-download').on('click', function()
{
  if($('#dane-programisty').length===0)
  {
  $("<div id='dane-programisty'>").appendTo('body') 
  }
  

$.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(dane)
{
$('<p>').text('Imie: ' + dane.imie).appendTo('#dane-programisty');
$('<p>').text('Naziwsko: ' +dane.nazwisko).appendTo('#dane-programisty');
$('<p>').text('Zawód: ' + dane.zawod).appendTo('#dane-programisty');
$('<p>').text('Firma: ' + dane.firma).appendTo('#dane-programisty');
});
})