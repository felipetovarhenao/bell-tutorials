import { useEffect } from "react";
import ReactGA from "react-ga4";
import { useLocation } from "react-router";

const trackPageView = (path: string) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return null;
};

export default AnalyticsTracker;
