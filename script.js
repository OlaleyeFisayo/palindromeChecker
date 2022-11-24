const input = document.querySelector('#text');
const output = document.querySelector('#print')
const button = document.querySelector('#btn');

function validation() {
    let input2 = input.value;
    input2 = input2.toLowerCase().split('');
    let newContainer = [];
    let lowercaseChecker = /[a-z]/;
    for(let i = 0; i < input2.length; i++) {
        if(lowercaseChecker.test(input2[i])) {
            newContainer.push(input2[i]);
        }
    }
    newContainer = newContainer.join('');
    let rev = newContainer.split('').reverse().join('');
    if(input2 == "") {
        output.innerText = "Input a Word Please";
    } else if(rev === newContainer) {
        output.innerText = "This is a Palindrome";
    } else {
        output.innerText = "This isn't a Palindrome";
    }
}

button.addEventListener('click', validation);
input.addEventListener('click', function() {
    output.innerText = "";
})