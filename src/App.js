import React from 'react';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: undefined,
        }
    }

    handleSub = (e) => {
        e.preventDefault()
        console.log(this.state.inputValue)
    }

    handleInputChange = (e) => {
        this.setState({
            inputValue:e.target.value
        })
    }



    createLi = (i)=>{
        return <li key={"a"+{i}}>{i}</li>
    }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.handleSub}>
                    <input
                        onChange={this.handleInputChange}
                    />
                    <button type={onsubmit}>
                        AddTodo
                    </button>
                </form>

            </div>
        );
    }
}

export default App;
