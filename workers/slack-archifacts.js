addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

const facts = [
    'Although construction of the Notre Dame Cathedral in Strasbourg started in 1015, it was not until 1439 that the spire was completed.',
    'During a severe windstorm or rainstorm the Empire State Building may sway several feet to either side.',
    "England's Stonehenge is 1500 years older than Rome's Colosseum.",
    'Evard Ericksen sculpted “The Little Mermaid” statue which is located in Copenhagen harbor.',
    'Frederic-August Bartholdi sculpted The Statue of Liberty.',
    'Hoover Dam is 726 feet tall and 660 feet thick at its base. Enough rock was excavated in its construction to build the Great Wall of China. ',
    'If any of the heads on Mt. Rushmore had a body, it would be nearly 500 feet tall.',
    "On July 28th, 1945, a US Army bomber crashed into the 79th floor of New York's Empire State Building, killing 14 people.",
    'The Eiffel Tower is 984 feet high.',
    'The Eiffel Tower receives a fresh coat of 300 tons of reddish-green paint every seven years.',
    'The estimated weight of the Great Pyramid of Egypt is 6,648,000 tons.',
    'The great Gothic cathedral of Milan was started in 1386, and wasn’t completed until 1805.',
    'The Hoover Dam was built to last 2,000 years. The concrete in it will not even be fully cured for another 500 years.',
    'The largest movie theater in the world, Radio City Music Hall in New York City, opened in December, 1932. It originally had 5,945 seats',
    'The Taj Mahal was commissioned in 1630 by Shah Jehan to honor his wife Mumtaz, who died in childbirth.',
    "The world's largest art gallery is the Winter Palace and Hermitage in St. Petersburg, Russia. Visitors would have to walk 15 miles to see the 322 galleries which house nearly 3 million works of art.",
    "The world's largest Gothic cathedral is in new York City. It is the Cathedral of St. John the Divine on Amsterdam Avenue and 112th Street. The cathedral measures 601 feet long, 146 feet wide, and has a transept measuring 320 feet from end to end.",
    'There are 1,792 steps to the top of the Eiffel Tower.',
    'There are 403 steps from the foundation to the top of the torch in the Statue of Liberty.',
    'Work on St. Peter’s Basilica, Rome, began in 1506. Construction took over a century, reaching completion in 1612.'
];

async function handleRequest(request) {
    const init = {
        status: 200,
        headers: {
            'content-type': 'application/json;charset=UTF-8'
        }
    };

    return new Response(
        JSON.stringify({
            text: facts[Math.floor(Math.random() * facts.length)],
            response_type: 'in_channel'
        }),
        init
    );
}
