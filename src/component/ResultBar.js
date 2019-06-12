import React from 'react';

class ResultBar  extends React.Component {
    render() { 
        return (
            <div className= "ui segment">
            <form className="ui form">
                    <div className="field">                        
                        <input type="text" value ={ this.props.result }  style={{ textAlignVertifical: "center", textAlign: "right", font: "Segoe UI light", fontSize: "36px" }}/>
                    </div>
            </form>
            </div>     
        );
    }
};

export default ResultBar;