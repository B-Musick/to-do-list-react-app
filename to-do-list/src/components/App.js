import React from 'react';
import ToDoList from './ToDoList';
import ItemInput from './ItemInput';

// Define a callback in my parent which takes the data I need in as a parameter.
// Pass that callback as a prop to the child(see above).
// Call the callback using this.props.[callback] in the child(insert your own name where it says[callback] of course), and pass in the data as the argument.
class App extends React.Component {
    // State comprises of the list of toDo items
    state = { items: [] };

    onInputSubmit = (item) => {

        // Pass this method into ItemInput component through props
        this.setState(prevState => ({
            // Need to push the item to the state array
            items: [...prevState.items, item]
        }))
    }
    render(){
        return (
            <div>
                {/* Pass in the method, which will obtain value from ItemInput and be sent back */}
                <ItemInput onSubmit={this.onInputSubmit}/>
                
                {/* Pass in the items list obtained from ItemInput */}
                <ToDoList items={this.state.items}/> 
            </div>
            
        )
    }
}

export default App;