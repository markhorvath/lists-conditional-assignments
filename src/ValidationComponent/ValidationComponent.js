import React from 'react';

const validationComp = (props) => {
    if(props.inputLength < 5) {
        return <p>Text too short</p>
    }
    else return <p>Text long enough</p>;
}

export default validationComp;