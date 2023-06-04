<script>
    import { calcTypes } from "./store.js";
    import { props } from "./constants.js";
    export let label;
    export let rates;
    export let index;
    let selected;
    $: selectable = Object.keys(props).filter(
        (p) => !Object.keys(rates).includes(p)
    );
</script>

<table>
    <thead>
        <tr>
            <th
                colspan="2"
                on:input={(e) => {
                    const value = e.target.textContent;
                    calcTypes.updateLabel(index, value);
                }}
                contenteditable>{label}</th
            >
            <th on:click={() => calcTypes.rm(index)}>削除</th>
        </tr>
    </thead>
    <tbody>
        {#each Object.entries(rates) as [propId, rate]}
            <tr>
                <th>{props[propId]}</th>
                <td
                    on:input={(e) => {
                        const value = parseFloat(e.target.textContent);
                        if (!isNaN(value))
                            calcTypes.updateProp(index, propId, value);
                    }}
                    contenteditable
                >
                    {rate}
                </td>
                <th on:click={() => calcTypes.rm(index, propId)}>削除</th>
            </tr>
        {/each}
    </tbody>
    <tfoot>
        <tr>
            <th colspan="2">
                <select bind:value={selected}>
                    <option hidden />
                    {#each selectable as propId}
                        <option value={propId}>{props[propId]}</option>
                    {/each}
                </select>
            </th>
            <th on:click={() => calcTypes.updateProp(index, selected, 1)}
                >追加</th
            >
        </tr>
    </tfoot>
</table>
