import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function ListHomeIcon() {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" fill='none' stroke="#2C5282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 22V12H15V22" fill='none' stroke="#2C5282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </SvgIcon>
  );
}

export default ListHomeIcon;