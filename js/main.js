const apiUrl = "http://localhost:5000/get-all-posts/"

let send = function() {

    // let request = new XMLHttpRequest();
    // let formElement = document.querySelector("form");

    // // POST to httpbin which returns the POST data as JSON
    // request.open('POST', 'https://httpbin.org/post', async = false);

    // let formData = new FormData(formElement);

    // request.send(formData);
    // console.log(request.response);
    // console.log(JSON.parse(request.response))

}

let fetchBlogPosts = function() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(function(data){
        let tableOpen = `<table>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Author</th>
                                <th>Date posted</th>
                            </tr>`;
        let tableClose = `</table>`;
        let trRow = ``;
        let trData = ``;
        let trClose = `</tr>`;
        
        for(let row in data['data']){
            let trOpen = `<tr>`;
            
            for(let col in data['data'][row]){
                trData = trData + `<td>${data['data'][row][col]}</td>`
            }
            trRow = trRow + trOpen + trData + trClose;
        }
        console.log(tableOpen + trRow + tableClose);
        document.getElementById('blogTableData').innerHTML = tableOpen + trRow + tableClose

    })
}
