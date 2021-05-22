// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

import Dashboard from './Dashboard';
import authProvider from './authProvider';
import dataProvider from './dataProvider';

import polyglotI18nProvider from 'ra-i18n-polyglot';
import englishMessages from 'ra-language-english';
import hungarianMessages from 'ra-language-hungarian';

const messages = {
    hu: hungarianMessages,
    en: englishMessages,
};
const i18nProvider = polyglotI18nProvider(locale => messages[locale]);


const App = () => (
    <Admin locale="hu" i18nProvider={i18nProvider} dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource icon={UserIcon} name="users" list={UserList} />
        <Resource icon={PostIcon} name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
    </Admin>
);

export default App;