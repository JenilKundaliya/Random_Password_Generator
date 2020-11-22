console.log('This is a password generator App')
let input = document.getElementById('inp-pass')
let strong = document.getElementById('strong')
input.addEventListener('focus',function(){

strong.style.display = 'inline'
let submit = document.getElementById('submit-btn');



let randomChar = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let para = document.getElementById('para');
let randomPass = '';
for(let i=0;i<12;i++)
{
    let randomKey = Math.floor(Math.random() * randomChar.length);
    randomPass += randomChar.substring(randomKey,randomKey + 1);
}
para.innerHTML = randomPass;
})




