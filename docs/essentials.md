::: warning
此插件一般玩家使用不上，此页面专为管理员供应
:::
## Essentials 有什么用

Essentials 是一款功能强大的 Minecraft 服务器插件，主要用于增强服务器的管理功能和玩家体验。它提供了诸如玩家管理、物品管理、传送功能、经济系统等多种实用功能。以下是 Essentials 的一些常见用途：

- **玩家管理**：管理员可以通过 Essentials 对玩家进行封禁、踢出、查询等操作。
- **物品管理**：可以快速给予玩家物品、清除玩家物品栏等。
- **传送功能**：支持玩家之间传送、设置家的位置、传送至特定地点等。
- **经济系统**：为服务器提供货币系统，支持玩家之间交易、购买物品等。
- **其他功能**：如飞行模式、隐身模式、时间控制等。

## 常见配置文件编辑方法

Essentials 的配置文件通常位于服务器的 `plugins/Essentials` 文件夹中。以下是一些常见的配置文件及其编辑方法：

### 1\. config.yml

这是 Essentials 的主配置文件，用于设置插件的基本功能和权限。

```yaml
# 是否启用 Essentials 的经济系统
economy:
  enabled: true

# 玩家死亡后是否掉落物品
death:
  keep-inventory: false

# 是否允许玩家使用飞行功能
flight:
  allowed: true

# 是否允许玩家使用隐身功能
vanish:
  allowed: true

# 是否启用玩家传送功能
teleport:
  enabled: true
```

### 2\. essentials.yml
这是 Essentials 的权限配置文件，用于设置玩家的权限。

