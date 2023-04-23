<script>
    import { avatars, selectedAvatar } from "./store.js";
    import { getCharacterName } from "./utils.js";
</script>

<select bind:value={$selectedAvatar}>
    {#each $avatars as avatar}
        <option value={avatar}>{getCharacterName(avatar.avatarId)}</option>
    {/each}
</select>
