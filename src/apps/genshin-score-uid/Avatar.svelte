<script>
    import { Tooltip } from "@svelte-plugins/tooltips";
    import Artifact from "./Artifact.svelte";
    import characters from "./characters.js";
    import loc from "./loc.js";
    import { equipType } from "./constants.js";

    export let avatarInfo;
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
                type: equip.flat.equipType,
                setName: loc["ja"][equip.flat.setNameTextMapHash],
                mainStat: equip.flat.reliquaryMainstat,
                subStats: equip.flat.reliquarySubstats,
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
    <caption>
        {loc["ja"][characters[avatarInfo.avatarId]["NameTextMapHash"]]}
    </caption>
    <thead>
        <tr>
            <th />
            <th>会心</th>
            <th>攻撃力</th>
            <th>HP</th>
        </tr>
    </thead>
    <tbody>
        {#each artifacts as artifact}
            <tr>
                <th
                    ><Tooltip
                        content={{
                            component: Artifact,
                            props: { artifact, highlights: [] },
                        }}>{equipType[artifact.type]}</Tooltip
                    ></th
                >
                <td
                    ><Tooltip
                        content={{
                            component: Artifact,
                            props: {
                                artifact,
                                highlights: [
                                    "FIGHT_PROP_CRITICAL",
                                    "FIGHT_PROP_CRITICAL_HURT",
                                ],
                            },
                        }}>{artifact.score.crit}</Tooltip
                    ></td
                >
                <td
                    ><Tooltip
                        content={{
                            component: Artifact,
                            props: {
                                artifact,
                                highlights: [
                                    "FIGHT_PROP_CRITICAL",
                                    "FIGHT_PROP_CRITICAL_HURT",
                                    "FIGHT_PROP_ATTACK_PERCENT",
                                ],
                            },
                        }}>{artifact.score.atk}</Tooltip
                    ></td
                >
                <td
                    ><Tooltip
                        content={{
                            component: Artifact,
                            props: {
                                artifact,
                                highlights: [
                                    "FIGHT_PROP_CRITICAL",
                                    "FIGHT_PROP_CRITICAL_HURT",
                                    "FIGHT_PROP_HP_PERCENT",
                                ],
                            },
                        }}>{artifact.score.hp}</Tooltip
                    ></td
                >
            </tr>
        {/each}
    </tbody>
    <tfoot>
        <tr>
            <th> Total </th>
            <td>{total.crit}</td>
            <td>{total.atk}</td>
            <td>{total.hp}</td>
        </tr>
    </tfoot>
</table>

<style>
    :global(.tooltip) {
        pointer-events: none;
    }
    table {
        overflow-x: visible;
    }
</style>
