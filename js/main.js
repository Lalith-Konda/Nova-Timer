import * as Timer from "./timer.js";
import { updateDisplay } from "./ui.js";

function toggleTimer() {
    if (Timer.running()) {
        Timer.stop();
    } else {
        Timer.start(updateDisplay);
    }
}

// Spacebar for PCs/laptops
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        event.preventDefault(); // stops page scrolling
        toggleTimer();
    }
});

// Touch for mobiles
document.addEventListener("touchstart", (event) => {
    // Only trigger if it's a single tap, not multi-touch
    if (event.touches.length === 1) {
        toggleTimer();
    }
});
