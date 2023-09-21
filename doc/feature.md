# 服务器特性说明书

Ver: 1.0 **（2023.9.20 更新）**

（更多特性待补全……）

## 全服特性

以下特性全服通用！



### 基岩版支持

由 [GeyserMC](https://geysermc.org/) 驱动。

基岩版玩家可以采用相同IP和基岩版默认端口加入生存服务器（模组服务器暂不支持）。



### 玩家账号和白名单

由 [MultiLogin](https://github.com/CaaMoe/MultiLogin) 驱动。

本服务器采用 Minecraft + Bedrock + LittleSkin 混合验证模式进行登录。

**全服都需要白名单！加群申请。**

如果你没有 Java 正版账号，请使用 [LittleSkin](https://littleskin.cn/) ，并且正确配置启动器。



### 服务器图标

*此功能维护中……*

由 [qyl27](https://github.com/qyl27) 的 [IconAtNight](https://github.com/MeowCraftMC/IconAtNight) 驱动。

当你在服务器列表看到服务器的图标是一个白天的图案，证明生存服务器的主世界是白天；反之则是夜晚。

~~如果发现不一样退掉重登就一样了。~~



### 游戏内语音

由 [PlasmoVoice](https://plasmovoice.com/) 驱动。

如果在客户端安装了 PlasmoVoice 模组，则可以接入服务器的语音频道。



### 聊天消息互通

*（待补全。）*



## 生存服务器特性

以下特性在生存服务器实装。

### 常用命令

<details>
<summary>点击展开</summary>
#### 传送命令

- 传送请求
  
    由 [Elihuso]() 的 [SimpleTeleport](https://github.com/MeowCraftMC/SimpleTeleport) 插件驱动。
    
    * `tpa`
      用法：`/tpa <玩家名>`
      向指定玩家发送一次传送请求。如果请求被同意，则传送至同意请求的玩家。
      
    * `tpacc`
      用法：`/tpacc [玩家名]`
      别名：`/tpaccept`
      同意指定玩家的传送请求。如果不指定玩家名，则同意所有未处理的传送请求。
      
    * `tpdn`：
      用法：`/tpdn [玩家名]`
      别名：`/tpdeny`
      拒绝指定玩家的传送请求。如果不指定玩家名，则拒绝所有未处理的传送请求。
      
    * `tpcancel`：
      用法：`/tpcancel [玩家名]`
      取消向指定玩家发送的传送请求。如果不指定玩家名，则取消自己所有的传送请求。
    
- 返回
  
    由 [Elihuso]() 的 [Back-Refactor](https://github.com/MeowCraftMC/Back-Refactor) 插件驱动。
    
    * `back`：
        用法：`/back`
        返回传送之前的位置，包括使用传送命令或者重生导致的传送。
    
- 回到世界重生点
  
    由 [Elihuso]() 的 [SimpleTeleport](https://github.com/MeowCraftMC/SimpleTeleport) 插件驱动。
    
    * `spawn`：
        用法：`/spawn` 
        返回所在世界的默认重生点。



#### 动作命令

由 [GSit](https://github.com/Gecolay/GSit) 插件驱动。

- `sit`：

  用法：`/sit`

  席地而坐。

- `lay`：

  用法：`/lay`

  原地躺下。

- `crawl`：

  用法：`/crawl`

  爬！

- `bellyflop`：

  用法：`/bellyflop`

  趴着休息。



#### 帽子命令

由 [Hat](https://github.com/Sigong/Hat) 插件驱动。

- `hat`：

  用法：`/hat`

  把手持的物品当作帽子戴在头上。



</details>

### 主要玩法

#### McMMO

参见 [McMMO文档](https://wiki.mcmmo.org/) 。 



#### 季节变化

*（待补全。）*



#### 忘川世界

*（待补全。）*



### 辅助功能

#### 书籍展示框

由 [qyl27](https://github.com/qyl27) 的 [BookFrame](https://github.com/qyl27/BookFrame) 插件驱动。

将成书或者书与笔放在展示框之中时，右键可以阅读其中的内容。

使用 `Shift` + 右键 旋转物品。



#### 铁砧重命名增强

由 [qyl27](https://github.com/qyl27) 的 [LoreAnvil](https://modrinth.com/plugin/loreanvil) 插件驱动。

用铁砧可以方便地修改物品名称和介绍。

1. 修改物品名称：把要修改的物品放在铁砧**左边**的格子，中间什么都不放，输入名称。
2. 添加物品介绍：把要修改的物品放在铁砧**左边**的格子，中间放**纸**，输入介绍。
3. 删除物品介绍：把要修改的物品放在铁砧**中间**的格子，左边什么都不放。

**支持以 `&` 开头的样式代码，即16种颜色。**

**此外还支持R！G！B！（使用形如 `&#66ccff` 的样式代码）**



#### 发射器/投掷器增强

由 [Elihuso]() 的 [Dispenser-Mining-Paper](https://github.com/MeowCraftMC/Dispenser-Mining-Paper) 插件驱动。

- 当发射器发射斧、镐、锹、锄和剑时会尝试挖掘前方的方块。

  如果前方为空气，则发射失败；

  如果前方为不可用此种工具挖掘的方块，则作为掉落物发射。  

- 当投掷器发射方块且前方为空气方块时，将把方块放置在自己面前。

**上面两个与 `23w13a` 中的镐方块和放置方块行为相似。**  

- 当发射器发射农作物种子或者可以种在耕地中的作物时，将尝试把作物种在耕地上。

  如果前方为空气且下方为耕地，种植；否则作为掉落物发射。

**与植物魔法中魔改过的发射器类似**。

- 当投掷器发射斧时，将尝试对前方的树木原木进行削皮处理；

  如果前方不是树木原木则以掉落物的形式发射。

- 当投掷器发射锹时，将尝试压平前方的土壤使其变为草径；

  如果前方为空气方块，则尝试压平其下面的土壤；

  如果条件均不符合，则以掉落物的形式发射。

- 当投掷器发射锄时，将尝试犁前方的土壤使其变为耕地；

  如果前方为空气方块，则尝试犁其下面的土壤；

  如果条件均不符合，则以掉落物的形式发射。

- 发射器发射的骨粉不仅能作用于前方的方块，还可以在前方方块为空气时作用于其下面的方块。

- 当发射器前方为花盆且正在发射花朵时，将种在花盆中。    



#### 连锁挖矿

由 [qyl27](https://github.com/qyl27) 的 [DiggusMaximusBukkit](https://github.com/MeowCraftMC/DiggusMaximusBukkit) 插件驱动。

如果客户端安装了 [DiggusMaximus](https://www.curseforge.com/minecraft/mc-mods/diggus-maximus) 模组，玩家可以在服务器中使用其提供的连锁挖矿功能。



#### 电子邮件

*（待补全。）*



### 杂项



#### 面点大师

*（待补全。）*



#### 树叶迅速腐烂

由 [RHLeafDecay](https://www.spigotmc.org/resources/%E2%98%84%EF%B8%8F-rhleafdecay-fast-and-smooth-leaf-decay-1-13-x-1-20-x.83581/) 插件驱动。

挖掘整棵树木的树干后所有树叶也会瞬间被破坏。



#### 卸除诅咒

由 [qyl27](https://github.com/qyl27) 的 [TakeTheCursesOff](https://modrinth.com/plugin/takethecursesoff) 插件驱动。

玩家可以用蹲下右键帮另一个蹲下的玩家卸除身上的诅咒物品。
