import React from 'react';
import timelineData from '../data/Timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';

function Timeline() {
   return (
      <div className="flex flex-col md:flex-row justify-center my-20\">
         <div className="w-full">
            <Title>Timeline</Title>
            {timelineData.map(item => (
               <TimelineItem key={item.title}
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