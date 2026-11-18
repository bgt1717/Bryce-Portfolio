import React from "react";
import ProjectItem from "./ProjectItem";
import ProjectItemPic2 from "../assets/Retail.png";
import ProjectItemPic3 from "../assets/NotesApp.jpg";
import ProjectItemPic4 from "../assets/Blog.jpg";

function Projects() {
  return (
    <section id="Projects" className="section section-alt">
      <div className="section-inner">
        <h1 className="section-title">Projects</h1>

        <div className="projects-grid">
          
          <ProjectItem
            img={ProjectItemPic4}
            title="Development Blog"
            stack="React, Node.js, Express, MongoDB, Cloudinary"
            bullets={[
              "Built a full-stack blog with secure user authentication, post management, and image uploads powered by Cloudinary.",
              "Designed RESTful APIs and MongoDB data models with Cloudinary for efficient cloud-based image storage and delivery.",
            ]}
            githubUrl="https://github.com/bgt1717/MernBlog2"
            websiteDemo="https://townsendblog.onrender.com/"
          />
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
            img={ProjectItemPic2}
            title="Retail Sales Dashboard"
            stack="Python, Streamlit, Pandas, Plotly"
            bullets={[
              "Developed an interactive retail sales analytics dashboard using Python, Streamlit, Pandas, and Plotly to visualize revenue, transaction volume, and product category performance.",
              "Implemented data cleaning and transformation techniques to prepare raw sales data for analysis, enabling accurate insights and decision-making.",
            ]}
            githubUrl="https://github.com/bgt1717/Retail-Sales-Dashboard"
            websiteDemo="https://retail-sales-dashboard-1.streamlit.app/"
          />
          
        </div>
      </div>
    </section>
  );
}

export default Projects;