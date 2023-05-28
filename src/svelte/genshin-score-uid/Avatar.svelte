<script>
    import Artifact from "./Artifact.svelte";
    import {
        getArtifacts,
        calcScore,
        handleMouseEnter,
        handleMouseLeave,
        getCharacterName,
    } from "./utils.js";
    import { equipType } from "./constants.js";
    export let avatar;
    export let calcType;
    $: artifacts = getArtifacts(avatar.equipList);
    $: score = calcScore(artifacts, calcType.rates);
    $: highlights = Object.keys(calcType.rates);
</script>

<details>
    <summary>
        {getCharacterName(avatar.avatarId)}
        <span
            class={`${Object.keys(equipType).join(" ")} score`}
            on:mouseenter={handleMouseEnter}
            on:mouseleave={handleMouseLeave}
        >
            ({score.total})
        </span>
    </summary>
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
