import React, { useState } from 'react'
import '../components/TinderCards.css'
import TinderCard from "react-tinder-card";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://futureoflife.org/wp-content/uploads/2020/08/elon_musk_royal_society-1024x1024.jpg",
        },
        {
            name: "Jeff Bezos",
            url: "https://pbs.twimg.com/profile_images/1591558315254890500/ETIHb4Nl_400x400.jpg",
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete);
      };
      
      const outofFrame = (name) => {
        console.log(name + ' left the screen');
      };

  return (
    <div className='tinderCard'>
        <div className='tindercards'>
            {people.map((person) => (
               
                <TinderCard 
                key={person.name}
                onSwipe={(dir) => swiped(dir, person.name)} 
                onCardLeftScreen={() => outofFrame(person.name)} 
                preventSwipe={['up', 'down']}>
                    <div
                        style={{backgroundImage: `url(${person.url})` }}
                        className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
                
            ))} 
        </div>       
    </div>
  )
}

export default TinderCards