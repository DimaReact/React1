import React from 'react';
import ListHomeIcon from '../../icons/ListHomeIcon'
import ListCreateIcon from '../../icons/ListCreateIcon'
import ListPenIcon from '../../icons/ListPenIcon'
import ListImgIcon from '../../icons/ListImgIcon'
import ListUsersIcon from '../../icons/ListUsersIcon'
import ListZipIcon from '../../icons/ListZipIcon'
import ListTrashIcon from '../../icons/ListTrashIcon'
import ListBookIcon from '../../icons/ListBookIcon'
import ListBoxIcon from '../../icons/ListBoxIcon'
import ListCupIcon from '../../icons/ListCupIcon'

const arrLists = [
    {listNumber: 1, listIcon: <ListHomeIcon />, listName: 'View site'},
    {listNumber: 1, listIcon: <ListCreateIcon />, listName: 'Create page'},
    {listNumber: 1, listIcon: <ListPenIcon />, listName: 'Blog articles'},
    {listNumber: 1, listIcon: <ListImgIcon />, listName: 'Files'},
    {listNumber: 1, listIcon: <ListUsersIcon />, listName: 'Users'},
    {listNumber: 1, listIcon: <ListZipIcon />, listName: 'Subscriptions'},
    {listNumber: 1, listIcon: <ListTrashIcon />, listName: 'Archived pages'},
    {listNumber: 2, listIcon: <ListBookIcon />, listName: 'Themes'},
    {listNumber: 2, listIcon: <ListBoxIcon />, listName: 'Plugins'},
    {listNumber: 2, listIcon: <ListCupIcon />, listName: 'Upgrade plans'}
]

export default arrLists;