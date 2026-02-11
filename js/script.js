let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let h = document.querySelector(".h")
let m = document.querySelector(".m")
let s = document.querySelector(".s")

function clock() {
    let date = new Date()
    let hour = new Date().getHours()
    let minut = new Date().getMinutes()
    let second = new Date().getSeconds()

    minutes.textContent = minut
    if (10 > hour) {
        hours.textContent = `0${hour}`
    } else {
        hours.textContent = hour
    }
    if (10 > minut) {
        minutes.textContent = `0${minut}`
    } else {
        minutes.textContent = minut
    }
    s.style.transform = `rotate(${second * 6}deg)`
    m.style.transform = `rotate(${minut * 6}deg)`
    h.style.transform = `rotate(${hour * 6}deg)`

    setTimeout(() => {
        clock()
    }, 1000);
}
clock()

let tabsItem = [...document.querySelectorAll(".tabsItem")]
let tabsContentItem = [...document.querySelectorAll(".tabsContentItem")]
tabsItem.forEach((item, i) => {
    item.addEventListener("click", () => {
        if (i == 0) {
            tabsItem[0].classList.add("active")
            tabsItem[1].classList.remove("active")
            tabsContentItem[0].classList.add("active")
            tabsContentItem[1].classList.remove("active")
        } else {
            tabsItem[1].classList.add("active")
            tabsItem[0].classList.remove("active")
            tabsContentItem[1].classList.add("active")
            tabsContentItem[0].classList.remove("active")
        }
    })

})

let stopwatchMseconds = document.querySelector(".stopwatch__mseconds")
let stopwatchSeconds = document.querySelector(".stopwatch__seconds")
let stopwatchMinutes = document.querySelector(".stopwatch__minutes")
let stopwatchBtn = document.querySelector(".stopwatch__btn")

let stop;


function watchTimer() {
    stop = setInterval(() => {
        stopwatchMseconds.textContent++

        if (stopwatchMseconds.innerHTML >= 59) {
            stopwatchSeconds.textContent++
            stopwatchMseconds.textContent = 0
        }
        if (stopwatchSeconds.innerHTML >= 59) {
            stopwatchMinutes.textContent++
            stopwatchSeconds.textContent = 0
        }
    }, 15)
}
stopwatchBtn.addEventListener("click", () => {
    if (stopwatchBtn.textContent == "start") {
        watchTimer();
        stopwatchBtn.textContent = "stop"
        tabsLinkSpan.classList.add("active")
    } else if (stopwatchBtn.textContent == "stop") {
        clearInterval(stop)
        stopwatchBtn.textContent = "clear"
        tabsLinkSpan.classList.add("active_clear")
    } else if (stopwatchBtn.textContent == "clear") {
        stopwatchMinutes.textContent = 0
        stopwatchSeconds.textContent = 0
        stopwatchMseconds.textContent = 0
        stopwatchBtn.textContent = "start"
        tabsLinkSpan.classList.remove("active_clear")
        tabsLinkSpan.classList.remove("active")
    }
})
