import React from 'react';
import './Experience.css'

const Experience = () => {
  return (
    <div className='experience'>
      <h2>Experience</h2>
      <h3>Software Engineer I, NCR Corporation</h3>
      <p>Jul 2022 – Aug 2023</p>
      <ul>
        <li>Spearheaded the development of microservices-based data extraction and ingestion workflows, delivering cleansed and enriched transaction data to over 18 million Digital Banking customers. Managed project timelines through close collaboration with vendors and clients, providing updates, resolving challenges, and proposing innovative solutions</li>
        <li>Led the design and implementation of RESTful APIs for seamless integration between microservices, optimizing data flow and enhancing scalability. Facilitated the migration of the Digital Banking department to Google Cloud Platform (GCP), ensuring robust performance and reliability of API endpoints.</li>
        <li>Demonstrated proficiency in maintaining and deploying diverse system components, leveraging Continuous Integration/Continuous Deployment (CI/CD) pipelines, ensuring high code quality through thorough code reviews, comprehensive unit testing, and efficient coding practices.</li>
        <li>Executed complex data transformations using Apache Beam, resulting in a 25% enhancement in data processing efficiency. Additionally, addressed critical production issues, achieving a 20% reduction in downtime and boosting team productivity by 15%.</li>
     
      </ul>

      <h3>Software Intern, NCR Corporation</h3>
      <p>Jan 2022 – Jun 2022</p>
      <ul>
        <li>Led the migration of a key feature from C++ to cloud-based microservices using JAVA Spring, optimizing operational efficiency and reducing costs, which aligned with current cloud technology trends and improved application responsiveness by 30%.</li>
        <li>Identified and resolved a critical software bug, proactively preventing potential service disruptions and ensuring continuous customer access. Implemented an enhanced error-checking mechanism that reduced similar issues by 20% over the subsequent quarter.</li>
  
      </ul>
    </div>
  );
};

export default Experience;
