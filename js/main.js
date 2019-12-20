//array for scrolling
const sections = [
  {logo: null, down_button: "assets/images/Islam/scrdwn.png",
  gold_border: true,name: "main", active: true},

  {logo: 'assets/images/Islam/logo-en-small.6.png', down_button: "assets/images/Islam/scroll-arrow-down.6.png",
  gold_border: true, name: "nintendo", active: false},

  {logo: 'assets/images/Islam/darkLogo.png', down_button: "assets/images/Islam/down_button.png",
  gold_border: false, name: "open_world", active: false},

  {logo: 'assets/images/Islam/lightLogo.png', down_button: "assets/images/Islam/down_button.png",
  gold_border: false, name: "monster_hunter", active: false},

  {logo: 'assets/images/Islam/lightLogo.png', down_button: "assets/images/Islam/down_button.png",
  gold_border: false, name: "story", active: false},

  {logo: 'assets/images/Islam/darkLogo.png', down_button: "assets/images/Islam/down_button.png",
  gold_border: false, name: "buy_the_game", active: false},

  {logo: 'assets/images/Islam/lightLogo.png', down_button: "assets/images/Islam/down_button.png",
  gold_border: false, name: "news", active: false},

  {logo: 'assets/images/Islam/lightLogo.png', down_button: "assets/images/Islam/down_button.png",
  gold_border: false, name: "world_map", active: false},

  {logo: 'assets/images/Islam/lightLogo.png', down_button: "assets/images/Islam/up_button.png",
  gold_border: false, name: "media", active: false
  }
];

// scroll with mouse
const onScroll = function (e) {
  const activeIndex = sections.indexOf(sections.find(i => i.active))
  console.log(activeIndex)
  if (e.deltaY > 0) {
    // console.log('down')
    if (!!sections[activeIndex + 1]) {
      document.getElementById('logoIMG').src = `${sections[activeIndex + 1].logo}`;
      document.getElementById('SliderDown').src = `${sections[activeIndex + 1].down_button}`;
      sections[activeIndex].active = false
      sections[activeIndex + 1].active = true
      document.querySelector(`#${sections[activeIndex].name}`).style.top = "-100vh";
      document.querySelector(`#${sections[activeIndex + 1].name}`).style.top = "0";
      // fixed frame`s color
      if (sections[activeIndex + 1].gold_border) {
        document.getElementById('overlay').setAttribute('class', 'goldLine')
      } else {
        document.getElementById('overlay').setAttribute('class', 'silverLine')
      }
      if (sections[activeIndex + 1].name == 'media') {
        document.getElementById('SliderDown').setAttribute('onclick', 'scrollUp()')
      } else {
        document.getElementById('SliderDown').setAttribute('onclick', 'scrollDown()')
      }
      // top line`s width
      if (sections[activeIndex + 1].logo === null) {
        document.getElementById('topLeftLine').style.width = 'calc(50% - 70px)'
        document.getElementById('topRightLine').style.width = 'calc(50% - 70px)'
        document.getElementById('logoIMG').style.display = 'none'
        document.getElementById('bottomAlso').style.display = 'grid'
      } else {
        document.getElementById('topLeftLine').style.width = 'calc(50% - 170px)'
        document.getElementById('topRightLine').style.width = 'calc(50% - 170px)'
        document.getElementById('logoIMG').style.display = 'grid'
        document.getElementById('bottomAlso').style.display = 'none'
        document.getElementById('bottomRightLine').style.width = 'calc(50% - 105px)'
        document.getElementById('bottomLeftLine').style.width = 'calc(50% - 105px)'
      }
    }
  } else {
    // console.log('up')
    if (!!sections[activeIndex - 1]) {
      document.getElementById('logoIMG').src = `${sections[activeIndex - 1].logo}`;
      document.getElementById('SliderDown').src = `${sections[activeIndex - 1].down_button}`;
      sections[activeIndex].active = false
      sections[activeIndex - 1].active = true
      document.querySelector(`#${sections[activeIndex].name}`).style.top = "+100vh";
      document.querySelector(`#${sections[activeIndex - 1].name}`).style.top = "0";
      // fixed frame`s color
      if (sections[activeIndex - 1].gold_border) {
        document.getElementById('overlay').setAttribute('class', 'goldLine')
      } else {
        document.getElementById('overlay').setAttribute('class', 'silverLine')
      }
      if (sections[activeIndex - 1].name == 'media') {
        document.getElementById('SliderDown').setAttribute('onclick', 'scrollUp()')
      } else {
        document.getElementById('SliderDown').setAttribute('onclick', 'scrollDown()')
      }
      // top line`s width
      if (sections[activeIndex - 1].logo === null) {
        document.getElementById('topLeftLine').style.width = 'calc(50% - 70px)'
        document.getElementById('topRightLine').style.width = 'calc(50% - 70px)'
        document.getElementById('logoIMG').style.display = 'none'
        document.getElementById('bottomAlso').style.display = 'grid'
        
      } else {
        document.getElementById('topLeftLine').style.width = 'calc(50% - 170px)'
        document.getElementById('topRightLine').style.width = 'calc(50% - 170px)'
        document.getElementById('logoIMG').style.display = 'grid'
        document.getElementById('bottomAlso').style.display = 'none'
        document.getElementById('bottomRightLine').style.width = 'calc(50% - 105px)'
        document.getElementById('bottomLeftLine').style.width = 'calc(50% - 105px)'
      }
    }
  }
};

document.addEventListener("wheel", onScroll, {
  passive: false
});

// Button in bottom for slide
function scrollDown() {
  onScroll({deltaY: 1})
}
function scrollUp() {
  onScroll({deltaY: -1})
}

// Slide in Media section
function mediaSlide(slideArgument) {
  if (slideArgument === 'video') {
    document.getElementById('slide').style.transform = "translateY(0px)"
  }if (slideArgument === 'wallpaper') {
    document.getElementById('slide').style.transform = "translateY(-266px)"
  }else if (slideArgument === 'screenshote') {
    document.getElementById('slide').style.transform = "translateY(-522px)"
  }
}