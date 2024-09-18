(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{450:function(v,_,t){"use strict";t.r(_);var l=t(4),s=Object(l.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("Redis 为了有效管理内存，提供了多种过期策略和内存淘汰策略。了解这些策略是 Redis 性能优化的重要环节。以下是 Redis 的过期策略和内存淘汰策略的详细说明：")]),v._v(" "),_("h3",{attrs:{id:"一、redis-过期策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、redis-过期策略"}},[v._v("#")]),v._v(" 一、Redis 过期策略")]),v._v(" "),_("p",[v._v("Redis 的过期策略决定了如何处理设置了过期时间的键（Key）。Redis 有三种过期策略：")]),v._v(" "),_("ol",[_("li",[_("p",[_("strong",[v._v("定时删除（Timed Deletion）")]),v._v(":")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("机制")]),v._v(": 为每个设置了过期时间的键创建一个定时器，当键过期时，定时器触发删除操作。")]),v._v(" "),_("li",[_("strong",[v._v("优点")]),v._v(": 保证了过期键能够及时被删除。")]),v._v(" "),_("li",[_("strong",[v._v("缺点")]),v._v(": 会为每个键创建定时器，增加了内存和 CPU 的开销，Redis 默认不使用此策略。")])])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("惰性删除（Lazy Deletion）")]),v._v(":")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("机制")]),v._v(": 每次访问键时，Redis 会检查该键是否过期，如果过期则立即删除，返回空值。")]),v._v(" "),_("li",[_("strong",[v._v("优点")]),v._v(": 避免了不必要的定时器开销，仅在访问时才检查和删除过期键。")]),v._v(" "),_("li",[_("strong",[v._v("缺点")]),v._v(": 如果某些键没有被访问到，即使已经过期，也会一直占用内存，可能导致内存泄漏。")])])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("定期删除（Periodic Deletion）")]),v._v(":")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("机制")]),v._v(": Redis 会周期性地随机抽取一部分键，检查并删除其中已经过期的键。这是 Redis 默认采用的策略。")]),v._v(" "),_("li",[_("strong",[v._v("优点")]),v._v(": 在内存开销和及时删除之间取得了平衡。")]),v._v(" "),_("li",[_("strong",[v._v("缺点")]),v._v(": 不能保证过期键立即被删除，可能会有一些延迟。")])])])]),v._v(" "),_("h3",{attrs:{id:"二、redis-内存淘汰策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、redis-内存淘汰策略"}},[v._v("#")]),v._v(" 二、Redis 内存淘汰策略")]),v._v(" "),_("p",[v._v("当 Redis 内存达到配置的最大限制（"),_("code",[v._v("maxmemory")]),v._v("）时，需要选择内存淘汰策略来决定如何处理新写入的数据。Redis 提供了多种内存淘汰策略：")]),v._v(" "),_("ol",[_("li",[_("p",[_("strong",[v._v("volatile-lru")]),v._v(":")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("机制")]),v._v(": 仅对设置了过期时间的键进行 LRU（Least Recently Used，最近最少使用）算法淘汰，即优先淘汰最久未被访问的过期键。")]),v._v(" "),_("li",[_("strong",[v._v("场景")]),v._v(": 适用于需要控制过期数据集大小的场景。")])])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("allkeys-lru")]),v._v(":")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("机制")]),v._v(": 对所有键（无论是否设置过期时间）进行 LRU 淘汰，优先淘汰最久未被访问的键。")]),v._v(" "),_("li",[_("strong",[v._v("场景")]),v._v(": 适用于所有数据都需要控制内存使用的场景。")])])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("volatile-lfu")]),v._v(":")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("机制")]),v._v(": 仅对设置了过期时间的键进行 LFU（Least Frequently Used，最近最少使用）算法淘汰，即优先淘汰访问频率最低的过期键。")]),v._v(" "),_("li",[_("strong",[v._v("场景")]),v._v(": 适用于需要更精确控制哪些数据应该被淘汰的场景。")])])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("allkeys-lfu")]),v._v(":")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("机制")]),v._v(": 对所有键（无论是否设置过期时间）进行 LFU 淘汰，优先淘汰访问频率最低的键。")]),v._v(" "),_("li",[_("strong",[v._v("场景")]),v._v(": 适用于需要更精确控制内存使用且希望淘汰不常用数据的场景。")])])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("volatile-ttl")]),v._v(":")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("机制")]),v._v(": 仅对设置了过期时间的键，优先淘汰即将过期的键（TTL，Time To Live 最短的键）。")]),v._v(" "),_("li",[_("strong",[v._v("场景")]),v._v(": 适用于希望优先淘汰即将过期数据的场景。")])])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("noeviction")]),v._v(":")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("机制")]),v._v(": 禁止淘汰，当内存达到限制后，对写入操作直接返回错误，停止接收新的数据写入。")]),v._v(" "),_("li",[_("strong",[v._v("场景")]),v._v(": 适用于数据非常重要且不能丢失的场景，但需要特别注意防止内存用尽。")])])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("volatile-random")]),v._v(":")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("机制")]),v._v(": 仅对设置了过期时间的键进行随机淘汰。")]),v._v(" "),_("li",[_("strong",[v._v("场景")]),v._v(": 适用于希望有一定随机性的淘汰策略。")])])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("allkeys-random")]),v._v(":")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("机制")]),v._v(": 对所有键进行随机淘汰。")]),v._v(" "),_("li",[_("strong",[v._v("场景")]),v._v(": 适用于需要尽可能减少内存占用但不关心具体淘汰哪部分数据的场景。")])])])]),v._v(" "),_("h3",{attrs:{id:"策略选择"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#策略选择"}},[v._v("#")]),v._v(" "),_("strong",[v._v("策略选择")])]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("LRU 和 LFU")]),v._v(": 适用于内存紧张且访问频率存在明显差异的场景，LRU 适用于大多数场景，而 LFU 更适合需要长时间数据持久化且访问频次差异较大的场景。")]),v._v(" "),_("li",[_("strong",[v._v("noeviction")]),v._v(": 适用于关键数据不容丢失的场景，但需要特别关注内存使用情况。")]),v._v(" "),_("li",[_("strong",[v._v("ttl 策略")]),v._v(": 适用于数据有明确过期时间的场景，可以通过 "),_("code",[v._v("volatile-ttl")]),v._v(" 优先淘汰即将过期的数据。")])])])}),[],!1,null,null,null);_.default=s.exports}}]);