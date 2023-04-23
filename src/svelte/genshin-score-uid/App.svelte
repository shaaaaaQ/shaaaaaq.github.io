<script>
    import UidForm from "./UidForm.svelte";
    import CalcTypeSelect from "../components/CalcTypeSelect.svelte";
    import Avatar from "./Avatar.svelte";
    import AvatarSelect from "./AvatarSelect.svelte";
    import Player from "./Player.svelte";
    let player;
    let avatars;
    let avatar;
    let calcType;
</script>

<UidForm bind:player bind:avatars bind:selectedAvatar={avatar} />

{#if player}
    <Player {player} />
{/if}

{#if avatars}
    <AvatarSelect {avatars} bind:selected={avatar} />
{/if}

<CalcTypeSelect bind:selected={calcType} />

{#if avatar}
    <Avatar {avatar} {calcType} />
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
        background: #324759;
    }

    :global(option) {
        background: var(--background-alt);
    }

    :global(body) {
        max-width: none;
        margin: 6rem 4rem 1rem 4rem;
    }
</style>
