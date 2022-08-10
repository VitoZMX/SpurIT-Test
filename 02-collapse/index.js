const showCollapse = document.getElementsByClassName('collapsible__action--visible')[0]
const hideCollapse = document.getElementsByClassName('collapsible__action--hidden')[0]
const btn = document.getElementsByClassName('collapsible__button')[0]
const container = document.getElementsByClassName('collapsible__content')[0]
const containerText = container.querySelector('p')
const animateStyle = container.animate(
    {
        borderRadius: ['0px', '12px'],
        height: ['0', '90px'], // или auto
        width: ['300px', '300px'],
        transition: ["0.3s", "0.9s"],
        overflow: ['hidden', 'hidden'],
        background: ['rgba(221,0,255,0.67)'],
        marginTop: '10px',
    },
    {duration: 400, fill: "both", easing: "ease-out"},
)

containerText.style.padding = "10px"
containerText.style.margin = "0"
showCollapse.style.display = "none"

animateStyle.pause()

btn.addEventListener('click', () => {

    if (animateStyle.playState === "paused") {
        animateStyle.play()
    } else {
        animateStyle.reverse()
    }

    if (hideCollapse.style.display === "none") {
        hideCollapse.style.display = "block"
        showCollapse.style.display = "none"
    } else {
        hideCollapse.style.display = "none"
        showCollapse.style.display = "block"
    }

})
