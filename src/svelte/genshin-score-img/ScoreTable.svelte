<script>
    import { calcScore } from "./utils.js";
    export let stats;
    export let calcType;
    $: score = calcScore(stats, calcType);
</script>

<table>
    {#each stats as stat}
        <tr>
            <th>
                {stat}
            </th>
        </tr>
    {/each}
    <tfoot>
        <tr>
            <th>
                スコア: {score}
            </th>
        </tr>
    </tfoot>
</table>
