<script>
    import { calcTypes } from "./store.js";
    let label;
</script>

<div>
    <input bind:value={label} />
    <button
        on:click={() => {
            calcTypes.append(label);
            label = "";
        }}>追加</button
    >
</div>

<style>
    div {
        display: flex;
    }
</style>
