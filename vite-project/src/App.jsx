import "./App.css";
import Navbar from "./components/Navbar";
import clientAudiophile from "./images/client-audiophile.svg";
import clientDatabiz from "./images/client-databiz.svg";
import clientMaker from "./images/client-maker.svg";
import clientMeet from "./images/client-meet.svg";
import heroDesktop from "./images/image-hero-desktop.png";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="wrapper">
          <div className="content">
            <div className="text">
              <h1 className="title">Make remote work</h1>
              <p className="detail">
                Get your team in sync, not matter your location. Streamline
                processes, createe team rituals, and watch productivity soar.
              </p>
              <button className="btn">Learn more</button>
            </div>

            <div className="clients">
              <img src={clientDatabiz} alt="databiz" />
              <img src={clientAudiophile} alt="audiophile" />
              <img src={clientMeet} alt="meet" />
              <img src={clientMaker} alt="maker" />
            </div>
          </div>
          <div className="hero-img"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
