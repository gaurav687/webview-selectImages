import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ImageUploadPreviewComponent from './ImageUploadPreviewComponent'

function App() {
  return (
    <div className="App">
      <ImageUploadPreviewComponent/>
      {/* <MultipleImageUploadComponent /> */}
    </div>
  );
}

export default App;
