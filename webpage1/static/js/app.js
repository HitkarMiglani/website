document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('updateButton');
    const component = document.getElementById('myComponent');
  
    button.addEventListener('click', () => {
        fetch('http://localhost:3000/api/update')
            .then(response => response.json())
            .then(data => {
                component.textContent = data.newText;
            })
            .catch(error => console.error('Error:', error));
            console.log("click\n");
    });
  });