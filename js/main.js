const cardsWrapper = document.querySelector(".cards");
const cards = cardsWrapper.querySelectorAll(".cards__card");

const checkBox = document.getElementById("checkbox");

cardsWrapper.addEventListener("mousemove", handleMouseMove);

/**
 * @param {MouseEvent} e
 */

function handleMouseMove(e) {
   for (const card of cards) {
      const { clientX, clientY } = e;
      const { left, top } = card.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      card.style.setProperty("--mouse-x", px(x));
      card.style.setProperty("--mouse-y", px(y));
   }
}

/**
 * @param {number} value
 * @returns {string}
 */

function px(value) {
   return `${value}px`;
}

/**
 * @param {boolean} isChecked
 */

function toggleAfterDisplay(isChecked) {
   if (isChecked) {
      setAfterDisplay("inline");
   } else {
      setAfterDisplay("none");
   }
}

/**
 * @param {"inline" | "none"} value
 */

function setAfterDisplay(value) {
   cardsWrapper.style.setProperty("--after-display", value);
}

toggleAfterDisplay(checkBox.checked);

checkBox.addEventListener("input", (e) => toggleAfterDisplay(e.target.checked));
