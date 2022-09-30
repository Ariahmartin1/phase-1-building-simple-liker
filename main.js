
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


const likeOptions = document.querySelectorAll(".like-glyph") 

const cb = (e) => {
  const heart =e.target
  mimicServerCall()
  .then(function () {
    // how to change the heart to a full heart
    //how to add the .activated-heart class to make the heart appear red
  })
  .catch(function(error) {
   //how to remove the .hidden class from error modal?
   // how to use setTimeOut to return the .hidden class to error modal after 3 seconds?
  });
}

for (const option of likeOptions) {
  option.addEventListener("click", cb);
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
