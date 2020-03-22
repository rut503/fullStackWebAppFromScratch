import React, { Component } from 'react'

class RenderAllItemData extends Component{

    constructor(props){
        super(props)

        this.state = {
            items: [],
            addItems: {
                name: '',
                priority: '',
                store: '',
            },
            statusChange: {
                id: '',
                status: ''
            }
        }
    }

    componentDidMount() {
        this.getItems()
    }

    getItems = () => {
        fetch('http://localhost:4000/items')
            .then(response => response.json())
            .then(response => this.setState({items: response.data}))
            .catch(err => console.error(err))
    }

    addItem = () => {
        const { name, priority, store } = this.state.addItems
        // alert(`Item : ${name}, Priority : ${priority}, Store : ${store}`)

        if(name && priority){ // if name and priority contain values, then add them to the database.
            fetch(`http://localhost:4000/items/add?name=${name}&priority=${priority}&store=${store}`)
                .then(response => response.json())
                .then(this.getItems)
                .catch(err => console.error(err))
            
            // e.preventDefault(); // this will prevent the page from reloading when you submit the form.
        }
        else{ // if name or priority is null, don't add item to database.
            alert(`Item can't be added. Please fillin name and priority.`)
        }
    }

    handleCheckboxChange = e => {
        this.setState({
            checkbox: e.target.checked
        })
    }

    handleNameChange = e => {
        this.setState({
            addItems: {
                ...this.state.addItems,
                name: e.target.value
            }
        })
    }

    handlePriorityChange = e => {
        this.setState({
            addItems: {
                ...this.state.addItems,
                priority: e.target.value
            }
        })
    }

    handleStoreChange = e => {
        this.setState({
            addItems: {
                ...this.state.addItems,
                store: e.target.value
            }
        })
    }

    renderItems = ({ID, IName, IPriority, IStore, IStatus }) => {
        return (
            <div key={ID} >
                <input type="button" onClick={() => {
                    console.log(ID, IName, IPriority, IStore, IStatus )
                }}/>
                {IName} : {IPriority} : {IStore} : {IStatus}
            </div>
        )
    }

    render(){

        return(
            <div>

                {this.state.items.map(this.renderItems)}

                <br /><br />

                <form onSubmit={this.addItem}>
                    
                    <label>Item Name : </label>
                    <input 
                        placeholder="e.g. Apples"
                        value={this.state.addItems.name}
                        onChange={this.handleNameChange}
                    />
                    
                    <br />
                    
                    <label>Priority : </label>
                    <input 
                        placeholder="e.g. HIGH"
                        value={this.state.addItems.priority}
                        onChange={this.handlePriorityChange}
                    />
                    
                    <br />
                    
                    <label>Store Name : </label>
                    <input 
                        placeholder="e.g. Walmart"
                        value={this.state.addItems.store}
                        onChange={this.handleStoreChange}
                    />
                    
                    <br />
                    
                    <button type="submit">Add Item</button>
                    
                </form>
                
            </div>
        )
    }
}

export default RenderAllItemData