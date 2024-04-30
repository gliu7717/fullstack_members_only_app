import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

import { SignInPage } from './auth'
import { CreateGroupPage,
        GroupPage,
        GroupsListPage 
} from './groups'

const routes =[
    {
        path: '/',
        Component: GroupsListPage,
        exact: true
    },
    {
        path: '/groups/:id',
        Component: GroupPage,
    },
    {
        path: '/sign-in',
        Component: SignInPage,
    },
    {
        path: '/create-group',
        Component: CreateGroupPage,
    },
]


export const MyRoutes = () => (
    <Router>
        <Routes>
        {routes.map((route, index) => (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={<route.Component />} 
            >
            </Route>
        ))}
        </Routes>
    </Router>
)