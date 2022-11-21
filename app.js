function contact(){
   
    var contactDetails = []

       /*  Check what is written and store it in array */
     for (var i = 0; i < document.forms[0].length; i++){
        contactDetails.push  (document.forms[0].elements[i].value) 
       contactDetails.push ('%0D%0A')
} 
   /*  Remove commas from array */
 var contactDetailsWithoutComma = contactDetails.join(''); 
 /* Open default email and pre populate the mail */
 window.open("mailto:tinyproductions.no@gmail.co.com?subject=Contact&body=" + contactDetailsWithoutComma); 
}