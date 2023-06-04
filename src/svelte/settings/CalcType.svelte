<script>
    import CalcTypeForm from "./CalcTypeForm.svelte";
    import CalcTypeTable from "./CalcTypeTable.svelte";
    import { calcTypes } from "./store.js";
</script>

{#each $calcTypes as { label, rates }, index}
    <CalcTypeTable {label} {rates} {index} />
{/each}

<CalcTypeForm />
