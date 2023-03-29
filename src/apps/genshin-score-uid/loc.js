export default await (async () => {
    console.log('loc')
    const res = await fetch('https://raw.githubusercontent.com/EnkaNetwork/API-docs/master/store/loc.json');
    return res.json();
})();