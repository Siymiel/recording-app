import { render, RenderOptions } from "@testing-library/react";
import React, { ReactElement } from "react";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import {
  createMemoryRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import userEvent from "@testing-library/user-event";



const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <Toaster />
      {children}
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

const renderWithRouter = (
  componentsWithRoutes: ReactElement,
  {
    initialRoute = "/",
    routes = <></>,
  }: { initialRoute?: string; routes?: JSX.Element } = {}
) => {
  window.history.pushState({}, "Test page", initialRoute);

  const router = createMemoryRouter(
    createRoutesFromElements(
      <Route path={"/"} element={<Root />}>
        {routes}
      </Route>
    ),
    { initialEntries: ["/", initialRoute] }
  );

  return {
    user: userEvent.setup(),
    ...render(<Wrapper />),
  };

  function Root() {
    return (
      <div>
        {componentsWithRoutes}
        <Outlet />
      </div>
    );
  }

  function Wrapper() {
    return (
      <AllTheProviders>
        <RouterProvider router={router} />
      </AllTheProviders>
    );
  }
};


export * from "@testing-library/react";

export { customRender as render, renderWithRouter };
