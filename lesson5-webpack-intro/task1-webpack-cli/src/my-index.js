// file path: src/my-index.js

import fetchUser from './profile/gateway.js';
import { printProfile } from './profile/index.js';

fetchUser('facebook').then(userData =>
    printProfile({
        name: userData.name,
        company: userData.location,
    }),
);
