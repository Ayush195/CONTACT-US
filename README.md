# CONTACT US
## HTML Code:
```
<!DOCTYPE html>
<html>
    <head>
        <title>Contact Us</title>
        <meta charset="windows-1252">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="contact us.css">
    </head>
    <body>
        <div class="content">
           <h2>Contact us</h2>
            <form action="" id="myform" onsubmit="return array()">
                <div>
                   <label>First Name</label>
                    <input type="text" id="fname" name="firstname" value="" required placeholder="Your First Name..">
                </div>
                <div>
                    <label for="lname">Last Name:</label>
                    <input type="text" id="lname" name="lname" placeholder="Your Last Name.." required><br>
                </div>
                <div>
                    <label for="Email">Email:</label>
                    <input type="Email" id="Email" name="Email" required placeholder="Your Email.."><br>
                </div>
                <div>
                    <label for="Contact_Num">Contact Number:</label>
                    <select id="Contact_Number_select">
                        <option value="default">default</option>
                    </select>
                    <input type="text" id="Contact_Number" name="Contact Number" placeholder="Your Contact Number.." required><br>
                </div>
                <div>
                    <label for="cars">choose your Car</label>
                     <select id="carSelect">
                        <option value="default">default</option>
                    </select>
                </div>
                <div>
                    <label for="subject">What is your query</label>
                    <textarea id="subject" name="subject" placeholder="Write your query.." style="height:200px" required></textarea>
                </div>
                    <input type="submit">
                    <input type="reset"  value="Reset">
                
            </form>
        </div>
        <script src="contact.js"></script>
    </body>
</html>
```

## CSS Code:
```
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  max-width: 350px;
  width: 100%;
  background: #fff;
  padding: 25px;
  border-radius: 5px;
  
    
}
.content h2{
  text-align: center;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #332902;
}
input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
input[type=Email],select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
```
## JavaScript Code
```
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
```