let galleryImages = document.querySelectorAll(".gallery-img");
console.log("GalleryImages Array:", galleryImages);

let latestOpenedImg;
let windowWidth = window.innerWidth;

if (galleryImages) {
  galleryImages.forEach(function (image, index) {
    image.onclick = function () {
      let elementCss = window.getComputedStyle(image);
      console.log(elementCss);

      let fullImgUrl = elementCss.getPropertyValue("background-image");
      let imgName = fullImgUrl.split("/img/thumbs/");
      let newImgUrl = imgName[1].replace('")', "");
      console.log(newImgUrl);
      console.log("Loop current index", index);
      
      latestOpenedImg = index + 1;
      console.log("LatestOpenedImg:", latestOpenedImg);


      let container = document.body;
      let newImgWindow = document.createElement("div");
      container.appendChild(newImgWindow);
      newImgWindow.setAttribute("class", "img-window");
      newImgWindow.setAttribute("onclick", "closeImg()");

      let newImg = document.createElement("img");
      newImgWindow.appendChild(newImg);
      newImg.setAttribute("src", "img/" + newImgUrl);
      newImg.setAttribute("id", "current-img");

      if(document.URL.includes("hobbies.html")){
      newImg.onload = function () {
        let imgWidth = this.width;
        // let calImgToEdge = ((windowWidth - imgWidth) / 2) -(((windowWidth - imgWidth) / 2) * 30)/100;
        let calImgToEdge = ((windowWidth - imgWidth) / 2) - 80;
        console.log(calImgToEdge);

        let prevBtn = document.createElement("a");
        let prevBtnText = document.createTextNode("Previous");
        prevBtn.appendChild(prevBtnText);
        container.appendChild(prevBtn);
        prevBtn.setAttribute("class", "img-btn-prev");
        prevBtn.setAttribute("onclick", "changeImg(0)");

        let nextBtn = document.createElement("a");
        let nextBtnText = document.createTextNode("Next");
        nextBtn.appendChild(nextBtnText);
        container.appendChild(nextBtn);
        nextBtn.setAttribute("class", "img-btn-next");
        nextBtn.setAttribute("onclick", "changeImg(1)");
        nextBtn.style.cssText = `right:${calImgToEdge}px`;
        prevBtn.style.cssText = `left:${calImgToEdge}px`;
      };
    }
    };
  });
}

function closeImg() {
  document.querySelector(".img-window").remove();
  document.querySelector(".img-btn-prev").remove();
  document.querySelector(".img-btn-next").remove();
}

function changeImg(changeDir) {
  
  document.querySelector("#current-img").remove();

  let getImgWindow = document.querySelector(".img-window");
  let newImg = document.createElement("img");
  getImgWindow.appendChild(newImg);

  let calcNewImg;

  if (changeDir === 1) {
    calcNewImg = latestOpenedImg + 1;
    console.log("Next Button pressed");
    if (calcNewImg > galleryImages.length) {
      calcNewImg = 1;
    }
  } else if (changeDir === 0) {
    console.log("Prev Button pressed");
    console.log();
    
    calcNewImg = latestOpenedImg - 1;
    if (calcNewImg < 1) {
      calcNewImg = galleryImages.length;
    }  
  }
  console.log(calcNewImg);
  
  newImg.setAttribute("src", `img/img${calcNewImg}.jpg`);

  newImg.setAttribute("id", "current-img");
  
  latestOpenedImg = calcNewImg;

  newImg.onload = function () {
    let imgWidth = this.width;
    let calImgToEdge = (windowWidth - imgWidth) / 2 - 80;

    let nextBtn = document.querySelector(".img-btn-next");
    nextBtn.style.cssText = `left:${calImgToEdge}px`;

    let prevBtn = document.querySelector(".img-btn-prev");
    nextBtn.style.cssText = `right:${calImgToEdge}px`;
  };
}
