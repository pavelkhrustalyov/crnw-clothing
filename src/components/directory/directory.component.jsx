import React from 'react';
import { DirectoryContainer } from './directory.styles';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from './../../redux/directory/directory.selectors';

const Directory = ({ sections }) => (
  <DirectoryContainer>
    {
        sections.map((item) => {
            return <MenuItem key={item.id} {...item} />
        })
    }
  </DirectoryContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
