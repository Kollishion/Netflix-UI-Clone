const main_form = document.querySelector(".main_form");
const user_email = document.querySelector("#email");
const FAQ_text_display = document.querySelector(".FAQ_container");
const para = document.querySelector("para");
const FAQ_buttons = document.querySelectorAll(".FAQ_container li button");
const FAQ_para = document.querySelectorAll(".FAQ_container li p");

main_form.addEventListener('submit', e =>{
    validateInput();
});

const isValidEmail = email => {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(user_email.toLowerCase()));
}
const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.emailerror');

    errorDisplay.innerText = message;
    inputControl.classList.remove('success');
}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.emailerror');
    errorDisplay.innerText = '';
    inputControl.classList.add('.success');
    inputControl.classList.remove('.emailerror');
}

const validateInput = () => {
    const emailValue = user_email.value.trim();

    if(emailValue === ''){
        setError(user_email, 'Email is required')
    }else if (!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email address');
    }else {
        setSuccess(email);
    }
}

//<i class="ri-circle-line"></i>
FAQ_buttons.forEach(function(button, index){
    button.addEventListener('click', function(){
        FAQ_para.forEach(function(paragraph, i){
            if(i === index){
                paragraph.classList.toggle('para');
            } else {
                paragraph.classList.add('para');
            }
        })
    })
})