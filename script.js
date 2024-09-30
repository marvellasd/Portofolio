const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hmenu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const ham = document.querySelector('#hmenu');

document.addEventListener('click', function(e){
    if(!ham.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});


const slider = document.querySelector('.image-slider');
const arrLeft = document.querySelector('.arrow-left');
const arrRight = document.querySelector('.arrow-right');
const heading = document.querySelector('.caption h1');
const description = document.querySelector('.caption p');
const images = ["store1.jpeg", "cust1.jpg", "store2.jpg", "cust2.jpg", "store3.jpg", "cust3.jpg"];
const headings = ["Berkeley, Alameda County", "Stephanie - Regular Customer", "Brisbane, San Mateo County", "Grand Opening Sale", "Oakley, Contra Costa County", "Mike & Emily - First Customer"];
const descriptions = ["1st branch", "05-05-2019", "2nd branch", "01-08-2019", "3rd branch", "01-07-2019"];

let id = 0;

function slide(id){
    slider.style.backgroundImage = `url(images/${images[id]})`;
    slider.classList.add('image-fade');

    setTimeout(() => {
        slider.classList.remove('image-fade');
    }, 550);

    heading.innerText = headings[id];
    description.innerText = descriptions[id];
}

arrLeft.addEventListener('click', () => {
    id--;

    if(id < 0){
        id = images.length - 1;
    }
    slide(id);
})

arrRight.addEventListener('click', () => {
    id++;

    if(id > images.length - 1){
        id = 0;
    }
    slide(id);
});

// function validateForm(){
//     let name = document.getElementById("nama").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     let confirm_password = document.getElementById("confirmpassword").value;
//     let dob = document.getElementById("dates").value;
//     let check = document.getElementById("checklists").checked;

//     if(name.length < 6){
//         document.getElementById("errornama").innerHTML = "Name should contain only alphabets";
//     }else{
//         document.getElementById("errornama").innerHTML = "";
//     }

//     if(!email.endsWith("@gmail.com")){
//         document.getElementById("alertemail").innerHTML = "Name must be more than 6 words";
//     }else{
//         document.getElementById("alertemail").innerHTML = "";
//     }

//     if(password.length < 8 || !checkAlphaNum(password)){
//         document.getElementById("alertpassword").innerHTML = "Name must be more than 6 words";
//     }else{
//         document.getElementById("alertpassword").innerHTML = "";
//     }

//     if(confirm_password != password){
//         document.getElementById("alertconfirmpassword").innerHTML = "Name must be more than 6 words";
//     }else{
//         document.getElementById("alertconfirmpassword").innerHTML = "";
//     }

//     if(new Date(dob) > new Date()){
//         document.getElementById("alertdates").innerHTML = "Name must be more than 6 words";
//     }else{
//         document.getElementById("alertdates").innerHTML = "";
//     }

//     if(check == false){
//         document.getElementById("alertchecklists").innerHTML = "Name must be more than 6 words";
//     }else{
//         document.getElementById("alertchecklists").innerHTML = "";
//     }
// }

// function checkAlphaNum(str){
//     let isAlphabet = false;
//     let isNumeric = false;

//     for(let i = 0; i < str.length; i++){
//         if(isNaN(str[i]) == true){
//             isAlphabet = true;
//         }else{
//             isNumeric = true;
//         }
//     }
//     if(isAlphabet == true && isNumeric == true){
//         return true;
//     }else{
//         return false;
//     }
// }

function validation(){
    let name = document.getElementById("nama").value;
    let phones = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm_password").value;
    let dob = document.getElementById("dob").value;
    let check = document.getElementById("agreement").checked;

    if(name.length < 3){
        document.getElementById("alertnama").innerHTML = "Name should be minimum 3 characters";
    }else{
        document.getElementById("alertnama").innerHTML = "";
    }

    if(phones.length < 10){
        document.getElementById("alertphone").innerHTML = "Phone number should consists of minimum 10 digits";
    }else{
        document.getElementById("alertphone").innerHTML = "";
    }

    if(!email.endsWith("@gmail.com")){
        document.getElementById("alertemail").innerHTML = "Invalid email address";
    }else{
        document.getElementById("alertemail").innerHTML = "";
    }

    if(password.length < 10 || !checkAlphaNum(password)){
        document.getElementById("alertpassword").innerHTML = "Password should be minimum 10 characters and consists of letters and numbers";
    }else{
        document.getElementById("alertpassword").innerHTML = "";
    }

    if(confirm_password != password){
        document.getElementById("alertconfirm_password").innerHTML = "Passwords don't match";
    }else{
        document.getElementById("alertconfirm_password").innerHTML = "";
    }

    if(new Date(dob) > new Date()){
        document.getElementById("alertdob").innerHTML = "Invalid date";
    }else{
        document.getElementById("alertdob").innerHTML = "";
    }

    if(check == false){
        document.getElementById("alertagreement").innerHTML = "You must agree to the terms & conditions";
    }else{
        document.getElementById("alertagreement").innerHTML = "";
    }
}

function checkAlphaNum(str){
    let isAlphabet = false;
    let isNumeric = false;

    for(let i = 0; i < str.length; i++){
        if(isNaN(str[i]) == true){
            isAlphabet = true;
        }else{
            isNumeric = true;
        }
    }
    if(isAlphabet == true && isNumeric == true){
        return true;
    }else{
        return false;
    }
}