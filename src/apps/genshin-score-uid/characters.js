export default await (async () => {
    const res = await fetch('https://raw.githubusercontent.com/EnkaNetwork/API-docs/master/store/characters.json');
    return res.json();
})();