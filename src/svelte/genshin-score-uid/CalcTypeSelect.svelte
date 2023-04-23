<script>
    import { selectedCalcType } from "./store.js";
    import config from "../config.js";
    const calcTypes = config.get("calcTypes");
</script>

<select bind:value={$selectedCalcType}>
    {#each calcTypes as calcType}
        <option value={calcType}>{calcType.label}</option>
    {/each}
</select>
