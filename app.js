const quote_url = "https://api.goprogram.ai/inspiration"

const quote_req = $.ajax(quote_url)

console.log(quote_req)

const img_url = "https://pixabay.com/api/?"
const img_api_key ="30787297-8988965d9b3903eaa7f0d16eb"

function buildImgUrl(base, api, term) {
    const url = base + "key=" + api + "&q=" + term
    return url
}

const img_req = $.ajax(buildImgUrl(img_url, img_api_key, "nature"))

console.log(img_req)