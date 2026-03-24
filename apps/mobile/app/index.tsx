import TestingPage from "@/components/TestingPage";
import LandingPage from "@/components/LandingPage";


const PageSwitcher = () => {
  const testing = true;

  return (
    <>
      {testing ? <TestingPage /> : <LandingPage />} 
    </>
  );
};

export default PageSwitcher
