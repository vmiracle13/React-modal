import React from 'react';
import Clear from 'material-ui/svg-icons/content/clear';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const DeleteBtn = (props) => {
    return(
        <FloatingActionButton
            mini={true}
            iconStyle={{fill: '#F44336', backgroundColor: "#FFCDD2"}}
            className="delete-btn"
            onClick={props.delete}>
            <Clear />
        </FloatingActionButton>
    );
};

export default DeleteBtn;
