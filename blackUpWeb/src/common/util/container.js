import React from 'react';
import commonStyles from '../css/common.css'

const Container = (props) => {
    const { containerStyle, style, children } = props;

    return (
        <div style={containerStyle} style={style}>
            <div className="Container" style={style}>
                {children}
            </div>
        </div>
    )
}
export default Container;