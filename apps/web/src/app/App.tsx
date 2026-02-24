import BodyFrame from '../gui/BodyFrame'
import FooterBar from '../gui/FooterBar'
import Navigation from '../gui/Navigation'

const App = () => {
  return (
    <div id="window-container" className="flex flex-col h-screen">
      <Navigation />
      <BodyFrame className="flex-1 overflow-auto" />
      <FooterBar />
    </div>
  );
};

export default App;