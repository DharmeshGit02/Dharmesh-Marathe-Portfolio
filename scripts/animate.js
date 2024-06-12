document.addEventListener("DOMContentLoaded", (event) => {
    //header elemets
    const navbar = document.getElementsByTagName("nav")[0]
    const navbarBtns = document.querySelectorAll('.navbar-buttons')
    const navbarObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                anime({
                    targets:navbar,
                    opacity:1,
                    easing:"linear",
                    duration:1000,
                })
                anime({
                    targets:navbarBtns,
                    translateY:[-50, 0],
                    easing:'easeInCubic',
                    opacity:1,
                    duration:1500,
                    delay:anime.stagger(150)
                })
                navbarObserver.unobserve(entry.target)
            }
        })
    }, {threshold:1.0})

    navbarObserver.observe(navbar)


    const sectionHeadingObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            console.log(entry)
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: 1,
                    translateX: [100, 0],
                    easing: "linear",
                    duration: 500
                })
                sectionHeadingObserver.unobserve(entry.target)
            }
        })
    }, {
        threshold: 0.5
    })

    const sectionHeadings = document.querySelectorAll(".section-heading")
    sectionHeadings.forEach(heading => {
        sectionHeadingObserver.observe(heading)
    })


    const sectionDividerObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: 1,
                    translateY: [100, 0],
                    easing: "linear",
                    duration: 500
                })
                sectionDividerObserver.unobserve(entry.target)
            }
        })
    }, {
        threshold: 0.9
    })

    const sectionDividers = document.querySelectorAll(".divider")
    sectionDividers.forEach(divider => {
        sectionDividerObserver.observe(divider)
    })


    //Landing section elements
    const greetingText = document.querySelector(".greeting-text")
    const titleText = document.querySelector(".title-text-h1")
    const nameText = document.querySelector(".name-text")
    const resumeSection = document.querySelector('.download-resume-section')


    function landingSectionAnimation() {
        const timeline = anime.timeline({
            easing: "easeInCubic",
            duration: 5000
        })
        timeline.add({
            targets: greetingText,
            opacity: 1,
            duration: 1000,
            delay: 10,
        })
            .add({
                targets: nameText,
                opacity: 1,
                top: 0,
                delay: 10,
                duration: 1000,
            })
            .add({
                targets: titleText,
                opacity: 1,
                top: 0,
                delay: 10,
                duration: 1000,
            })
            .add({
                targets: resumeSection,
                opacity: 1,
                delay: 100,
                duration: 500
            })
    }


    //about-me section elements
    const descAndOthersContainer = document.querySelector(".desc-others-container")
    const progressBarContainers = document.querySelectorAll(".progress-bar-container")
    const skillPercs = document.querySelectorAll('.skill-perc')
    const progressBars = document.querySelectorAll(".progress-bar-container progress")
    const othersListItems = document.querySelectorAll(".others-list-item")
    const skillsValues = [90, 80, 70, 70, 60, 75]

    const aboutMeObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: 1,
                    translateY: [100, 0],
                    easing: "linear"
                })
                anime({
                    targets:othersListItems,
                    easing:"linear",
                    opacity:1,
                    translateY:[-50, 0],
                    delay:anime.stagger(200)
                })
                aboutMeObserver.unobserve(entry.target)
            }
        })
    }, { threshold: 0.5 })

    aboutMeObserver.observe(descAndOthersContainer)

    const progressBarContainersObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: progressBarContainers,
                    opacity: 1,
                    easing: "linear",
                    delay: anime.stagger(200)
                })
                for(let i = 0; i < skillsValues.length; i++) {
                    anime({
                        targets:skillPercs[i],
                        innerHTML: [0, skillsValues[i]],
                        easing:"linear",
                        duration:2000,
                        delay:500,
                        round:1
                    })
                    anime({
                        targets:progressBars[i],
                        value:[0, skillsValues[i]],
                        easing:"linear",
                        duration:2000,
                        delay:500
                    })
                }
                progressBarContainersObserver.unobserve(entry.target)
            }
        })
    }, { threshold: 0.75 })

    progressBarContainers.forEach(container => {
        progressBarContainersObserver.observe(container)
    })

    //experience elements
    const experienceContainers = document.querySelectorAll(".experience-container")
    const experiencesContainer = document.querySelector(".experiences-container")
    const experienceSectionOberserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                anime({
                    targets:experienceContainers,
                    easing: 'easeInCubic',
                    opacity:1,
                    translateY:[100, 0],
                    // scale:[0.6, 1.0],
                    duration:1000,
                    delay:anime.stagger(100)
                })
                experienceSectionOberserver.unobserve(entry.target)
            }
        })
    }, {threshold: 0.1})

    experienceSectionOberserver.observe(experiencesContainer)


    //Education elements
    const verticalTimeline = document.querySelector(".timeline-vertical-line")
    const timelineListContainer = document.querySelector(".timeline-list-container")
    const timelineListItems = document.querySelectorAll(".timeline-list-item")
    const timelineOberserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                anime({
                    targets:entry.target,
                    opacity:1,
                    translateX:[100, 0],
                    easing:"linear",
                    duration:500
                })
                timelineOberserver.unobserve(entry.target)
            }
        })
    }, {threshold: 0.5})

    timelineListItems.forEach(item => {
        timelineOberserver.observe(item)
    })

    const timelineListContainerObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                anime({
                    targets:verticalTimeline,
                    height:[0, 654],
                    easing:"linear",
                    duration:2000
                })
                timelineListContainerObserver.unobserve(timelineListContainer)
            }
        })
    })
    timelineListContainerObserver.observe(timelineListContainer)

    //projects elements
    const projectsContaienr = document.querySelector(".projects-container")
    const projectPreviewContainer = document.querySelectorAll(".project-preview-container")
    const projectsText = document.querySelector(".projects-text")

    const projectsContaienrObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                anime({
                    targets:projectPreviewContainer,
                    easing:"easeInCubic",
                    scale:[0.8, 1.0],
                    opacity:1,
                    duration:1000,
                    delay:anime.stagger(200)
                })
                anime({
                    targets:projectsText,
                    opacity:1,
                    easing:"linear",
                    duration:500,
                    translateY:[-20, 0]
                })
                projectsContaienrObserver.unobserve(entry.target)
            }
        })
    }, {threshold: 0.3})

    projectsContaienrObserver.observe(projectsContaienr)

    //tree elements
    const contactText = document.querySelector("#contacts-text")
    const svgContainer = document.querySelector(".svg-container")
    const container = document.querySelector(".container")
    const socialBoxes = document.querySelectorAll(".social-box")

    const treeSVGObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                anime({
                    targets:svgContainer,
                    easing:"linear",
                    duration:1000,
                    opacity:1
                })
                anime({
                    targets:contactText,
                    easing:"linear",
                    duration:1000,
                    opacity:[0, 1],
                    translateY:[-50, 0]
                })
                anime({
                    targets:socialBoxes,
                    easing:"easeInCubic",
                    duration:500,
                    opacity:1,
                    delay:anime.stagger(200)
                })
                treeSVGObserver.unobserve(entry.target)
            }
        })
    }, {threshold:0.5})

    treeSVGObserver.observe(container)

    landingSectionAnimation()
})