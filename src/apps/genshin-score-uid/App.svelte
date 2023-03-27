<script>
    import Avatar from "./Avatar.svelte";
    import Player from "./Player.svelte";
    let uid;
    let playerInfo;
    let avatarInfoList = [];
    async function handleClick() {
        const res = await fetch(`https://enka.network/api/uid/${uid}`);
        const data = await res.json();
        playerInfo = data.playerInfo;
        avatarInfoList = data.avatarInfoList;
    }
</script>

<input bind:value={uid} placeholder="UID" />
<button on:click={handleClick}>fetch</button>
{#if playerInfo}
    <Player {playerInfo} />
    {#each avatarInfoList as avatarInfo}
        <Avatar {avatarInfo} />
    {/each}
{/if}
