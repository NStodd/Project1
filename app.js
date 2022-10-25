// CONSTANTS
const QUOTE_URL = "https://api.goprogram.ai/inspiration"
const IMG_URL = "https://pixabay.com/api/"
const IMG_API_KEY = "30787297-8988965d9b3903eaa7f0d16eb"

// WORKING ELEMENTS
const motivation_object = {
    img : "",
    quote: "",
}

// put in variables to hold the DOM elements?


// EVENT LISTENERS

// Need an event listener for the image button, will call changeImage()

// Need an event listener for the quote button, will call changeQuote()

// Need an event listener for the both button, will call both changeImage() and changeQuote()


// FUNCTIONS

// ------ getJSON function is hoisted function that takes a url and returns a promise
function getJSON(url){
    return fetch(url).then((response) => response.json())
}

// ------ buildImgUrl: function to take in parameters and build a url to use
//                              in the image fetch command.
function buildImgUrl(base, api, term) {
    const url = base + 
            "?key=" + api +  // needs the api key request
            "&category=" + term +  // term is set to 'nature' as default >> STRETCH GOAL HERE
            "&editors_choice=true" +  // refine the search to some better images
            "&safesearch=true" +   // want to take out the NSFW stuff
            "&per_page=200"  // want to return the maximum results.
            // other potential criteria include:
                //[q] - general query; [image_type] - photo/illustration/vector
                // full list here: https://pixabay.com/api/docs/
    return url
}


// Need a function to change the image URL and paint it to the background.
function changeImage () {}


// Need a function to change the quote.
function changeQuote () {}



// EXECUTING CODE

// call the image api request using getJSON and buildImgUrl
const img_req = getJSON(buildImgUrl(IMG_URL,IMG_API_KEY,"nature"))

// note to self, don't log the promise outside of the .then function.
img_req.then(
    function (img_obj) {
        console.log(img_obj)

        //WITHIN THE IMAGE REQUEST .THEN FUNCTION:
        //   assign motivation_object.img to the appropriate url string

        // Any other critical actions?

    }
)




// Deprecated Code, for reference.

// initial request, using ajax rather than 'fetch' >>> see getJSON function
// const quote_req = $.ajax(quote_url)
// console.log(quote_req)


// call the image api request using $.ajax
// const ajax_img_req = $.ajax(buildImgUrl(IMG_URL,IMG_API_KEY,"nature"))
// console.log(ajax_img_req)
// ajax_img_req.then(
//     function (img_obj) {
//         console.log(img_obj.total)
//     }
// )