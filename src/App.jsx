import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import MyWork from "./pages/MyWork";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";

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
