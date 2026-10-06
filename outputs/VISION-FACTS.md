# VISION-FACTS

本文件只保存稳定、可复用、可以被主会话当作事实使用的视觉结论。

## Stable Facts

| Key | Value | Source request | Confidence | Notes |
|---|---|---|---|---|
| workflow.main_task.images_loaded | 0 | text-only-estimate-20260924 | high | 本次迁移成本估算未加载任何图片 |
| workflow.vision_requests | 0 | text-only-estimate-20260924 | high | 估算只使用代码、JSON、文档和会话日志 |
| workflow.phase_a.images_loaded | 0 | phase-a-20260924 | high | 阶段 0/A 全程未加载图片 |
| workflow.phase_a.vision_requests | 0 | phase-a-20260924 | high | 阶段 A 没有识图或主观审图请求 |
| godot.migration.audit_rows | 102 | docs/MIGRATION-PARITY.md | high | 含生成形态；规则断言 35、入口 50、缺 17 |
| godot.migration.six_layer_closed | 102 | docs/MIGRATION-PARITY.md | high | 当前验收矩阵全部可关门；仍不等于最终美术完成 |
| godot.phase_a.battle_test | 15/15 | phase-a-20260924 | high | G1-G3 针对性测试全部通过 |
| godot.phase_b.rule_gaps | 0 | phase-b-20260924 | high | 自动审计 R断言 52、R入口 50、R缺 0 |
| godot.parity.current | 16/16 | parity-20260927 | high | 当前双端场景一致 |
| godot.phase_c.card_assertions | 102/102 | phase-c-20260924 | high | 10 个种族全部达到卡级 R断言，R入口与R缺均为0 |
| godot.phase_c.six_layer_closed | 102 | phase-d-20260924 | high | 阶段 D 后六层结构全部可关门；主观视觉仍另审 |
| godot.phase_d.sacrifice_six_layer | 10/10 | phase-d-20260924 | high | 献祭族 UI/事件/动画/音效/P 证据已闭环 |
| godot.phase_d.evolve_six_layer | 7/7 | phase-d-20260924 | high | 进化条/质变/基因/孵化表现与音效轨迹闭环 |
| godot.phase_d.six_layer_closed | 102 | phase-d-20260924 | high | 当前验收矩阵全部可关门 |
| godot.feedback.family_styles | 11 | scripts/mechanic_style.gd | high | 11 个机制族均有唯一主色、强调色、动效母题和占位资源路径 |
| godot.feedback.sacrifice_identity | soul purple + debt gold | docs/MECHANIC-FEEDBACK.md | high | 献祭使用灵魂紫与债务金，来源文案包含契印、灵魂债务、债务偿还、灵魂摄取 |
| godot.feedback.vampire_identity | blood red | docs/MECHANIC-FEEDBACK.md | high | 血族使用血红，来源文案包含吸血、血裔成长、血池、锁血 |
| godot.feedback.drag_preview | valid + invalid | --sacrifice-test | high | 契印、吞噬、磁力、部署、机械合体有合法/非法颜色与标签反馈 |
| godot.feedback.completion_fx | 4 | --sacrifice-test | high | sigil_bind_fx、devour_success_fx、magnet_success_fx、place_success_fx 已登记 |
| godot.feedback.interaction_traces | 22 | tools/parity_audit.gd | high | 拖拽、完成动效、来源色、族矩阵、冻结覆盖、攻击路径、召唤重建、死亡清场、特色状态和描述审计均已登记 |
| godot.feedback.event_sources | 8+ | sim/battle.gd | high | 吸血、血族治疗、血池扩容、债务偿还、债务图腾、债务转化、亡魂继承、同族共鸣等来源 ID 已写入事件 |
| godot.feedback.family_matrix | 11/11 | --families-test | high | 每族代表事件、来源文案、飘字主色、战斗脉冲色逐项通过 |
| godot.feedback.cross_family_fixes | 6 | docs/MECHANIC-FEEDBACK.md | high | 龙/恶魔来源回落、星灵色、机械超导色、吸血关键词、债务档位、亡灵死亡色已分族 |
| godot.feedback.six_layer_semantics | structured != final art | docs/MECHANIC-FEEDBACK.md | high | 六层可关门只代表结构化轨迹存在，不代表最终美术或主观视觉验收 |
| godot.ai.operation | template driven | tools/ai_test.gd | high | AI 使用阵容模板、核心牌评分、机械材料、满场换弱、动态升级和法术运营；ai_test 8/8 |
| godot.freeze.visual | frost overlay + refresh guard | --interaction-test | high | 冻结有冰霜/飘雪/文字覆盖，冻结时刷新按钮禁用且状态机拒绝扣钱刷新 |
| godot.battle.attack_path | attack_path_fx | --battle-anim-test | high | 攻击方到目标有机制色路径、拖尾和冲刺头部 |
| godot.battle.death_slot | clear after animation | --undead-test | high | 死亡动画后清空槽位，召唤进入空位重建完整卡面，不残留空白随从 |
| godot.sacrifice.contract_devour | 0→10 debt | prep_state_test 用例12 | high | 备战期吞噬契印目标立即结算债务并清空契约标记 |
| godot.sacrifice.auto_contract | 自动立契 + debtBonus | prep_state_test 用例12 | high | 血契司仪自动选择最弱献祭目标，contract_bonus=3 |
| godot.dragon.layer_persistence | cross-battle | battle_test 用例29 | high | 龙威层从 3 加到 5 并通过战斗结果返回，不再单场重置 |
| godot.undead.death_persistence | cumulative + delta | battle_test 用例29 | high | 亡灵累计死亡和本场死亡增量分离返回，新单位记录 `_udBase` |
| godot.evolve.phase_persistence | PrepState.phase | sim/prep_state.gd | high | 进化昼夜相位进入战斗参数，有进化随从时每轮切换 |
| godot.skill_descriptions.audit | 54 IDs | --families-test | high | 所有已有效果 ID 必须有中文说明，不能退回内部代号 |
| godot.contract.marker_ownership | player card only | --sacrifice-test | high | 契印只标记我方持有 `_contract` 的真实卡牌；换位跟随，不命中敌方同号槽 |
| godot.sacrifice.debt_node_tiers | 3 visual tiers | --sacrifice-test | high | 小节点浅紫单环、中节点紫色双环、大节点金色外环加紫色内环 |
| godot.node_effect.grammar | family palette + shared tier grammar | docs/MECHANIC-FEEDBACK.md | high | 节点使用分族主色；同族多档节点用 1/2/3 层或等强差异；持久状态跟卡，临时目标可按槽位 |
| godot.start.seed | randomized in normal play | --random-start-test | high | 正常游玩使用运行时种子；32 个样本得到 32 组种族组合、8 种 AI 模板，献祭出现 18/32 |
| godot.evolve.detail | total rounds + transforms + phase | --evolve-test | high | 详情显示已进化总轮数、当前条和质变次数；顶栏显示相:昼/相:夜并说明额外加格 |
| godot.selection.overlay | below selected minion | --interaction-test | high | 查看详情/立契/卖出/取消浮动显示在所选随从下方，不再占据商店操作区 |
| godot.quest.ui | phase chip + selectable declaration | --quest-test | high | 顶栏显示“宣言:任务名 当前/需求”；点击打开昼/夜三选一，只在存在进化随从时显示 |
| godot.quest.live | event-derived progress | tools/quest_test.gd | high | 击杀、结束存活、进化随从出手/受击、我方受伤按战斗事件实时统计 |
| godot.quest.reward | +2 complete / +1 failed in prep | tools/quest_test.gd | high | 奖励写回持久备战棋盘；evolve 走进化条，progress 只加孵化进度，不直接孵化 |
| godot.quest.ai | independent phase and choice | sim/session.gd | high | AI 每轮有独立相位；玩家回池首，AI 在对应夜/昼池内随机选择 |
| godot.progress.start_fix | battle-only progress | tools/quest_test.gd | high | 修复 progress 曾在开场技能阶段提前推进的问题，现在只由战斗胜利结算推进 |
| godot.spell.targeting_arrow | hand-to-mouse dashed arrow | --interaction-test | high | 点击需指定目标的法术/材料后显示指向箭头，施放或喂料后立即回到空闲态 |
| godot.minion.selection_frame | gold frame on selected board card | --interaction-test | high | 点击场上随从后框选随从本体，操作栏不再显示随从名 |
| godot.hand.apply_state | no minion action bar during targeting | --interaction-test | high | 法术/材料选中和应用随从时不展开查看详情、立契、卖出、取消栏 |
| godot.battle.hero_attack | survivors attack player by star | --battle-anim-test | high | 胜方每个存活随从依次播放攻击玩家路径和 `-星级` 伤害飘字 |
| godot.quest.reward_fx | source glow -> green orb -> target | --quest-test | high | 宣言角标发光后，绿光球沿路径汇入备战期受益随从并触发目标脉冲 |
| godot.battle.support_path | source unit -> buff/heal target | --battle-anim-test | high | 来源型 buff/heal 播放来源单位发光、来源到目标路径和目标落地脉冲 |
| godot.freeze.clear | all overlays removed on unfreeze | --interaction-test | high | 解冻后所有 `freeze_overlay` 先隐藏再释放，商店不再残留冰霜效果 |

## Uncertain

| Key | Problem | Next check | Owner |
|---|---|---|---|
| godot.ui.visual_parity | 本次未做主观视觉判断，既有截图未进入主会话 | 后续按单个界面另开视觉任务 | vision |
| godot.feedback.subjective_quality | 颜色区分与轨迹已通过断言，但动画节奏、粒子密度、遮挡和最终风格尚未主观审图 | 另开视觉会话，对交互预览和完成动效逐图评审 | vision |

## Requests

| Request ID | Mode | Summary | Result file |
|---|---|---|---|
| none | text-only | 本次成本估算不依赖视觉抽取 | none |

## Rules

- 主会话只读取 `work/vision-results/` 中的 JSON 和本文件。
- 原图、截图和预览图不得进入主会话。
- 坐标统一使用原图 `[x, y, width, height]`。
- 相同 `image_sha256 + mode + question` 不重复请求。
