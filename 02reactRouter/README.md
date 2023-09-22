# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

React Router is a powerful tool for building dynamic web applications with React. Here’s a summary of its main features and concepts123:

# Client-Side Routing: React Router enables client-side routing, which allows developers to manipulate the browser history stack without making a document request to the server3.

# Main Concepts: The core concepts behind routing as implemented in React Router include subscribing and manipulating the history stack, matching the URL to your routes, and rendering a nested UI from the route matches2.

# Components and Hooks: React Router provides various components (like BrowserRouter, HashRouter, MemoryRouter, NativeRouter, Router, StaticRouter, Route) and hooks (like useActionData, useAsyncError, useAsyncValue, useBeforeUnload, useFetcher, useFetchers, useFormAction, useHref useInRouterContext, useLinkClickHandler, useLinkPressHandler, useLoaderData, useLocation, useMatch, useMatches, useNavigate, useNavigation) for managing routing in your application1.

# History: An object that allows React Router to subscribe to changes in the URL as well as providing APIs to manipulate the browser history stack programmatically2.

# Location State: A value that persists with a location that isn’t encoded in the URL. Much like hash or search params (data encoded in the URL), but stored invisibly in the browser’s memory2.

# Components:

BrowserRouter, HashRouter, MemoryRouter, NativeRouter, Router, StaticRouter: These components allow you to choose the type of router that best suits your application’s needs1.
Route: This component allows you to define the routes for your application1.
Link, NavLink: These components allow you to create navigational links in your application1.
Navigate: This component allows you to programmatically navigate through your application1.
Outlet: This component renders the child routes of the current route1.

# Hooks:

useNavigate: This hook allows you to programmatically navigate through your application34.
useParams: This hook allows you to access the dynamic parts of the URL4.
useLocation: This hook allows you to access the current location object, which contains information about the current URL34.
useMatch, useMatches: These hooks allow you to match the current URL with a path pattern1.
useNavigation: This hook allows you to access navigation-related functions1.
