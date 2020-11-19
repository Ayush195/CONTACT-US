            let arr1 = ["India +91","Afghanistan +93","China +86","Angladesh +880","Indonesia +62","Japan +81","Pakistan +92","Sri Lanka +94"];
            const ContactNumberOptions  = document.getElementById('Contact_Number_select')
            for(var i = 0; i < arr1.length; i++)
            {
               
                    {
                        option  = new Option(arr1[i], arr1[i]  );
                    }
                
                 
                    ContactNumberOptions[i] = option;
                   
            }
            let arr2 = ["Volvo","Fiat","Audi","BMW","Hyundai","Nissan","Audi"];
            const carsOptions  = document.getElementById('carSelect');
            for(var i = 0; i < arr2.length; i++)
            {
                    
                   
                    {
                        option  = new Option(arr2[i], arr2[i]  );
                    }
                
                 
                    carsOptions[i] = option;
                   
            }  

                

            function array()
            {
                var x1=document.getElementById('fname').value;
                var x2=document.getElementById('lname').value;
                var x3=document.getElementById('Email').value;
                var x4=document.getElementById("Contact_Number_select").value;
                var x5=document.getElementById('Contact_Number').value;               
                var x6=document.getElementById('subject').value;
                var x7=document.getElementById("carSelect").value;
                
                
                alert("First Name: "+x1+"\nLast Name: "+x2+"\nEmail: "+x3+"\nMobile Number: "+x4+x5+"\nYour Choose Car Name Is: "+x7+"\nyour Query Is : "+x6);
            }
         