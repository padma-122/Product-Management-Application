# Product-Management-Application
A responsive Product Management Application built with React.js, featuring authentication, product CRUD operations, search and filtering, favorites, protected routes, Redux Toolkit state management, Local Storage persistence, Custom Hooks, and Tailwind CSS.
## Features

- User Sign Up and Login
- Form validation
- Protected routes
- Product listing
- Product search
- Product filtering by category
- Product details page
- CRUD operations
- Add and remove products from Favorites
- Redux Toolkit for state management
- Local Storage for data persistence
- Custom Hook for API fetching
- Skeleton loading UI
- Responsive design
- 404 Not Found page
## React Concepts Used

### React Hooks

The project uses React Hooks for managing component state and application behavior.

- `useState` – Used to manage component-level state.
- `useEffect` – Used to handle side effects such as fetching data.
- Custom Hook – Created `useFetch` to reuse API fetching logic.

### Custom Hook

A reusable custom hook called `useFetch` is implemented to handle API requests and manage:

- API data
- Loading state
- Error handling

## Authentication
The application includes separate authentication pages:

- Sign Up
- Login
- Credential validation
- Logout
- Protected routes

The `ProtectedRoute` component is used to restrict access to pages that require authentication.

## Form Validation

Form validation is implemented using reusable form components and validation rules.

## Clone the Repository  
git clone (github-repository-url/HTTPS)

## Navigate to the Project  
cd productmanagement
## Install Dependencies  
npm install
## Start the Development Server  
npm run dev
