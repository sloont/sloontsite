const projects = document.getElementsByClassName("single-project");

for (let project of projects) {
    project.addEventListener("click", () => {
        project.classList.toggle("selected-project");

        for (let others of projects) {
            if (others != project) {
                try {
                    others.classList.remove("selected-project");
                } catch (TypeError) {

                }
            }
        }

    })
}


