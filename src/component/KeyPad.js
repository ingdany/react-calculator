import React from 'react';
import './KeyPad.css'


class KeyPad extends React.Component {

    onInput = e => {
        this.props.onInput(e.target.name);
    };

    render() {

        return (
            <div className= "ui segment">
                
                    <div className="field">
                        <div class="ui basic buttons div-full">
                            <button name="clear" class="ui basic orange button div-3Q div-margin" onClick= { this.onInput }>CLEAR</button>
                            <button name="/" class="ui blue basic button div-1Q div-margin" onClick= { this.onInput }>/</button>                        
                        </div>   
                        <div class="ui hidden divider"/>
                        <div class="ui hidden basic buttons div-full">
                            <button name="7" class="ui basic button div-1Q div-margin" onClick= { this.onInput }>7</button>
                            <button name= "8" class="ui basic button div-1Q div-margin" onClick= { this.onInput }>8</button>
                            <button name= "9" class="ui basic button div-1Q div-margin" onClick= { this.onInput }>9</button>
                            <button name= "*" class="ui blue basic button div-1Q div-margin" onClick= { this.onInput }>X</button>
                        </div>         
                        <div class="ui hidden divider"/>           
                        <div class="ui hidden basic buttons div-full">
                            <button name="4" class="ui basic button div-1Q div-margin" onClick= { this.onInput }>4</button>
                            <button name="5" class="ui basic button div-1Q div-margin" onClick= { this.onInput }>5</button>
                            <button name="6" class="ui basic button div-1Q div-margin" onClick= { this.onInput }>6</button>
                            <button name="-" class="ui blue basic button div-1Q div-margin" onClick= { this.onInput }>-</button>
                        </div>
                        <div class="ui hidden divider"/>
                        <div class="ui hidden basic buttons div-full">
                            <button name="1" class="ui basic button div-1Q" onClick= { this.onInput }>1</button>
                            <button name="2" class="ui basic button div-1Q" onClick= { this.onInput }>2</button>
                            <button name="3" class="ui basic button div-1Q" onClick= { this.onInput }>3</button>
                            <button name="+" class="ui blue basic button div-1Q" style={{margin: "1px 1px"}} onClick= { this.onInput }>+</button>
                        </div>
                        <div class="ui hidden divider"/>
                        <div class="ui basic buttons div-full">
                            <button name="0" class="ui basic button div-3Q" onClick= { this.onInput }>0</button>
                            <button name="=" class="ui blue basic button div-1Q" style={{margin: "1px 1px"}} onClick= { this.onInput }>=</button>                        
                        </div>        
                    </div>        
                
            </div>
        );
    }
};

export default KeyPad;