const res = await fetch('https://raw.githubusercontent.com/EnkaNetwork/API-docs/master/store/loc.json');
const loc = await res.json()

export default loc