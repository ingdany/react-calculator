import React from 'react';

class List extends React.Component {
    render() {
        const list = this.props.list;  

        return (            
            <ul>
                {list}
            </ul>           
        );
    }
};

export default List;