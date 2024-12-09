# 生存服务器（主服）



### 基岩版支持

由 [GeyserMC](https://geysermc.org/) 驱动。

基岩版玩家可以采用相同IP和基岩版默认端口加入服务器。



### 游戏内语音

由 [PlasmoVoice](https://plasmovoice.com/) 驱动。

如果在客户端安装了 PlasmoVoice 模组，则可以接入服务器的语音频道。



## 常用命令



### 传送命令

由 [Elihuso](https://github.com/LS-KR) 的 [SimpleTeleport](https://github.com/MeowCraftMC/SimpleTeleport) 插件驱动。

- 传送请求
  
    * `/tpa <玩家名>`  
      请求传送到指定玩家的位置。  
    * `/tphere <玩家名>`  
      请求指定玩家传送到自己的位置。  
    * `/tpaccept [玩家名]`  
      别名：`tpacc`  
      同意传送请求。如果不指定玩家名，则同意所有未处理的传送请求。  
    * `/tpdeny [玩家名]`  
      别名：`tpdn`  
      拒绝传送请求。如果不指定玩家名，则拒绝所有未处理的传送请求。  
    * `/tpcancel [玩家名]`  
      取消向指定玩家发送的传送请求。如果不指定玩家名，则取消自己发出的所有传送请求。  
- 快速返回
  
    * `/back`  
        返回传送之前的位置。
    * `/back preference <传送类型> <true|false>`  
        设置位置记录偏好，可以选择只记录某些情况下的位置，有如下选项：
        * GAME_PLAY：起床或者下船、下矿车
        * ENDER_TELEPORT：使用末影珍珠或者紫颂果
        * PORTALS：使用传送门（包括末地折跃门）
        * DEATH（默认开启）：玩家被杀死
        * SYSTEM（默认开启）：使用命令传送
        * OTHER：其他原因产生的传送
- 世界传送命令
  
    * `/spawn`  
        返回所在世界的默认重生点。  
    * `/bed`  
        返回床或重生锚所记录的重生点。
    * `/top`  
        传送到当前坐标顶端的露天位置。



### 动作命令

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

  趴下休息。



### 帽子命令

由 [Hat](https://github.com/Sigong/Hat) 插件驱动。

- `hat`：

  用法：`/hat`

  把手持的物品当作帽子戴在头上。




## 主要玩法

### McMMO

参见 [McMMO文档](https://wiki.mcmmo.org/) 。 



### 季节和节日

由 [RealisticSeasons](https://www.spigotmc.org/resources/realisticseasons-1-16-3-1-20-4-seasons-in-your-minecraft-world-with-temperature-and-calendar.93275/) 插件驱动。

游戏内的季节和真实世界同步。

还有一些服务器内的节日。



### 忘川世界

与世隔绝的异界。

是空岛维度。



## 辅助功能

### 书籍展示框

由 [qyl27](https://github.com/qyl27) 的 [BookFrame](https://github.com/qyl27/BookFrame) 插件驱动。

将成书或者书与笔放在展示框之中时，右键可以阅读其中的内容。

使用 `Shift` + 右键 旋转物品。



### 铁砧重命名增强

由 [qyl27](https://github.com/qyl27) 的 [LoreAnvil](https://modrinth.com/plugin/loreanvil) 插件驱动。

用铁砧可以方便地修改物品名称和介绍。

1. 修改物品名称：把要修改的物品放在铁砧**左边**的格子，中间什么都不放，输入名称。
2. 添加物品介绍：把要修改的物品放在铁砧**左边**的格子，中间放**纸**，输入介绍。
3. 删除物品介绍：把要修改的物品放在铁砧**中间**的格子，左边什么都不放。

**支持以 `&` 开头的样式代码，即16种颜色。**

**此外还支持R！G！B！（使用形如 `&#66ccff` 的样式代码）**



### 发射器/投掷器增强

由 [Elihuso](https://github.com/LS-KR) 的 [Dispenser-Mining-Paper](https://github.com/MeowCraftMC/Dispenser-Mining-Paper) 插件驱动。

当发射器发射斧、镐、锹、锄和剑时会尝试挖掘前方的方块。
如果前方为空气，则发射失败；
如果前方为不可用此种工具挖掘的方块，则作为掉落物发射。  



### 连锁挖矿

由 [qyl27](https://github.com/qyl27) 的 [DiggusMaximusBukkit](https://github.com/MeowCraftMC/DiggusMaximusBukkit) 插件驱动。

如果客户端安装了 [DiggusMaximus](https://www.curseforge.com/minecraft/mc-mods/diggus-maximus) 模组，玩家可以在服务器中使用其提供的连锁挖矿功能。



## 杂项



### 面点大师

由 [qyl27](https://github.com/qyl27) 的 [PastryMaster](https://github.com/MeowCraftMC/PastryMaster) 插件驱动。

右键揉揉你的朋友！（可以提升好感度哦~）



#### 树叶迅速腐烂

由 [RHLeafDecay](https://www.spigotmc.org/resources/%E2%98%84%EF%B8%8F-rhleafdecay-fast-and-smooth-leaf-decay-1-13-x-1-20-x.83581/) 插件驱动。

挖掘整棵树木的树干后所有树叶也会瞬间被破坏。



#### 卸除诅咒

由 [qyl27](https://github.com/qyl27) 的 [TakeTheCursesOff](https://modrinth.com/plugin/takethecursesoff) 插件驱动。

玩家可以用蹲下右键帮另一个蹲下的玩家卸除身上的诅咒物品。
