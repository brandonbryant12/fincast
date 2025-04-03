import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Button } from '@repo/ui';
import './index.css'; // We'll create this later
// Basic route components (can be moved to separate files later)
function Home() {
    return (_jsxs("div", { children: [_jsx("h2", { children: "Home Page" }), _jsx(Button, { onClick: () => console.log('Hello World'), variant: "default", children: "Log Hello World" })] }));
}
function About() {
    return _jsx("h2", { children: "About Page" });
}
const router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(Home, {}),
    },
    {
        path: "/about",
        element: _jsx(About, {}),
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(RouterProvider, { router: router }) }));
