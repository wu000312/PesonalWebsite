let currentProject = 1;
const projectCount = 6; 

function showProject(projectNum) {
    for (let i = 1; i <= projectCount; i++) {
        document.getElementById('project' + i).style.display = 'none';
    }
    document.getElementById('project' + projectNum).style.display = 'block';
    currentProject = projectNum;
}

function previousProject() {
    /*if (currentProject === 1) {
        //When 1st project shown, pressing 'previou' could lead to the last page.
        showProject(projectCount);
    } else*/ if (currentProject > 1) {
        showProject(currentProject - 1);
    }
}

function nextProject() {
    if (currentProject < projectCount) {
        showProject(currentProject + 1);
    }
//From the last one to the first project.
    else {
        showProject(1);
    }
}

showProject(currentProject);
