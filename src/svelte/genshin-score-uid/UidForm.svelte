<script>
    export let player;
    export let avatars;
    export let selectedAvatar;
    let uid;
    async function handleClick() {
        const res = await fetch(`https://enka.network/api/uid/${uid}`);
        const data = await res.json();
        player = data.playerInfo;
        avatars = data.avatarInfoList;
        selectedAvatar = undefined;
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
