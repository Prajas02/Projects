import accessKey from "./data"
const api_url = `https://api.unsplash.com/search/photos/?client_id=${accessKey}?page=1&query=`

// get the user typed value
document.addEventListener('DOMContentLoaded',()=>{
    const searchicon = document.getElementById('search-icon')
    
    searchicon.addEventListener('click' , ()=>{
        const search_value = document.getElementById('searchbox').value
        const response = fetch(api_url+search_value)
        const data = response.json()
        console.log(data)
    })
    
})
