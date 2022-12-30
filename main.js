// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.querySelector("#modal");
modal.className = "hidden";

const likeHearts = document.getElementsByClassName("like-glyph");

for (const glyph of likeHearts) {
  glyph.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        if (glyph.className === "like-glyph") {
          glyph.innerHTML = FULL_HEART;
          glyph.className = "like-glyph activated-heart";
        } else {
          glyph.innerHTML = EMPTY_HEART;
          glyph.className = "like-glyph";
        }

      })
      .catch(() => {
        modal.className = "";
        setTimeout(() => modal.className = "hidden", 3000)
      });
  });
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
