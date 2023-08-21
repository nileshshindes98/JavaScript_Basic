function fileData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let num = 6;
        if (num<=5){
            resolve("num is less than 5");
        }else{
            reject("Error: num is greater than 5");
        }
        }, 2000);
    });
  }
  
  async function processData() {
    try {
      
      const result = await fileData();
      console.log(result);
      console.log("Data processing completed.");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      console.log("This will always run, no matter what.");
    }
  }
  
  processData();
  