```yaml
# 管理员的权限列表
admin:
  - '*'

  # 以下是一些常见的权限节点
  # 玩家管理
  - essentials.player
  - essentials.ban          # 封禁玩家
  - essentials.kick         # 踢出玩家
  - essentials.mute         # 禁言玩家
  - essentials.unmute       # 解除禁言
  - essentials.jail         # 监禁玩家
  - essentials.unjail       # 解除监禁
  - essentials.freeze       # 冻结玩家
  - essentials.thaw         # 解除冻结
  - essentials.nick         # 修改玩家昵称
  - essentials.nick.color   # 修改玩家颜色
  - essentials.nick.style   # 修改玩家样式
  - essentials.mail         # 发送邮件
  - essentials.mail.send    # 发送邮件
  - essentials.mail.read    # 读取邮件
  - essentials.mail.delete  # 删除邮件
  - essentials.sign         # 编辑地图标记
  - essentials.sign.use     # 使用地图标记
  - essentials.sign.create  # 创建地图标记
  - essentials.sign.break   # 破坏地图标记
  - essentials.sign.edit    # 编辑地图标记
  - essentials.sign.move    # 移动地图标记
  - essentials.sign.list    # 列出地图标记
  - essentials.sign.color   # 修改地图标记颜色
  - essentials.sign.style   # 修改地图标记样式
  - essentials.sign.copy    # 复制地图标记
  - essentials.sign.paste   # 粘贴地图标记
  - essentials.sign.rotate  # 旋转地图标记
  - essentials.sign.flip    # 翻转地图标记
  - essentials.sign.resize  # 调整地图标记大小
  - essentials.sign.info    # 查看地图标记信息
  - essentials.sign.rename  # 重命名地图标记
  - essentials.sign.delete  # 删除地图标记
  - essentials.sign.link    # 链接地图标记
  - essentials.sign.unlink  # 取消链接地图标记
  - essentials.sign.link.create  # 创建链接地图标记
  - essentials.sign.link.delete  # 删除链接地图标记
  - essentials.sign.link.list    # 列出链接地图标记
  - essentials.sign.link.info    # 查看链接地图标记信息
  - essentials.sign.link.rename  # 重命名链接地图标记
  - essentials.sign.link.copy    # 复制链接地图标记
  - essentials.sign.link.paste   # 粘贴链接地图标记
  - essentials.sign.link.rotate  # 旋转链接地图标记
  - essentials.sign.link.flip    # 翻转链接地图标记
  - essentials.sign.link.resize  # 调整链接地图标记大小
  - essentials.sign.link.link    # 链接链接地图标记
  - essentials.sign.link.unlink  # 取消链接链接地图标记
  - essentials.sign.link.link.create  # 创建链接链接地图标记
  - essentials.sign.link.link.delete  # 删除链接链接地图标记
  - essentials.sign.link.link.list    # 列出链接链接地图标记
  - essentials.sign.link.link.info    # 查看链接链接地图标记信息
  - essentials.sign.link.link.rename  # 重命名链接链接地图标记
  - essentials.sign.link.link.copy    # 复制链接链接地图标记
  - essentials.sign.link.link.paste   # 粘贴链接链接地图标记
  - essentials.sign.link.link.rotate  # 旋转链接链接地图标记
  - essentials.sign.link.link.flip    # 翻转链接链接地图标记
  - essentials.sign.link.link.resize  # 调整链接链接地图标记大小
  - essentials.sign.link.link.link    # 链接链接链接地图标记
  - essentials.sign.link.link.unlink  # 取消链接链接链接地图标记
  # 物品管理
  - essentials.item
  - essentials.item.give     # 给予玩家物品
  - essentials.item.clear    # 清除玩家物品栏
  - essentials.item.replace  # 替换玩家物品
  - essentials.item.restore  # 恢复玩家物品
  - essentials.item.unbreak  # 解除玩家物品的破坏
  - essentials.item.name     # 修改玩家物品名称
  - essentials.item.lore     # 修改玩家物品描述
  - essentials.item.enchant  # 附魔玩家物品
  - essentials.item.repair   # 修复玩家物品
  - essentials.item.attribute  # 修改玩家物品属性
  - essentials.item.unattribute  # 解除玩家物品属性
  - essentials.item.flag     # 修改玩家物品标记
  - essentials.item.flag.add  # 添加玩家物品标记
  - essentials.item.flag.remove  # 移除玩家物品标记
  - essentials.item.flag.list  # 列出玩家物品标记
  - essentials.item.flag.info  # 查看玩家物品标记信息
  - essentials.item.flag.rename  # 重命名玩家物品标记
  - essentials.item.flag.copy  # 复制玩家物品标记
  - essentials.item.flag.paste  # 粘贴玩家物品标记
  - essentials.item.flag.rotate  # 旋转玩家物品标记
  - essentials.item.flag.flip  # 翻转玩家物品标记
  - essentials.item.flag.resize  # 调整玩家物品标记大小
  - essentials.item.flag.link  # 链接玩家物品标记
  - essentials.item.flag.unlink  # 取消链接玩家物品标记
  - essentials.item.flag.link.create  # 创建链接玩家物品标记
  - essentials.item.flag.link.delete  # 删除链接玩家物品标记
  - essentials.item.flag.link.list  # 列出链接玩家物品标记
  - essentials.item.flag.link.info  # 查看链接玩家物品标记信息
  - essentials.item.flag.link.rename  # 重命名链接玩家物品标记
  - essentials.item.flag.link.copy  # 复制链接玩家物品标记
  - essentials.item.flag.link.paste  # 粘贴链接玩家物品标记
  - essentials.item.flag.link.rotate  # 旋转链接玩家物品标记
  - essentials.item.flag.link.flip  # 翻转链接玩家物品标记
  - essentials.item.flag.link.resize  # 调整链接玩家物品标记大小
  - essentials.item.flag.link.link  # 链接链接玩家物品标记
  - essentials.item.flag.link.unlink  # 取消链接链接玩家物品标记
  # 传送功能
  - essentials.tpa          # 传送请求
  - essentials.tpaccept     # 接受传送请求
  - essentials.tpdeny       # 拒绝传送请求
  - essentials.tpa.list     # 列出传送请求
  - essentials.tpa.remove   # 移除传送请求
  - essentials.tpa.clear    # 清除所有传送请求
  - essentials.home         # 设置家
  - essentials.home.list    # 列出家
  - essentials.home.set     # 设置家
  - essentials.home.del     # 删除家
  - essentials.home.tp      # 传送到家
  - essentials.home.info    # 查看家信息
  - essentials.home.rename  # 重命名家
  - essentials.home.copy    # 复制家
  - essentials.home.paste   # 粘贴家
  - essentials.home.rotate  # 旋转家
  - essentials.home.flip    # 翻转家
  - essentials.home.resize  # 调整家大小
  - essentials.home.link    # 链接家
  - essentials.home.unlink  # 取消链接家
  - essentials.home.link.create  # 创建链接家
  - essentials.home.link.delete  # 删除链接家
  - essentials.home.link.list  # 列出链接家
  - essentials.home.link.info  # 查看链接家信息
  - essentials.home.link.rename  # 重命名链接家
  - essentials.home.link.copy  # 复制链接家
  - essentials.home.link.paste  # 粘贴链接家
  - essentials.home.link.rotate  # 旋转链接家
  - essentials.home.link.flip  # 翻转链接家
  - essentials.home.link.resize  # 调整链接家大小
  - essentials.home.link.link  # 链接链接家
  - essentials.home.link.unlink  # 取消链接链接家
```

## 3\.warps.yml

这是 Essentials 的传送点配置文件，用于设置服务器的传送点。

```yaml
# 定义一个名为 "spawn" 的传送点
spawn:
  world: world
  x: 100.0
  y: 64.0
  z: 100.0
  yaw: 0.0
  pitch: 0.0

# 定义一个名为 "hub" 的传送点
hub:
  world: world
  x: 200.0
  y: 64.0
  z: 200.0
  yaw: 0.0
  pitch: 0.0
```

### 4\.permissions.yml

这是 Essentials 的权限组配置文件，用于设置玩家的权限组。

```yaml
# 玩家 "Player1" 的权限
Player1:
  - essentials.fly
  - essentials.teleport

# 玩家 "Player2" 的权限
Player2:
  - essentials.vanish

# 玩家 "Player3" 的权限
Player3:
  - essentials.mute
  - essentials.jail
```

## 注意事项
在编辑配置文件时，确保格式正确，避免出现缩进错误或拼写错误。
修改配置文件后，需要重启服务器或重新加载 Essentials 插件，才能使配置生效。
如果不确定某个配置项的作用，可以参考 Essentials 的官方文档或社区资源。
希望这些内容对你有所帮助！