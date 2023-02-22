export const allLetter = (input) => {
  var letters = /^[A-Za-z]+$/;
  if (input.match(letters)) {
    return true;
  } else {
    return false;
  }
};

export const ValidateEmail = (input) => {
  var validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.match(validRegex)) {
    return true;
  } else {
    return false;
  }
};

export const hasSpaces = (input) => {
    if(input.trim().length === 0){
        return true;
    }
    else{
        return false;
    }
}

export const validatePassword = (input) => {
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;
    if(input.match(lowerCaseLetters)){
        console.log('e litera mica')
        if(input.match(upperCaseLetters)){
            console.log('e litera mare');
            if(input.match(numbers)){
                console.log('are si numar da-o drq');
                return true
            }
        }else{
            return false;
        }
        
    }
    
    else if(input.match(numbers)){
        console.log('e si numar');
        return true;
    }else{
        return false;
    }

}
