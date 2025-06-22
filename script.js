let display = document.getElementById('inputbox');

let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);

let string = '';

buttonsArray.forEach(function(btn) {
    
    btn.addEventListener('click', function(e) {
        
        let clickedButton = e.target.innerHTML;
        
        if (clickedButton == 'DEL') {
            
            let updatedString = string.substring(0, string.length - 1);
            
            string = updatedString;
            
            display.value = string;
        
        } else if (clickedButton == 'AC') {
            
            string = '';
            
            display.value = string;
        
        } else if (clickedButton == '=') {
            
            let result = eval(string);
            
            string = result;
            
            display.value = string;
        
        } else {
            
            string = string + clickedButton;
            
            display.value = string;
        }
    });
});