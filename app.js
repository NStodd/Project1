const quote_url = "https://api.goprogram.ai/inspiration"

const quote_req = $.ajax(quote_url)

console.log(quote_req)

const img_url = "https://wallhaven.cc/help/api/v1/w/"
const img_id = "zxqkdy"

const img_req = $.ajax(img_url + img_id)

console.log(img_req)

