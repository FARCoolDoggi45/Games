const GENRES = [
    'Shooter',
    'Strategy',
    'Action',
    'Fighting'
];

const PUBLISHERS = [
    {
        firstName:' Arrowhead',
        lastName: 'Game Studios'
    },
    {
        firstName: 'Rockstar',
        lastName: 'Games'
    },
    {
        firstName: 'Bethesda',
        lastName: 'Softworks'
    }
];

const games = [
    {
        title: 'Helldivers 2',
        genres: [
            GENRES[0],
            GENRES[1],
            GENRES[2],
            GENRES[3]
        ],
        publishers: PUBLISHERS[0],
        date: 2024
    },
    {
        title: 'Red Dead Redemption 2 ',
        genres: [
            GENRES[0],
            GENRES[2],
            GENRES[3]
        ],
        publishers: PUBLISHERS[1],
        date: 2016
    },
    {
        title: 'Doom Eternal',
        genres: [
            GENRES[0],
            GENRES[1],
            GENRES[3]
        ],
        publishers: PUBLISHERS[2],
        date: 2018
    }
];

renderCardList(games)
