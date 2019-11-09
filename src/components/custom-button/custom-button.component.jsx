import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, signInGoogle, inverted, ...otherProps }) => {
    const invertBtn = inverted ? 'inverted' : '';
    const googleBtn = signInGoogle ? 'google-sign-in' : '';
    return (
        <button
            className={`${googleBtn} ${invertBtn} custom-button`}
            {...otherProps}>{children}</button>
    );
};
 
export default CustomButton;
