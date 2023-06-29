<script>
    import Form from "./Form.svelte";
    import Table from "./Table.svelte";
    import { calcTypes } from "../store.js";
</script>

{#each $calcTypes as { label, rates }, index}
    <Table {label} {rates} {index} />
{/each}

<Form />
