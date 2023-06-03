<script>
    import { calcTypes } from "./store.js";
    import { locales } from "./constants.js";
</script>

{#each $calcTypes as { label, rates }, index}
    <table>
        <thead>
            <tr>
                <th colspan="2">{label}</th>
                <th on:click={() => calcTypes.rm(index)}>削除</th>
            </tr>
        </thead>
        <tbody>
            {#each Object.entries(rates) as [propId, rate]}
                <tr>
                    <th>{locales["ja"][propId]}</th>
                    <td
                        on:input={(e) => {
                            const value = parseFloat(e.target.textContent);
                            if (!isNaN(value))
                                calcTypes.changeRate(index, propId, value);
                        }}
                        contenteditable
                    >
                        {rate}
                    </td>
                    <th on:click={() => calcTypes.rm(index, propId)}>削除</th>
                </tr>
            {/each}
        </tbody>
    </table>
{/each}
