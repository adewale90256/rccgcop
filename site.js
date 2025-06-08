"use strict";

const menuList = document.getElementById("showlistOnSmallScreen");
const menuBtn = document.getElementById("clickToShowMenu");
menuBtn.addEventListener("click", () => {
  if (menuList.classList.contains("hidden")) {
    menuList.classList.remove("hidden");
  }
});

const HideBtn = document.getElementById("clickToHide");
HideBtn.addEventListener("click", () => {
  if (!menuList.classList.contains("hidden")) {
    menuList.classList.add("hidden");
  }
});

let currentBibleText = 0;
const bibleTextSlider = document.getElementById("bibleTextSlider");
const text = [
  "Welcome to the City of Faith, the city of possibilities. At the city of faith, faith is our culture, and victory is our lifestyle. ",
  "When I am afraid, I put my trust in you. (Psalm 56:3)",
  "I can do all things through Christ who strengthens me.(Philippians 4:13)",
  "God is our refuge and strength, a very present help in trouble.(Psalm 46:1)",
  "If God is for us, who can be against us?.(Romans 8:31)",
  "Fear not, for I am with you. (Isaiah 41:10)",
  "Cast all your anxiety on Him because He cares for you.(1 Peter 5:7)",
  "his is the day the Lord has made; we will rejoice and be glad in it.(Psalm 118:24 )",
  "Trust in the Lord with all your heart.(Proverbs 3:5 )",
  "The joy of the Lord is your strength.(Nehemiah 8:10)",
  "Come to me, all who are weary, and I will give you rest.(Matthew 11:28)",
  "For I know the plans I have for you, declares the Lord.(Jeremiah 29:11)",
  "Taste and see that the Lord is good.(Psalm 34:8)",
  "God gave us a spirit not of fear but of power and love.(2 Timothy 1:7)",
  "Be strong and courageous. Do not be afraid.(Deuteronomy 31:6)",
  "May the God of hope fill you with all joy and peace.(Romans 15:13)",
  "The Lord is my shepherd; I shall not want.(Psalm 23:1)",
  "Be strong and courageous. The Lord your God is with you.(Joshua 1:9)",
  "My help comes from the Lord, the Maker of heaven and earth.(Psalm 121:2)",
  "The Lord will fight for you; you need only to be still.(Exodus 14:14)",
  "His mercies never come to an end.(Lamentations 3:22)",
  "With God all things are possible.(Matthew 19:26)",
  "Those who hope in the Lord will renew their strength.(Isaiah 40:31)",
  "The Lord is my light and my salvation—whom shall I fear?.(Psalm 27:1)",
  "Be joyful in hope, patient in affliction, faithful in prayer.(Romans 12:12)",
  "The name of the Lord is a strong tower.(Proverbs 18:10)",
  "Take heart! I have overcome the world.(John 16:33)",
  "Delight yourself in the Lord, and He will give you the desires of your heart.(Psalm 37:4)",
  "When you pass through the waters, I will be with you.(Isaiah 43:2)",
  "Do not grow weary in doing good.(Galatians 6:9)",
  "I will never leave you nor forsake you.(Hebrews 13:5)",
];

function changeBibleText() {
  bibleTextSlider.classList.add("-translate-x-full", "opacity-0");

  setTimeout(() => {
    bibleTextSlider.innerHTML = text[currentBibleText];
    currentBibleText = (currentBibleText + 1) % text.length;

    bibleTextSlider.classList.remove("transition-all", "duration-1000");
    bibleTextSlider.classList.remove("-translate-x-full");
    bibleTextSlider.classList.add("translate-x-full");

    void bibleTextSlider.offsetWidth;

    bibleTextSlider.classList.add("transition-all", "duration-1000");
    bibleTextSlider.classList.remove("translate-x-full", "opacity-0");
  }, 1000);
}

setInterval(changeBibleText, 5000);

const menuBar = document.getElementById("stickyScroll");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    menuBar.classList.add("bg-gray-900", "shadow-md");
  } else {
    menuBar.classList.remove("bg-gray-900", "shadow-md");
  }
});

const hero = document.getElementById("hero");
const images = [
  "./images-bg/bg-3.jpg",
  "./images-bg/bg-4.webp",
  "./images-bg/bg-11.jpg",
  "./images-bg/bg-12.jpg",
  "./images-bg/bg-14.jpg",
  "./images-bg/bg-15.jpg",
  "./images-bg/bg-16.jpg",
  "./images-bg/bg-23.JPG",
  "./images-bg/bg-24.JPG",
  "./images-bg/bg-25.JPG",
  "./images-bg/bg-26.JPG",
];

let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  hero.style.backgroundImage = `url(${images[index]})`;
}, 5000); // changes every 5 seconds

const showPrayer = document.getElementById("prayerShow");

const showOverlay = document.getElementById("overlay");
showPrayer.addEventListener("click", () => {
  if (showOverlay.classList.contains("hidden")) {
    showOverlay.classList.remove("hidden");
  }
});
console.log(showOverlay);

const hidePrayer = document.getElementById("prayerHide");

hidePrayer.addEventListener("click", () => {
  if (!showOverlay.classList.contains("hidden")) {
    showOverlay.classList.add("hidden");
  }
});

const showTest = document.getElementById("testShow");
const testOverlay = document.getElementById("overlayTest");

showTest.addEventListener("click", () => {
  if (testOverlay.classList.contains("hidden")) {
    testOverlay.classList.remove("hidden");
  }
});

const testHide = document.getElementById("testHide");

testHide.addEventListener("click", () => {
  if (!testOverlay.classList.contains("hidden")) {
    testOverlay.classList.add("hidden");
  }
});
