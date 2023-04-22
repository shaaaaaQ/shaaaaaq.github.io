<script>
    import Artifact from "./Artifact.svelte";
    import {
        getArtifacts,
        calcScore,
        handleMouseEnter,
        handleMouseLeave,
    } from "./utils.js";
    import { calcTypes, equipType } from "./constants.js";
    export let avatar;
    let selectedCalcType;
    $: artifacts = getArtifacts(avatar.equipList);
    $: score = calcScore(artifacts, selectedCalcType?.rates);
    $: highlights = Object.keys(selectedCalcType?.rates || {});
</script>

<select bind:value={selectedCalcType}>
    {#each calcTypes as calcType}
        <option value={calcType}>{calcType.label}</option>
    {/each}
</select>

<h3
    class={`${Object.keys(equipType).join(" ")} score`}
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
>
    合計スコア: {score.total}
</h3>
<div id="artifacts">
    {#each artifacts as artifact}
        <Artifact
            {artifact}
            score={score[artifact.flat.equipType]}
            {highlights}
        />
    {/each}
</div>

<style>
    #artifacts {
        display: flex;
        flex-wrap: wrap;
    }
</style>
