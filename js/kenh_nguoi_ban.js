window.onload = function() {
    var inputUserName = document.querySelector('.main_container_form_login_form_item_input_item_username')
    var inputPassWord = document.querySelector('.main_container_form_login_form_item_input_item_password')
    var spanUserName = document.querySelector('.main_container_form_login_form_item_warning_username')
    var spanPassWord = document.querySelector('.main_container_form_login_form_item_warning_password')

    inputUserName.onblur = function() {
        if(inputUserName.value == '') {
            spanUserName.style.opacity = '1'
            inputUserName.classList.add('red_border')
            inputUserName.style.transition = '0.3s'
            var check = inputUserName.classList.contains('red_border')
            if(check == true) {
                inputUserName.onmouseenter = function() {
                    inputUserName.classList.remove('red_border')
                    
                }
                inputUserName.onmouseleave = function() {
                    inputUserName.classList.add('red_border')
                }
            }          
        } else {
            spanUserName.style.opacity = '0'
            inputUserName.classList.remove('red_border')
            
        }
    }

    inputPassWord.onblur = function() {
        if(inputPassWord.value == '') {
            spanPassWord.style.opacity = '1'
            inputPassWord.classList.add('red_border')
            inputPassWord.style.transition = '0.3s'
            var check = inputPassWord.classList.contains('red_border')
            if(check == true) {
                inputPassWord.onmouseenter = function() {
                    inputPassWord.classList.remove('red_border')
                    
                }
                inputPassWord.onmouseleave = function() {
                    inputPassWord.classList.add('red_border')
                }
            }          
        } else {
            spanPassWord.style.opacity = '0'
            inputPassWord.classList.remove('red_border')
            
        }
    }
    

    
}