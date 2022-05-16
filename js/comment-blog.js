//1.ADD A SUBMIT EVENT LISTENER ON THE FORM
    //STOP THE PAGE FROM REFRESHING WEHN THE FOR IS SUBMITTED


   const formElement =  document.querySelector('.commentForm');
//    console.log(formElement);

   formElement.addEventListener('submit', function(e){
       e.preventDefault();
    //    console.log(e);

       //SOLO PARA TESTEAR!
        // alert('fom submitted!');

        //query the DOM for the input element and checked whether is empty
        const inputElement = document.getElementsByClassName('commentItem');
        console.log(inputElement);

        //CHECKED IMPUT ELEMENTS AND SEE WHETHER IS EMPTY OR NOT:
        if(inputElement.value !== '') {
            console.log('YOU ARE NOT EMPTY!')

            const commentButton = document.getElementById('submitComment');
            console.log(commentButton.textContent);

            commentButton.textContent = 'Thank you!';

            
            // commentButton.style.backgroundColor = 'white';
            // commentButton.style.color = 'green'

            //CLEAR THE INPUT
            inputElement.value = '';
        
        } 
        
   })
   