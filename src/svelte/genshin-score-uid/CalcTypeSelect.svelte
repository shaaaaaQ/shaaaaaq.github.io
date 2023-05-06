<script>
    import settings from "../settings.js";
    export let selected;
    const calcTypes = settings.get("calcTypes");
</script>

<select bind:value={selected}>
    {#each calcTypes as calcType}
        <option value={calcType}>{calcType.label}</option>
    {/each}
</select>
