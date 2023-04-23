<script>
    import { player, avatars, selectedAvatar } from "./store.js";
    let uid;
    async function handleClick() {
        const res = await fetch(`https://enka.network/api/uid/${uid}`);
        const data = await res.json();
        player.set(data.playerInfo);
        avatars.set(data.avatarInfoList);
        selectedAvatar.set(undefined);
    }
</script>

<div>
    <input bind:value={uid} placeholder="UID" />
    <button on:click={handleClick}>fetch</button>
</div>

<style>
    div {
        display: flex;
    }
</style>
