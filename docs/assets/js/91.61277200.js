(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{445:function(s,t,_){"use strict";_.r(t);var a=_(4),v=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("实现分布式锁的原理主要是通过确保同一时刻在分布式系统中的多个节点中，只有一个节点能获取到锁，其他节点必须等待锁被释放后才能获取。以下是实现 Redis 分布式锁的基本原理和核心步骤：")]),s._v(" "),t("h3",{attrs:{id:"_1-锁的唯一性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-锁的唯一性"}},[s._v("#")]),s._v(" 1. "),t("strong",[s._v("锁的唯一性")])]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("唯一标识")]),s._v("：每次获取锁时，都需要生成一个唯一标识符（通常是 UUID）。这个唯一标识符与锁关联，用来确保锁的持有者能够安全地释放锁，避免误删除其他客户端持有的锁。")]),s._v(" "),t("li",[t("strong",[s._v("原子性操作")]),s._v("：Redis 的 "),t("code",[s._v("SETNX")]),s._v("（Set if Not Exists）命令保证了在同一时间只有一个客户端能够成功设置某个键，也就是获取锁。")])]),s._v(" "),t("h3",{attrs:{id:"_2-锁的过期时间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-锁的过期时间"}},[s._v("#")]),s._v(" 2. "),t("strong",[s._v("锁的过期时间")])]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("防止死锁")]),s._v("：当客户端获取锁后由于崩溃或网络问题无法释放锁，为防止死锁，必须为锁设置一个过期时间。过期时间到达后，锁会自动释放，使得其他客户端可以继续尝试获取锁。")]),s._v(" "),t("li",[t("strong",[s._v("设置方法")]),s._v("：可以通过 Redis 的 "),t("code",[s._v("EXPIRE")]),s._v(" 命令或者在 "),t("code",[s._v("SET")]),s._v(" 命令中使用 "),t("code",[s._v("PX")]),s._v("（毫秒）或 "),t("code",[s._v("EX")]),s._v("（秒）选项来设置过期时间。")])]),s._v(" "),t("h3",{attrs:{id:"_3-锁的获取与释放"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-锁的获取与释放"}},[s._v("#")]),s._v(" 3. "),t("strong",[s._v("锁的获取与释放")])]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("获取锁")]),s._v("：")]),s._v(" "),t("ol",[t("li",[s._v("客户端尝试使用 "),t("code",[s._v("SETNX")]),s._v(" 命令创建锁，如果成功，则表示获取到了锁。")]),s._v(" "),t("li",[s._v("如果获取成功，再设置锁的过期时间，以防止因客户端崩溃导致锁无法释放。")]),s._v(" "),t("li",[s._v("如果未获取成功，则锁已经被其他客户端持有，此时客户端可以选择重试或等待一段时间后再次尝试获取锁。")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("释放锁")]),s._v("：")]),s._v(" "),t("ol",[t("li",[s._v("客户端执行完业务逻辑后，需要安全地释放锁。通常的做法是检查当前锁的持有者是否为自己（通过唯一标识符对比），只有在持有锁的客户端才能执行 "),t("code",[s._v("DEL")]),s._v(" 命令释放锁。")]),s._v(" "),t("li",[s._v("释放锁的操作需要是原子性的，可以通过 Lua 脚本来确保操作的原子性。")])])])]),s._v(" "),t("p",[t("strong",[s._v("示例代码")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-lua line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-lua"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" redis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("call")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"get"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" KEYS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" ARGV"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" redis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("call")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"del"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" KEYS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"_4-锁的安全性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-锁的安全性"}},[s._v("#")]),s._v(" 4. "),t("strong",[s._v("锁的安全性")])]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("避免误删锁")]),s._v("：客户端在释放锁之前，必须先检查锁的持有者是否是自己。通过对比锁的值（唯一标识符），可以避免误删其他客户端的锁。")]),s._v(" "),t("li",[t("strong",[s._v("防止锁的提前释放")]),s._v("：通过 Lua 脚本将 "),t("code",[s._v("SETNX")]),s._v(" 和 "),t("code",[s._v("EXPIRE")]),s._v(" 组合成一个原子操作，防止在客户端崩溃或网络分区的情况下，出现锁未设置过期时间的情况。")])]),s._v(" "),t("h3",{attrs:{id:"_5-锁的续期机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-锁的续期机制"}},[s._v("#")]),s._v(" 5. "),t("strong",[s._v("锁的续期机制")])]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("长时间任务的锁续期")]),s._v("：如果业务逻辑执行时间超过锁的过期时间，可以设计一个锁续期机制，在业务逻辑执行过程中不断续期锁，防止锁过期导致其他客户端误获取锁。")]),s._v(" "),t("li",[t("strong",[s._v("定期续期")]),s._v("：客户端可以在锁快要过期时，使用 "),t("code",[s._v("EXPIRE")]),s._v(" 命令延长锁的过期时间。")])]),s._v(" "),t("h3",{attrs:{id:"_6-redlock算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-redlock算法"}},[s._v("#")]),s._v(" 6. "),t("strong",[s._v("Redlock算法")])]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("背景")]),s._v("：在单节点的 Redis 上设置分布式锁虽然简单，但在实际生产环境中，为了保证高可用性，通常会有多个 Redis 实例。这就引出了 Redlock 算法。")]),s._v(" "),t("li",[t("strong",[s._v("算法步骤")]),s._v("：\n"),t("ol",[t("li",[s._v("客户端在 N 个 Redis 实例（如5个）上依次尝试获取同样的锁。")]),s._v(" "),t("li",[s._v("每次获取锁时都设置相同的唯一标识符和过期时间。")]),s._v(" "),t("li",[s._v("如果客户端能在超过半数（即 N/2 + 1）的实例上成功获取锁，视为获取锁成功。")]),s._v(" "),t("li",[s._v("如果锁获取失败，或者在尝试获取锁的过程中某个实例超时，应当立即释放所有实例上的锁。")])])]),s._v(" "),t("li",[t("strong",[s._v("优点")]),s._v("：Redlock 提供了更高的容错能力，即使个别实例失效，也能保证分布式锁的可用性和安全性。")])]),s._v(" "),t("h3",{attrs:{id:"_7-redis实现分布式锁的挑战"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-redis实现分布式锁的挑战"}},[s._v("#")]),s._v(" 7. "),t("strong",[s._v("Redis实现分布式锁的挑战")])]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("网络分区问题")]),s._v("：在分布式系统中，网络分区是不可避免的。在出现网络分区的情况下，需要确保锁的安全性和一致性。")]),s._v(" "),t("li",[t("strong",[s._v("时钟同步问题")]),s._v("：由于不同服务器的时钟可能存在偏差，在实现分布式锁时，依赖时间的操作（如锁的过期时间）可能会带来不一致性，需要通过算法（如 Redlock）来保证。")]),s._v(" "),t("li",[t("strong",[s._v("性能与延迟")]),s._v("：获取分布式锁需要多个实例协调，如果实例之间的网络延迟较大，会影响锁的获取速度和系统的性能。")])]),s._v(" "),t("h3",{attrs:{id:"_8-常见的分布式锁实现方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-常见的分布式锁实现方式"}},[s._v("#")]),s._v(" 8. "),t("strong",[s._v("常见的分布式锁实现方式")])]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("基于数据库")]),s._v("：使用数据库的行锁或表锁实现分布式锁，但性能可能会受到影响。")]),s._v(" "),t("li",[t("strong",[s._v("基于 Zookeeper")]),s._v("：使用 Zookeeper 的临时节点和 Watcher 机制实现分布式锁，适合高可用要求较高的场景。")]),s._v(" "),t("li",[t("strong",[s._v("基于 Redis")]),s._v("：使用 Redis 实现分布式锁，性能较高，但需要注意 Redis 单点故障和数据一致性的问题。")])]),s._v(" "),t("h3",{attrs:{id:"_9-redis分布式锁的适用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-redis分布式锁的适用场景"}},[s._v("#")]),s._v(" 9. "),t("strong",[s._v("Redis分布式锁的适用场景")])]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("订单系统中的库存扣减")]),s._v("：确保同一时刻只有一个订单能够成功扣减库存，避免超卖。")]),s._v(" "),t("li",[t("strong",[s._v("定时任务的调度")]),s._v("：在分布式任务调度系统中，保证同一任务不会被多个节点同时执行。")]),s._v(" "),t("li",[t("strong",[s._v("分布式系统中的资源访问")]),s._v("：保证资源在多个节点之间的安全访问，防止数据冲突。")])]),s._v(" "),t("p",[s._v("通过理解这些原理，你可以更好地掌握 Redis 分布式锁的实现，并在实际项目中应用这些技术来解决并发控制问题。")])])}),[],!1,null,null,null);t.default=v.exports}}]);