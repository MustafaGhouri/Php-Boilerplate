 var siteurl = window.location.origin + "/";

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
  
  import {getAuth, GoogleAuthProvider , signInWithPopup ,signOut } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCkH6vj7K6uojlIZuJkAx0doz06j_bG2kc",
    authDomain: "gcs-authen.firebaseapp.com",
    projectId: "gcs-authen",
    storageBucket: "gcs-authen.appspot.com",
    messagingSenderId: "796658853173",
    appId: "1:796658853173:web:cc690f5e612a9c6f8a987c",
    measurementId: "G-KZY60B7VSF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const analytics = getAnalytics(app);
  const provider = new GoogleAuthProvider(app);
  let user = '';
    
  $(document).on('click','#login',function(e){ 
          signInWithPopup(auth, provider)
            .then((result) => { 
              const credential = GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken; 
              console.log(result.user)
               let displayName = result.user.displayName;
               let email = result.user.email;
               let profile = result.user.photoURL; 
               let phoneNumber = result.user.phoneNumber;  
              $.ajax({
                type: 'POST',
                url: siteurl+'include/fetch.php?page=login',
                dataType:'JSON',
                data: { displayName: displayName,
                        email:email,
                        profile:profile,
                        phoneNumber:phoneNumber
                },
                success:function(response) {
                    if(response['result'] == 'signin'){
                      location.reload();
                    }
                   else if(response['result'] == 'signup'){
                         location.reload();
                    }
                },
                error: function(error) { 
                }
              });
            })
                
        });

  $(document).on('click','#logout',function(e){
      
      e.preventDefault();
         signOut(auth).then(() => {
            $.ajax({
                type: 'POST',
                url: siteurl+'include/logout.php',
                dataType:'JSON',
                success:function(response) {
               window.open(siteurl,'_self');
            },
            })
   }).catch((error) => {
    // An error happened.
   });


  })
 
  