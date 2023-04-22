<script>
    import { calcType, calcTypes } from "./store.js";
</script>

<select bind:value={$calcType}>
    {#each $calcTypes as ct}
        <option value={ct}>{ct.label}</option>
    {/each}
</select>
