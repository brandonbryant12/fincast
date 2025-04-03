import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'; // We'll create this later
// Basic route components (can be moved to separate files later)
function Home() {
    return _jsx("h2", { children: "Home Page" });
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
