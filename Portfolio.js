const moreInfo = document.getElementsByClassName("moreInfo");
const moreInfoBtn = document.getElementById("moreInfoBtn");
const msg = document.getElementById("msgSpan")
console.log(moreInfo[0])
console.log(moreInfo[1])

let info = false;

moreInfoBtn.onclick = hideInfo;

function hideInfo() {

    info = !info;  

    if(info) {
            moreInfoBtn.innerHTML = "Read less"

        for(let i = 0; i < moreInfo.length; i++) {
        moreInfo[i].style.display="block"
    }

    } else {
         moreInfoBtn.innerHTML = "Read more"

        for(let i = 0; i < moreInfo.length; i++) {
        moreInfo[i].style.display="none";
        }
    }
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyaNy66RoHLBqVwNTbNkwEXDrVnqTSdIM-rZf6N4_ASW3jub1FpvKm52z_I5h4t_-LHTA/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(() => {
                msg.innerHTML = ""
            }, 3000)
            form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })