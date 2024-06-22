document.getElementById('saveButton').addEventListener('click', function() {
    // Get the values from the form
    const tweetImage = document.getElementById('tweetImage').value;
    const tweetDescription = document.getElementById('tweetDescription').value;

    // Prepare the data to be sent in the POST request
    const data = {
        tweetImage: tweetImage,
        tweetDescription: tweetDescription
    };

    // Send the POST request
    fetch('https://p2pclouds.up.railway.app/v1/learn/tweet/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert("post is saved")
        // Optionally, handle the response (e.g., display a success message)
    })
    .catch((error) => {
        console.error('Error:', error);
        // Optionally, handle the error (e.g., display an error message)
    });
// const saveTweet = async () => {
//     try {
//       const response = await fetch(
//         "https://p2pclouds.up.railway.app/v1/learn/tweet/save",
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           method: "POST",
//           body: JSON.stringify({
//             tweetImage: "random image",
//             tweetDescription: "random desc",
//           }),
//         }
//       );
//       if (response.ok) {
//         console.log("Yes Communicated With Server");
//         const res = await response.json();
//         console.log(res);
//       } else {
//         const res = await response.json();
//         console.log(res);
//         alert("Request Fails");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };
  
//   saveTweet();
});
