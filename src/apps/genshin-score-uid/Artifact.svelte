<script>
    import loc from "./loc.js";
    import { equipType, perStats } from "./constants.js";
    export let artifact;
    export let highlights = [];
</script>

{equipType[artifact.type]} / {artifact.setName}
<table>
    <thead>
        <tr>
            <th colspan="2"> メインステータス </th>
        </tr>
    </thead>
    <tr>
        <th>{loc["ja"][artifact.mainStat.mainPropId]}</th>
        <td>
            {artifact.mainStat.statValue}
            {(perStats.includes(artifact.mainStat.mainPropId) && "%") || ""}
        </td>
    </tr>
</table>
<table>
    <thead>
        <tr>
            <th colspan="2"> サブステータス </th>
        </tr>
    </thead>
    {#each artifact.subStats as stat}
        <tr class={(highlights.includes(stat.appendPropId) && "hl") || ""}>
            <th>{loc["ja"][stat.appendPropId]}</th>
            <td>
                {stat.statValue}
                {(perStats.includes(stat.appendPropId) && "%") || ""}
            </td>
        </tr>
    {/each}
</table>

<style>
    .hl {
        color: skyblue;
    }
    table * {
        background-color: transparent;
    }
</style>
