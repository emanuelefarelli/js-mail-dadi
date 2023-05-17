
const myButton = document.querySelector('button');


myButton.addEventListener('click',
    function(){
        const mainBody = document.querySelector('main');
        const playerNum = Math.floor(Math.random() * 6) + 1;
        const comNum = Math.floor(Math.random() * 6) + 1;

        advPlayerNum = document.createElement('p');
        advComNum = document.createElement('p');
        advResult = document.createElement('p');

        advPlayerNum.append('Il tuo numero: ' + playerNum);
        advComNum.append('Il numero del computer: ' + comNum);

        advPlayerNum.classList.add('pt-2');
        advComNum.classList.add('pt-2');

        mainBody.append(advPlayerNum);
        mainBody.append(advComNum);

        if(playerNum > comNum){
            advResult.append('Hai vinto!');
            advResult.classList.add('text-success');
            advResult.classList.add('fs-2');
            advResult.classList.add('mt-3');
            mainBody.append(advResult);
        }else if(playerNum < comNum){
            advResult.append('Hai perso...');
            advResult.classList.add('text-danger');
            advResult.classList.add('fs-2');
            advResult.classList.add('mt-3');
            mainBody.append(advResult);
        }else{
            advResult.append('Hai pareggiato');
            advResult.classList.add('text-warning');
            advResult.classList.add('fs-2');
            advResult.classList.add('mt-3');
            mainBody.append(advResult);
        }
    }
);