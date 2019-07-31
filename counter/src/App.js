import React from 'react';

class App extends React.Component {
    state = { count: 0 };
    
    render() {
        const { count } = this.state;
        const maxCount = 10;

        if (count > maxCount) {
            alert("max counter");
            this.setState({count: maxCount});
        }
        return (
            <div className="counter">
                <h3>Counter: {count}</h3>
                <button onClick={()=>this.setState({ count: count + 1})}>+</button>
                <button onClick={()=>this.setState({ count: count - 1})}>-</button>
                <button onClick={()=>this.setState({ count: 0})}>reset</button>
            </div>
        );
    }
}

export default App;