window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

//const localfunctionAPI = "http://localhost:7071/api/GetResumeCounter";
const functionAPIUrl = "https://getvisitcountersinghd.azurewebsites.net/api/GetVisitCounter?code=R-RyTIkZFEtDd3ctL7IIUu9kWaplxXP5nHT-3GVG9qJjAzFuv_Nabg%3D%3D"
/* This is where the backend api (Azure function with bindings with CosmosDB) is connected with the frontend */

const getVisitCount = () => {
    let count = 30;
    fetch(functionAPIUrl)
        .then((response) => {
        return response.json();
        })
        .then((response) => {
        console.log ("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
        }).catch(function(error){
            console.log(error);
        });
    return count;
}
