const loc = await (async () => {
    const res = await fetch('https://raw.githubusercontent.com/EnkaNetwork/API-docs/master/store/loc.json');
    return res.json()
})()

const characters = await (async () => {
    const res = await fetch('https://raw.githubusercontent.com/EnkaNetwork/API-docs/master/store/characters.json');
    return res.json()
})()

export function getText(key, lang = "ja") {
    return loc[lang][key]
}

export function getCharacterName(id, lang = 'ja') {
    const nameTextMapHash = characters[id]["NameTextMapHash"]
    return getText(nameTextMapHash, lang)
}

export function getArtifacts(equipList = []) {
    return equipList.filter(equip => equip.flat.itemType === "ITEM_RELIQUARY")
}

export function calcScore(artifacts, rates = {}) {
    const result = {
        total: 0,
        EQUIP_BRACER: 0,
        EQUIP_NECKLACE: 0,
        EQUIP_SHOES: 0,
        EQUIP_RING: 0,
        EQUIP_DRESS: 0
    }
    artifacts.forEach(artifact => {
        const equipType = artifact.flat.equipType
        if (!artifact.flat.reliquarySubstats) return
        artifact.flat.reliquarySubstats.forEach(stat => {
            result[equipType] += stat.statValue * (rates[stat.appendPropId] || 0)
        })
        result[equipType] = Math.round(result[equipType] * 10) / 10;
        result['total'] += result[equipType]
    })
    result['total'] = Math.round(result['total'] * 10) / 10;
    return result
}

export function handleMouseEnter(e) {
    e.target.closest('details').classList.add(...e.target.classList);
}
export function handleMouseLeave(e) {
    e.target.closest('details').classList.remove(...e.target.classList);
}