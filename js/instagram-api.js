// function to fetch instagram data, it can throw an error
async function fetchInstagramData(username) {
    try {
        // fetch data from instagram api
        const response = await fetch(`https://cors-anywhere.jzs.fr/https://app-sorteos.com/api/instagram/search?username=${username}`, {
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
            }
        });

        const data = await response.json();

    if (data.success) {
        const followersCount = data.data.followers_count;
        const mediaItems = data.data.media.data;

        // Calculate total likes and comments
        let totalLikes = 0;
        let totalComments = 0;
        mediaItems.forEach(item => {
            totalLikes += item.like_count;
            totalComments += item.comments_count;
        });
        
        // Calculate engagement rate
        const engagementRate = followersCount > 0 ? ((totalLikes + totalComments) / mediaItems.length / followersCount) * 100 : 0;

        return { followersCount, engagementRate };
    } else {
            throw new Error('Failed to fetch data from Instagram API');
        }
    } catch (error) {
        throw error;
    }
}

async function updateFollowersCount() {
    const username = document.querySelector('#instagram-handle').value;
    const { followersCount, engagementRate } = await fetchInstagramData(username);
    
    // hide error message
    document.querySelector('#error-message').style.display = 'none';

    // update input fields
    document.querySelector('#audience-size').value = followersCount;
    document.querySelector('#engagement-rate').value = engagementRate.toFixed(2); // Display engagement rate with 2 decimal places
    refreshOutput();
}

// Call the function to update followers count on page load
document.querySelector('#instagram-username-form').addEventListener('submit', function (evt) {
    evt.preventDefault();
    let buttonMsg = document.querySelector('#instagram-username-form button').innerHTML;

    // disable button and show loading
    document.querySelector('#instagram-username-form button').disabled = true;
    document.querySelector('#instagram-username-form button').innerHTML = 'Loading...';

    // update followers count, catch error if any, if success hide error message and enable button back
    updateFollowersCount().catch((error) => {
        // show error message
        document.querySelector('#error-message').style.display = 'block';
        document.querySelector('#error-message').innerHTML = 'Error fetching data from Instagram API : ' + error;
    }).finally(() => {
        // enable button back
        document.querySelector('#instagram-username-form button').disabled = false;
        document.querySelector('#instagram-username-form button').innerHTML = buttonMsg;
    });
})