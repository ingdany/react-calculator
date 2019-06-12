import React from 'react';
import ResultBar from './ResultBar';
import KeyPad from './KeyPad'
import List from './List'
import { Cipher, timingSafeEqual } from 'crypto';
import { thisExpression } from '@babel/types';

class App extends React.Component {
    state = {result: 'Hello', list: []}

    onInput = keyName => {
        if (this.state.result === "Hello") {
            this.setState({result: keyName});
        }
        else {
            if (keyName === "clear") {
                this.setState({result: ''});
            }
            else if (keyName === "=") {
                this.calculate();                
            }
            else {
                this.setState({result: this.state.result + keyName});
            }
        }
    };

    calculate = () => {
        this.setState({ result: eval(this.state.result) });        
        this.setState( state => { 
            const queue = state.list.push(<li> { this.state.result + "=" + eval(this.state.result) } </li>);
        });
    };

    render() {
        if (this.state.result == "Hello") {
            setTimeout(()=> { this.setState({result:""})}, 30000);
        }

        return (
            <div class="ui container" style={{ marginTop: '10px', width: '30%'}}>
                <ResultBar result= { this.state.result } />
                <KeyPad onInput={ this.onInput } />    
                <List list = { this.state.list } />           
            </div>
        );
    }
}

export default App;