const URL = "http://localhost:5000/api/todo"
async function callAPI() {

    const response = await fetch(URL).catch(err => {
        throw new Error(err);
    })

    console.log("API is working!")
    const data = await response.json()
    
    console.log(data)
}

callAPI()