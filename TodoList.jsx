import React, { useState } from 'react';

function TodoList() {
  const [currentItem, setCurrentItem] = useState('');
  const [items, setItems] = useState([
    {
      item: 'finish this code',
      isCompleted: true
    }
  ]);

  function createNewItem(currentItem) {
    let itemsArray = [...items];
    itemsArray.push({
      item: currentItem,
      isCompleted: false
    });
    setItems(itemsArray);
  }

  function completeItem(index) {
    let itemsArray = [...items];
    itemsArray[index].isCompleted = !itemsArray[index].isCompleted;
    setItems(itemsArray);
  }

  function deleteItem(index) {
    let itemsArray = [...items];
    itemsArray.splice(index, 1);
    setItems(itemsArray);
  }

  return (
    <div className='list'>
      <input
        className='item-input'
        value={currentItem}
        onChange={event => {
          setCurrentItem(event.target.value);
        }}
        onKeyPress={event => {
          if(event.key === 'Enter') {
            createNewItem(currentItem);
            setCurrentItem('');
          }
        }}
        placeholder="Let's get this bread"
      />
      {items.map((item, index) => (
        <div key={item} className='item'>
          <div className='checkbox' onClick={() => completeItem(index)}>
            {item.isCompleted && <span>&#x2714;</span>}
          </div>
          <div className={item.isCompleted ? 'done' : ''}>
            {item.item}
          </div>
          <div className='delete' onClick={() => deleteItem(index)}>
            &#128465;
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;