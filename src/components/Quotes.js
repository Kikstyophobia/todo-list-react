import { React, useEffect } from 'react';

export default function Quotes() {

  const quotes = [
    {
      quote: "Work gives you meaning and purpose and life is empty without it.",
      name: "Stephen Hawking"
    },
    {
      quote: "There are two vices much darker and more serious than the rest: lack of persistence and lack of self-control.",
      name: "Marcus Aurelius"
    }, 
    { quote: "The only way to achieve greatness in life is to have patience, consistency, and discipline.",
      name: "David Goggins"
    },
    {
      quote: "Day by day, what you think and what you do is who you become.",
      name: "Heraclitus",
    },
    {
      quote: "No man was ever wise by chance.",
      name: "Seneca"
    },
    {
      quote: "We are what we repeatedly do. Excellence, therefore, is not an act, but a habit.",
      name: "Aristotle"
    },
    {
      quote: "Everyone must choose one of two pains: The pain of discipline or the pain of regret.",
      name: "Unknown"
    }, 
    {
      quote: "I am not what happened to me; I am what I choose to become.",
      name: "Carl Jung"
    },
    {
      quote: "The wisest people follow their own direction.",
      name: "Euripides"
    }, 
    {
      quote: "Overnight success takes decades of daily work.",
      name: "Paulo Coelho"
    },
    {
      quote: "Without commitment you'll never start. Without consistency you'll never finish.",
      name: "Denzel Washington"
    },
    {
      quote: "Difficulty is what wakes up the genius.",
      name: "Nassim Nicholas Taleb"
    },
    {
      quote: "Success is stumbling from failure to failure with no loss of enthusiasm.",
      name: "Winston Churchill"
    },
    {
      quote: "Absorb what is useful, reject what is useless, add what is specifically your own.",
      name: "Bruce Lee"
    },
    {
      quote: "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.",
      name: "Stephen King"
    },
    {
      quote: "Action is the foundational key to all success.",
      name: "Pablo Picasso"
    },
    {
      quote: "He who is not courageous enough to take risks will accomplish nothing in life.",
      name: "Muhammad Ali"
    },
    {
      quote: "Real integrity is doing the right thing, knowing that nobody's going to know whether you did it or not.",
      name: "Oprah Winfrey"
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      name: "Walt Disney"
    },
    {
      quote: "If you spend too much time thinking about a thing, you'll never get it done.",
      name: "Bruce Lee"
    },
    {
      quote: "Sometimes, things may not go your way, but the effort should be there every single night.",
      name: "Michael Jordan"
    }, 
    {
      quote: "Make the best use of what is in your power, and take the rest as it happens.",
      name: "Epictetus"
    }
  ];
  
  function randomizer(quotes) {
    let index = Math.floor(Math.random() * (quotes.length));
    return [quotes[index].quote, quotes[index].name];
  }
  
  const quote = randomizer(quotes);
  
  return (
    <div className='quote-box'>
      <h2 className='quote'>"{quote[0]}"</h2>
      <h2 className='name'>- {quote[1]}</h2>
    </div>
  )

}

