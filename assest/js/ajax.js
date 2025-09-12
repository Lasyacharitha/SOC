 
 
 fetch("https://jsonplaceholder.typicode.com/posts/1")
 .then(response=>response.json())
 .then(data=>console.log(data))
 .catch(error=>console.error('Error:',error));
 
console.log("Display the json data on web page")
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users =>{
    let output= "<h3>User List </h3><ul>"
    users.forEach(user =>{
        output += `<li>${user.username} -${user.emailid}</li>`
    });
    output += '</ul>';
    document.body.innerHTML += output;
    });