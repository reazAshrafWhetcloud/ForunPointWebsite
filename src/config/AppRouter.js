import { useRoutes } from "react-router-dom";
import Home from "../screens/Home";
import ContactUs from "../screens/ContactUs";
import AboutUs from "../screens/AboutUs";
import Service from "../screens/Service";
import Driver from "../screens/Driver";
import Business from "../screens/Business";
import InvestorRelation from "../screens/InvestorRelation";
import Blog from "../screens/Blog";
import FAQ from "../screens/FAQ";
import TermAndCondition from "../screens/TermAndCondition";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import { useLocation } from "react-router-dom";

const AppRouter = () => {
  const { pathname } = useLocation();

  if (!pathname.includes("/service")) {
    window.scrollTo(0, 0);
  }
  
  let element = useRoutes([
    {path: '/', element: <Home />},
    {path: 'contact-us', element: <ContactUs />},
    {path: 'about-us', element: <AboutUs />},
    {path: 'service', element: <Service />},
    {path: 'driver', element: <Driver />},
    {path: 'business', element: <Business />},
    {path: 'investor', element: <InvestorRelation />},
    {path: 'blog', element: <Blog />},
    {path: 'faq', element: <FAQ />},
    {path: 'term-and-condition', element: <TermAndCondition />},
    {path: 'privacy-policy', element: <PrivacyPolicy />},
  ]);

  return element
  
};

export default AppRouter;
