
import item from './item.js';

function findById(id) {
  find(); 
  return item;
}

function addItem(name){
  try {
    item.validateName(name);
    this.items.push(store.items(item));
  } catch(error) {
    console.log(`Cannot add item: ${error.message}`);
  }
}

//this.findById() to fetch the item and toggle its checked attribute.
function findAndToggleChecked(id) {
  this.findById();
}

function findAndUpdateName(id, newName) {
  try {
    item.validateName(name);
    findById();
  } catch(error) {
    console.log(`Cannot update name: ${error.message}`);
  }
}

function findAndDelete(id) {
    let item = findById().filter()
}


export default {
  items: [],
  hideCheckedItems: false
};


