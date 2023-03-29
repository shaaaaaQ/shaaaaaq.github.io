export default await (async () => {
    console.log('characters')
    const res = await fetch('https://raw.githubusercontent.com/EnkaNetwork/API-docs/master/store/characters.json');
    return res.json();
})();