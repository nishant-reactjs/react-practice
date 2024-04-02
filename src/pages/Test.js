import React, { useState } from 'react'

const Test = () => {
    const [items, setItems] = useState([]);

    const handleSave = () => {
        console.log(...items);
        setItems([...items, {id: items.length, value: Math.random().toFixed(2)}]);
    }
  return (
    <div className='App'>
      <ol>
        {items.map(item => (
            <li key={item.id}>
                {item.value}
            </li>
        ))}
      </ol>
      <button onClick={handleSave} style={{float: "left"}}>Save</button>
    </div>
  )
}

export default Test
