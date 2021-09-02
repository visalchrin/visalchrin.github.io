const progress = document.getElementById("progress"),
    slider = document.getElementById("slider"),
    Price = document.getElementById("price"),
    pageViews = document.getElementById("pageView"),
    switchBtn = document.getElementById("switch");

    document.addEventListener("DOMContentLoaded", () => {

      // handle price
      function handleprice(value) {
        let range = parseInt(value / 20);

        console.log(`Range: ${range}`);
        if (range <= 0) {
          range = 1;
        }

        switch(range) {
          case 1: price = 8; pageView = "10K"; break;
          case 2: price = 12; pageView = "50K"; break;
          case 3: price = 16; pageView = "100K"; break;
          case 4: price = 24; pageView = "500K";break;
          case 5: price = 36; pageView = "1M"; break;
          default: price = "Error happened"; break;
        }

        console.log(switchBtn.checked);

        if (switchBtn.checked === true ) {
          console.log("check is checked");
          Price.innerHTML = price - (price * 0.25);
          pageViews.innerHTML = pageView;
        } else {
          Price.innerHTML = price;
          pageViews.innerHTML = pageView;
        }
      }

      // change options 
      switchBtn.addEventListener("change",()=> {
        let progress = slider.value;
        handleprice(progress);
      });

      // slider handle
      slider.addEventListener("change", (e)=> {
        let progressVal = e.target.value;
        console.log(progressVal);
        handleprice(progressVal);
        slider.style.background = `
          linear-gradient(
        to right,
        rgb(165, 243, 235) 0%,
        rgb(165, 243, 235) ${progressVal}%,
        #ddd 50%,
        #ddd 100%
        `;
    });
});
