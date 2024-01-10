const getDataButton = document.getElementById('getDataButton');
const resultDiv = document.getElementById('result');

function fetchDataFromAPI() {
    // Replace 'https://api.example.com/data' with the actual API endpoint URL
    return fetch('http://localhost:3000/bicycles')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        return null; // Return null or handle error as needed
      });
  }
  
  // Usage:
  fetchDataFromAPI()
    .then(data => {
      if (data) {
        console.log(data); // Log the received data to the console
        resultDiv.textContent = JSON.stringify(data, null, 2);
      } else {
        // Handle the case when data retrieval fails
        resultDiv.textContent = 'Failed to fetch data.';
      }
    });

getDataButton.addEventListener('click', fetchDataFromAPI);

