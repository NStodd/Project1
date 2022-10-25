// Constants and variables
const QUOTE_URL = "https://api.goprogram.ai/inspiration"
const IMG_URL = "https://pixabay.com/api/?"
const IMG_API_KEY = "30787297-8988965d9b3903eaa7f0d16eb"

// Cached Elements

// EVENT LISTENERS

// FUNCTIONS

// ------ getJSON function is hoisted function that takes a url and returns a promise
function getJSON(url){
    return fetch(url).then((response) => response.json())
}

// ------ buildImgUrl: function to take in parameters and build a url to use
//                              in the image fetch command.
function buildImgUrl(base, api, term) {
    const url = base + "key=" + api + "&q=" + term
    return url
}


// EXECUTING CODE

// call the image api request using getJSON and buildImgUrl
const img_req = getJSON(buildImgUrl(IMG_URL,IMG_API_KEY,"nature"))
console.log(img_req)
img_req.then(
    function (img_obj) {
        console.log(img_obj.hits)
    }
)

// call the image api request using $.ajax
const ajax_img_req = $.ajax(buildImgUrl(IMG_URL,IMG_API_KEY,"nature"))
console.log(ajax_img_req)

// Deprecated

// initial request, using ajax rather than 'fetch' >>> see getJSON function
// const quote_req = $.ajax(quote_url)
// console.log(quote_req)