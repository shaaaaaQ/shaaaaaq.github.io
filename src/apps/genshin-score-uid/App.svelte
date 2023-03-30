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

会心: 会心率 * 2 + 会心ダメージ<br />
攻撃力: 会心率 * 2 + 会心ダメージ + 攻撃力%<br />
HP: 会心率 * 2 + 会心ダメージ + HP%<br />
防御とかは知らん
<input bind:value={uid} placeholder="UID" />
<button on:click={handleClick}>fetch</button>
{#if playerInfo}
    <Player {playerInfo} />
    {#each avatarInfoList as avatarInfo}
        <Avatar {avatarInfo} />
    {/each}
{/if}
