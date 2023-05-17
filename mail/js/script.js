const dataBaseMail = ['marco.bianchi@gmail.com','gianluigi.rossi@gmail.com','emanuele.farelli@gmail.com','ugo.foscolo@gmail.com'];

const button = document.querySelector('input.btn');
const myMain = document.querySelector('main');

button.addEventListener('click',
    function(){
        let isRight = false;
        const mailResult = document.createElement('p');
        mailResult.classList.add('pt-4');
        mailResult.classList.add('fs-3');

        for(let i = 0;i < 4;i++){
            const userEmail = document.getElementById('user-email');
            if(userEmail.value === dataBaseMail[i]){
                isRight = true;
            }
        }
        
        if(isRight == true){
            mailResult.classList.add('text-success');
            mailResult.append('Accesso confermato!');
            myMain.append(mailResult);
        }else{
            mailResult.classList.add('text-danger');
            mailResult.append('Accesso vietato!');
            myMain.append(mailResult);
        }
    }
);