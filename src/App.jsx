import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import MyWork from "./pages/MyWork";

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
        Component: MyWork,
        children: [
          {
            path: "/my-work/:id",
            Component: MyWork,
          },
        ],
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
