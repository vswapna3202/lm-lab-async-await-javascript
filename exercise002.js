import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

const fetchData = (apiEndPoint) => {
  fetch(apiEndPoint)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
};

fetchData(jsonTypicode);

const asyncfetchData = async(apiEndPoint) => {  
  try{
    const awaitResponse = await fetch(apiEndPoint);
    const awaitJson = await awaitResponse.json();
 
    console.log(awaitJson);
  }catch(asyncError){
    console.log(`Error: ${asyncError}`);
  }
}

asyncfetchData(jsonTypicode);
