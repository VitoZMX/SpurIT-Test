const showCollapse = document.getElementsByClassName('collapsible__action--visible')[0]
const hideCollapse = document.getElementsByClassName('collapsible__action--hidden')[0]
const anim = document.getElementsByClassName('collapsible__content')[0].querySelector('p').animate(
    {
        height: ["0px", "200px"],
        width: ['200px', '200px'],
        opacity: ['0', "1"],
        background: "rgba(255,103,0,0.52)",
    },
    {duration: 300, fill: "both", easing: "ease-out"}
)

showCollapse.style.display = "none"

hideCollapse.addEventListener('click', () => {
    if (anim.playState === "paused") {
        anim.play();
    } else {
        anim.reverse();
    }
    showCollapse.style.display = "block"
    hideCollapse.style.display = "none"
    console.log("клик показать")
})

showCollapse.addEventListener('click', () => {
    anim.reverse();
    hideCollapse.style.display = "block"
    showCollapse.style.display = "none"
    console.log("click скрыть")
})

console.log(anim)
console.log(showCollapse)
console.log(hideCollapse)
console.log(anim.playState)