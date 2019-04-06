var api= "https://api.giphy.com/v1/gifs/search?";
var apiKey= "api_key=04noUiG0MaUOXsL6vBbo1QK39BLQwfTU";


var availableCars = [
    'BMW',
    'Acura',
    'Ford',
    'Honda',
    'Lexus',
    'Dodger',
    'Toyota',
    'Chevrolet',
    'Nissan',
    'Fantam',
    'Ram',
    'Subaru',
    'Maserati',
    'Jeep',
    'Datsun',
    'Bugatti',
    'Ferrari',
    'Lamborghini',
    'GMC',
    'Pagani',
    'Tesla',
    'Rolls-Royce',
    'Porsche',
    'Mitsubishi'
]

function renderCarsButton() {
    $('#buttons-view').empty();

    for (var i= 0; i < availableCars.length; i++) {
        console.log(availableCars[i]);

        const button= $('<button>'); 
        button.addClass('carsBtn');
        button.attr("dataname", availableCars[i]); 
        button.text(availableCars[i]);
        $('#buttons-view').append(button);
    }

}

function setup() {

    const gif= $(this).attr('dataname');
    const queryURL= 'https://api.giphy.com/v1/gifs/search?q=' + gif + '&api_key=04noUiG0MaUOXsL6vBbo1QK39BLQwfTU' + '&limit=10';

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
        console.log(response);

        $('.Gify').empty(); 
        var results= response.data;
        console.log (results);
        const gifDiv= $('<div>');

        for (var i= 0; i < results.length; i++) {
            
            const atlRating= results[i].rating;
            console.log(atlRating);

            const displaycarsRating= $('<p>').text('Rated" ' + carsRating);
            const carsImgURL= results[i].images.downsized_large.url;
            console.log(carsImgURL);

            const carsGifImg= $('<img>').attr('src', carsImgURL);

            gifDiv.prepend(displaycarsRating);
            gifDiv.prepend(carsGifImg);
        }

        $('#carsGIFview').html(gifDiv);
    })
};
$('#find-cars').on('click', function() {
    event.preventDefault();
    var newButton= $('#cars-input').val().trim();
    availablecars.push(newButton);
    rendercarsButton();
    console.log(availablecars);
    console.log('mohsi mshi')
});




$(document).on('click', '.atlBtn', setup);

renderAtlButton();
