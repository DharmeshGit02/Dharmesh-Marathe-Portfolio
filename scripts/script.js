const projectLinks = {
    "1": "https://github.com/DharmeshGit02/EDSRx2_Using_PyTorch.git",
    "2": "https://github.com/DharmeshGit02/Online-Games-Strore-React.git",
    "3": "https://github.com/DharmeshGit02/Food-Recipe-App.git",
    "4": "https://github.com/DharmeshGit02/HTML_CSS_JS_WEATHER_APP.git",
    "5": "https://github.com/DharmeshGit02/Student-ID-Generation-System-JAVA.git"
}


function scrollToSection(event, sectionId) {
    event.preventDefault();
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

function downloadResume(event) {
    event.preventDefault()
    // URL of the PDF file
    const pdfUrl = '../resume/Dharmesh Marathe Resume.pdf'

    // Create an anchor element and set the attributes
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Dharmesh Marathe Resume.pdf'; // The name the file will be downloaded as

    // Append the link to the body (necessary for Firefox)
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
}

function openMobileNavbar() {
    const respNavbar = document.querySelector(".responsive-navbar")
    if (Number(respNavbar.getAttribute("data-is-open")) === 0) {
        respNavbar.style.display = "flex"; // Make it display flex before adding class for transition
        setTimeout(() => {
            respNavbar.classList.add("responsive-navbar-active");
        }, 10); // Small timeout to ensure display property is applied before transition starts
        respNavbar.setAttribute("data-is-open", "1");
    } else {
        respNavbar.classList.remove("responsive-navbar-active");
        respNavbar.setAttribute("data-is-open", "0");
        setTimeout(() => {
            respNavbar.style.display = "none"; // Hide it after transition ends
        }, 500); // Timeout matches the transition duration
    }
}


function redirectToGithubProject(event) {
    const projectId = event.target.getAttribute("data-project-id")
    console.log(projectLinks[projectId])
    location.href = projectLinks[projectId]
}

document.querySelector(".copyright-year").innerHTML = new Date().getFullYear()
