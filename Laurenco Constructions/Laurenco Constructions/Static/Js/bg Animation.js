// Background animation start
var slideImg = document.getElementById("slideImg");

      var images = new Array(
          "Static/Img/bg.jpg",
          "Static/Img/bg3.jpg",
          "Static/Img/bg4.jpg",
          "Static/Img/bg3.jpg"
      );

      var len = images.length;
      var i = 0;
       function slider(){
          if(i > len-1){
              i = 0;
          }
          slideImg.src = images[i];
          i++;
          setTimeout('slider()',3000);
       }
       // Background animation end
       