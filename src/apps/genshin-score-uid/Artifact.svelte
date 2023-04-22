<script>
    import { equipType, percentProps } from "./constants.js";
    import { getText, handleMouseEnter, handleMouseLeave } from "./utils.js";
    export let artifact;
    export let score = 0;
    export let highlights = [];
    $: detail = artifact.flat;
    $: mainStat = detail.reliquaryMainstat;
    $: subStats = detail.reliquarySubstats;
</script>

<table>
    <thead>
        <tr>
            <th colspan="2">
                {equipType[detail.equipType]} / {getText(
                    detail.setNameTextMapHash
                )}
            </th>
        </tr>
    </thead>
    <tr>
        <th colspan="2">メインステータス</th>
    </tr>
    <tr
        class={mainStat.mainPropId}
        on:mouseenter={handleMouseEnter}
        on:mouseleave={handleMouseLeave}
    >
        <th>{getText(mainStat.mainPropId)}</th>
        <td>
            {mainStat.statValue}{(percentProps.includes(mainStat.mainPropId) &&
                "%") ||
                ""}
        </td>
    </tr>
    <tr>
        <th colspan="2">サブステータス</th>
    </tr>
    {#each subStats as stat}
        <tr
            class={stat.appendPropId +
                ((highlights.includes(stat.appendPropId) &&
                    ` ${detail.equipType}`) ||
                    "")}
            on:mouseenter={handleMouseEnter}
            on:mouseleave={handleMouseLeave}
        >
            <th>{getText(stat.appendPropId)}</th>
            <td>
                {stat.statValue}{(percentProps.includes(stat.appendPropId) &&
                    "%") ||
                    ""}
            </td>
        </tr>
    {/each}
    <tfoot>
        <tr
            class={`${detail.equipType} score`}
            on:mouseenter={handleMouseEnter}
            on:mouseleave={handleMouseLeave}
        >
            <th>スコア</th>
            <td>{score}</td>
        </tr>
    </tfoot>
</table>

<style>
    table {
        width: auto;
    }

    table > tr > th[colspan="2"] {
        background: var(--background-alt);
    }
</style>
