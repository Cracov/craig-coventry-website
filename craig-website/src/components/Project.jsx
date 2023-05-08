import React from 'react';
import projects from '/src/data/project.js';
import ProjectItem from './ProjectItem';
import Title from './Title';

function Project() {
   return (
      <div className="mb-7 flex flex-col md:flex-row items-center justify-center">
         <div className="w-full">
            <Title>Projects<br /></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
               {projects.map(project => (
                  <ProjectItem key={project.title}
                     imgUrl={project.imgUrl}
                     title={project.title}
                     stack={project.stack}
                     link={project.link}
                  />
               ))}
            </div>
         </div>
      </div>
   )
}

export default Project;