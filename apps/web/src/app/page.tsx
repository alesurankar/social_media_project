import TestingPage from "@/components/TestingPage";
import LandingPage from "@/components/LandingPage";


const PageSwitcher = () => {
  const testing = false;

  return (
    <>
      {testing ? <TestingPage /> : <LandingPage />}
    </>
  );
};

export default PageSwitcher