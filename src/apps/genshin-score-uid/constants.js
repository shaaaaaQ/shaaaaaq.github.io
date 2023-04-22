export const equipType = {
    EQUIP_BRACER: "花",
    EQUIP_NECKLACE: "羽",
    EQUIP_SHOES: "時計",
    EQUIP_RING: "杯",
    EQUIP_DRESS: "冠",
}

export const perStats = [
    'FIGHT_PROP_HP_PERCENT',
    'FIGHT_PROP_ATTACK_PERCENT',
    'FIGHT_PROP_DEFENSE_PERCENT',
    'FIGHT_PROP_CRITICAL',
    'FIGHT_PROP_CRITICAL_HURT',
    'FIGHT_PROP_CHARGE_EFFICIENCY',
    'FIGHT_PROP_HEAL_ADD',
    'FIGHT_PROP_PHYSICAL_ADD_HURT',
    'FIGHT_PROP_FIRE_ADD_HURT',
    'FIGHT_PROP_ELEC_ADD_HURT',
    'FIGHT_PROP_WATER_ADD_HURT',
    'FIGHT_PROP_WIND_ADD_HURT',
    'FIGHT_PROP_ICE_ADD_HURT',
    'FIGHT_PROP_ROCK_ADD_HURT',
    'FIGHT_PROP_GRASS_ADD_HURT'
]

export const calcTypes = [
    {
        label: '会心',
        rates: {
            'FIGHT_PROP_CRITICAL': 2,
            'FIGHT_PROP_CRITICAL_HURT': 1
        }
    },
    {
        label: '攻撃％',
        rates: {
            'FIGHT_PROP_CRITICAL': 2,
            'FIGHT_PROP_CRITICAL_HURT': 1,
            'FIGHT_PROP_ATTACK_PERCENT': 1
        }
    },
    {
        label: 'HP%',
        rates: {
            'FIGHT_PROP_CRITICAL': 2,
            'FIGHT_PROP_CRITICAL_HURT': 1,
            'FIGHT_PROP_HP_PERCENT': 1
        }
    }
]