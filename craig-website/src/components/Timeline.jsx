import React from 'react';
import timelineData from '../data/Timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';

function Timeline() {
   return (
      <div className="flex flex-col md:flex-row justify-center my-20\">
         <div className="w-full md:w-7/12">
            <Title>Timeline</Title>
            {timelineData.map(item => (
               <TimelineItem 
                  year={item.year}
                  title={item.title}
                  duration={item.duration}
                  details={item.details}
                  logo={item.logo}
               />
            ))}
         </div>
      </div>
   )
}

export default Timeline;