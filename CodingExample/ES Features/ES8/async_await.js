
function fileData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data fetched successfully!");
      }, 2000);
    });
  }
  
  // Using async/await to fetch and process data

  async function processData() {
    try {
      console.log("Fetching data...");
      const result = await fileData();
      console.log(result);
      console.log("Data processing completed.");
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  processData();
  