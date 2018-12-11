var g1, g2, g3, g4;
// var textData="Uddin Mohammad Salah";

window.onload = function(){
        var g1 = new JustGage({
          id: "g1",
          value: getRandomInt(0, 4),
          min: 0,
          max: 4,
          title: "EGGS",
          titleFontColor:"red",
		  labelFontColor:"red",
		  pointer: true,
          label: "Pcs" 
          
        });

        var g2 = new JustGage({
          id: "g2",
          value: getRandomInt(100, 500),
          min: 0,
          max: 500,
          title: "SALT",
		  pointer: true,
          titleFontColor:"Black",
		  labelFontColor:"Black",
          label: "Gram"
        });

        var g3 = new JustGage({
          id: "g3",
          value: getRandomInt(0, 5),
          min: 0,
          max: 1500,
          title: "Oil",
		  pointer: true,
          titleFontColor:"Green",
		  labelFontColor:"Green",
          label: "Litter"
        });
		
	


  
    
//Refresh function 
        setInterval(function() {
           // g1.refresh(getRandomInt(0, 4));
           // g1.refresh(eggs);
          // g2.refresh(getRandomInt(100, 500));
          // g2.refresh(salt);
          // g3.refresh(getRandomInt(0, 5));
          g3.refresh(oil);

        }, 500);
      };


