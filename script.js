var database =[
    {
        username: "Elly",
        password: "supersecret"
    },

];

var newFeed = [
    {
        username: "Bobby",
        timeline: "So Tired from all that learning"
    },
    {
        username: "Sally",
        timeline: "Javaschript is so cool"
    },
];

var userName = prompt("What is your username?");
var Password = prompt("What is your password?");

function signIn(user, pass) {
    if (user === database[0].username &&
        pass === database[0].password) {
        console.log(newFeed);
        } else {
            alert("Sorry, wrong username and password");
        }
}
