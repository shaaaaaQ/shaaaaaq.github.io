<script>
    import { calcTypes } from "./store.js";
    export let selected;
</script>

<select bind:value={selected}>
    {#each $calcTypes as calcType}
        <option value={calcType}>{calcType.label}</option>
    {/each}
</select>
