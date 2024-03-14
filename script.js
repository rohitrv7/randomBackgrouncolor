let body = document.querySelector("body");
        let startbtn = document.querySelector(".start");
        let stopbtn = document.querySelector(".stop");
        let spanText = document.querySelector(".color");
        let copy = document.querySelector(".copytext");

        const copyContent = async () => {
            let storeText = spanText.textContent;
          try {
            await navigator.clipboard.writeText(storeText);
            copy.style.display ="block";
          } catch (err) {
            console.error('Failed to copy: ', err);
          }
        }

        function colorChanger() {
          let colorcode = "0123456789abcdef";
          let add = "#";
          for (let i = 0; i < 6; i++) {
            let color = colorcode[Math.floor(Math.random() * 16)];
            add += color;
            spanText.innerHTML = add;
          }
          return add;

        };

        let intervalId;
        function startColor() {
            if(!intervalId){
                intervalId = setInterval(changebgcolor, 1000);
            }

            function changebgcolor(){
                body.style.backgroundColor = colorChanger();
            }

        }
        function stopColor() {
            clearInterval(intervalId);
            intervalId = null;
        }
        startbtn.addEventListener("click", startColor);
        stopbtn.addEventListener("click", stopColor);