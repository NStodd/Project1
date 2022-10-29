// CONSTANTS
const QUOTE_URL = "https://api.goprogram.ai/inspiration"
const IMG_URL = "https://pixabay.com/api/"
const IMG_API_KEY = "30787297-8988965d9b3903eaa7f0d16eb"
const IMG_KEYS = [
    "nature",
]

// WORKING ELEMENTS
const motivation_object = {
    img : "",
    img_desc : "",
    quote: "",
    author: "",
}

// DOM ELEMENTS
const $BODY = $('body')
const $HEADER = $()
const $IMG_DIV = $('.img_div') //<img>
const $QUOTE_DIV = $('.quote_div')
const $BUTTON_DIV = $()
const $AUTH_DIV = $('.author_div')


// EVENT LISTENERS

// Need an event listener for the image button, will call changeImage()
$("#New_Image").on("click", (event) => {
    event.preventDefault()
    console.log("New Image")
    changeImage()
})

// Need an event listener for the quote button, will call changeQuote()
$("#New_Quote").on("click", (event) => {
    event.preventDefault()
    console.log("New Quote")
    changeQuote()
})

// Need an event listener for the both button, will call both changeImage() and changeQuote()
$("#New_Combo").on("click", (event) => {
    event.preventDefault()
    changeImage()
    changeQuote()
})

// FUNCTIONS

// ------ getJSON function, hoisted, takes a url and returns a promise object
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
function changeImage () { // <img src="pic_trulli.jpg" alt="Italian Trulli">
    // TODO: get an input word

    // get a new image search object from pixabay
    const img = getJSON(buildImgUrl(IMG_URL,IMG_API_KEY,"nature"))

    img.then((img_obj) => {
        // retrieve a random image
        const rand_pos = Math.floor(Math.random() * img_obj.hits.length)
        const new_img_url = img_obj.hits[rand_pos].largeImageURL
        
        // save relevant properties to the global motivation object
        motivation_object.img = new_img_url

        // change the image div dom element.
        $IMG_DIV.empty()
        $IMG_DIV.html(`
            <img src="${new_img_url}">`
        )
    })
}

// Need a function to change the quote.
function changeQuote () {
    const quote = getJSON(QUOTE_URL)
    quote.then((quote_obj) => {
        motivation_object.quote = quote_obj.quote
        motivation_object.author  = quote_obj.author

        $AUTH_DIV.empty()
        $AUTH_DIV.text(`-${motivation_object.author}`)

        $QUOTE_DIV.empty()
        $QUOTE_DIV.text(motivation_object.quote)
    })
} //


// EXECUTING CODE

changeImage()
changeQuote()

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

// call the image api request using getJSON and buildImgUrl
// const img_req = getJSON(buildImgUrl(IMG_URL,IMG_API_KEY,"nature"))
// const quote_req = getJSON(QUOTE_URL)

// // note to self, don't log the promise outside of the .then function.
// img_req.then(
//     function (img_obj) {

//         motivation_object.img = img_obj.hits[1].largeImageURL
//         console.log(img_obj)
//         $IMG_DIV.html("")
//         $IMG_DIV.html(`<img src=https://pixabay.com/get/gd0419d121f424787f01e999d92d363ff6b66d051d5d6b9857de0cda991100363e84fb5ba407329a51f74aa765b03fe908ee05e5b9ff878ed3e12fe701f5effac_1280.jpg`)//img_obj.hits[0].largeImageURL
//         //alert("There should be an image")

//         //WITHIN THE IMAGE REQUEST .THEN FUNCTION:
//         //   assign motivation_object.img to the appropriate url string

//         // Any other critical actions?
//     }
// )

// quote_req.then(
//     function (quote_obj) {
//         console.log(quote_obj)
//     }
// )