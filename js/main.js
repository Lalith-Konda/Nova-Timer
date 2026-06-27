import * as Timer from "./timer.js";
import { updateDisplay } from "./ui.js";

const HOLD_TIME = 300;

let state = "IDLE";
let holdTimeout = null;

// ---------- DESKTOP ----------

document.addEventListener("keydown", (event) => {

    if (event.code !== "Space") return;

    event.preventDefault();

    // Ignore repeated keydown events while key is held
    if (event.repeat) return;

    if (state === "IDLE") {

        state = "HOLDING";

        holdTimeout = setTimeout(() => {

            state = "READY";

            console.log("READY");

        }, HOLD_TIME);

    }

    else if (state === "RUNNING") {

        Timer.stop();

        state = "IDLE";

    }

});

document.addEventListener("keyup", (event) => {

    if (event.code !== "Space") return;

    if (state === "HOLDING") {

        clearTimeout(holdTimeout);

        state = "IDLE";

    }

    else if (state === "READY") {

        Timer.start(updateDisplay);

        state = "RUNNING";

    }

});

// ---------- MOBILE ----------

document.addEventListener("touchstart", (event) => {

    if (event.touches.length !== 1) return;

    if (state === "IDLE") {

        state = "HOLDING";

        holdTimeout = setTimeout(() => {

            state = "READY";

            console.log("READY");

        }, HOLD_TIME);

    }

    else if (state === "RUNNING") {

        Timer.stop();

        state = "IDLE";

    }

});

document.addEventListener("touchend", () => {

    if (state === "HOLDING") {

        clearTimeout(holdTimeout);

        state = "IDLE";

    }

    else if (state === "READY") {

        Timer.start(updateDisplay);

        state = "RUNNING";

    }

});
