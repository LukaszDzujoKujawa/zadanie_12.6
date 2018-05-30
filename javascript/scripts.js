$(function() {

  var url = "https://restcountries.eu/rest/v2/name/";
  var countriesList = $('#countries');

  $('#search').on("click", searchCountries);
  $('#country-name').on("keypress", function (e) {
    if (e.which === 13) {
      searchCountries();
    }
  });

  function searchCountries() {
    let countryName = $('#country-name').val();
    if (!countryName.length) {
      countryName = 'Poland';
    }
    $.getJSON(url + countryName, showCountriesList);
  }

  function showCountriesList(resp) {
    countriesList.empty();
     if (!Array.isArray(resp) || !resp.length) {
      return;
    } 

    resp.forEach(function(item) {
      var $listItem = $('<li>').addClass('country').appendTo(countriesList);
      var $colOne = $('<div>').addClass('col-one').appendTo($listItem);
      var $colTwo = $('<div>').addClass('col-two').appendTo($listItem);
      $('<p>').text('Name').appendTo($colOne);
      $('<p>').text('Flag').appendTo($colOne);
      $('<p>').text('Population').appendTo($colOne);
      $('<p>').text('Capital').appendTo($colOne);
      $('<p>').text('Currency').appendTo($colOne);
      $('<p>').text(item.name).appendTo($colTwo);
      $('<figure>').addClass('figure-flag').appendTo($colTwo);
      $('<img>').addClass('flag').attr('src', item.flag).appendTo('.figure-flag');
      $('<p>').text(item.population).appendTo($colTwo);
      $('<p>').text(item.capital).appendTo($colTwo);
      $('<p>').text(item.currencies[0].code).appendTo($colTwo);
    });
  }
});
