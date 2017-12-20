$("#category-link").on("click", function() {
    
     var queryCategory = "https://cors-anywhere.herokuapp.com/https://ohana-api-demo.herokuapp.com/api/categories";
     
      $.ajax({
        url: queryCategory,
        method: "GET"
      })
      .done(function(response) {
        console.log(response);
      });
        
    });


    $(".emergency-link").on("click", function() {
     var queryEmergency = "https://ohana-api-demo.herokuapp.com/api/search?keyword=emergency";
     
      $.ajax({
        url: queryEmergency,
        method: "GET"
      })
      .done(function(response) {
        console.log(response);
        
        var feedDiv = $('<div>')
          
          for (var i = 1; i < response.length; i++) {
            //get Name of Org
            var orgP = $('<h3>').text(response[i].organization.name);

            //get description
            var descP = $('<p>').text(response[i].organization.description);


            ///get address
            var address= response[i].address;
           
            var address1 = address.address_1;
            var city = address.city;
            var zip = address.postal_code;
            var state = address.state_province;

            var addP = $('<p>').text("Address: "+ address1+ ", "+ city + ","+ state+ " "+ zip);
           
           // get coordinates
           var latP= $('<p>').text("lattitude: "+ response[i].latitude);
            var longP= $('<p>').text("longitude: "+ response[i].longitude)

            //get phone number
            
            var phoneP=$('<p>').text("Contact#: "+ "Unavailable");

            response[i].phones.forEach(function(e) {
                if(e.number_type==="voice")
                {
                    phoneP=$('<p>').text("Contact#: "+ e.number);
                }
            
            });
            feedDiv.append(orgP);
            feedDiv.append(descP);
            feedDiv.append(addP);
            feedDiv.append(phoneP);
            feedDiv.append(latP);
            feedDiv.append(longP);
            feedDiv.append("---------------------------")

            $("#showResult").html(feedDiv);

        }

      
      });
    });


    $(".food-link").on("click", function() {
     var queryFood = "https://ohana-api-demo.herokuapp.com/api/search?keyword=food";
    
      $.ajax({
        url: queryFood,
        method: "GET"
      })

      
      .done(function(response) {

        console.log(response);
        
       
        var feedDiv = $('<div>')
          
          for (var i = 0; i < response.length; i++) {
            //get Name of Org
            var orgP = $('<h3>').text(response[i].organization.name);

            //get description
            var descP = $('<p>').text(response[i].organization.description);


            ///get address
            var address= response[i].address;
           
            var address1 = address.address_1;
            var city = address.city;
            var zip = address.postal_code;
            var state = address.state_province;

            var addP = $('<p>').text("Address: "+ address1+ ", "+ city + ","+ state+ " "+ zip);
           
           // get coordinates
           var latP= $('<p>').text("lattitude: "+ response[i].latitude);
            var longP= $('<p>').text("longitude: "+ response[i].longitude)

            //get phone number
            
            var phoneP=$('<p>').text("Contact#: "+ "Unavailable");

            response[i].phones.forEach(function(e) {
                if(e.number_type==="voice")
                {
                    phoneP=$('<p>').text("Contact#: "+ e.number);
                }
            
            });

            
            feedDiv.append(orgP);
            feedDiv.append(descP);
            feedDiv.append(addP);
            feedDiv.append(phoneP);
            feedDiv.append(latP);
            feedDiv.append(longP);
            feedDiv.append("---------------------------")

            $("#showResult").html(feedDiv);

        }

      
      });
    });


    $(".transit-link").on("click", function() {
     var queryTransit = "https://ohana-api-demo.herokuapp.com/api/search?keyword=transit";
    
      $.ajax({
        url: queryTransit,
        method: "GET"
      })

      
      .done(function(response) {

        console.log(response);
        
       
        var feedDiv = $('<div>')
          
          for (var i = 0; i < response.length; i++) {
            //get Name of Org
            var orgP = $('<h3>').text(response[i].organization.name);

            //get description
            var descP = $('<p>').text(response[i].organization.description);


            ///get address
            var address= response[i].address;
           
            var address1 = address.address_1;
            var city = address.city;
            var zip = address.postal_code;
            var state = address.state_province;

            var addP = $('<p>').text("Address: "+ address1+ ", "+ city + ","+ state+ " "+ zip);
           
           // get coordinates
           var latP= $('<p>').text("lattitude: "+ response[i].latitude);
            var longP= $('<p>').text("longitude: "+ response[i].longitude)

            //get phone number
            
            var phoneP=$('<p>').text("Contact#: "+ "Unavailable");

            response[i].phones.forEach(function(e) {
                if(e.number_type==="voice")
                {
                    phoneP=$('<p>').text("Contact#: "+ e.number);
                }
            
            });

            
            feedDiv.append(orgP);
            feedDiv.append(descP);
            feedDiv.append(addP);
            feedDiv.append(phoneP);
            feedDiv.append(latP);
            feedDiv.append(longP);
            feedDiv.append("---------------------------")

            $("#showResult").html(feedDiv);

        }

      
      });
    });

    $(".care-link").on("click", function() {
     var queryCare = "https://ohana-api-demo.herokuapp.com/api/search?keyword=care";
    
      $.ajax({
        url: queryCare,
        method: "GET"
      })

      
      .done(function(response) {

        console.log(response);
        
       
        var feedDiv = $('<div>')
          
          for (var i = 0; i < response.length; i++) {
            //get Name of Org
            var orgP = $('<h3>').text(response[i].organization.name);

            //get description
            var descP = $('<p>').text(response[i].organization.description);


            ///get address
            var address= response[i].address;
           
            var address1 = address.address_1;
            var city = address.city;
            var zip = address.postal_code;
            var state = address.state_province;

            var addP = $('<p>').text("Address: "+ address1+ ", "+ city + ","+ state+ " "+ zip);
           
           // get coordinates
           var latP= $('<p>').text("lattitude: "+ response[i].latitude);
            var longP= $('<p>').text("longitude: "+ response[i].longitude)

            //get phone number
            
            var phoneP=$('<p>').text("Contact#: "+ "Unavailable");

            response[i].phones.forEach(function(e) {
                if(e.number_type==="voice")
                {
                    phoneP=$('<p>').text("Contact#: "+ e.number);
                }
            
            });

            
            feedDiv.append(orgP);
            feedDiv.append(descP);
            feedDiv.append(addP);
            feedDiv.append(phoneP);
            feedDiv.append(latP);
            feedDiv.append(longP);
            feedDiv.append("---------------------------")

            $("#showResult").html(feedDiv);

        }

      
      });
    });
    $(".work-link").on("click", function() {
     var queryWork = "https://ohana-api-demo.herokuapp.com/api/search?keyword=work";
    
      $.ajax({
        url: queryWork,
        method: "GET"
      })

      
      .done(function(response) {

        console.log(response);
        
       
        var feedDiv = $('<div>')
          
          for (var i = 0; i < response.length; i++) {
            //get Name of Org
            var orgP = $('<h3>').text(response[i].organization.name);

            //get description
            var descP = $('<p>').text(response[i].organization.description);


            ///get address
            var address= response[i].address;
           
            var address1 = address.address_1;
            var city = address.city;
            var zip = address.postal_code;
            var state = address.state_province;

            var addP = $('<p>').text("Address: "+ address1+ ", "+ city + ","+ state+ " "+ zip);
           
           // get coordinates
           var latP= $('<p>').text("lattitude: "+ response[i].latitude);
            var longP= $('<p>').text("longitude: "+ response[i].longitude)

            //get phone number
            
            var phoneP=$('<p>').text("Contact#: "+ "Unavailable");

            response[i].phones.forEach(function(e) {
                if(e.number_type==="voice")
                {
                    phoneP=$('<p>').text("Contact#: "+ e.number);
                }
            
            });

            
            feedDiv.append(orgP);
            feedDiv.append(descP);
            feedDiv.append(addP);
            feedDiv.append(phoneP);
            feedDiv.append(latP);
            feedDiv.append(longP);
            feedDiv.append("---------------------------")

            $("#showResult").html(feedDiv);

        }

      
      });
    });


    $(".housing-link").on("click", function() {
        var queryFood = "https://ohana-api-demo.herokuapp.com/api/search?keyword=housing";
       
         $.ajax({
           url: queryFood,
           method: "GET"
         })
   
         
         .done(function(response) {
   
           console.log(response);
           
          
           var feedDiv = $('<div>')
             
             for (var i = 0; i < response.length; i++) {
               //get Name of Org
               var orgP = $('<h3>').text(response[i].organization.name);
   
               //get description
               var descP = $('<p>').text(response[i].organization.description);
   
   
               ///get address
               var address= response[i].address;
              
               var address1 = address.address_1;
               var city = address.city;
               var zip = address.postal_code;
               var state = address.state_province;
   
               var addP = $('<p>').text("Address: "+ address1+ ", "+ city + ","+ state+ " "+ zip);
              
              // get coordinates
              var latP= $('<p>').text("lattitude: "+ response[i].latitude);
               var longP= $('<p>').text("longitude: "+ response[i].longitude)
   
               //get phone number
               
               var phoneP=$('<p>').text("Contact#: "+ "Unavailable");
   
               response[i].phones.forEach(function(e) {
                   if(e.number_type==="voice")
                   {
                       phoneP=$('<p>').text("Contact#: "+ e.number);
                   }
               
               });
   
               
               feedDiv.append(orgP);
               feedDiv.append(descP);
               feedDiv.append(addP);
               feedDiv.append(phoneP);
               feedDiv.append(latP);
               feedDiv.append(longP);
               feedDiv.append("---------------------------")
   
               $("#showResult").html(feedDiv);
   
           }
   
         
         });
       });
   
   