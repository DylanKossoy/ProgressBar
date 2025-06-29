const startButton = document.querySelector('.start-button')
const num_percent = document.querySelectorAll('.number-container span')
const bar = document.querySelector('.bar');
const numProgress = document.querySelector('.num-progress')
const complete = document.querySelector('#complete')


let start = false;
let i = 1;
let j = 1;



startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    complete.style.display = 'none'
    num_percent.forEach(span => span.style.display = 'inline-block');


    setInterval(() => {
        if(i > 100) {
            clearInterval();
            num_percent.forEach(span => {span.style.display = 'none'});
            complete.style.display = 'block';
        } else {
            if(j == 4) {
                const span = document.createElement('span');
                span.className = 'tile';

                bar.append(span);

            
                j = 1;
                numProgress.innerHTML = `${i++}`
            } else {
                j++;
                numProgress.innerHTML = `${i++}`
            }
        }
        
    },100);
    
})





