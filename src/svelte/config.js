const defaultConfig = {
    calcTypes: [
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
}



function getConfigObject() {
    const str = localStorage.getItem('config')
    return str && JSON.parse(str) || {}
}

function _get(key, obj) {
    const seg = key.split('.')
    let result
    seg.forEach((key, index) => {
        if (seg.length === index + 1) {
            result = obj && obj[key]
        } else {
            obj = obj && obj[key]
        }
    })
    return result
}

function get(key) {
    const config = getConfigObject()
    const result = _get(key, config) || _get(key, defaultConfig)
    return result
}

export default {
    get
}