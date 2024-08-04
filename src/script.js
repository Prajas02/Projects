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

// https://api.unsplash.com/photos/random?query=pokemon&count=10&client_id=-k93mLy_4JNT50BDfy9GMy0U2F58LStlS2v5rLpVy1g