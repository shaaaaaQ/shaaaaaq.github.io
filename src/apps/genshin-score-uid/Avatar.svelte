<script>
    import Artifact from "./Artifact.svelte";
    import {
        getArtifacts,
        calcScore,
        handleMouseEnter,
        handleMouseLeave,
    } from "./utils.js";
    import { calcType } from "./store.js";
    import { equipType } from "./constants.js";
    export let avatar;
    $: artifacts = getArtifacts(avatar.equipList);
    $: score = calcScore(artifacts, $calcType.rates);
    $: highlights = Object.keys($calcType.rates);
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
