
import item from './item.js';
import shoppingList from './shopping-list.js';

let items = []; 
let hideCheckedItems = false;

function findById(id) {
  const found = items.find(element => element.id === id);
  console.log(found);
  return found;
} 


function addItem(name){
  try {
    item.validateName(name);
    const createdItem = item.create(name);
    this.items.push(createdItem);
  } catch(error) {
    console.log(`Cannot add item: ${error.message}`);
  }
}

//this.findById() to fetch the item and toggle its checked attribute.
function findAndToggleChecked(id) {
  const toToggle= this.findById(id);
  toToggle.checked = !toToggle.checked;
}

function findAndUpdateName(id, newName) {
  try {
    item.validateName(newName);
    newName = findById(id);
  } catch(error) {
    console.log(`Cannot update name: ${error.message}`);
  }
};

function findAndDelete(id) {
  console.log(`Here's the id passed in: ${id} Here's stuff.id:`);
  let indexFound;
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === id)
      items.splice(i, 1);
  }
  return indexFound;
}

const toggleCheckedFilter = function() {
  this.hideCheckedItems = !this.hideCheckedItems;
  shoppingList.render();
}

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter,
};


