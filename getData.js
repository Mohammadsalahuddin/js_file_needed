var tokenESP = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJsaW5raXQiLCJpYXQiOjE0ODk5NjU5OTMsImp0aSI6IjU4Y2YxM2E5MWZiNjc5NGMyMGI0NzVjYSIsInVzciI6IlNhbGFoX1VkZGluIn0.A0QwOWJECgL8A1i0nIAhRYCo8gLgcc7rHw6qCabJGs0";

var oil;


//get SPO2 data from thinger.io using fatch API
$(function SPO2(){
var url = "https://api.thinger.io/v2/users/Salah_Uddin/devices/linkit/metal";
        
fetch(url,
      {headers: {Authorization: tokenESP}})   // token changed
      .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.log('Looks like there was a problem. Status Code: ' +  
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
          oil = data.out;
          console.log(oil);
          
      });  
    }  
  )  
  .catch(function(err) {  
    console.log('Fetch Error :-S', err);  
  });
    setTimeout(SPO2, 500);  // automatically call this function after 1 sec 
});
