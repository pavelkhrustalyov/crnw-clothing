import React from 'react';

import { HomePageContainer } from './home-page.style';
import Directory from '../../components/directory/directory.component';

const HomePage = () => {
    return (
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
    );
};

export default HomePage;
