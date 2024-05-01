import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import { NavBar } from './navigation';
import { SignInPage, LoadingPage } from './auth';


import { CreateGroupPage,
        GroupPage,
        GroupsListPage 
} from './groups'

const routes = [{
    path: '/',
    Component: GroupsListPage,
    private: true,
    exact: true,
}, {
    path: '/groups/:id',
    private: true,
    Component: GroupPage,
}, {
    path: '/sign-in',
    Component: SignInPage,
}, {
    path: '/create-group',
    private: true,
    Component: CreateGroupPage,
}];


export const MyRoutes = ({ isLoading, user }) => (
    <Router>
        <NavBar user={user}/>
        <Routes>
        {routes.map((route, index) => {

                if (isLoading) {
                    return(
                    <Route
                        path='/loadingPage'
                        element={<LoadingPage/>}
                    >
                    </Route>
                    )
                }
                var isAuth = !!user
                if(route.private && !isAuth){
                    return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        isLoading={isLoading}
                        isAuthed={!!user}
                        element={<SignInPage></SignInPage>}
                    >
                    </Route>
                    )
                }
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        isLoading={isLoading}
                        isAuthed={!!user}
                        element={<route.Component />}
                    >
                    </Route>
                );
            })}
        </Routes>
    </Router>
)