function count(activeIndex) {
  if (window.timer) {
    clearInterval(window.timer);
  }
  // 配置从多少时间倒计时
  let timeSecond = 180;
  let timeH = document.getElementsByClassName("timer");
  if (!timeH[Number(activeIndex)]) {
    return;
  }
  timeH = timeH[Number(activeIndex)];
  displayTime(timeSecond);
  window.timer = setInterval(() => {
    timeSecond--;
    displayTime(timeSecond);
    if (timeSecond == 0 || timeSecond < 1) {
      endCount();
      clearInterval(window.timer);
    }
  }, 1000);

  function displayTime(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML = `
    ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
    `;
  }

  function endCount() {
    timeH.innerHTML = "Time out";
  }
}
var mySwiper = new Swiper(".swiper", {
  autoplay: {
    // 15分钟为：1000 * 60 *15
    delay: 18000,
    stopOnLastSlide: true,
    disableOnInteraction: false
  },
  loop: false,
  direction: "vertical",
  effect: "creative", //特效
  noSwiping: true,
  on: {
    init: function() {
      count(this.activeIndex);
    },
    slideChangeTransitionEnd: function() {
      count(this.activeIndex);
    }
  }
});
