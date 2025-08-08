import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
      },
    ],
  },
]);
const App = () => {
  return (
    <Box>
      <RouterProvider router={router} />
      <CssBaseline />
    </Box>
  );
};
export default App;
