import { Toaster } from "sonner";
import {
  RouterProvider,
  createRouter,
  createRootRoute,
  createRoute,
  Outlet,
} from "@tanstack/react-router";
import Apply from "./pages/Apply";
import JobDetail from "./pages/JobDetail";
import Careers from "./pages/Careers";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AdminJobs from "./pages/AdminJobs";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Partner from "./pages/Partner";
import Services from "./pages/Services";
import SubmitRequirement from "./pages/SubmitRequirement";
import VendorNetwork from "./pages/VendorNetwork";
import Vendors from "./pages/Vendors";
import HireDevelopers from "./pages/HireDevelopers";

// ================= ROOT =================

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

// ================= ROUTES =================

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

const vendorsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/vendors",
  component: Vendors,
});

const submitRequirementRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/submit-requirement",
  component: SubmitRequirement,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: Admin,
});

const adminJobsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin-jobs",
  component: AdminJobs,
});

const hireDevelopersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/hire-developers-india",
  component: HireDevelopers,
});

const careersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/careers",
  component: Careers,
});

const applyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/apply",
  component: Apply,
});

// ✅ FIXED (LOWERCASE VARIABLE NAME)
const jobDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/jobs/$role",
  component: JobDetail,
});

// ================= ROUTE TREE =================

const routeTree = rootRoute.addChildren([
  homeRoute,
  servicesRoute,
  vendorRoute,
  aboutRoute,
  contactRoute,
  partnerRoute,
  vendorsRoute,
  submitRequirementRoute,
  adminRoute,
  adminJobsRoute,
  hireDevelopersRoute,
  careersRoute,
  jobDetailRoute, 
  applyRoute, // ✅ NOW MATCHES
]);

const router = createRouter({ routeTree });

// ================= TYPES =================

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// ================= APP =================

export default function App() {
  return <RouterProvider router={router} />;
}
