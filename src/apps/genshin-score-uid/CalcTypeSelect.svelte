<script>
    import { calcType } from "./store.js";
    import { getCalcTypes } from "./utils.js";
    let calcTypes = getCalcTypes();
</script>

<select bind:value={$calcType}>
    {#each calcTypes as ct}
        <option value={ct}>{ct.label}</option>
    {/each}
</select>
