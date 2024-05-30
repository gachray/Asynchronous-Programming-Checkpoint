// Task 04: Awaiting Concurrent Requests:

  // Import axios library
import axios from 'axios';

const axios = require('axios');

async function concurrentRequests() {
    try {
        console.log("Making concurrent API requests...");
        
        // Make two API requests concurrently using Promise.all() and Axios
        const [response1, response2] = await Promise.all([
            axios.get('https://catfact.ninja/fact'),
            axios.get('https://catfact.ninja/breeds')
        ]);
        
        // Obtain data from the responses
        const data1 = response1.data;
        const data2 = response2.data;
        
        // Log the combined results
        console.log("Combined results:", { data1, data2 });
    } catch (error) {
        console.error("Error making concurrent API requests:", error);
    }
}

// Call the function
concurrentRequests();



// Task 01: Iterating with Async/Await:

      //Define async function
async function iterateWithAsyncAwait(array) {
      //Iterate through array

    for (let i = 0; i < array.length; i++) {
      //Create a promise that resolves after 1 second
      await new Promise(resolve => setTimeout(resolve, 1000));
      //Await for the promise to resolve before continuing iteration
      console.log(array[i]);
    }
  }

  iterateWithAsyncAwait([5, 4, 3, 2, 1]);


  // Task 02: Awaiting a Call:

  async function awaitCall() {
    try {
        // Simulate fetching data from an API; using setTimeout to mimic delay)
        const fetchData = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    // Simulated API response
                    const data = { 
                        message: "Data fetch successful",
                        content: { 
                            example: "Example data from the API" 
                        }
                    };
                    resolve(data);
                }, 1000); // 1-second delay
            });
        };
        
        console.log("Fetching data from API...");
        
        // Wait for the API response
        const responseData = await fetchData();
        
        // Log fetched data
        console.log("Data received:", responseData);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Call the awaitCall function
awaitCall();



