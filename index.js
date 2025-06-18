// Add your code here
function submitData(name, email){
    return fetch("http://localhost:3000/users", {
       method: "POST",
       headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
       },
       body:JSON.stringify({
        name:  name,
        email: email
           })
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let newElement = document.createElement("p");
        newElement.textContent = "New id:" + data.id;
        document.body.appendChild(newElement);
    })
    .catch(function(error) {
        let errorElement =document.createElement("p");
        errorElement.textContent = "Error:" + error.message;
        document.body.appendChild(errorElement);
    });
}