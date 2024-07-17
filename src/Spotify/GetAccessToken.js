import GetUserId from "./GetUserId";

const clientId = '31211e09ad1a4c6b90a0b2edf32b812f'; // Insert client ID here.
const redirectUri = 'https://jammming-jpd.netlify.app/'; // Have to add this to your accepted Spotify redirect URIs on the Spotify API.
//const redirectUri = 'http://localhost:3000/'; // Have to add this to your accepted Spotify redirect URIs on the Spotify API.
//const redirectUri = 'https://pauldyson.io/jammming'; // Have to add this to your accepted Spotify redirect URIs on the Spotify API.

function GetAccessToken(){

    function spotifyLogin(){
        const scope = 'user-read-private user-read-email playlist-modify-private'; // Specify required scopes

        // Function to generate a random state string
        function generateRandomString(length) {
            // Implementation here (e.g., using Math.random())
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                result += characters.charAt(randomIndex);
            }
            return result;            
        }
    
        // Build the authorization URL
        const state = generateRandomString(16);
        localStorage.setItem('stateKey', state);
        const authUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${encodeURIComponent(clientId)}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}`;
    
        // Redirect the user to the authorization URL
        window.location.href = authUrl;        
    }

    function getAccessTokenFromUrl() {
        const hash = window.location.hash.substr(1); // Get the fragment without the #
        const params = new URLSearchParams(hash);

        return params.get('access_token');

    }

    function getExpiryFromUrl() {
        const hash = window.location.hash.substr(1); // Get the fragment without the #
        const params = new URLSearchParams(hash);

        if(params.get('expires_in')){
            const currentTime = new Date().getTime();
            const expiresInMilliseconds = params.get('expires_in') * 1000;
            const expiryTime = currentTime + expiresInMilliseconds;
            return expiryTime;
        }else{
            return false;
        }

    }

    function checkTokenExpiry(){

        const expiryTime = localStorage.getItem("access_token_expiry");
        if (expiryTime) {
            const currentTime = new Date().getTime();
            const tenMinutesInMillis = 10 * 60 * 1000; // 10 minutes in milliseconds
    
            if (expiryTime - currentTime < tenMinutesInMillis) {
                refreshToken();
            }
        }

    }

    function refreshToken(){
        // clear existing values from localStorage:
        localStorage.removeItem("access_token");
        localStorage.removeItem("access_token_expiry");
        localStorage.removeItem("user_id");
        //Send user back to login
        spotifyLogin();
    }

    //check if access token is in local storage:
    if(localStorage.getItem("access_token") === null){
        
        //no access token in local storage -- check if available in URL
        if(getAccessTokenFromUrl() && getExpiryFromUrl()){
            
            //access token is available in the URL, so set it to local storage
            localStorage.setItem("access_token", getAccessTokenFromUrl());
            localStorage.setItem("access_token_expiry", getExpiryFromUrl());
            
            //set an interval to check every 5 minutes if expiry is approaching
            setInterval(checkTokenExpiry, 5 * 60 * 1000);
            
            //clear parameters from the URL:
            window.history.replaceState({}, '', window.location.pathname);

        }else{
            //access token is not available in URL, so send user to Spotify login
            spotifyLogin();
        }

    }else{

        // console.log(localStorage.getItem("access_token"));
        // console.log(localStorage.getItem("access_token_expiry"));
        GetUserId();
    }

}

export default GetAccessToken;
