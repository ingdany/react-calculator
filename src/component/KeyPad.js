import React from 'react';
import './KeyPad.css'

const KeyPad = (prop) => {
    return (
        <div className= "ui segment">
           <form className="ui form">
                <div className="field">
                    <div class="ui basic buttons div-full">
                        <div class="ui basic orange button div-3Q div-margin" >CLEAR</div>
                        <div class="ui blue basic button div-1Q div-margin">/</div>                        
                    </div>
                    <div class="ui hidden divider"/>
                    <div class="ui hidden basic buttons div-full">
                        <div class="ui basic button div-1Q div-margin">7</div>
                        <div class="ui basic button div-1Q div-margin">8</div>
                        <div class="ui basic button div-1Q div-margin">9</div>
                        <div class="ui blue basic button div-1Q div-margin">X</div>
                    </div>         
                    <div class="ui hidden divider"/>           
                    <div class="ui hidden basic buttons div-full">
                        <div class="ui basic button div-1Q div-margin">4</div>
                        <div class="ui basic button div-1Q div-margin">5</div>
                        <div class="ui basic button div-1Q div-margin">6</div>
                        <div class="ui blue basic button div-1Q div-margin">-</div>
                    </div>
                    <div class="ui hidden divider"/>
                    <div class="ui hidden basic buttons div-full">
                        <div class="ui basic button div-1Q">1</div>
                        <div class="ui basic button div-1Q">2</div>
                        <div class="ui basic button div-1Q">3</div>
                        <div class="ui blue basic button div-1Q" style={{margin: "1px 1px"}}>+</div>
                    </div>
                    <div class="ui hidden divider"/>
                    <div class="ui basic buttons div-full">
                        <div class="ui basic button div-3Q">0</div>
                        <div class="ui blue basic button div-1Q" style={{margin: "1px 1px"}}>=</div>                        
                    </div>
                </div>
           </form>
        </div>     
    );
};

export default KeyPad;