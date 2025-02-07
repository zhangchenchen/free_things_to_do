import ReactGA from 'react-ga4';

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const initGA = () => {
  if (!GA_TRACKING_ID) {
    console.warn('Google Analytics ID is not defined');
    return;
  }
  ReactGA.initialize(GA_TRACKING_ID);
};

export const logPageView = (path: string) => {
  ReactGA.send({
    hitType: 'pageview',
    page: path
  });
};

export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label
  });
}; 