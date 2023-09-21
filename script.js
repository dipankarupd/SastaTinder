var user
var uname
var age
var url





document.querySelector("#startbtn").addEventListener("click", () => {
    console.log("hi");
    document.querySelector(".home").style.display = "none"
    document.querySelector("#container").style.display = "block"
    document.querySelector("#icons").style.display = "flex"

    getUser().then(() => {
        var container = document.querySelector("#container")

        var clutter = `<img id="photo" src="${url}">
        <div id="name">
        <h1>${uname}</h1>
        <h2> ${age}</h2>
        </div>`

        container.innerHTML = clutter
        })
})

var message = ""
var notification = document.querySelector(".notification")

document.querySelector(".ri-close-fill").addEventListener("click", ()=> {

    message = "Disliked. Getting new Person"
    notification.style.display = "block"
    
    notification.innerHTML = `<p>${message}</p>`

    getUser().then(()=> {
        message = ""
        notification.style.display = "none"

        updateUser()
        }
    )

})

document.querySelector(".ri-star-fill").addEventListener("click", ()=> {

    message = "Starred the user. Check next one"
    notification.style.display = "block"
    
    notification.innerHTML = `<p>${message}</p>`

    getUser().then(()=> {
        message = ""
        notification.style.display = "none"

        updateUser()
        }
    )

})

document.querySelector(".ri-heart-fill").addEventListener("click", ()=> {

    message = "Its a match. Check a new one"
    notification.style.display = "block"
    
    notification.innerHTML = `<p>${message}</p>`

    getUser().then(()=> {
        message = ""
        notification.style.display = "none"
        updateUser()
        }
    )

})

function updateUser() {
    var container = document.querySelector("#container")

    var clutter = `<img id="photo" src="${url}">
    <div id="name">
    <h1>${uname}</h1>
    <h2> ${age}</h2>
    </div>`

    container.innerHTML = clutter
}


async function getUser() {
    let raw = await fetch(`https://randomuser.me/api/`)
    user = await raw.json()
    uname = user.results[0].name.first + " " + user.results[0].name.last
    console.log(uname);
    age = user.results[0].dob.age
    console.log(age);
    url = user.results[0].picture.large
    console.log(url);

}