import "./App.css";
import LinkButton from "./component/Button/LinkButton";
import landingImage from "./assets/img/landingpage.svg";
function App() {
    return (
        <div className="container center-align">
            <div className="container-text main-text">
                Imagine If <div className="container-text-special">Snapchat</div> had events.
            </div>
            <div className="container-subtext main-subtext">
                Easily host and share events with your friends across any social media
            </div>
            <div className="homepage-image">
                <img src={landingImage} alt="landing page" />
            </div>
            <LinkButton text="🎉 Create my event" to="/create" />
        </div>
    );
}

export default App;
