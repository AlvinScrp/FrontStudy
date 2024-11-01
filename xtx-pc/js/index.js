var imageIndex = 0;
var imageUrls = [
  "https://imgcps.jd.com/img-cubic/creative_server_cia/v2/2000366/100013404334/FocusFullshop/CkRqZnMvdDEvMTk2NzY3LzM0LzEyMjA3LzE4ODE0NS82MGU2OTQzY0VlYzFkNWUyMC84MTA3MDYyYWRmOGM2YzZhLnBuZxIJMy10eV8wXzU0MAI47ot6QhMKD-iVieS4i-WkqumYs-S8nhAAQhYKEueyvuW9qeS4jeWuuemUmei_hxABQhAKDOeri-WNs-aKoui0rRACQgoKBui2heWAvBAHWK7hjcr0Ag/cr/s/q.jpg",
  "https://img20.360buyimg.com/pop/s1180x940_jfs/t1/189991/39/15524/95184/6102196bE8d669f0f/83cbafa62a868f86.jpg.webp",
  "https://imgcps.jd.com/img-cubic/creative_server_cia/v2/2000366/100016341998/FocusFullshop/CkRqZnMvdDEvMTkzOTU0LzMxLzEyMzEwLzYzMDM5Ny82MGU2ZTVmYUU4ZDQ3YTQ5NS81ZmYzOTZlMzY4Y2Y1OGZiLnBuZxIJMi10eV8wXzUzMAI47ot6QhYKEumHkeWtl-eGn-mjn-iFiuWRsxAAQhkKFeeJqee-juminOmrmOS7t-abtOW7iRABQhAKDOeri-WNs-aKoui0rRACQgoKBui2heWAvBAHWO6Hwcv0Ag/cr/s/q.jpg",
  "https://imgcps.jd.com/ling4/100010702011/5bel5Lia6L-Q5Yqo5Lya/5oqi5Yi4MjAw5YePNTA/p-5bd8253082acdd181d02fa37/1222da2e/cr/s/q.jpg",
  "https://img12.360buyimg.com/pop/s1180x940_jfs/t1/177484/29/8372/69340/60c06387E40d7008f/5568d4689c3a33eb.jpg.webp",
];
window.onload = function () {
  console.log("windos.onload");
  initFirstScreenSlider();
};

function initFirstScreenSlider() {


  var sliderImageContainer = document.getElementById("id_slider_image_container");
  const sliderImages = sliderImageContainer.getElementsByClassName('slider-image');
  var as = sliderImageContainer.getElementsByTagName("a");
  for (var i = 0; i < sliderImages.length; i++) {
    console.log(i, sliderImages[i]);
    as[i].style.opacity = 0.0;
    sliderImages[i].src = imageUrls[i];
  }
  switchImageFunc(false);
  setInterval(() => switchImageFunc(true), 2000);
}

function switchImageFunc(fadeOutPre) {
  var sliderImageContainer = document.getElementById("id_slider_image_container");
  var as = sliderImageContainer.getElementsByTagName("a");
  if (fadeOutPre) {
    var pre = as[(imageIndex + 4) % imageUrls.length];
    pre.style.animation = "fadeOut 0.3s 1 normal ease-out forwards";
  }
  var current = as[imageIndex];
  // console.log("imageIndex:" + imageIndex + "  opacity:" + current.style.opacity)
  current.style.animation = "fadeIn 0.3s 1 normal ease-in forwards";

  imageIndex++;
  imageIndex = imageIndex % imageUrls.length;

}