import React from 'react';
import ReactDOM from 'react-dom';

const ResultBar = (prop) => {
    return (
        <div className= "ui segment">
           <form className="ui form">
                <div className="field">
                    <input type="text" value={prop.result} style={{textAlignVertifical: "center", textAlign: "right", font: "Segoe UI light", fontSize: "36px"}}/>
                </div>
           </form>
        </div>     
    );
};

export default ResultBar;