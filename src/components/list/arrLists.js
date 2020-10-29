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
    {listNumber: 1, listIcon: <ListHomeIcon viewBox="0 0 24 24" />, listName: 'View site'},
    {listNumber: 1, listIcon: <ListCreateIcon viewBox="0 0 24 24" />, listName: 'Create page'},
    {listNumber: 1, listIcon: <ListPenIcon viewBox="0 0 24 24" />, listName: 'Blog articles'},
    {listNumber: 1, listIcon: <ListImgIcon viewBox="0 0 24 24" />, listName: 'Files'},
    {listNumber: 1, listIcon: <ListUsersIcon viewBox="0 0 24 24" />, listName: 'Users'},
    {listNumber: 1, listIcon: <ListZipIcon viewBox="0 0 24 24" />, listName: 'Subscriptions'},
    {listNumber: 1, listIcon: <ListTrashIcon viewBox="0 0 24 24" />, listName: 'Archived pages'},
    {listNumber: 2, listIcon: <ListBookIcon viewBox="0 0 24 24" />, listName: 'Themes'},
    {listNumber: 2, listIcon: <ListBoxIcon viewBox="0 0 24 24" />, listName: 'Plugins'},
    {listNumber: 2, listIcon: <ListCupIcon viewBox="0 0 24 24" />, listName: 'Upgrade plans'}
]

export default arrLists;