<script>
    import Artifact from "./Artifact.svelte";
    import {
        getArtifacts,
        calcScore,
        handleMouseEnter,
        handleMouseLeave,
    } from "./utils.js";
    import { selectedAvatar, selectedCalcType } from "./store.js";
    import { equipType } from "./constants.js";
    $: artifacts = getArtifacts($selectedAvatar.equipList);
    $: score = calcScore(artifacts, $selectedCalcType.rates);
    $: highlights = Object.keys($selectedCalcType.rates);
</script>

<h3
    class={`${Object.keys(equipType).join(" ")} score`}
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
>
    合計スコア: {score.total}
</h3>

<details>
    <summary>聖遺物</summary>
    <div id="artifacts">
        {#each artifacts as artifact}
            <Artifact
                {artifact}
                score={score[artifact.flat.equipType]}
                {highlights}
            />
        {/each}
    </div>
</details>

<style>
    #artifacts {
        display: flex;
        flex-wrap: wrap;
    }
</style>
