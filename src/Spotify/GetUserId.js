function GetUserId(){

    const accessToken = localStorage.getItem("access_token"); // Replace with your actual access token
    const url = 'https://api.spotify.com/v1/me';

    fetch(url, {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${accessToken}`
    }
    })
    .then(response => response.json())
    .then(data => {
        const userId = data.id;
        localStorage.setItem("user_id", userId);
        //console.log("User ID: " + localStorage.getItem("user_id"));
    })
    .catch(error => {
        console.log('Error fetching user data:', error);
    });

}

export default GetUserId;