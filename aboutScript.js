const textEl2 = document.getElementById('about-text')
const abouttext = 'I am full stack web developer ,I enjoy building eveything from small business site  to rich interactive web apps.If you are an employer or want making website we can touch with me!'
let idx1 = 1
let speed= 100;

writeAboutText()

function writeAboutText() {
    textEl2.innerText = abouttext.slice(0, idx1)

    idx1++

    if(idx1 > abouttext.length) {
        idx1 = 1
    }

    setTimeout(writeAboutText, speed)
}