<script>
    import characters from "./characters.js";
    import loc from "./loc.js";

    export let avatarInfo;
    const equipType = {
        EQUIP_BRACER: "花",
        EQUIP_NECKLACE: "羽",
        EQUIP_SHOES: "時計",
        EQUIP_RING: "杯",
        EQUIP_DRESS: "冠",
    };
    const artifacts = [];
    const total = {
        crit: 0,
        atk: 0,
        hp: 0,
    };
    avatarInfo.equipList.forEach((equip) => {
        if (equip.flat.itemType === "ITEM_RELIQUARY") {
            const score = {
                crit: 0,
                atk: 0,
                hp: 0,
            };
            equip.flat.reliquarySubstats.forEach((stat) => {
                switch (stat.appendPropId) {
                    // https://api.enka.network/#/api_ja?id=appendprop
                    case "FIGHT_PROP_CRITICAL": {
                        score.crit += stat.statValue * 2;
                        score.atk += stat.statValue * 2;
                        score.hp += stat.statValue * 2;
                        break;
                    }
                    case "FIGHT_PROP_CRITICAL_HURT": {
                        score.crit += stat.statValue;
                        score.atk += stat.statValue;
                        score.hp += stat.statValue;
                        break;
                    }
                    case "FIGHT_PROP_ATTACK_PERCENT": {
                        score.atk += stat.statValue;
                        break;
                    }
                    case "FIGHT_PROP_HP_PERCENT": {
                        score.hp += stat.statValue;
                        break;
                    }
                }
            });
            score.crit = Math.round(score.crit * 10) / 10;
            score.atk = Math.round(score.atk * 10) / 10;
            score.hp = Math.round(score.hp * 10) / 10;
            artifacts.push({
                type: equipType[equip.flat.equipType],
                score,
            });
            total.crit += score.crit;
            total.atk += score.atk;
            total.hp += score.hp;
        }
    });
    total.crit = Math.round(total.crit * 10) / 10;
    total.atk = Math.round(total.atk * 10) / 10;
    total.hp = Math.round(total.hp * 10) / 10;
</script>

<table>
    <thead>
        <tr>
            <th colspan="4">
                {loc["ja"][characters[avatarInfo.avatarId]["NameTextMapHash"]]}
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td />
            <td>会心</td>
            <td>攻撃力</td>
            <td>HP</td>
        </tr>
        {#each artifacts as artifact}
            <tr>
                <td>{artifact.type}</td>
                <td>{artifact.score.crit}</td>
                <td>{artifact.score.atk}</td>
                <td>{artifact.score.hp}</td>
            </tr>
        {/each}
        <tr>
            <td> Total </td>
            <td>{total.crit}</td>
            <td>{total.atk}</td>
            <td>{total.hp}</td>
        </tr>
    </tbody>
</table>
