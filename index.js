function end(e) {
    console.log(e);
    console.log("trigger end");
}

document.getElementById("box").addEventListener("transitionend", end, true);