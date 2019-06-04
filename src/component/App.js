import React from 'react';
import ResultBar from './ResultBar';
import KeyPad from './KeyPad'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: 0, result: "Hello"}
    }

    render() {
        setTimeout(()=> { this.setState({result:"0"})}, 30000);

        return (
            <div class="ui container" style={{ marginTop: '10px', width: '30%'}}>
                <ResultBar result={this.state.result}/>
                <KeyPad />               
            </div>
        );
    }
}

export default App;