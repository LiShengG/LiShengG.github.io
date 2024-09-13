(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{455:function(_,v,s){"use strict";s.r(v);var t=s(4),e=Object(t.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("Redis 分布式锁是一种使用 Redis 来实现多个进程之间的锁机制，确保在分布式系统中对共享资源的安全访问。以下是几种常见的 Redis 分布式锁实现方法：")]),_._v(" "),v("h3",{attrs:{id:"_1-setnx-set-if-not-exists-和-expire"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-setnx-set-if-not-exists-和-expire"}},[_._v("#")]),_._v(" 1. "),v("strong",[_._v("SETNX（SET if Not eXists）和 EXPIRE")])]),_._v(" "),v("p",[v("strong",[_._v("机制")]),_._v(":")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("SETNX")]),_._v(": 使用 Redis 的 "),v("code",[_._v("SETNX")]),_._v(" 命令（SET if Not Exists）来实现锁的获取。"),v("code",[_._v("SETNX")]),_._v(" 只会在指定键不存在时设置键的值，如果键已经存在，则返回失败。")]),_._v(" "),v("li",[v("strong",[_._v("EXPIRE")]),_._v(": 设置锁的超时时间，防止因某些异常导致锁无法释放，从而发生死锁。")])]),_._v(" "),v("p",[v("strong",[_._v("实现步骤")]),_._v(":")]),_._v(" "),v("ol",[v("li",[_._v("使用 "),v("code",[_._v("SETNX")]),_._v(" 命令尝试获取锁。如果返回成功，表示锁已获取。")]),_._v(" "),v("li",[_._v("获取锁成功后，立即使用 "),v("code",[_._v("EXPIRE")]),_._v(" 命令为该键设置一个过期时间，避免因程序崩溃导致锁无法释放。")]),_._v(" "),v("li",[_._v("当任务完成或超时后，释放锁（通过 "),v("code",[_._v("DEL")]),_._v(" 命令删除键）。")])]),_._v(" "),v("p",[v("strong",[_._v("优点")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("简单易用，能满足基本的分布式锁需求。")])]),_._v(" "),v("p",[v("strong",[_._v("缺点")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("存在"),v("strong",[_._v("死锁")]),_._v("风险：如果客户端在执行 "),v("code",[_._v("EXPIRE")]),_._v(" 之前崩溃，锁将无法释放。")]),_._v(" "),v("li",[_._v("不具备"),v("strong",[_._v("自动续约")]),_._v("功能：如果任务执行时间超过了锁的超时时间，锁可能会被错误释放。")])]),_._v(" "),v("h3",{attrs:{id:"_2-set-指令-with-nx-and-ex"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-set-指令-with-nx-and-ex"}},[_._v("#")]),_._v(" 2. "),v("strong",[_._v("SET 指令 with NX and EX")])]),_._v(" "),v("p",[v("strong",[_._v("机制")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("Redis 提供了一个原子操作，可以使用 "),v("code",[_._v("SET")]),_._v(" 命令来同时设置键值和过期时间，避免 "),v("code",[_._v("SETNX")]),_._v(" 和 "),v("code",[_._v("EXPIRE")]),_._v(" 两个操作分离带来的问题。")])]),_._v(" "),v("p",[v("strong",[_._v("实现步骤")]),_._v(":")]),_._v(" "),v("ol",[v("li",[_._v("使用 "),v("code",[_._v("SET key value NX EX seconds")]),_._v(" 命令来获取锁，其中 "),v("code",[_._v("NX")]),_._v(" 表示“仅当键不存在时才设置”，"),v("code",[_._v("EX")]),_._v(" 表示“设置键的过期时间为 seconds 秒”。")]),_._v(" "),v("li",[_._v("如果 "),v("code",[_._v("SET")]),_._v(" 返回成功，表示锁已获取成功，任务可以继续执行。")]),_._v(" "),v("li",[_._v("任务完成或超时后，通过 "),v("code",[_._v("DEL")]),_._v(" 命令释放锁。")])]),_._v(" "),v("p",[v("strong",[_._v("优点")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("原子操作，避免了 "),v("code",[_._v("SETNX + EXPIRE")]),_._v(" 组合操作的死锁风险。")])]),_._v(" "),v("p",[v("strong",[_._v("缺点")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("同样存在锁超时被误释放的风险，需要额外的机制来处理长时间任务的锁续约。")])]),_._v(" "),v("h3",{attrs:{id:"_3-redlock-算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-redlock-算法"}},[_._v("#")]),_._v(" 3. "),v("strong",[_._v("Redlock 算法")])]),_._v(" "),v("p",[v("strong",[_._v("机制")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("Redlock 是 Redis 官方推荐的一种分布式锁算法，用于在多个 Redis 实例之间实现更高可靠性的分布式锁。")]),_._v(" "),v("li",[_._v("它利用多个 Redis 节点来存储锁，每个节点独立获取锁，只有在多数节点（通常是大于一半的节点）成功获取锁后，锁才算成功获取。")])]),_._v(" "),v("p",[v("strong",[_._v("实现步骤")]),_._v(":")]),_._v(" "),v("ol",[v("li",[_._v("客户端依次向多个 Redis 实例（如 5 个）发送 "),v("code",[_._v("SET")]),_._v(" 命令尝试获取锁，并为每次获取设置一个较短的超时（防止网络延迟影响）。")]),_._v(" "),v("li",[_._v("如果客户端在多数节点（如至少 3 个）成功获取锁，并且总耗时小于锁的有效时间，则认为锁获取成功。")]),_._v(" "),v("li",[_._v("如果成功获取锁，客户端可以执行任务。")]),_._v(" "),v("li",[_._v("任务完成后，客户端应向每个节点发送 "),v("code",[_._v("DEL")]),_._v(" 命令释放锁。")])]),_._v(" "),v("p",[v("strong",[_._v("优点")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("高可用性：即使部分节点失效，锁仍然可以被安全获取和释放。")]),_._v(" "),v("li",[_._v("安全性更高：通过多节点锁定，避免单点故障带来的风险。")])]),_._v(" "),v("p",[v("strong",[_._v("缺点")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("实现相对复杂，需要多个 Redis 实例，增加了部署和维护的复杂性。")]),_._v(" "),v("li",[_._v("在极端情况下（如网络分区），仍然存在一致性问题。")])]),_._v(" "),v("h3",{attrs:{id:"_4-lua-脚本实现分布式锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-lua-脚本实现分布式锁"}},[_._v("#")]),_._v(" 4. "),v("strong",[_._v("Lua 脚本实现分布式锁")])]),_._v(" "),v("p",[v("strong",[_._v("机制")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("使用 Redis 的 Lua 脚本功能，可以将锁的获取、检查、释放等操作封装在一个脚本中，确保整个过程的原子性。")])]),_._v(" "),v("p",[v("strong",[_._v("实现步骤")]),_._v(":")]),_._v(" "),v("ol",[v("li",[_._v("编写 Lua 脚本，将锁的获取和设置过期时间的逻辑放在一个脚本中。")]),_._v(" "),v("li",[_._v("使用 "),v("code",[_._v("EVAL")]),_._v(" 命令执行 Lua 脚本，从而确保这些操作在一个事务中执行，避免因网络延迟导致的并发问题。")])]),_._v(" "),v("p",[v("strong",[_._v("优点")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("原子性强：所有操作在一个脚本中完成，避免了因网络延迟导致的竞争条件。")]),_._v(" "),v("li",[_._v("可定制性强：可以根据具体需求定制锁的获取和释放逻辑。")])]),_._v(" "),v("p",[v("strong",[_._v("缺点")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("开发复杂度稍高，需要编写和调试 Lua 脚本。")])]),_._v(" "),v("h3",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" "),v("strong",[_._v("总结")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("SETNX + EXPIRE")]),_._v(" 是最基础的实现，适合简单的分布式锁需求，但存在死锁风险。")]),_._v(" "),v("li",[v("strong",[_._v("SET with NX and EX")]),_._v(" 是更安全的改进，原子性更强。")]),_._v(" "),v("li",[v("strong",[_._v("Redlock")]),_._v(" 是 Redis 官方推荐的高级分布式锁算法，适用于对可靠性要求更高的场景。")]),_._v(" "),v("li",[v("strong",[_._v("Lua 脚本")]),_._v(" 可以进一步增强锁的原子性和定制性，适合复杂场景。")])])])}),[],!1,null,null,null);v.default=e.exports}}]);