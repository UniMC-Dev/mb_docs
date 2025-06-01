::: warning
此插件一般玩家使用不上，此页面专为管理员供应
:::
## LuckPerms 授予权限与称号示例

`LuckPerms` 是 Minecraft 中最强大的权限管理插件。它可以灵活地对不同用户或组设置权限、前缀（称号）、权重、时间限制等。

---

### 🎯 给玩家授予权限

```bash
# 给玩家 ZhangSan 授予 essentials.fly 权限（允许飞行）
/lp user ZhangSan permission set essentials.fly true
```
你也可以为某个权限设置时长：

```bash
# 给 ZhangSan 授权飞行权限，持续 1 小时（1h = 1 hour）
/lp user ZhangSan permission settemp essentials.fly true 1h
```

### 🧑‍🤝‍🧑 创建并设置组（例如 vip）

```bash
# 创建一个 vip 组
/lp creategroup vip

# 给 vip 组添加飞行权限
/lp group vip permission set essentials.fly

# 给 vip 组添加称号（前缀）
/lp group vip meta setprefix "&6[VIP] &r"

# 把 ZhangSan 添加到 vip 组
/lp user ZhangSan parent add vip
```

### 📦 权限组继承

你可以通过继承的方式，让某个权限组继承另一个权限组的权限。例如，你可以创建一个管理组，继承自普通组，然后把管理组的权限设置得更高一些。

```bash
# 让 vip 组继承 default（默认）组的权限
/lp group vip parent add default
```

### 🔁 设置默认组
你可以设置某个玩家的默认组，这样他们在进入服务器时，就会自动加入到默认组。

```bash
# 设置 default 为默认组
/lp setdefaultgroup default
```
### ⌛ 临时加入权限组（比如临时 VIP）

你可以给玩家临时加入权限组，在指定的时间段内，他们就拥有该权限组的所有权限。

```bash
# ZhangSan 加入 vip 组，时效为 1 天
/lp user ZhangSan parent addtemp vip 1d
```

### 👑 设置组的优先级（用于排序）

你可以设置组的优先级，让某些组的权限优先于其他组的权限。

```bash
# 设置 admin 组权重为 100，vip 为 50，default 为 1
/lp group admin setweight 100
/lp group vip setweight 50
/lp group default setweight 1
```
高权重的组前缀/后缀将优先生效

### 💬 称号显示效果说明
前缀会影响聊天格式，需与聊天插件（如 EssentialsChat、VentureChat、ChatEx 等）搭配使用。

示例效果（搭配聊天插件）：

```bash
[VIP] ZhangSan: 大家好！
```

### 📌 小提示
所有 LuckPerms 指令也可以在控制台使用（去掉 /）。

修改后自动实时生效，无需重启服务器。

支持 Web 编辑器：/lp editor 命令生成链接，在网页上图形化编辑权限。