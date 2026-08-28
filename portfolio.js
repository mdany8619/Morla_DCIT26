//buttons

/*const btn1 = document.getElementById('abtMEbtn');
const abtMe = document.getElementById('abtMe');
btn1.addEventListener('click',() =>{
   /*if (abtMe.style.display === 'none'){
        abtMe.style.display = 'block';
   }else {
        abtMe.style.display ='none';
    }

    portBin.style.display ='none';*/
    /*abtMe.classList.toggle('show')
    portBin.classList.remove('show')
});

const btn2 = document.getElementById('portBtn');
const portBin = document.getElementById('portBin');

btn2.addEventListener('click',() => {
   /*if (portBin.style.display === 'none'){
        portBin.style.display = 'block';
   }else {
        portBin.style.display ='none';
    }

    abtMe.style.display = 'none';*/

  /*  portBin.classList.toggle('show')
    abtMe.classList.remove('show')
});
*/

const abtLink = document.getElementsByName('About Me');
const abtMe = document.getElementById('abtMe');

abtLink.addEventListener('click',()=>{
     abtMe.classList.toggle('show')
})

