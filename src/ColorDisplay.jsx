import React from 'react';
// import "./ColorDisplay.css"

const ColorDisplay = ({ colorValue, hexValue, isDarkText }) => {
    return (
        <section
            className="colorDisplay"
            style={{
                backgroundColor: colorValue,
                color: isDarkText ? "#000" : "#FFF"
            }}
        >
            <p>{colorValue ? colorValue : "Empty Value"}</p>
            <p>{hexValue ? hexValue : null}</p>
        </section>
    )
}

ColorDisplay.defaultProps = {
    colorValue: "Empty Color Value"
}

export default ColorDisplay