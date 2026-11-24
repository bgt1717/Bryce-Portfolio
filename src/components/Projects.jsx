import React from "react";
import ProjectItem from "./ProjectItem";
import ProjectItemPic2 from "../assets/Retail.png";
import ProjectItemPic3 from "../assets/NotesApp.png";
import ProjectItemPic4 from "../assets/blog.png";
import Tableau from "../assets/Tableau.png";

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
              "Shares career experiences, professional development, and insights from my transition into data analytics and software development.",
              "Document technical challenges, development processes, and lessons learned through hands-on projects."
            ]}
            githubUrl="https://github.com/bgt1717/MernBlog2"
            websiteDemo="https://townsendblog.onrender.com/"
          />
            <ProjectItem
            img={ProjectItemPic2}
            title="Retail Sales Dashboard - Analytics Project"
            stack="Python, Streamlit, Pandas, Plotly"
            bullets={[
              "Implemented data cleaning and transformation techniques to handle missing values, standardize data, and prepare raw sales data for accurate analysis.",
              "Created interactive visualizations and filters to analyze revenue by product category, customer age group, payment method, and purchasing behavior.",
              "Applied exploratory data analysis, Pandas aggregations, and KPI calculations to identify sales trends, uncover customer insights, and support data-driven decision-making."
            ]}
            githubUrl="https://github.com/bgt1717/Retail-Sales-Dashboard"
            websiteDemo="https://retail-sales-dashboard-1.streamlit.app/"
          />
          <ProjectItem
            img={Tableau}
            title="Computer Sales Dashboard - Analytics Project"
            stack="Tableau, Data Visualization, Business Intelligence"
            bullets={[
              "Built an interactive Tableau dashboard featuring sales KPIs, visual reports, and dynamic filters to explore computer sales data.",
              "Analyzed sales performance across product categories and products to identify revenue trends, top-performing products, and areas of opportunity.",
              "Applied business intelligence and data visualization techniques to highlight key findings and support data-driven decisions related to product performance and sales strategy."
            ]}
            websiteDemo="https://public.tableau.com/app/profile/bryce.townsend7380/viz/ComputersDashboard/Dashboard1?publish=yes"
          />
            <ProjectItem
            img={ProjectItemPic3}
            title="Notes Hub - Web Application"
            stack="React, Node.js, Express, MongoDB"
            bullets={[
              "Built a responsive React application with secure user authentication, allowing users to register, log in, and manage personal notes.",
              "Developed RESTful APIs using Node.js and Express to handle note creation, editing, deletion, and retrieval.",
              "Designed MongoDB data models to store user accounts and notes, implementing user-specific data access and CRUD functionality.",
              "Implemented an organized note-management interface with folder organization and a streamlined editing experience to improve usability and productivity."
            ]}
            githubUrl="https://github.com/bgt1717/CRUD_Project_VB"
            websiteDemo="https://notesapp-s8ix.onrender.com/"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;