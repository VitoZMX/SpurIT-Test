const showCollapse = document.getElementsByClassName('collapsible__action--visible')[0]
const hideCollapse = document.getElementsByClassName('collapsible__action--hidden')[0]
const anim = document.getElementsByClassName('collapsible__content')[0].animate(
    {
        height: ["0px", "200px"],
        width: ['200px','200px'],
        background: "rgba(255,103,0,0.52)"
    },
    {duration: 250, fill: "both", easing: "ease-out"}
)

console.log(anim)
console.log(showCollapse)
console.log(hideCollapse)

hideCollapse.style.display = "none"


showCollapse.addEventListener('click', () => {
    anim.reverse();
})