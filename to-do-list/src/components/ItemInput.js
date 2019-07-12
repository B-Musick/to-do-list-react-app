import React from 'react';


class ItemInput extends React.Component{
    // Class component since taking input
    state = {item: ''}

    onInputSubmit = () => {
        // // Dont want form to submit prematurely
        // event.preventDefault();

        // Call method coming in through props from App and pass in this data
        this.props.onSubmit(this.state.item);
    }
    // Want to pass this into the App which will then add it to the array of items
    // Need to use async/await in App
    render(){
        return(
            <div className="container">
                
                    <div className="input-group mb-3">
                        <input 
                            onChange={(e)=>this.setState({item: e.target.value})} 
                            type="text" 
                            className="form-control" 
                            placeholder="To Do Item" 
                            value={this.state.item}
                            
                        />
                        <button onClick={this.onInputSubmit} >Submit</button>
                        
                        
                        
                    </div>
               
                
            </div>

        )
        
    }
    
};

export default ItemInput;