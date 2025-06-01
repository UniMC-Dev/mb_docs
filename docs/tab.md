## 📋 TAB 插件介绍（适用于玩家与管理员）

[TAB](https://www.spigotmc.org/resources/tab-1-5-x-1-20-x.57806/) 是一个高度可定制的 Minecraft 插件，用于美化并增强 Tab 列表、聊天前缀、头衔显示、BossBar、名牌显示（NameTag）等内容。

它支持强大的动画、条件显示、Placeholder、权限控制，以及 HEX 颜色、PlaceholderAPI 等现代化特性。

## 🧩 插件主要功能

- ✅ 自定义 Tab 列表格式（显示前缀、Ping、等级等）
- ✅ 支持不同世界/组显示不同前缀
- ✅ 名字上方显示称号（NameTag）
- ✅ 支持 BossBar 广播（支持动态文字、动画）
- ✅ 原生命令支持热加载配置
- ✅ 高度兼容 PlaceholderAPI 与 LuckPerms

## 🎮 面向玩家的功能

大多数功能为自动显示，无需操作，常见的展示效果包括：

- Tab 列表中的前缀称号（如 [VIP] ZhangSan）
- 角色头上的称号与等级（NameTag）
- 服务器顶部 BossBar 通知（欢迎语、活动提醒）

如需更换称号/前缀，请联系管理员修改 LuckPerms 权限组或 Meta 设置。

## 🛠 面向管理员的常用指令

以下为常见 TAB 指令（可在游戏内或控制台使用）：

| 指令                             | 作用                                      |
|----------------------------------|-------------------------------------------|
| `/tab reload`                    | 🔄 重新加载配置文件                        |
| `/tab player <玩家名>`           | 查看某玩家的 TAB 信息                     |
| `/tab group <组名>`              | 查看某个权限组的显示设定（需配置支持）    |
| `/tab debug`                     | 开启调试模式，显示插件运行信息             |
| `/tab toggle nametag`           | 玩家个人隐藏/显示名牌                     |
| `/tab toggle bossbar`           | 玩家个人关闭 BossBar 显示                  |
| `/tab toggle all`               | 玩家关闭所有 TAB 插件视觉功能             |

> 例如：`/tab player ZhangSan` 可查看 ZhangSan 的 prefix/suffix 来源与效果。

## 🧾 配置文件说明（简略）

插件配置文件路径通常在：

/plugins/TAB/config.yml


常见配置项如下：

### 🎨 自定义前缀格式

```yaml
default-groups:
  _OTHER_:
    tabprefix: "&7[玩家] &r"
    tagprefix: "&7[玩家] &r"
    tabsuffix: ""
    tagsuffix: ""
```

或基于权限组（需搭配 LuckPerms 权重）：

```yaml
groups:
  vip:
    tabprefix: "&6[VIP] &r"
    tagprefix: "&6[VIP] &r"
    weight: 10
  admin:
    tabprefix: "&c[管理员] &r"
    tagprefix: "&c[管理员] &r"
    weight: 100
```

### ⏫ 排名排序（权重决定显示优先级）

```yaml
# 数值越高越靠前
groups:
  owner:
    weight: 1000
  admin:
    weight: 900
  vip:
    weight: 100
  default:
    weight: 1
```

## 💡 与其他插件联动
✅ LuckPerms：使用 meta 前缀与权重管理展示优先级

✅ PlaceholderAPI：使用 %player_name%、%vault_prefix% 等变量动态显示

✅ EssentialsX：配合显示余额、称号等

## 🧪 示例：搭配 LuckPerms 设置前缀

```bash
# 设置玩家组的称号（在 TAB 中生效）
/lp group vip meta setprefix "&6[VIP] &r"
/lp group vip setweight 50
```
:::tip 
设置完成后执行 /tab reload 即可刷新显示
:::

## 🧰 故障排查
🔧 如果前缀/称号不显示，请检查：

是否正确安装 PlaceholderAPI

是否正确设置 LuckPerms 前缀或 TAB 权重

是否有其他插件冲突（如 Scoreboard、NametagEdit）

