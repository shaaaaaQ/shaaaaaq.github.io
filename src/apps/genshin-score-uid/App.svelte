<script>
    import Avatar from "./Avatar.svelte";
    import { getCharacterName } from "./utils.js";
    let uid;
    let player;
    let avatarList;
    let selected;
    async function handleClick() {
        const res = await fetch(`https://enka.network/api/uid/${uid}`);
        const data = await res.json();
        player = data.playerInfo;
        avatarList = data.avatarInfoList;
        selected = undefined;
    }
</script>

<input bind:value={uid} placeholder="UID" />
<button on:click={handleClick}>fetch</button>
{#if player}
    <h3>{player.nickname}</h3>
{/if}
{#if avatarList}
    <select bind:value={selected} placeholder="キャラクターを選択">
        {#each avatarList as avatar}
            <option value={avatar}>{getCharacterName(avatar.avatarId)}</option>
        {/each}
    </select>
{/if}
{#if selected}
    <Avatar avatar={selected} />
{/if}

<style>
    :global(
            .FIGHT_PROP_HP .FIGHT_PROP_HP,
            .FIGHT_PROP_ATTACK .FIGHT_PROP_ATTACK,
            .FIGHT_PROP_DEFENSE .FIGHT_PROP_DEFENSE,
            .FIGHT_PROP_HP_PERCENT .FIGHT_PROP_HP_PERCENT,
            .FIGHT_PROP_ATTACK_PERCENT .FIGHT_PROP_ATTACK_PERCENT,
            .FIGHT_PROP_DEFENSE_PERCENT .FIGHT_PROP_DEFENSE_PERCENT,
            .FIGHT_PROP_CRITICAL .FIGHT_PROP_CRITICAL,
            .FIGHT_PROP_CRITICAL_HURT .FIGHT_PROP_CRITICAL_HURT,
            .FIGHT_PROP_CHARGE_EFFICIENCY .FIGHT_PROP_CHARGE_EFFICIENCY,
            .FIGHT_PROP_HEAL_ADD .FIGHT_PROP_HEAL_ADD,
            .FIGHT_PROP_ELEMENT_MASTERY .FIGHT_PROP_ELEMENT_MASTERY,
            .FIGHT_PROP_PHYSICAL_ADD_HURT .FIGHT_PROP_PHYSICAL_ADD_HURT,
            .FIGHT_PROP_FIRE_ADD_HURT .FIGHT_PROP_FIRE_ADD_HURT,
            .FIGHT_PROP_ELEC_ADD_HURT .FIGHT_PROP_ELEC_ADD_HURT,
            .FIGHT_PROP_WATER_ADD_HURT .FIGHT_PROP_WATER_ADD_HURT,
            .FIGHT_PROP_WIND_ADD_HURT .FIGHT_PROP_WIND_ADD_HURT,
            .FIGHT_PROP_ICE_ADD_HURT .FIGHT_PROP_ICE_ADD_HURT,
            .FIGHT_PROP_ROCK_ADD_HURT .FIGHT_PROP_ROCK_ADD_HURT,
            .FIGHT_PROP_GRASS_ADD_HURT .FIGHT_PROP_GRASS_ADD_HURT,
            .EQUIP_BRACER.score .EQUIP_BRACER,
            .EQUIP_NECKLACE.score .EQUIP_NECKLACE,
            .EQUIP_SHOES.score .EQUIP_SHOES,
            .EQUIP_RING.score .EQUIP_RING,
            .EQUIP_DRESS.score .EQUIP_DRESS,
            .EQUIP_BRACER .EQUIP_BRACER.score,
            .EQUIP_NECKLACE .EQUIP_NECKLACE.score,
            .EQUIP_SHOES .EQUIP_SHOES.score,
            .EQUIP_RING .EQUIP_RING.score,
            .EQUIP_DRESS .EQUIP_DRESS.score
        ) {
        color: skyblue;
    }
</style>
