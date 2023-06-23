const items = document.querySelectorAll("li")

function dispayText() {
    const triggerBottom = window.innerHeight / 5 * 4
    console.log(triggerBottom)

    for(let i = 0; i < items.length; i++){
        const textTop = items[i].getBoundingClientRect().top
        const textBottom = items[i].getBoundingClientRect().bottom

        if(textTop < 390 && textBottom > 390) {
            items[i].classList.add("display")
        } else {
            items[i].classList.remove("display")
        }
    }
}

dispayText()

window.addEventListener('scroll', dispayText)

// (function () {
//   const items = document.querySelectorAll("section ul li");

//   function elementInViewport(element) {
//     const boxTop = element.getBoundingClientRect().boxTop

//     if(boxTop) {}

//     let clientRect = element.getBoundingClientRect();




//     let myElementHeight = element.offsetHeight;
//     let myElementWidth = element.offsetWidth;

//     if (
//       clientRect.top >= -myElementHeight &&
//       clientRect.left >= -myElementWidth &&
//       clientRect.right <=
//         (window.innerWidth || document.documentElement.clientWidth) +
//           myElementWidth &&
//       clientRect.bottom <=
//         (window.innerHeight || document.documentElement.clientHeight) +
//           myElementHeight
//     ) {
//       return true;
//     } else {
//       return false;
//     }

//     return (
//       clientRect.top >= 0 &&
//       clientRect.left >= 0 &&
//       clientRect.bottom <=
//         (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }

//   function displayText() {
//     for (let i = 0; i < items.length; i++) {
//       if (elementInViewport(items[i])) {
//         items[i].classList.add("display");
//       } else {
//         items[i].classList.remove("display");
//       }
//     }
//   }

//   window.addEventListener("load", displayText);
//   window.addEventListener("scroll", displayText);
//   window.addEventListener("resize", displayText);
// });
