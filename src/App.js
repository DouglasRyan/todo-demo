import React from 'react';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: undefined,
            arr: [],
            nodeli: [],
            key: 0,
        }
    }

    handleSub = (e) => {
        e.preventDefault()

        this.setState({
            arr: [this.state.inputValue, ...this.state.arr],
            key: this.state.key + 1,
        })

        setTimeout(() => {
            let node1 = this.state.arr.map((i) => {
                return <li key={this.state.key}>{i}</li>
            }).shift()
            this.setState({
                nodeli: [node1, ...this.state.nodeli]
            })
        }, 1)
    }
    handleInputChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.handleSub}>
                    <input
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">AddTodo</button>
                </form>
                <ul className="ulContainer">
                    {this.state.nodeli}
                </ul>
            </div>
        );
    }
}

export default App;
