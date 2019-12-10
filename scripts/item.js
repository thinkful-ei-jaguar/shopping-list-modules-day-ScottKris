/* eslint-disable no-undef */


//We will run the validateName function whenever 
//we create an item or update its name, to prevent items from having blank names.
let validateName = function(name) {
    if(name === '') {
      throw new TypeError ('Name must not be blank');
    }
  };
  
  let create = function(name) {
    let item = {
      id: cuid(),
      name: name,
      checked: false,
    };
    return item;
  };
  
  export default {validateName, create};
  