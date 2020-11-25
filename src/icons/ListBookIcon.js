import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function ListBookIcon(props) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
        <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" fill='none' stroke="#2C5282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" fill='none' stroke="#2C5282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </SvgIcon>
  );
}

export default ListBookIcon;