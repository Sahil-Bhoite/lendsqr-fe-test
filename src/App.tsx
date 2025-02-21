
import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./pages/Login/Login"
import './styles/pages.scss'
import Layout from "./components/Layout/Layout"
import Dashboard from "./pages/Dashboard/Dashboard"
import UserDetails from "./pages/UserDetails/UserDetails"
import { SnackbarProvider } from 'notistack';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Login />} />
        <Route path="/users" element={<Layout/>}>
          <Route index element={<Dashboard />} />
          <Route path=":id" element={<UserDetails />}/>
        </Route>
    </>
  )
)

function App() {
  return (
    <SnackbarProvider
      maxSnack={2}
      preventDuplicate
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      style={{
        borderRadius: "4px",
        fontSize: "0.875rem",
        border: "none",
        fontFamily: "Work Sans, sans-serif",
        backgroundColor: "#39CDCC",
        color: "#FBFBFB",
        boxShadow: "3px 5px 20px 0px rgba(0, 0, 0, 0.15)",
      }}
    >
      <RouterProvider router={router} />
    </SnackbarProvider>
  )
}

export default App
