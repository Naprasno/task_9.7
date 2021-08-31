const hrefText = document.querySelector('#hrefText')

hrefText.addEventListener('click', function(event){
    let newText = prompt();
    this.textContent = newText;
    event.preventDefault();
})