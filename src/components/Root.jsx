import React from 'react';
import App from './App';
import NavigationBar from './NavigationBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NoMatch from './pages/NoMatch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Root() {
    const routes = [
        { path: '/', name: 'Home', Component: App, exact: true },
        { path: '/about', name: 'About', Component: About, exact: false },
        { path: '/contact', name: 'Contact', Component: Contact, exact: false },
        { path: '/blog', name: 'Blog', Component: Blog, exact: true },
        { path: '/blog/:id', name: 'BlogPost', Component: BlogPost, exact: false },
        { path: '*', name: 'No Match', Component: NoMatch, exact: false },
    ];

    return (
        <Router>
            <div className="todo-app-container">
                <NavigationBar/>
                <div className="content">
                    <Routes>
                        {routes.map(({ path, Component, exact }) => (
                            <Route key={path} path={path} exact element={<Component/>}></Route>
                        ))}

                       
                    </Routes>
                </div>
            </div>
        </Router> 
    );
}
