import React from 'react';
import project from '../data/project';
import ProjectItem from './ProjectItem';
import Title from './Title';

function Project() {
   return (
      <div className="flex flex-col md:flex-row justify-center my-20">
         <div className="w-full">
            <Title>Projects<br /></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
               {project.map(projecti => (
                  <ProjectItem
                     imgUrl={projecti.imgUrl}
                     title={projecti.title}
                     stack={projecti.stack}
                     link={projecti.link}
                  />
               ))}
            </div>
         </div>
      </div>
   )
}

export default Project;