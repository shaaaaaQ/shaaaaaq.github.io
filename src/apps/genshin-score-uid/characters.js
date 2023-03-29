const res = await fetch('https://raw.githubusercontent.com/EnkaNetwork/API-docs/master/store/characters.json');
const characters = await res.json()

export default characters