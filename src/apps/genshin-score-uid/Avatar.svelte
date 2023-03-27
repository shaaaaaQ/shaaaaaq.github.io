<script>
    export let avatarInfo;
    let total = 0;
</script>

<table>
    <thead>
        <tr>
            <th colspan="2">
                {avatarInfo.avatarId}
            </th>
        </tr>
    </thead>
    <tbody>
        {#each avatarInfo.equipList as equip}
            {#if equip.flat.itemType === "ITEM_RELIQUARY"}
                <tr>
                    <td>
                        {equip.flat.equipType}
                    </td>
                    <td> aaa </td>
                </tr>
            {/if}
        {/each}
        <tr>
            <td> Total </td>
            <td>{total}</td>
        </tr>
    </tbody>
</table>
