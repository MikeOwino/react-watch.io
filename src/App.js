import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <video id="my-video" className="video-js" controls preload="auto" poster="https://res.cloudinary.com/weknow-creators/image/upload/c_scale,w_1280/v1647843623/wallhaven-83g6zy_i52wko.png" data-setup loop>
        <source src="https://res.cloudinary.com/weknow-creators/video/upload/v1647855818/1434659607842-pgv4ql-1647443114902_xvz1al.mp4" type="video/mp4" />
      </video>
  );
}

export default App;
