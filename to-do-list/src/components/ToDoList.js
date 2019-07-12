import React from 'react';
import Item from './Item';

const ToDoList = (props) => {
    // Just needs to be a functional component

    let items = props.items.map((item, index)=>{
        // Get error if dont have key index
        return <Item listItem={item} key={index}/>
    })
    // return <div>{listItems}</div>
    console.log(props.items)
    return (
        <div>
            {items}
        </div>


    )

   
    
    
}
export default ToDoList;