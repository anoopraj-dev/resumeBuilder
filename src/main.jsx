import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from './auth/SigninPage.jsx'
import HomePage from './pages/HomePage.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import SigninPage from './auth/SigninPage.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable key')
}
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      }
    ]
  },
  {
    path: '/signin',
    element: <SigninPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} >
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
