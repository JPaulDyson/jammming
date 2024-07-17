import loadingIcon from './loadingIcon.gif';
import './LoadingScreen.css';

function LoadingScreen(){

    function dismissMsg(e){
        const parentId = e.target.parentNode.id;
        document.getElementById(parentId).style.display = "none";
        document.getElementById("loadingScreen").style.display = "none";        
        document.getElementById("loadingIconContainer").style.display = "block";        
    }

    return(

        <div id="loadingScreen">
            <div id="loadingIconContainer">
                <img src={loadingIcon} alt="Loading" />
                <p id="savingMsg">Saving your playlist...</p>
            </div>
            <div className="loadingModal" id="saveSuccess">
                <p>Your playlist has been successfully saved to Spotify!</p>
                <button onClick={dismissMsg}>OK</button>
            </div>
            <div className="loadingModal" id="saveFail">
                <p>Sorry, there was a problem saving your playlist.</p>
                <button onClick={dismissMsg}>OK</button>
            </div>
        </div>

    );
}

export default LoadingScreen;