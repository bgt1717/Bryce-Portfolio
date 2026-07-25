import React from "react";
import ProjectItem from "./ProjectItem";
import ProjectItemPic from "../assets/gantt.jpg";
import ProjectItemPic2 from "../assets/CalGuru.jpg";
import ProjectItemPic3 from "../assets/NotesApp.jpg";
import ProjectItemPic4 from "../assets/Blog.jpg";

function Projects() {
  return (
    <section id="Projects" className="section section-alt">
      <div className="section-inner">
        <h1 className="section-title">Projects</h1>

        <div className="projects-grid">
          <ProjectItem
            img={ProjectItemPic3}
            title="Notes Hub"
            stack="React, Node.js, Express, MongoDB"
            bullets={[
              "Built a CRUD-based notes application with a relational database backend.",
              "Designed REST endpoints to support data persistence and user interactions.",
            ]}
            githubUrl="https://github.com/bgt1717/CRUD_Project_VB"
            websiteDemo="https://notesapp-s8ix.onrender.com/"
          />
          <ProjectItem
            img={ProjectItemPic4}
            title="Blog Application"
            stack="React, Node.js, Express, MongoDB"
            bullets={[
              "Developed a full-stack blog application powered by a relational database backend.",
              "Architected scalable backend services that handle CRUD operations with client–server communication.",
            ]}
            githubUrl="https://github.com/bgt1717/MernBlog2"
            websiteDemo="https://townsendblog.onrender.com/"
          />
                    <ProjectItem
            img={ProjectItemPic}
            title="Gantt Chart Application"
            stack="React, Node.js, Express, MongoDB"
            bullets={[
              "Designed and implemented a full-stack task management system with user authentication.",
              "Built RESTful APIs to support real-time project updates and persistent data storage.",
            ]}
            githubUrl="https://github.com/bgt1717/GantAPP"
            websiteDemo="https://ganttapp-pe5h.onrender.com/"
          />

          <ProjectItem
            img={ProjectItemPic2}
            title="Calorie Guru"
            stack="React, Node.js, Express"
            bullets={[
              "Developed a full-stack calorie tracking application.",
              "Implemented user authentication and data persistence.",
            ]}
            githubUrl="https://github.com/bgt1717/CalGuru"
            websiteDemo="https://calorie-guru.onrender.com/"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;