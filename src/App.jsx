import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import MyWork from "./pages/MyWork";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./admin/page/Dashboard";
import AdminHome from "./admin/page/AdminHome";
import AdminLayout from "./admin/AdminLayout";
import AdminMyWork from "./admin/page/AdminMyWork";
import AdminAbout from "./admin/page/AdminAbout";
import AdminContact from "./admin/page/AdminContact";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"],
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/my-work",
        Component: MyWork,
      },
      {
        path: "/my-work/:sub",
        Component: MyWork,
      },
      {
        path: "/my-work/:sub/:id",
        Component: ProjectDetail,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
  {
    path: "/:key/dashboard",
    Component: AdminLayout,
    children: [
      {
        path: "/:key/dashboard",
        Component: Dashboard,
      },
      {
        path: "home",
        Component: AdminHome,
      },
      {
        path: "my-works",
        Component: AdminMyWork,
      },
      {
        path: "about",
        Component: AdminAbout,
      },
      {
        path: "contact",
        Component: AdminContact,
      },
    ],
  },
]);
const App = () => {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <CssBaseline />
      </ThemeProvider>
    </Box>
  );
};
export default App;
