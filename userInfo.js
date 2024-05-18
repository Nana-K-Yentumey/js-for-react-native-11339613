function createUserProfiles(originalNames, modifiedNames) {
    const profiles = [];

    for (let i = 0; i < originalNames.length; i++) {
        const profile = {
            originalName: originalNames[i],
            modifiedName: modifiedNames[i],
            id: i + 1,
        };
        profiles.push(profile);
    }

    return profiles;
}

// Example:
const originalNames = ["Gojo", "Sukuna", "Kenjaku"];
const modifiedNames = ["gojo", "SUKUNA", "kenjaku"];
const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);
// Output:
// [
//   { originalName: 'Gojo', modifiedName: 'gojo', id: 1 },
//   { originalName: 'Sukuna', modifiedName: 'SUKUNA', id: 2 },
//   { originalName: 'Kenjaku', modifiedName: 'kenjaku', id: 3 }
// ]
