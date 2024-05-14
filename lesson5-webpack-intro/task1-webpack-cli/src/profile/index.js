// file path: src/profile/my-index.js

export const printProfile = profileData => {
    const { name, company } = profileData;
    console.log(`${name} from ${company}`);
};
