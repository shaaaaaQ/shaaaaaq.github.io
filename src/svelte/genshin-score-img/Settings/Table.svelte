<script>
    import { calcTypes } from "../store.js";
    export let label;
    export let rates;
    export let index;
    const props = {
        FIGHT_PROP_CRITICAL: "会心率",
        FIGHT_PROP_CRITICAL_HURT: "会心ダメージ",
        FIGHT_PROP_ATTACK: "攻撃力",
        FIGHT_PROP_HP: "HP",
        FIGHT_PROP_DEFENSE: "防御力",
        FIGHT_PROP_ATTACK_PERCENT: "攻撃力%",
        FIGHT_PROP_HP_PERCENT: "HP%",
        FIGHT_PROP_DEFENSE_PERCENT: "防御力%",
        FIGHT_PROP_CHARGE_EFFICIENCY: "元素チャージ効率",
        FIGHT_PROP_ELEMENT_MASTERY: "元素熟知",
    };
    let selected;
    $: selectable = Object.keys(props).filter(
        (p) => !Object.keys(rates).includes(p)
    );
</script>

<div class="table">
    <div class="head flex">
        <div
            class="label"
            on:input={(e) => {
                const value = e.target.textContent;
                calcTypes.updateLabel(index, value);
            }}
            on:keydown={(e) => {
                e.key === "Enter" && e.preventDefault();
            }}
            contenteditable
        >
            {label}
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="delete-button" on:click={() => calcTypes.rm(index)}>x</div>
    </div>
    <div class="item-container">
        {#each Object.entries(rates) as [propId, rate]}
            <div class="item flex">
                <div class="prop-name">{props[propId]}</div>
                <input
                    class="rate"
                    on:input={(e) => {
                        const value = parseFloat(e.target.value);
                        if (!isNaN(value))
                            calcTypes.updateProp(index, propId, value);
                    }}
                    on:keydown={(e) => e.key === "Enter" && e.preventDefault()}
                    value={rate}
                    contenteditable
                />
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div
                    class="remove-button"
                    on:click={() => calcTypes.rm(index, propId)}
                >
                    x
                </div>
            </div>
        {/each}
    </div>
    <div class="foot flex">
        <select class="prop-select" bind:value={selected}>
            <option hidden />
            {#each selectable as propId}
                <option value={propId}>{props[propId]}</option>
            {/each}
        </select>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
            class="push-button"
            on:click={() =>
                selected && calcTypes.updateProp(index, selected, 1)}
        >
            +
        </div>
    </div>
</div>

<style>
    .table {
        margin: 10px;
        border-radius: 15px;
        background: #1f2937;
        padding: 10px;
    }
    .flex {
        display: flex;
    }

    .label {
        width: 194px;
    }
    .head {
        padding: 5px;
    }
    .foot {
        padding: 5px 5px 5px 0;
    }
    .item {
        background: #374151;
        margin: 5px 0;
        padding: 5px;
        border-radius: 8px;
    }
    .prop-name {
        width: 150px;
    }
    .rate {
        background: #4b5563;
        width: 40px;
        border: none;
        border-radius: 5px;
        text-align: end;
        padding: 2px;
    }
    .rate:focus-visible,
    .prop-select:focus-visible {
        outline: none;
    }
    .remove-button,
    .delete-button,
    .push-button {
        width: 30px;
        text-align: center;
    }
    .prop-select {
        background: #374151;
        border: none;
        border-radius: 8px;
        width: 199px;
    }
</style>
