import harvardArt from './data/harvardArt'
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import { Route } from 'react-router-dom';


function App() {
  return (
    <>
    <GalleryView galleries={harvardArt} />
    
      <GalleryNavigation galleries={harvardArt} />
      </>
  );
}

export default App;

