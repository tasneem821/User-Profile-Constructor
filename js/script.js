class User{
constructor(name,email,age){
    this.name = name;
    this.email = email;
    this.age = age;
}
displayUser(){
    return `hello ${this.name} your age is ${this.age} and this is your ${this.email}`

}
updateEmail(newemail){
this.email = newemail;
}
}

const UserOne = new User("tasneem","tasneemgomaa126@gmail.com",22)
const UserTwo = new User("alaa","alaa@gmail.com",18)

let answer = document.getElementById("answer")

function show(){
    answer.innerHTML+=`<div>
    <p>${UserOne.displayUser()}</p>
    <button type='submit' onclick=updateEmail('${UserOne.email}') >update email</button>
    </div>`
    answer.innerHTML+=`<div>
    <p>${UserTwo.displayUser()}</p>
    <button type='submit' onclick=updateEmail('${UserTwo.email}') >update email</button>
   </div>`
}

show()

let submit = document.getElementById("check")

function updateEmail(currentEmail){
    let newEmail = prompt("Enter new email")
    if(UserOne.email == currentEmail){
        UserOne.email = newEmail

    }
    if(UserTwo.email == currentEmail){
UserTwo.email = newEmail
    }
    alert("Email updated successfully")
    answer.innerHTML="";
    show()
}