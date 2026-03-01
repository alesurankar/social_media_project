import BodyFrame from '../gui/BodyFrame'
import FooterBar from '../gui/FooterBar'
import Navigation from '../gui/Navigation'

const App = () => {
  return (
    <div id="window-container" className="flex flex-col h-screen">
      {/* Top Navigation */}
      <Navigation />

      {/* Scrollable Body */}
      <BodyFrame className="flex-1 overflow-auto"/>
      
      {/* Footer */}
      <FooterBar />
    </div>
  );
};

export default App;