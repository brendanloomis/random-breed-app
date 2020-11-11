function getBreedImage(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(responseJson => displayImage(responseJson));
}

function displayImage(responseJson) {
    console.log(responseJson);
    if (responseJson.code === 404) {
        handleError();
    } else {
        $('.error').addClass('hidden');
        $('.message').removeClass('hidden');
        $('.img-results').html(`<img src=${responseJson.message} class="img-results" alt="picture of dog">`);
        $('.results').removeClass('hidden');
    };
}

function handleError() {
    console.log("Sorry breed not found.");
    $('img').remove();
    $('.error').removeClass('hidden');
    $('.message').addClass('hidden');
    $('.results').removeClass('hidden');
}

function handleForm() {
    console.log("Waiting for submit.");
    $('form').submit(function(event) {
        event.preventDefault();
        let breed = $('#breed').val().split(" ").reverse().join("/").toLowerCase();
        console.log(`Generating a picture`)
        getBreedImage(breed);
    })
}

$(handleForm());