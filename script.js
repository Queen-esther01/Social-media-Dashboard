<<<<<<< HEAD
const input = document.getElementById('input');
const heading = document.querySelector('.heading');
// const slider = document.querySelector('.slider');
// if(input === true){
//     console.log('input is checked')
//     slider.style.background = 'red';
// }

if(input){
    input.addEventListener('input', e => {
        const isChecked = e.target.checked;
        if(isChecked){
            heading.style.color = 'pink';
            console.log('hello')
        }
    })
}

// input.addEventListener('input', e =>{
//     const isChecked = e.target.checked;
//     if(isChecked){
//         heading.style.color = 'pink';
//         // body.classList.add('dark-theme');
//         // header.classList.add('dark-theme');
//         // one.classList.add('dark-theme');
//         // two.classList.add('dark-theme');
//         // three.classList.add('dark-theme');
//         // four.classList.add('dark-theme');

//         // for(var i =0; i < overview.length; i++){
//         //     overview[i].classList.add('dark-theme');
//         // }

//         // for(var i = 0; i < white.length; i++){
//         //     white[i].classList.add('dark');
//         // }
//     }
//     else{
//     //     body.classList.remove('dark-theme');
//     //     header.classList.remove('dark-theme');
//     //     one.classList.remove('dark-theme');
//     //     two.classList.remove('dark-theme');
//     //     three.classList.remove('dark-theme');
//     //     four.classList.remove('dark-theme');

//     //     for(var i =0; i < overview.length; i++){
//     //         overview[i].classList.remove('dark-theme');
//     //     }

//     //     for(var i = 0; i < white.length; i++){
//     //         white[i].classList.remove('dark');
//     //     }
//      }
// });
=======
Alert(`Toggle mode does not work yet, so does the cool popup I was supposed to display this message on, I'll take care of that soon, thank you for understanding &#9786;`)
>>>>>>> 7970b26c6799b7e3a5d4dbea61797c8c0542b998
