var EVENT_DATA = {
    traces_1:{
        name:'赏金猎人',
        desc:'嗨，找到更多线索没？',
        want:{traces:3},
        place:'神秘机关I',
        d_1:['这里的路被堵住了。。。'],
        d_2:['duang~','暗道缓缓打开了...'],
    },
    part_1:{
        name:'神秘机关I',
        desc:'似乎需要特定物品打开的机关。。',
        want:{part_1:1},
        d_1:['似乎需要特定物品打开的机关。。'],
        d_2:['duang~','暗道缓缓打开了...'],
        event:'traces_1',
    },
    traces_2:{
        name:'赏金猎人',
        desc:'嗨，找到更多线索没？',
        want:{traces:6},
        place:'神秘机关II',
        d_1:['这里的路被堵住了。。。'],
        d_2:['duang~','暗道缓缓打开了...'],
        event:'part_1',
    },
    part_2:{
        name:'神秘机关II',
        desc:'似乎需要特定物品打开的机关。。',
        want:{part_2:1},
        d_1:['似乎需要特定物品打开的机关。。'],
        d_2:['duang~','暗道缓缓打开了...'],
        event:'traces_2',
    },
    traces_3:{
        name:'赏金猎人',
        desc:'嗨，找到更多线索没？',
        want:{traces:9},
        place:'恶魔的宝箱',
        d_1:['这里的路被堵住了。。。'],
        d_2:['duang~','暗道缓缓打开了...'],
        event:'part_2',
    },
    denBox:{
        name:'恶魔的宝箱',
        desc:'似乎需要特定物品打开的宝箱。。',
        want:{part_3:1},
        d_1:['这里的路被堵住了。。。'],
        d_2:['诅咒一般的恶魔声音笼罩了你...','“快去银溪镇，强光平民的钱！”',''],
        event:'traces_3',
    },

    police_1:{
        name:'赏金猎人',
        desc:'我在寻找盗贼的地下通道。。。有线索吗？',
        want:{traces:1},
        place:'地下通道',
        d_1:['嗨，我们可以一起去追查盗贼的下落。...'],
        d_2:'有线索吗？',
    },

    reincarnation:{
        name:'转生之石',
        desc:'只有你变得足够强大，才能获得转生的资格。',
    },
    boss:{
        name:'邪恶的封印阵',
        desc:'据说禁锢着传说中的魔王。',
    },
    santa:{
        name:'麋鹿',
        desc:'嗨，圣诞快乐...',
    },
    map_1:{
        name:'Old Man',
        desc:'I have been to many places...',
        want:{paper:2},
        place:'冰冻荒原、黑森林',
        d_1:['年轻人，你一定对这里的地方不熟悉，','你得带纸过来，我才能标注给你啊...','冰冻荒原和黑森林？他们在...'],
        d_2:'不用谢，我们银溪镇人一向好客...',
    },
    map_2:{
        name:'长者',
        desc:'你见过那片湿地吗...',
        want:{paper:4},
        place:'遥远的湿地',
        d_1:['遥远的湿地？在...'],
        d_2:'湿地住着酒仙，你可以带点酒和他唠唠嗑。',
        event:'map_1',
    },
    map_3:{
        name:'长者',
        desc:'听说南边正在酝酿着一场战争？...',
        want:{paper:6},
        place:'战争营地',
        d_1:['我也是刚听说，附近正酝酿着战争...','一边是凶暴的食人魔，另一边是冷酷的法师，','我很确定它们需要一些年轻的打手。'],
        d_2:'希望你不要也成为战争的牺牲品...',
        event:'map_2',
    },
    map_4:{
        name:'长者',
        desc:'你要去地牢吗？...',
        want:{paper:2,part:64},
        place:'地牢',
        d_1:['地牢需要钥匙，如果你要去的话，我可以帮你做一把...','当然，作为材料的零件是少不了的。'],
        d_2:'去地牢要带足补给品，不要问为什么...',
        event:'map_3',
    },

    thief:{
        name:'覆面忍者',
        desc:'嗨，我和那些渣滓可不一样！',
        want:{poizon:4},
        get:{ninjaShoe:1},
        d_1:['这些家伙的宝物可不一般！','瞧，他们睡着了！不过我需要十足的把握。','我要先让我的匕首沾上一触即死的致命毒药！'],
        d_2:'哼，干得不错，小兄弟。来穿上这个，后面还有其他要做的。',
    },
    thief_1:{
        name:'覆面忍者',
        desc:'我们从这里..突破...',
        want:{humanMeat:2},
        get:{ninjaHat:1},
        d_1:['嗨，我准备从这边突破，你快帮我解决掉那边的两个！'],
        d_2:'好样的，带上这个，低头，不要暴露自己。',
        event:'thief',
    },
    thief_2:{
        name:'覆面忍者',
        desc:'偷盗贼的东西...能算偷么...嗯？我发现了它！',
        d_1:['嗨，多亏你的帮助，我拿到了这个宝物。','它散发着金色的光辉，肯定是古董错不了！'],
        event:'thief_1',
    },

    trade:{
        name:'商队',
        desc:'你好冒险者，我们正在过来...',
    },
    miner:{
        name:'采矿小分队',
        desc:'什么，你不知道矿洞在哪里?',
    },
    minerFood:{
        name:'采矿小分队',
        desc:'我们需要面包。',
        want:{bread:8},
        get:{iron:30},
        chanceGet:{crystal:0.2,gem:0.2},
        d_1:'你有带面包来吗？我们可以给你我们的挖掘物。',
        d_2:'谢谢。这是我们的一些心意。',
    },
    giveScroll:{
        name:'神秘旅者',
        desc:'你好冒险者，我已经等你很久了...',
    },
    huntIntro:{
        name:'年迈的猎人',
        desc:'嗯..新来的？',
    },
    tramp:{
        name:'Hungery Tramp',
        desc:'Help...',
    },
    farmer_1:{
        name:'农场主',
        desc:'年轻人，能帮个忙么...',
        want:{wheat:10},
        get:{seed:40},
        d_1:['上了年纪，腿脚就有点不灵了','好心人啊，能帮我收割一下小麦么。'],
        d_2:'谢谢你，小伙子。这是给你的。',
    },
    farmer_2:{
        name:'农场主',
        desc:'有木头没有？',
        want:{wood:50},
        get:{wheat:40,seed:30,fertilizer:12},
        event:'farmer_1',
        d_1:'我需要一些木头来扩建我的农场，能给我一些么。。',
        d_2:'谢谢。这是我的一些心意。',
    },
    farmer_3:{
        name:'农场主',
        desc:'我的农具都用坏了...',
        want:{hoe:4,rope:10,part:10},
        get:{seed:30,farmUpgrade:1},
        event:'farmer_2',
        d_1:'我需要一些农具，能给我一些么。。',
        d_2:'谢谢。这是我种田多年的心得，希望你收下。',
    },
    farmer_end:{
        name:'农场主',
        desc:'你好，需要种子么...',
        want:{gold:10},
        get:{seed:70},
        event:'farmer_3',
        d_1:['谢谢你之前的帮忙。最近收成不怎么样。','我正计划卖掉一些种子，感兴趣吗?'],
        d_2:'谢谢。这是我种田多年的心得，希望你收下。',
    },

    robberQuestGet:{
        name:'村长',
        desc:'我们遭到了盗贼的袭击...',
    },
    robberQuest:{
        name:'村长',
        desc:'我们迫切期待你的好消息...',
        want:{humanMeat:10},
        get:{wheat:25,gold:20},
        event:'robberQuestGet',
        d_1:'盗贼消除的怎么样了？',
        d_2:'英雄！希望你收下我们村民的礼物。',
    },
    spiderQuestGet:{
        name:'村长',
        desc:'我们又有一些麻烦...',
        event:'robberQuest',
    },
    spiderQuest:{
        name:'村长',
        desc:'期待你的大获全胜，别忘了带来它的头颅...',
        want:{spiderHead:1},
        get:{wheat:30,gold:30},
        event:'spiderQuestGet',
        d_1:'你已经消除了蛛魔之后了吗？',
        d_2:'英雄！希望你收下我们村民的礼物。',
    },
    dragonQuestGet:{
        name:'村长',
        desc:'你好啊，勇士...',
        event:'spiderQuest',
    },
    dragonQuest:{
        name:'村长',
        desc:'带来龙王的头颅！...',
        want:{dragonHead:1},
        get:{gold:40,dragonMedal:1},
        event:'dragonQuestGet',
        d_1:'勇士，我们相信你的实力...',
        d_2:'英雄！希望你收下我们村民的礼物。',
    },

    robbotQuest:{
        name:'村长',
        desc:'期待你的大获全胜，别忘了带来它的头颅...',
        want:{spiderHead:1},
        get:{wheat:30,gold:30},
        event:'spiderQuestGet',
        d_1:'你已经消除了蛛魔之后了吗？',
        d_2:'英雄！希望你收下我们村民的礼物。',
    },

    gulf:{
        name:'水手',
        desc:'海盗的标记是很可靠的...',
        want:{gold:30},
        place:'藏宝湾',
        event:'dragonQuest',
        d_1:'我才不会告诉你藏宝湾的位置，除非...',
        d_2:'那..我就大发慈悲地告诉你...',
    },
    drinker_1:{
        name:'酒仙',
        desc:'来和我喝一杯，朋友...',
        want:{fruitAlco:4},
        get:{defUpgrade:1},
        d_1:'兄弟，给我带点酒来，我可以传授你一些战斗技巧...',
        d_2:'好酒！(大笑)',
    },
    drinker_2:{
        name:'酒仙',
        desc:'我喝酒，你买单...',
        want:{beer:4},
        get:{agileUpgrade:1},
        d_1:'兄弟，给我带点酒来，我可以传授你一些战斗技巧...',
        d_2:'好酒！(大笑)',
        event:'drinker_1',
    },
    drinker_3:{
        name:'酒仙',
        desc:'再来一杯...',
        want:{vodka:4},
        get:{strUpgrade:1},
        d_1:'兄弟，给我带点酒来，我可以传授你一些战斗技巧...',
        d_2:'好酒！(大笑)',
        event:'drinker_2',
    },
    drinker_4:{
        name:'酒仙',
        desc:'...',
        want:{warmAlco:2},
        get:{misteryCry:1},
        d_1:'附近的挖掘场出土了一些了不起的神器...',
        d_2:'好酒！(大笑)',
        event:'drinker_3',
    },
    drinker_end:{
        name:'酒仙',
        desc:'带酒了吗...',
        want:{vodka:10},
        get:{gold:20},
        d_1:'兄弟，我没有什么可以传授给你了，但你带酒过来的话，我很乐意付钱的...',
        d_2:'好酒！(大笑)',
        event:'drinker_4',
    },
    misteryQuest_1:{
        name:'古董学家',
        desc:'如果找到了那个壶，我会高价购买的...',
        want:{misteryPot:1},
        get:{gem:4,gold:4},
        d_1:['我在找一个古董，那是一个奇怪的壶','传闻它落入了强盗的手中。','如果看到，请务必带给我...','切记,千万不能打开它。'],
        d_2:'拿去吧，这是你应得的奖励。',
    },
    misteryQuest_2:{
        name:'古董学家',
        desc:'那个瓶子伤透了我的脑筋...',
        want:{misteryCry:1},
        get:{gem:8,gold:8},
        event:'misteryQuest_1',
        d_1:['我需要一只瓶子...','那是被注入黑暗之力的瓶子，传闻它被沼泽的魔王控制着...'],
        d_2:'拿去吧，这是你应得的奖励。',
    },
    misteryQuest_3:{
        name:'古董学家',
        desc:'喔，请你看一下这个...',
        want:{misteryBox:1},
        get:{gem:12,gold:12},
        event:'misteryQuest_2',
        d_1:['这个古董的坐标，似乎是在一个郊外的墓地...','天哪，千万不要有鬼怪出没。'],
        d_2:'拿去吧，这是你应得的奖励。',
    },

    goblin:{
        name:'地精探险者',
        desc:'太可怕了...',
        want:{part:10},
        place:'地精村庄',
        d_1:'我的载具突然爆缸了，需要修理，能帮我带点零件来吗...',
        d_2:'谢谢你！',
    },
    goblin_1:{
        name:'地精工匠',
        desc:'嗯,还需要...',
        want:{carrot:2,fruit:2,veg:2},
        learn:'罗盘',
        d_1:['现在地精村庄很流行一种新的饮料。','但我缺乏制做那种饮料的重要食材——','给我带点，好吗?'],
        d_2:'漂亮,让我来教你一些东西...',
    },
    goblin_2:{
        name:'地精工匠',
        desc:'什么,又吃完了！',
        want:{jam:4},
        event:'goblin_1',
        learn:'扰乱装置',
        d_1:['真不明白，我们的果酱怎么会消耗得那么快...','什么，你不知道做果酱的方法?','先准备一些浆果,然后...'],
        d_2:'漂亮,让我来教你一些东西...',
    },
    goblin_3:{
        name:'地精工匠',
        desc:'你好啊,我的朋友...',
        want:{hamburger:4},
        event:'goblin_2',
        learn:'急冻枪',
        d_1:['汉堡总是不嫌多的，不管你做多少都会有人喜欢吃。...','当你做好汉堡之后带来给我，我会邀请我们的工程师朋友们也来尝尝。','当然...这也是为了锻炼你的厨艺嘛'],
        d_2:'漂亮,让我来教你一些东西...',
    },
    goblin_4:{
        name:'地精工匠',
        desc:'海鲜,更多的海鲜...',
        want:{fishBall:4,rowFish:4},
        event:'goblin_3',
        learn:'探测帽',
        d_1:['你在藏宝湾钓过鱼，对不对？','那里的鱼味道可棒啦！','快，快帮我带一些来！'],
        d_2:'漂亮,让我来教你一些东西...',
    },
    goblin_5:{
        name:'地精工匠',
        desc:'嗯，美味...',
        want:{dragonBoneSoap:4,dragonScaleSoap:1},
        event:'goblin_4',
        learn:'车床',
        d_1:['听说使用龙骨熬出来的汤格外的鲜美？','我已经等不及要品尝一碗了！'],
        d_2:'漂亮,让我来教你一些东西...',
    },
    goblin_end:{
        name:'地精工匠',
        desc:'嗨,要买零件么...',
        event:'goblin_5',
        want:{gold:20},
        get:{part:40},
        d_1:'我没什么可以教你了兄弟，但你可以从我这收购一些零件...',
        d_2:'成交！',
    },

    graveEvent:{
        name:'可疑的祭坛',
        desc:'...',
        btn:'查看',
        want:{flower:10},
        get:{gold:20},
        mst:'darkSoul',
        giveDesc:'埋葬',
        d_1:'这是一个十分可疑的墓穴。',
        d_2:'棺材缓缓得打开了，伴随着宝藏，四周响起了可怕的哀嚎...',
    },

    iceTownEvent:{
        name:'食人族长',
        desc:'你是...',
        btn:'对话',
    },

    fireTownEvent:{
        name:'黑衣贤者',
        desc:'你是...',
        btn:'对话',
    },


    iceTownEvent_1:{
        name:'食人族长',
        desc:'计划很简单...',
        event:'iceTownEvent',
        want:{fireGet:2},
        get: {fearlessAxe:1,gold:2},
        d_1: '过去把他们都干掉！',
        d_2: '干得漂亮！',
        btn: '对话',
    },
    iceTownEvent_2:{
        name:'食人族长',
        desc:'只要你到南面的黏肠峡谷去...',
        event:'iceTownEvent_1',
        want:{fireGet:10},
        get: {fearlessArm:1,gold:4},
        d_1: '我们按人头记功...',
        d_2: '这才是我们需要的勇猛战士！',
        btn: '对话',
    },
    iceTownEvent_3:{
        name:'食人族长',
        desc:'打倒他们！...',
        event:'iceTownEvent_2',
        want:{fireGet:20},
        get: {fearlessHat:1,gold:8},
        d_1: '把他们干掉，我就奖赏你...',
        d_2: '这才是我们需要的勇猛战士！',
        btn: '对话',
    },
    iceTownEvent_end:{
        name:'食人族长',
        desc:'你好啊，勇士...',
        event:'iceTownEvent_3',
        want:{fireGet:20},
        get: {gold:20},
        d_1: '我们按人头记功...',
        d_2: '这才是我们需要的勇猛战士！',
        btn: '对话',
    },

    fireTownEvent_1:{
        name:'黑衣贤者',
        desc:'我先简单地向你介绍一下现在的状况，新学徒...',
        event:'fireTownEvent',
        want:{iceGet:2},
        get: {ghostStaff:1,gold:2},
        d_1: ['我们必须先发制人！现在出发吧...','削弱他们的力量然后回来向我报告。'],
        d_2: '干得好,我想你需要这些装备...',
        btn: '对话',
    },
    fireTownEvent_2:{
        name:'黑衣贤者',
        desc:'我要派你到...',
        event:'fireTownEvent_1',
        want:{iceGet:10},
        get: {ghostArm:1,gold:4},
        d_1: ['我们已经让食人魔吃尽了苦头，但事情还不算完。','再杀掉一些食人魔，然后回来向我汇报。'],
        d_2: '恩...这将强化你的魔法力量...',
        btn: '对话',
    },
    fireTownEvent_3:{
        name:'黑衣贤者',
        desc:'你问我该怎么做？嗯...',
        event:'fireTownEvent_2',
        want:{iceGet:20},
        get: {ghostHat:1,gold:8},
        d_1: ['我们必须把握一切机会，击毙盘踞在北面的食人魔。','否则他们就会摧毁我们用生命换来的土地！'],
        d_2: '恩...这将强化你的魔法力量...',
        btn: '对话',
    },
    fireTownEvent_end:{
        name:'黑衣贤者',
        desc:'你能摆平他们吗...',
        event:'fireTownEvent_3',
        want:{iceGet:20},
        get: {gold:20},
        d_1: '消灭了多少敌人了？...',
        d_2: '恩...',
        btn: '对话',
    },


    meleeUpgrade:{
        name:'击剑教头',
        skill:'melee',
        btn: '对话',
    },
    shootUpgrade:{
        name:'王牌猎人',
        skill:'shoot',
        btn: '对话',
    },
    magicUpgrade:{
        name:'黑衣贤者',
        skill:'magic',
        btn: '对话',
    },
    agileUpgrade:{
        name:'迅捷忍者',
        skill:'agile',
        btn: '对话',
    },
    defUpgrade:{
        name:'防御大师',
        skill:'def',
        btn: '对话',
    },
    farmUpgrade:{
        name:'种植大师',
        skill:'farm',
        btn: '对话',
    },
    alcoUpgrade:{
        name:'酿酒大师',
        skill:'alco',
        btn: '对话',
    },
}
