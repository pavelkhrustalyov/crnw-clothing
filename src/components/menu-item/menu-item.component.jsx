import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, linkUrl, size, history, match }) => {
    const cls = size ? `menu-item ${size}` : 'menu-item';
    return (
        <div className={cls} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div
                style={{backgroundImage: `url(${imageUrl})`}}
                className="background-image">
            </div>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    );
};

export default withRouter(MenuItem);
