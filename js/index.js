let projectsDiv = document.getElementById("project-grid");

let projects = [
    {
        projectName: "CarFindR Website",
        description: "A car finding website.",
        image: "https://codepen.io/Asa-Siphuma/pen/abXRZdv/image/large.png",
        link: "https://codepen.io/Asa-Siphuma/pen/abXRZdv"
    }, 
    {
        projectName: "Personal Blog",
        description: "A personal blog.",
        image: "img/blog.png",
        link: "https://personal-blog-five-omega.vercel.app/"
    }, 
    {
        projectName: "BeatHub",
        description: "A music streaming website.",
        image: "img/beathub.png",
        link: "https://supaweird0.github.io/BeatHub/PHASE%201/index.html"
    }


];

projectsDiv.innerHTML = "";
projects.forEach((project) => {
    let html = `
        <div class="project-box">
            <a class="project-title" href="${project.link}">
                <img src="${project.image}" alt="${project.projectName}" />
                <p> ${project.projectName} </p>
            </a>
        </div>
    `

    projectsDiv.innerHTML += html;
});

function getCurrentYear() {
    let date = new Date();

    date = date.getFullYear();
    return date;
}