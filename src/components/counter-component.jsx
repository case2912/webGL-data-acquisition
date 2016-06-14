import React from 'react'
export class CounterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    onIncrement = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    onDecrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    }
    render() {
        return (
            <div>
                カウント: {this.state.count}
                回
                <br/>
                <button onClick={:: this.onIncrement}>プラス</button>
                <button onClick={:: this.onDecrement}>マイナス</button>
            </div>
        )
    }
}
