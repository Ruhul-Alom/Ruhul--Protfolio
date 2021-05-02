const projects= document.querySelectorAll('.signleProject')

projects.forEach( project=> {
    project.addEventListener('click', () => {
        removeActiveClasses()
        project.classList.add('active')
    })
})

function removeActiveClasses() {
    project.forEach(project => {
        project.classList.remove('active')
    })
}