
function myAxios(method, url, body = null) {
    return new Promise((resolve, reject) => {

        const xml = new XMLHttpRequest()
        xml.open(method, url);

        xml.responseType = "json"
        console.log(xml.response)
        // xml.setRequestHeader("Content-Type", "application/json")
        xml.onload = () => {
            if (xml.status >= 400) {
                reject("Fail");
            }
            else {
                resolve(xml.response)
            }
            // console.log(xml.status)
        }
        xml.onerror = () => {
            console.log(xml.response)
        }



        xml.send(JSON.stringify(body))


    })

}
const url = "https://jsonplaceholder.typicode.com/comments";

const url2 = "https://jsonplaceholder.typicode.com/posts/1/comments"

myAxios("POST", url2, {
    name: "John",
    job: "Developer"
}).then((res) => {
    console.log(res);
}).catch((error) => { })
// myAxios("GET", url)

fetch(url)
    .then((response) => {
        if (!response.ok) { throw new Error("Network response was not ok") }
        return response.json();
    })
    .then((data => {
        console.log(data);
    }))
    .catch(error => {
        console.log('There was a problem with your fetch operation: ' + error.message);
    });


