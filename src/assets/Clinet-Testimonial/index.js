import InvertedComma from './InvertedComma.svg'
import Client1 from './Client1.svg'
import Client2 from './Client2.svg'
import Client3 from './Client3.svg'


export { InvertedComma, Client1, Client2, Client3}

export const ClientDetails = [
    {
        id: 1,
        name: 'Robert Fox',
        role: 'Customer',
        images: Client3,  // Use the imported variable instead of the string
        description: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
        rating: 5
    },
    {
        id: 2,
        name: 'Eleanor Pena',
        role: 'Customer',
        images: Client2,  // Use the imported variable instead of the string
        description: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
        rating: 5
    },
    {
        id: 3,
        name: 'Dianne Russell',
        role: 'Customer',
        images: Client1,  // Use the imported variable instead of the string
        description: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
        rating: 5
    },
];
