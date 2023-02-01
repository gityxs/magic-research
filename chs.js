/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    ": Lv": ": 等级",
    "! A basic element, it is often quite dangerous but powerful. Fire is key to creating higher temperatures.": "！ 作为基本元素，它通常非常危险但功能强大。 火是产生更高温度的关键。",
    "! Conjuration is the school that studies creating permanent or semi-permanent physical objects out of nothing. An example spell is": "！ 魔法学派研究从无到有创造永久或半永久的物理对象。 一个示例法术是",
    "About": "关于",
    "Air": "气",
    "Allow progress data collection": "允许进度数据收集",
    "Current Goal": "当前目标",
    "Earth": "地",
    "Elements": "元素",
    "Help": "帮助",
    "Actions": "动作",
    "Close": "关闭",
    "Cast Spell": "施法",
    "Events": "事件",
    "Magic Research": "魔法研究",
    "Resources": "资源",
    "Offline Progress": "离线进度",
    "Schools": "学校",
    "Stats": "统计",
    "Welcome back to Magic Research!": "欢迎回到魔法研究！",
    "Time Pieces": "时光碎片",
    "Time Pieces! Time Pieces allow you to make time pass faster for a duration. You can do so from the left side menu!": "时光碎片！ 时间碎片可以让你在一段时间内让时间过得更快。 您可以从左侧菜单执行此操作！",
    "Destroy": "销毁",
    "Finished": "已完成",
    "Enchantment": "附魔",
    "Conjuration": "召唤",
    "Campus": "校园",
    "A traveling merchant appeared": "出现了一个旅商",
    "Exp": "经验",
    "Found a staff!": "找到一把法杖！",
    "Gather Mana": "收集法力",
    "Gather more Mana": "收集更多法力",
    "Illusion": "幻觉",
    "Mana": "法力",
    "No spells yet!": "还没有法术！",
    "Ongoing": "进行中",
    "Options": "选项",
    "Pick up": "捡起",
    "Speed up time (10 Time Pieces / sec)": "加速时间（10 时光碎片 / 秒）",
    "\"This pebble magically produces water\", he says. \"This might be useful to you. It can be yours for 1500 coins. Would you like to purchase it?\"": "“这颗鹅卵石神奇地产生了水”，他说。 \“这个可能对你有用，1500金币就可以入手了，要不要买？”",
    "Buy the pebble": "购买鹅卵石",
    "Decline": "婉拒",
    "Maybe later": "也许以后",
    "Focus your thoughts and gather mana.": "集中你的思想并收集​​法力。",
    ". You think of trying it soon!": ". 你想尽快尝试一下！",
    "By School": "学校分类",
    "Convert Mana into a few pebbles.": "将法力转化为一些鹅卵石。",
    "Convert Mana into some drops of water.": "将法力转化为一些水滴。",
    "Create more Stone and Water": "创造更多的鹅卵石和水",
    "Create Water": "创造水",
    "Create Pebble": "创造鹅卵石",
    "Expand all": "全部展开",
    "Gathering Mana is useful, but why would you do it if you had nothing to use it for?": "收集法力是有用的，但如果你没有什么用，你为什么要这么做呢？",
    "You are a Wizard": "你是个巫师",
    "You have unlocked the ability to cast spells! You can cast spells by pressing the wand icon at the top right corner of the screen.": "你已经解锁了施法的能力！ 您可以通过按下屏幕右上角的魔杖图标来施法。",
    "You slowly recall how to cast spells and remember a basic Conjuration spell,": "你回忆起如何施法并慢慢记住一个基本的召唤法术，",
    "Favorites": "偏爱",
    "Stone": "石头",
    "Demo Version": "Demo 版本",
    "Assets from:": "素材来自：",
    "Credits": "鸣谢",
    "Get the full version for Android in": "获取完整版（安卓版）请访问",
    "A game by": "游戏创作者为",
    "the Google Play Store": "Google Play 商店",
    "Automatically generate Mana and refill your supply.": "自动生成法力并补充你的供应。",
    "/sec": "/秒",
    "Buildings": "建筑",
    "Cost:": "成本：",
    "Water": "水",
    "Build a Mana Shard": "建造一个法力碎片",
    "If only you had a way to store more mana... Then you remember what you had learned as an apprentice, that Mana Shards can increase capacity.": "要是你有办法储存更多的法力就好了……然后你会想起你作为学徒学到的东西，法力碎片可以增加容量。",
    "The mana reserves of the school are building up. Looking at them, you realize they may soon hit their maximum.": "学校的法力储备正在积累，看着他们，你意识到他们可能很快就会达到最大值。",
    "The Mana Shard": "法力碎片",
    "We could buy some if we had enough coins... maybe with some Illusion spell?": "如果我们有足够的金币，我们可以买一些……也许用一些幻觉法术？",
    "You can now build Mana Shards!": "你现在可以建造法力碎片了！",
    "Coins": "金币",
    "Completion Percentage:": "完成百分比：",
    "Global production multiplier:": "全局生产乘数：",
    "Global research multiplier:": "全局研究乘数：",
    "In-game time played (this run):": "游戏内时间（本轮）：",
    "In-game time played (total):": "游戏内时间（总计）：",
    "Increase the amount of mana you can store.": "增加您可以存储的法力值。",
    "Real world time played (this run):": "真实游戏时间（本轮）：",
    "Real world time played (total):": "真实游戏时间（总计）：",
    "Storylines": "故事情节",
    "Total Completed Storylines:": "总完成的故事情节：",
    "Total times retired:": "退休总次数：",
    "Buffs": "增益",
    "The Mana Spouts are Bursting!": "法力喷泉正在爆发！",
    "You can now build Warehouses!": "您现在可以建造仓库了！",
    "Storage Ideas": "存储理念",
    "Maybe you can use the stone to create more room? It seems like a smart, straightforward idea... you could make a stone warehouse.": "也许你可以用石头创造更多的空间？ 这似乎是一个聪明、直接的想法……你可以建造一个石头仓库。",
    "Accumulating stone is worthwhile. As you watch your reserves getting closer to full, you start thinking if there might be a way to improve the situation.": "积累石头是值得的。 当你看到你的储备越来越接近饱和时，你开始思考是否有办法改善这种情况。",
    "Increases the maximum resources you can store.": "增加您可以存储的最大资源。",
    "Create Rock": "创造石头",
    "Level:": "等级：",
    "Maximum Primary Level in previous runs (MPL):": "本轮游戏中的最高初级等级 (MPL)：",
    "Next level, you will learn:": "下一级，您将学习：",
    "No new spells": "没有新法术",
    "To Next Level:": "到下一级：",
    "Wind Show": "驭风",
    "Options / Save Data": "选项 / 保存数据",
    "Spells": "法术",
    "Introduction": "介绍",
    "Learn how to play the game!": "学习如何玩本游戏！",
    ". This will take you to the magic menu, where you can cast any spell you may have learned.": ". 这将带您进入魔法菜单，您可以在其中施展您可能学到的任何咒语。",
    "- if you are not sure of what to do next, you can follow what it says.": "- 如果您不确定下一步该做什么，您可以按照它说的去做。",
    "In Magic Research, you are the headmaster of a magical institution. Cast spells, accumulate resources, create buildings, and much more to gain prestige and build the best magical school in the world!": "在 魔法研究 中，您是魔法学院的校长。 施展法术、积累资源、建造建筑等等，以获得声望并建立世界上最好的魔法学校！",
    "In the top left corner, you will find": "在左上角，您会发现",
    "In the top right corner, you will find two buttons.": "在右上角，您会发现两个按钮。",
    "takes you to the list of events that have happened recently and allows you to see more information about them or interact with them. In this menu, you can also see": "将您带到最近发生的事件列表，并允许您查看有关它们的更多信息或与它们互动。 在此菜单中，您还可以看到",
    "the magic wand button": "魔杖按钮",
    "the menu button": "菜单按钮",
    "The notification bell button": "通知铃按钮",
    "The other button in the top right corner is": "右上角的另一个按钮是",
    "Welcome to Magic Research!": "欢迎来到魔法研究！",
    "which shows you a breakdown of your current resources and let you access various areas of the game.": "这会向您显示当前资源的细分，并让您访问游戏的各个区域。",
    "your current Goal": "你目前的目标",
    "Time Pieces!": "时光碎片！",
    "Wood!": "木头！",
    "You can now gather": "你现在可以收集",
    "Time to Look Outside": "是时候看看外面了",
    "Our studies of magic are starting to become more fruitful! With our recent advances, we are ready to start broadening our horizons. The campus is big, but there is only so much in it!": "我们对魔法的研究开始变得更有成果了！ 随着我们最近的进展，我们准备开始拓宽我们的视野。 校园很大，但里面只有这么多！",
    "Gather Wood": "收集木头",
    "It seems like there is a nearby forest where we may be able to find wood, which could help us develop our institution even further...": "似乎附近有一片森林，我们可以在那里找到木材，这可以帮助我们进一步发展我们的机构......",
    "Wood": "木头",
    "Collect branches from the nearby forest.": "从附近的森林收集树枝。",
    "Wood Processing": "木材加工",
    "You can now build Lumber Yards!": "你现在可以建造伐木场了！",
    "These trips to the forest are starting to get tedious. You are starting to wonder if there is a way you could make it easier on yourself.": "这些森林之旅开始变得单调乏味。 您开始想知道是否有一种方法可以让您自己更轻松。",
    "Perhaps there is a way? Maybe we can reuse the wood we obtained to make something bigger? You get lost in thought as you walk back to campus.": "也许有办法？ 也许我们可以重新利用我们获得的木材来制造更大的东西？ 当你走回校园时，你陷入了沉思。",
    "By the time you arrive, you have figured it out. Lumber yards right at the edge of the forest. It can surely work!": "当你到达时，你已经弄明白了。 伐木场就在森林的边缘。 它一定可以工作！",
    "Processes branches and trees, generating wood automatically.": "加工树枝和树木，自动生成木材。",
    "Water Storage": "储水",
    "You can now build Water Tanks!": "你现在可以建造水箱了！",
    "You feel a surge of inspiration, as you realize you could build a container. Then you figure it's downright obvious.": "当您意识到自己可以构建一个容器时，您会感到灵感涌动。 然后你认为这是非常明显的。",
    "You have been struggling with water storage for a while. Creating it is easy, but you have nowhere to place it - it just drops to the ground!": "您已经为储水问题苦苦挣扎了一段时间。 创建它很容易，但您无处放置它 - 它会掉到地上！",
    "You set out to build a water tank with stone and wood.": "你着手用石头和木头建造一个水箱。",
    "Allows you to stockpile water.": "允许你储存水。",
    "Create a basic entertainment show based on petty illusions.": "根据琐碎的幻想创建一个基本的娱乐节目。",
    "Enchant Mana Spouts": "附魔法力喷泉",
    "Magic Show": "魔术表演",
    "Magically alter your Mana Spouts to produce more mana for a limited time.": "神奇地改变你的 法力喷泉 以在有限的时间内产生更多的法力。",
    "produced by Mana Spouts for 30 sec.": "由 法力喷泉 产生，持续 30 秒。",
    "\"Wow, this would be great source material,\" she says.": "“哇，这将是很好的原始材料，”她说。",
    "A wild researcher appeared": "一位狂野的研究员出现了",
    "An enthusiastic lady looks at your Mana and notices the large amount you have.": "一位热情的女士看到您的法力值，并注意到您拥有大量的法力值。",
    "Continue": "继续",
    "Hire the Researcher": "雇用研究员",
    "Congratulations!": "恭喜！",
    "Conjuration Level Up!": "召唤等级提升！",
    "Create a larger rock to get plenty of Stone.": "创造一个更大的岩石来获得大量的石头。",
    "New spells learned:": "学到的新法术：",
    "Your Conjuration level is now 2!": "",
    "A Pile of Stone": "一堆石头",
    "A Pile of Wood": "一堆木头",
    "You find a pile of stone as you walk through campus. You are not sure why it's there, but it seems misplaced. You decide to take it.": "当你穿过校园时，你会发现一堆石头。 你不确定它为什么在那里，但它似乎放错了地方。 你决定接受它。",
    "You stumble upon a pile of wood as you walk through campus. You are not sure why it's there, but it seems misplaced. You decide to take it.": "当你穿过校园时，你偶然发现了一堆木头。 你不确定它为什么在那里，但它似乎放错了地方。 你决定接受它。",
    "You look at her, perplexed and somewhat confused. Then she continues explaining.": "你看着她，既困惑又有些迷茫。 然后她继续解释。",
    "\"Large amounts of Mana are hard to come by, and are almost a requirement for the successful study of Magic.\"": "“大量的法力来之不易，几乎是魔法学习成功的必要条件。”",
    "\"Are you trying to study magic here? This is exciting!": "\"你是想在这里学习魔法吗？这太刺激了！",
    "\"But there's a problem. There's nowhere for them to stay in. I have an idea for a cabin, but... we'll need to build it, first. Oh well.. back to work,\" she mentions, as she turns away and continues focusing on her research.": "\“但是有一个问题。他们没有地方可以住。我有一个小木屋的想法，但是......我们首先需要建造它。哦，好吧......回去工作，“她提到，当她转身继续专注于她的研究时。",
    "\"Perfect! I will get started right away. I'm sure this is the beginning of a very fruitful relationship for us both!,\" she exclaims.": "“完美！我会马上开始。我相信这对我们双方来说是一段非常富有成果的关系的开始！”她惊呼道。",
    "\"So what will it be?\"": "\"那会是什么呢？\"",
    "Housing for Researchers": "研究人员住房",
    "Continue doing research": "继续进行研究",
    "I'd be willing to work here for a small price... let's say 200 Coins. Of course, you would be the first to learn what I find out, and you would be able to tell me what I should focus on,\" she says earnestly.": "我愿意以很少的价格在这里工作……比方说 200 金币。 当然，你会是第一个知道我发现了什么，你会告诉我我应该关注什么，”她认真地说。",
    "Pay 200 Coins": "付 200 金币",
    "Research": "研究",
    "You can now build Researcher Cabins!": "你现在可以建造研究员小屋了！",
    "You have unlocked the \"Research\" feature! You may find it on the left-side menu.": "您已解锁“研究”功能！ 您可以在左侧菜单中找到它。",
    "You ponder her words for some time. Regardless of her feelings, you recognize that double the researchers could greatly speed things up. You think of possibly building a Researcher Cabin as she suggested, and hiring an extra researcher.": "你思考了她的话一段时间。 不顾她的感受，你意识到双倍的研究人员可以大大加快速度，你考虑可能按照她的建议建造一个研究人员小屋，并雇用一个额外的研究人员。",
    "You produce 200 coins out of your pockets, and hand them over to the researcher. She looks at the coins and puts them away in the pockets of her robes.": "你从口袋里掏出 200 个金币，交给研究人员。 她看了看硬币，把它们放在长袍的口袋里。",
    "Your researcher comes up to you. \"Studying here has been great so far!\", she says. \"But it certainly is somewhat lonely... it would be great to have company. We could get double the work done; imagine how fast we could discover new things!\", she exclaims.": "你的研究员来找你。 “到目前为止，在这里学习一直很棒！”，她说。 “但它确实有点孤独……有人陪伴会很棒。我们可以完成双倍的工作；想象一下我们发现新事物的速度有多快！”，她感叹道。",
    "Housing for researchers to live in campus.": "供研究人员住在校园内的住房。",
    "Your Researchers are Inspired!": "您的研究人员受到启发！",
    "You wonder if there might be a way to somehow automate this, as it's starting to feel a bit dull. But thinking about it, you can't figure out any solution...": "你想知道是否有办法以某种方式自动执行此操作，因为它开始感觉有点乏味。 但是想想也想不出什么办法……",
    "Use Time Pieces": "使用时光碎片",
    "Use all your time pieces to get a large amount of research.": "使用你所有的 时光碎片 来获得大量的研究。",
    "Researchers available:": "可用的研究人员：",
    "Researcher capacity:": "研究员容量：",
    "Instantly obtain 3 min of research": "立即获得 3 分钟的研究",
    "How many times have you manually cast a spell by now? You have lost count. It certainly is not difficult for you. However, there is real repetition to these casts.": "你现在手动施法多少次了？ 你数不清了。 这对你来说当然不难。 但是，这些演员表确实存在重复。",
    "Hire Researcher": "雇用研究员",
    "Hire a new researcher to gain magical experience faster.": "雇用一名新研究员以更快地获得魔法经验。",
    "Exp per researcher:": "每个研究员的经验值：",
    "Casting Spells is Repetitive": "施法是重复的",
    "/ sec": "/ 秒",
    "(Primary)": "(初级)",
    "Apprentices Need Sleep": "学徒需要睡眠",
    "Create Water II": "创造水 II",
    "Convert Mana into a larger chunk of water.": "将法力转化为更大的水滴。",
    "Finish the \"Apprentices Need Sleep\" event": "完成“学徒需要睡觉”事件",
    "\"I have a great idea!\", she says. \"This is my cousin. He is a wizard-in-training... an apprentice wizard,\" she continues, while gazing at him, before looking at you once more.": "“我有个好主意！”她说。 “这是我的堂兄。他是一名受训巫师……一名学徒巫师，”她继续说道，同时注视着他，然后又再次看着你。",
    "\"It is a honor to meet you, headmaster,\" exclaims the apprentice, while bowing at you somewhat too deeply.": "“很荣幸见到您，校长，”学徒大声说道，同时向您深深地鞠了一躬。",
    "\"There's just a little problem,\" the researcher continues. \"There is nowhere for him to sleep in! We'll need to build something.\"": "“只是有点问题，”研究人员继续说道。 “他没有地方睡觉！我们需要建造一些东西。”",
    "Build an Apprentice Dorm": "建造一个学徒宿舍",
    "Housing for apprentices, which can help cast spells.": "学徒的住房，可以帮助施法。",
    "manually. You reassure the researcher and her cousin that you will think about it, and you walk away, starting to picture what you would need to construct suitable housing for your first apprentice.": "手动。 你向研究人员和她的堂兄保证你会考虑这件事，然后你走开了，开始想象你需要什么来为你的第一个学徒建造合适的住房。",
    "The researcher continues. \"It'd be great to have him stay here! He could help you cast spells and continue improving our campus. Besides, a magical institution makes no sense without people who'd like to learn. What do you think?\", she asks you.": "研究人员继续说道。 \"让他留在这里就好了！他可以帮助你施法，继续改善我们的校园。而且，没有愿意学习的人，一个魔法机构就没有意义。你怎么看？\",她问你。",
    "You can now build Apprentice Dorms!": "你现在可以建造学徒宿舍了！",
    "You recall thinking about how tedious it was to cast spells. This could be a big help!": "你记得想过施法是多么乏味。 这可能是一个很大的帮助！",
    "You saw it coming. Still, you can't wait - you've had enough casting": "你看到它来了。 不过，你等不及了——你已经受够了",
    "Your researcher walks up to you. She is together with a shaky individual, who seems to be barely breaking into adulthood and appears scared at your sight.": "你的研究员走到你身边。 她和一个似乎刚刚进入成年期并且看起来很害怕的人在一起。",
    "A metal-reinforced building that produces mana.": "一座产生法力的金属加固建筑。",
    "As you slowly start getting more and more iron, you think of a plan to improve on your Mana Spouts. You are thinking that, by adding iron, you should be able to create a structure that can produce mana at a much faster rate than a simple spout.": "随着您慢慢开始获得越来越多的铁，您想到了一个改进 法力喷泉 的计划。 您在想，通过添加铁，您应该能够创建一种结构，其产生法力的速度比简单的喷口快得多。",
    "Create Iron Ore": "创造铁矿石",
    "Gather Iron": "收集铁",
    "Iron": "铁",
    "Materialize a piece of iron ore.": "实体化一块铁矿石。",
    "Mine for iron.": "铁矿。",
    "The Quarry": "采石场",
    "You can now build Mana Geysers!": "你现在可以建造法力间歇泉了！",
    "You will definitely require a lot of iron, but it'll be worth it in the long run, you tell yourself. Mana is the cornerstone of magic!": "你肯定需要很多铁，但从长远来看，这是值得的，你告诉自己。 法力是魔法的基石！",
    "Illusion Level Up!": "幻觉升级了！",
    "Create an entertainment show based on wind gusts.": "创建一个基于阵风的娱乐节目。",
    "Coin Storage": "金币存储",
    "Allows you to store more coins safely.": "让您安全地存储更多金币。",
    "s have been useful; stone has proven to be a good material for tons of things. You think about using it for a specialized building for money storage. You are concerned about bandits, but are convinced it'll be worth it in the long run.": "很有用； 事实证明，石头是制作大量物品的好材料。 您考虑将其用于专门用于存放货币的建筑物。 你担心土匪，但相信从长远来看这是值得的。",
    "You are managing to stockpile large amounts of coins! It would be wise to find a place to put them in.": "您正在设法储存大量金币！ 找个地方把它们放进去是明智的。",
    "ou can now build Vaults!": "你现在可以建造金库了！",
    "Copy savefile to clipboard": "将存档复制到剪贴板",
    "Data collection": "数据采集",
    "Import savefile": "导入存档",
    "Load File": "加载文件",
    "Performance": "性能",
    "Save File": "保存存档",
    "Target FPS:": "目标帧率：",
    "The game collects and sends small amounts of data related to your progress through the game in order to improve the game. If you prefer, you may opt out of this data collection.": "游戏会收集并发送与您的游戏进度相关的少量数据，以改进游戏。 如果您愿意，您可以选择退出此数据收集。",
    "WARNING: This will erase your current save! Make sure you have backed up your data!": "警告：这将删除您当前的保存！ 确保您已备份数据！",
    "You may import save data by pasting it here.": "您可以通过在此处粘贴来导入保存数据。",
    "You may persist your save data by copying it to the clipboard and storing it anywhere you'd like.": "您可以通过将保存的数据复制到剪贴板并将其存储在您想要的任何位置来保留保存的数据。",
    "You may set your target FPS here. Higher FPS will make the game smoother but it could affect battery power and CPU usage.": "您可以在此处设置目标 FPS。 更高的 FPS 将使游戏更流畅，但它可能会影响电池电量和 CPU 使用率。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Mana Spout": "法力喷泉",
    "Mana Shard": "法力碎片",
    "(Conjuration Lv": "（召唤 等级",
    "(Illusion Lv": "（幻觉 等级",
    "You obtained ": "你获得了 ",
    "You obtain ": "你获得了 ",
    "Water Tank": "水箱",
    "Warehouse": "仓库",
    "Lumber Yard": "伐木场",
    "Your Conjuration level is now ": "你的召唤等级现在是 ",
    "Researcher Cabin": "研究员小屋",
    "Apprentice Dorm": "学徒宿舍",
    "Mana Geyser": "法力间歇泉",
    "Mana Geysers": "法力间歇泉",
    "Your Illusion level is now ": "你现在的幻觉等级是 ",
    "Vault": "金库",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "You pick up the staff. It's cursed! You feel your mana getting drained.": "你捡起了法杖。 它被诅咒了！ 你觉得你的法力正在耗尽。",
    "A staff was found on the ground.": "在地上发现了一把法杖。",
    "A traveling merchant appears at the campus gates and approaches you. \"Look at this\", he says, while getting a moist bag out from his pockets. He opens the bag, and shows you a small stone. You notice the stone seems to be emanating water.": "一位旅行商人出现在校园门口并接近你。 “看看这个”，他一边说，一边从口袋里掏出一个湿漉漉的袋子。 他打开袋子，给你看一块小石头。 你注意到石头似乎在散发水。",
    "A traveling merchant appears at the campus gates and approaches you. \"Look at this\", he says, while getting a moist bag out from his pockets. He opens the bag, and shows you a small stone. You notice the stone seems to be emanating water.\n      \n\"This pebble magically produces water\", he says. \"This might be useful to you. It can be yours for 1500 coins. Would you like to purchase it?\"": "一位旅行商人出现在校园门口并接近你。 “看看这个”，他一边说，一边从口袋里掏出一个湿漉漉的袋子。 他打开袋子，给你看一块小石头。 你注意到石头似乎在散发水。\n \n\“这颗鹅卵石神奇地产生了水”，他说。 \“这个可能对你有用，1500金币就可以入手了，要不要买？”",
    "Gathering Mana is useful, but why would you do it if you had nothing to use it for?\n\nYou slowly recall how to cast spells and remember a basic Conjuration spell, *Create Pebble*. You think of trying it soon!\n\n**You have unlocked the ability to cast spells! You can cast spells by pressing the wand icon at the top right corner of the screen.**": "收集法力很有用，但如果你没有什么用，你为什么要这样做呢？\n\n你慢慢回忆起如何施法并记住一个基本的召唤法术，*创建鹅卵石*。 你想尽快尝试一下！\n\n**你已经解锁了施法的能力！ 您可以通过按屏幕右上角的魔杖图标来施法。**",
    "The mana reserves of the school are building up. Looking at them, you realize they may soon hit their maximum.\n    \nIf only you had a way to store more mana... Then you remember what you had learned as an apprentice, that Mana Shards can increase capacity.\n    \nWe could buy some if we had enough coins... maybe with some Illusion spell?\n\n**You can now build Mana Shards!**": "学校的法力储备正在增加。看着它们，你会意识到它们可能很快就会达到最大值。\n \n要是你有办法储存更多的法力就好了......然后你会想起你作为学徒学到的东西，法力碎片可以增加容量。\n \n如果我们有足够的金币，我们可以买一些......也许用一些幻觉法术？\n\n**你现在可以建造法力碎片了！**",
    "It looks like our mana spouts are suddenly bursting with activity and producing Mana twice as fast!": "看起来我们的法力喷泉突然充满活力并以两倍的速度产生法力！",
    " Max": " 上限",
    "Accumulating stone is worthwhile. As you watch your reserves getting closer to full, you start thinking if there might be a way to improve the situation.\n    \nMaybe you can use the stone to create more room? It seems like a smart, straightforward idea... you could make a stone warehouse.\n\n**You can now build Warehouses!**": "积累石头是值得的。 当你看到你的储备越来越接近饱和时，你开始思考是否有办法改善这种情况。\n \n也许你可以用石头创造更多空间？ 这似乎是一个聪明、直接的想法……你可以建造一个石头仓库。\n\n**你现在可以建造仓库了！**",
    "Our studies of magic are starting to become more fruitful! With our recent advances, we are ready to start broadening our horizons. The campus is big, but there is only so much in it!\n    \nIt seems like there is a nearby forest where we may be able to find wood, which could help us develop our institution even further...\n\n**You can now gather:wood: Wood!**": "我们对魔法的研究开始变得更有成果了！ 随着我们最近的进展，我们准备开始拓宽我们的视野。 校园很大，但里面只有这么多！\n\n好像附近有一片森林，我们可以在那里找到木材，这可以帮助我们进一步发展我们的机构......\n\n **你现在可以收集：木头：木头！**",
    "These trips to the forest are starting to get tedious. You are starting to wonder if there is a way you could make it easier on yourself.\n    \nPerhaps there is a way? Maybe we can reuse the wood we obtained to make something bigger? You get lost in thought as you walk back to campus.\n\nBy the time you arrive, you have figured it out. Lumber yards right at the edge of the forest. It can surely work!\n\n**You can now build Lumber Yards!**": "这些森林之旅开始变得单调乏味。 您开始想知道是否有一种方法可以让您自己更轻松。\n \n也许有一种方法？ 也许我们可以重新利用我们获得的木材来制造更大的东西？ 当您走回校园时，您陷入了沉思。\n\n当您到达时，您已经想通了。 伐木场就在森林的边缘。 它肯定可以工作！\n\n**你现在可以建造伐木场了！**",
    "You have been struggling with water storage for a while. Creating it is easy, but you have nowhere to place it - it just drops to the ground!\n    \nYou feel a surge of inspiration, as you realize you could build a container. Then you figure it's downright obvious.\n\nYou set out to build a water tank with stone and wood.\n\n**You can now build Water Tanks!**": "您已经为储水问题苦苦挣扎了一段时间。 创建它很容易，但您无处放置它 - 它只会掉到地上！\n \n当您意识到可以建造一个容器时，您会感到灵感涌动。 然后你觉得这很明显。\n\n你开始用石头和木头建造一个水箱。\n\n**你现在可以建造水箱了！**",
    "You look at her, perplexed and somewhat confused. Then she continues explaining.\n\n\"Large amounts of Mana are hard to come by, and are almost a requirement for the successful study of Magic.\"": "你看着她，困惑又有些困惑。 然后她继续解释。\n\n\“大量的魔力很难获得，而且几乎是成功学习魔法的必要条件。”",
    "\"Are you trying to study magic here? This is exciting!\n            \nI'd be willing to work here for a small price... let's say 200 Coins. Of course, you would be the first to learn what I find out, and you would be able to tell me what I should focus on,\" she says earnestly.\n\n\"So what will it be?\"": "\"你是想在这里学习魔法吗？这太令人兴奋了！\n \n我愿意在这里工作，只要一个小价钱……比方说 200 币。当然，你会是第一个学到我发现的东西的人出来，你就能告诉我应该关注什么，”她认真地说。\n\n\“那会是什么呢？\”",
    "You produce 200 coins out of your pockets, and hand them over to the researcher. She looks at the coins and puts them away in the pockets of her robes.\n\n\"Perfect! I will get started right away. I'm sure this is the beginning of a very fruitful relationship for us both!,\" she exclaims.\n\n**You have unlocked the \"Research\" feature! You may find it on the left-side menu.**": "你从口袋里掏出 200 个金币，交给研究人员。 她看着硬币，把它们放在长袍的口袋里。\n\n\“太棒了！我会马上开始。我相信这对我们双方来说是一段非常富有成果的关系的开始！，\ ”她惊呼道。\n\n**你已经解锁了“研究”功能！ 您可以在左侧菜单中找到它。**",
    "Your researcher comes up to you. \"Studying here has been great so far!\", she says. \"But it certainly is somewhat lonely... it would be great to have company. We could get double the work done; imagine how fast we could discover new things!\", she exclaims.\n    \n\"But there's a problem. There's nowhere for them to stay in. I have an idea for a cabin, but... we'll need to build it, first. Oh well.. back to work,\" she mentions, as she turns away and continues focusing on her research.\n\nYou ponder her words for some time. Regardless of her feelings, you recognize that double the researchers could greatly speed things up. You think of possibly building a Researcher Cabin as she suggested, and hiring an extra researcher.\n\n**You can now build Researcher Cabins!**": "你的研究员来找你。 “到目前为止，在这里学习一直很棒！”，她说。 \“但它确实有点孤独……有人陪伴会很棒。我们可以完成双倍的工作；想象一下我们发现新事物的速度有多快！\”，她惊呼道。\n \n\“但是有“一个问题。他们没有地方可以住。我有个小木屋的主意，但是……我们首先需要建造它。哦，好吧……回去工作吧，”她转身离开时说道并继续专注于她的研究。\n\n你思考了她的话一段时间。 不管她的感受如何，你认识到双倍的研究人员可以大大加快速度。你考虑可能按照她的建议建造一个研究员小屋，并雇用一名额外的研究员。\n\n**你现在可以建造研究员小屋了！**",
    " Max Researchers": " 研究员上限",
    "Your researchers seem to have a burst of inspiration! They will be studying twice as hard for a short time.": "你的研究人员似乎灵感迸发！ 他们将在短时间内加倍努力学习。",
    "How many times have you manually cast a spell by now? You have lost count. It certainly is not difficult for you. However, there is real repetition to these casts.\n    \nYou wonder if there might be a way to somehow automate this, as it's starting to feel a bit dull. But thinking about it, you can't figure out any solution...": "你现在手动施法多少次了？ 你数不清了。 这对你来说当然不难。 然而，这些转换确实有重复。\n \n你想知道是否有办法以某种方式自动执行此操作，因为它开始感觉有点乏味。 但是想想也想不出什么办法……",
    "Your researcher walks up to you. She is together with a shaky individual, who seems to be barely breaking into adulthood and appears scared at your sight.\n\n\"I have a great idea!\", she says. \"This is my cousin. He is a wizard-in-training... an apprentice wizard,\" she continues, while gazing at him, before looking at you once more.": "你的研究员走到你身边。 她和一个摇摇欲坠的人在一起，这个人似乎几乎没有进入成年期，一看到你就害怕。\n\n\“我有一个好主意！\”，她说。 “这是我的堂兄。他是一名受训巫师……一名学徒巫师，”她继续说道，同时注视着他，然后又再次看着你。",
    "\"It is a honor to meet you, headmaster,\" exclaims the apprentice, while bowing at you somewhat too deeply.\n\nThe researcher continues. \"It'd be great to have him stay here! He could help you cast spells and continue improving our campus. Besides, a magical institution makes no sense without people who'd like to learn. What do you think?\", she asks you.\n\nYou recall thinking about how tedious it was to cast spells. This could be a big help!": "“很荣幸见到您，校长，”学徒大声说道，同时向您深深地鞠了一躬。\n\n研究员继续说道。 \"让他留在这里就好了！他可以帮助你施法，继续改善我们的校园。而且，没有愿意学习的人，一个魔法机构就没有意义。你怎么看？\",她问你。\n\n你记得想过施法是多么乏味。 这可能是一个很大的帮助！",
    "As you slowly start getting more and more iron, you think of a plan to improve on your Mana Spouts. You are thinking that, by adding iron, you should be able to create a structure that can produce mana at a much faster rate than a simple spout.\n    \nYou will definitely require a lot of iron, but it'll be worth it in the long run, you tell yourself. Mana is the cornerstone of magic!\n\n**You can now build Mana Geysers!**": "随着您慢慢开始获得越来越多的铁，您想到了一个改进 Mana Spouts 的计划。 你在想，通过添加铁，你应该能够创建一个可以比简单的喷口更快地产生法力的结构。\n \n你肯定需要很多铁，但这是值得的从长远来看，你告诉自己。 法力是魔法的基石！\n\n**你现在可以建造法力间歇泉了！**",
    "Your researcher calls your attention. \"There is a place you should see\", she exclaims, walking outside the campus. \"Follow me.\" You do as instructed.\n    \nYou end up in what seems to be a fairly rocky cliff. However, you notice the rock in a wall shining a different color. \"That's iron,\" your researcher says. \"This is a sturdy metal. Not too useful for casting magic, but it could be great for buildings... or...\"\n\nYou agree with her. Learning about this place for the first time, you thank the researcher. You'll be sure to come back prepared next time - this could be useful!\n\n**You unlocked the ability to gather iron!**": "您的研究人员引起您的注意。 “有一个地方你应该去看看”，她在走出校园时大声说道。 \"跟我来。\"你按照指示去做。\n \n你最终来到了一个看起来相当多岩石的悬崖。 但是，您注意到墙上的石头闪耀着不同的颜色。 “那是铁，”你的研究人员说。 \“这是一种坚固的金属。对施法不太有用，但对建筑来说可能很棒……或者……\”\n\n你同意她的看法。 第一次知道这个地方，谢谢研究员。 下次你一定会做好准备 - 这可能会有用！\n\n**你解锁了收集铁的能力！**",
    "\"There's just a little problem,\" the researcher continues. \"There is nowhere for him to sleep in! We'll need to build something.\"\n            \nYou saw it coming. Still, you can't wait - you've had enough casting *Create Pebble* manually. You reassure the researcher and her cousin that you will think about it, and you walk away, starting to picture what you would need to construct suitable housing for your first apprentice.\n\n**You can now build Apprentice Dorms!**": "“只是有点问题，”研究人员继续说道。 \"他没有地方睡觉！我们需要建造一些东西。\"\n \n你看到它来了。 不过，您已经迫不及待了 - 您已经进行了足够多的手动铸造 *创造鹅卵石*。 你向研究员和她的表妹保证你会考虑这个问题，然后你走开，开始想象你需要什么来为你的第一个学徒建造合适的住房。\n\n**你现在可以建造学徒宿舍了！**",
    "You are managing to stockpile large amounts of coins! It would be wise to find a place to put them in.\n    \nWarehouses have been useful; stone has proven to be a good material for tons of things. You think about using it for a specialized building for money storage. You are concerned about bandits, but are convinced it'll be worth it in the long run.\n\n**You can now build Vaults!**": "您正在设法储存大量硬币！ 找个地方把它们放进去是明智的。\n \n仓库一直很有用； 事实证明，石头是制作大量物品的好材料。 您考虑将其用于专门用于存放货币的建筑物。 你担心强盗，但相信从长远来看这是值得的。\n\n**你现在可以建造保险库了！**",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^(.+)Welcome back to Magic Research!\n      \n\*\*You obtained (.+):timepiece: Time Pieces! Time Pieces allow you to make time pass faster for a duration. You can do so from the left side menu!\*\*$/, '$1欢迎回到魔法研究！\n \n**您获得了 $2:时光碎片：时间碎片！ 时间碎片可以让你在一段时间内让时间过得更快。 您可以从左侧菜单执行此操作！**'],
    [/^(.+)Welcome back to Magic Research!\n      \n\*\*You obtained (.+):timepiece: Time Pieces!\*\*$/, '$1欢迎回到魔法研究！\n \n**您获得了 $2:时光碎片：时间碎片！ **'],
    [/^(.+)Congratulations!\n      \nYour Illusion level is now (.+)!\n\n\*\*New spells learned:\*\* \*Wind Show\* \(Illusion Lv(.+)\)\n$/, '$1恭喜！\n \你的幻觉等级现在是 $2！\n\n**学到的新法术：** *驭风*（幻觉 等级$3）\n'],
    [/^(.+)Congratulations!\n      \nYour Conjuration level is now (.+)!\n\n\*\*New spells learned:\*\* \*Create Rock\* \(Conjuration Lv(.+)\)\n$/, '$1恭喜！\n \你的召唤等级现在是 $2！\n\n**学到的新法术：** *创造石头*（召唤 等级$3）\n'],
    [/^(.+)Congratulations!\n      \nYour Conjuration level is now (.+)!\n\n\*\*New spells learned:\*\* \*Create Water (.+)\* \(Conjuration Lv(.+)\)\n$/, '$1恭喜！\on \你的召唤等级现在是 $2！\n\n**学到的新法术：** *创造水 $3*（召唤 等级$4）\n'],
    [/^(.+)Congratulations!\n      \nYour Conjuration level is now (.+)!\n\n\*\*New spells learned:\*\* \*Create Iron Ore\* \(Conjuration Lv(.+)\)\n$/, '$1恭喜！\on \你的召唤等级现在是 $2！\n\n**学到的新法术：** *创造铁矿石*（召唤 等级$3）\n'],
    [/^(.+)You find a pile of stone as you walk through campus. You are not sure why it's there, but it seems misplaced. You decide to take it.\n        \n\*\*You obtain (.+):stone:!\*\*$/, '$1当你穿过校园时，你会发现一堆石头。 你不确定它为什么在那里，但它似乎放错了地方。 你决定接受它。\n \n**你获得 $2:石头:!**'],
    [/^(.+)You stumble upon a pile of wood as you walk through campus. You are not sure why it's there, but it seems misplaced. You decide to take it.\n        \n\*\*You obtain (.+):wood:!\*\*$/, '$1当你穿过校园时，你偶然发现了一堆木头。 你不确定它为什么在那里，但它似乎放错了地方。 你决定接受它。\n \n**你获得 $2:木头:!**'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Conjuration Lv(.+) \(Primary\)$/, '召唤 等级$1（初级）'],
    [/^Enchant Mana Spouts \((.+) sec\)$/, '附魔法力喷泉（$1 秒）'],
    [/^Illusion Lv(.+)$/, '幻觉 等级$1'],
    [/^Enchantment Lv(.+)$/, '附魔 等级$1'],
    [/^s bursting with activity! \((.+) sec\)$/, '充满活力！（$1 秒）'],
    [/^Your researchers are inspired! \((.+) sec\)$/, '您的研究人员受到启发！（$1 秒）'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) days, ([\d\.]+):([\d\.]+):([\d\.]+)$/, '$1 天，$2:$3:$4'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\+([\d\.,]+) Max Apprentices$/, '+$1 学徒上限'],
    [/^\+([\d\.,]+) Researcher$/, '+$1 研究员'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);