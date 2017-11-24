const getRandomPrice = () => Math.floor(Math.random() * 99 + 1)

const data = [
    {
        id: 1,
        title: 'Crawling bar to bar through Wynwood never ',
        sectionId: 2,
        categoryId: 1,
        tag: 'tag1',
        isFav: false,
        price: getRandomPrice(),
        imageUrl: 'https://a0.muscache.com/im/pictures/94fcdecb-151f-4984-a367-44ccb3b67d3b.jpg?aki_policy=medium',
    },
    {
        id: 2,
        title: 'Sip Mojitos & Learn to Salsa to Live Tropical Band',
        sectionId: 2,
        categoryId: 1,
        tag: 'tag2',
        isFav: false,
        price: getRandomPrice(),
        imageUrl: 'https://a0.muscache.com/im/pictures/9a41f1ac-c629-4c4f-a5b6-0a3c2a84a62e.jpg?aki_policy=large',
    },
    {
        id: 3,
        title: 'Pedal to the sights with a fitness trainer',
        sectionId: 3,
        categoryId: 2,
        tag: 'tag3',
        isFav: false,
        price: getRandomPrice(),
        imageUrl: 'https://a0.muscache.com/im/pictures/23a10733-d4b9-4d32-be46-ffcca5974fb7.jpg?aki_policy=large',
    },
    {
        id: 4,
        title: 'Sunset and Night Paddle with Happy Hour',
        sectionId: 3,
        categoryId: 2,
        tag: 'tag1',
        isFav: false,
        price: getRandomPrice(),
        imageUrl: 'https://a0.muscache.com/im/pictures/807c052f-c4b0-468a-a5bd-491b667dadbb.jpg?aki_policy=large',
    },
    {
        id: 5,
        title: 'Explore Little Havanas Culture, Food & Traditions',
        sectionId: 1,
        categoryId: 3,
        tag: 'tag4',
        isFav: false,
        price: getRandomPrice(),
        imageUrl: 'https://a0.muscache.com/im/pictures/dad3cd3f-4324-4941-b3bb-658072f4caec.jpg?aki_policy=large',
    },
    {
        id: 6,
        title: 'Cycle Beautiful Venetian Causeway to Miami Beach',
        sectionId: 1,
        categoryId: 3,
        tag: 'tag3',
        isFav: false,
        price: getRandomPrice(),
        imageUrl: 'https://a0.muscache.com/im/pictures/29eeb867-9b9b-4f50-a280-d489d9c61410.jpg?aki_policy=large',
    }
]

export default data