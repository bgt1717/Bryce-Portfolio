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
              "Built a full-stack note-taking application with secure user authentication and personal note management.",
              "Designed RESTful APIs and MongoDB data models to support creating, editing, deleting, and organizing notes.",
            ]}
            githubUrl="https://github.com/bgt1717/CRUD_Project_VB"
            websiteDemo="https://notesapp-s8ix.onrender.com/"
          />
          <ProjectItem
            img={ProjectItemPic4}
            title="Blog Application"
            stack="React, Node.js, Express, MongoDB, Cloudinary"
            bullets={[
              "Built a full-stack blog with secure user authentication, post management, and image uploads powered by Cloudinary.",
              "Designed RESTful APIs and MongoDB data models with Cloudinary for efficient cloud-based image storage and delivery.",
            ]}
            githubUrl="https://github.com/bgt1717/MernBlog2"
            websiteDemo="https://townsendblog.onrender.com/"
          />
                    <ProjectItem
            img={ProjectItemPic}
            title="Gantt Chart Application"
            stack="React, Node.js, Express, MongoDB"
            bullets={[
              "Created a project management application featuring interactive Gantt charts, project timelines, and task tracking.",
              "Built authenticated REST APIs for managing projects, tasks, and real-time progress updates with persistent data storage.",
            ]}
            githubUrl="https://github.com/bgt1717/GantAPP"
            websiteDemo="https://ganttapp-pe5h.onrender.com/"
          />

          <ProjectItem
            img={ProjectItemPic2}
            title="Calorie Guru"
            stack="React, Node.js, Express, MongoDB"
            bullets={[
              "Developed a full-stack nutrition tracker that allows users to log meals, monitor calories, and track daily macronutrients.",
              "Implemented JWT authentication, meal management, and an interactive dashboard for nutritional insights.",
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