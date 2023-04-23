<script>
    import { getCharacterName } from "./utils.js";
    export let avatars;
    export let selected;
</script>

<select bind:value={selected}>
    {#each avatars as avatar}
        <option value={avatar}>{getCharacterName(avatar.avatarId)}</option>
    {/each}
</select>
