<script>
    import settings from "../settings.js";
    let calcTypes = settings.get("calcTypes");
</script>

{#each calcTypes as { label, rates }, index}
    <table>
        <thead>
            <tr>
                <th>{label}</th>
                <th
                    on:click={() => {
                        if (calcTypes.length === 1) return;
                        calcTypes.splice(index, 1);
                        calcTypes = calcTypes;
                        settings.set("calcTypes", calcTypes);
                    }}>削除</th
                >
            </tr>
        </thead>
        <tbody>
            {#each Object.entries(rates) as [propId, rate]}
                <tr>
                    <th>{propId}</th>
                    <td>{rate}</td>
                </tr>
            {/each}
        </tbody>
    </table>
{/each}
