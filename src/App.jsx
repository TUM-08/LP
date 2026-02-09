import "./App.css";
import Re from "./assets/Re.jpg";
import Rlogo from "./assets/Rlogo.jpg";

export default function App() {
  return (
    <div className="landing" style={{ backgroundImage: `url(${Re})` }}>
      <div className="barra">
        <img src={Rlogo} width="150" />

        <div className="nav-links">
          <a href="#">Steam</a>
          <a href="#">Informações</a>
        </div>

        <button
          className="buy-btn-top"
          onClick={() =>
            window.open(
              "https://store.steampowered.com/agecheck/app/2050650/",
              "_blank"
            )
          }
        >
          Comprar
        </button>
      </div>
      <div className="main-content">
        <div className="video-box">
          <iframe
            src="https://www.youtube.com/watch?v=9iy6gHDKvzA"
            title="Resident Evil 4"
           
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <p className="bottom-text">
        Sobrevivência é apenas o começo. Seis anos se passaram desde o desastre biológico em Raccoon City. Leon S. Kennedy, um dos sobreviventes, segue o rastro da raptada filha do presidente até uma vila europeia isolada, onde há algo terrivelmente errado com os habitantes.      </p>
    </div>
  );
}


