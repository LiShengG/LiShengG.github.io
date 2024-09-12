(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{450:function(_,v,t){"use strict";t.r(v);var a=t(4),r=Object(a.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("在使用 Redis 进行缓存时，会遇到一些常见的缓存问题，如缓存击穿、缓存穿透和缓存雪崩。这些问题如果处理不好，会导致系统性能下降甚至崩溃。以下是对这些概念的解释：")]),_._v(" "),v("h3",{attrs:{id:"_1-缓存击穿-cache-breakdown"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-缓存击穿-cache-breakdown"}},[_._v("#")]),_._v(" 1. 缓存击穿（Cache Breakdown）")]),_._v(" "),v("p",[v("strong",[_._v("定义")]),_._v(": 缓存击穿是指某个热点数据在缓存中过期失效，而此时有大量并发请求同时查询该数据，由于缓存失效，请求直接打到数据库，造成数据库瞬间压力剧增，甚至可能导致数据库崩溃。")]),_._v(" "),v("p",[v("strong",[_._v("场景")]),_._v(": 某个热点键（Key）正好在高并发的场景下过期，这时大量请求都无法从缓存中获取数据，只能访问数据库。")]),_._v(" "),v("p",[v("strong",[_._v("解决方案")]),_._v(":")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("缓存预热")]),_._v(": 在数据即将过期前主动刷新缓存，确保热点数据不会同时失效。")]),_._v(" "),v("li",[v("strong",[_._v("使用互斥锁")]),_._v(": 当缓存失效时，只有一个请求去加载数据并更新缓存，其余请求等待锁释放，之后从缓存中读取数据。")]),_._v(" "),v("li",[v("strong",[_._v("永不过期")]),_._v(": 对于特别重要的热点数据，可以设置为永不过期，定期更新缓存数据。")])]),_._v(" "),v("h3",{attrs:{id:"_2-缓存穿透-cache-penetration"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-缓存穿透-cache-penetration"}},[_._v("#")]),_._v(" 2. 缓存穿透（Cache Penetration）")]),_._v(" "),v("p",[v("strong",[_._v("定义")]),_._v(": 缓存穿透是指查询的数据既不在缓存中，也不在数据库中。通常是因为用户输入了非法的 ID 或者恶意攻击者频繁访问不存在的数据，导致每次请求都会直接穿透缓存访问数据库，严重时会导致数据库崩溃。")]),_._v(" "),v("p",[v("strong",[_._v("场景")]),_._v(": 攻击者通过大量的非法请求不断尝试查询不存在的数据，绕过缓存直接攻击数据库。")]),_._v(" "),v("p",[v("strong",[_._v("解决方案")]),_._v(":")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("缓存空值")]),_._v(": 对查询结果为空的数据，也进行缓存，并设置一个较短的过期时间，防止重复访问同一不存在的数据。")]),_._v(" "),v("li",[v("strong",[_._v("布隆过滤器（Bloom Filter）")]),_._v(": 在缓存层增加一个布隆过滤器，用于快速判断某个请求是否会命中数据库，如果布隆过滤器判定数据不存在，则直接返回，避免请求落到数据库。")]),_._v(" "),v("li",[v("strong",[_._v("参数校验")]),_._v(": 在应用层对传入的请求参数进行严格校验，防止不合法的参数直接进入缓存和数据库。")])]),_._v(" "),v("h3",{attrs:{id:"_3-缓存雪崩-cache-avalanche"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-缓存雪崩-cache-avalanche"}},[_._v("#")]),_._v(" 3. 缓存雪崩（Cache Avalanche）")]),_._v(" "),v("p",[v("strong",[_._v("定义")]),_._v(": 缓存雪崩是指在某一个时间段，缓存中的大量数据同时过期或Redis服务宕机，导致大量请求直接打到数据库，造成数据库瞬间负载过高甚至崩溃。")]),_._v(" "),v("p",[v("strong",[_._v("场景")]),_._v(": 某个时间点，大量缓存数据同时失效，或者缓存服务不可用，导致所有请求都绕过缓存直接访问数据库。")]),_._v(" "),v("p",[v("strong",[_._v("解决方案")]),_._v(":")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("缓存数据过期时间分散")]),_._v(": 在设置缓存过期时间时，增加一个随机值，防止大量缓存数据在同一时间失效。")]),_._v(" "),v("li",[v("strong",[_._v("双缓存策略")]),_._v(": 使用双缓存，数据失效时先查询旧缓存，再去更新新的缓存。")]),_._v(" "),v("li",[v("strong",[_._v("降级策略")]),_._v(": 当缓存服务不可用时，启用服务降级策略，限制对数据库的访问，保护数据库。")]),_._v(" "),v("li",[v("strong",[_._v("多级缓存")]),_._v(": 使用多级缓存策略（如本地缓存+分布式缓存），在分布式缓存不可用时，从本地缓存读取数据，减少对数据库的压力。")])]),_._v(" "),v("p",[_._v("通过合理的设计和防护措施，能够有效地避免这些缓存问题，确保系统的高可用性和稳定性。")])])}),[],!1,null,null,null);v.default=r.exports}}]);