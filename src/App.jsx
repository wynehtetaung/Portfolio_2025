import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
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
        Component: Home,
      },
      {
        path: "/about",
        Component: Home,
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
