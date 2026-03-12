import { Toaster } from "@/components/ui/sonner";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { createRootRoute, createRoute } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Partner from "./pages/Partner";
import Services from "./pages/Services";
import VendorNetwork from "./pages/VendorNetwork";

const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: Services,
});
const vendorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/vendor-network",
  component: VendorNetwork,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});
const partnerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/partner",
  component: Partner,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  servicesRoute,
  vendorRoute,
  aboutRoute,
  contactRoute,
  partnerRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
