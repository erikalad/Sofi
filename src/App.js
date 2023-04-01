import './App.css';
import { Application } from '@splinetool/runtime';


function App() {
  return (
    <div className="App">
       <div id="canvas3d">
      <spline-viewer url="https://prod.spline.design/U9O6K7fXziMEU7Wu/scene.splinecode"></spline-viewer>
      <spline-viewer url="https://prod.spline.design/FVZWbQH2B6ndj9UU/scene.splinecode" events-target="global"></spline-viewer>
       </div>
    </div>
  );
}

export default App;
