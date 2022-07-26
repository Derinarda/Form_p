let userformDOM = document.querySelector("#userform")
userformDOM.addEventListener('submit' ,formHandler)
let alertdom = document.querySelector("#alert")

const alertfunction = (title ,message ,classname="warning") => `
<div class="alert alert-${classname} alert-dismissible fade show" role="alert">
        <strong>${title}</strong> ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      `


function formHandler(event){

event.preventDefault()

const User_name = document.querySelector("#username")
const Score = document.querySelector("#score")

if(User_name.value && Score.value){
addItem(User_name.value , Score.value)
User_name.value =" "
Score.value =" "
}
else{

alertdom.innerHTML = alertfunction(
    "HATA! ",
    "Eksik bilgi girdiniz!",
    "danger")
}
}


/*

<li class="list-group-item d-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                        <div class="fw-bold">Subheading</div>
                        Content for list item
                      </div>
                      <span class="badge bg-primary rounded-pill">14</span>
                    </li>
*/

let userlistdom = document.querySelector("#userlist")

function addItem(username , score){
let lidom = document.createElement('li')
lidom.innerHTML = `${username}
<span class="badge bg-primary rounded-pill">${score}</span>
 `
lidom.classList.add('list-group-item', 'd-flex', 'justify-content-between' , 'align-items-start')
userlistdom.append(lidom)


}

