const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;

console.log(profileDataArgs)

const generatePage = (userName, githubName) => {
return `
Name: ${userName}
Github: ${githubName}
`;
};
console.log(name, github);
console.log(generatePage(name, github));

