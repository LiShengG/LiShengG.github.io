(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{459:function(_,v,s){"use strict";s.r(v);var a=s(4),r=Object(a.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("在 Redis 中，哈希冲突（Hash Collision）是指多个不同的键在哈希计算后映射到同一个哈希槽（Hash Slot）或同一个桶（Bucket）。虽然哈希表在大多数情况下都能快速定位键值对，但哈希冲突可能导致性能下降，尤其是在哈希表的负载因子较高时。Redis 通过几种机制来处理哈希冲突，确保性能的稳定性。")]),_._v(" "),v("h3",{attrs:{id:"redis-哈希表的结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis-哈希表的结构"}},[_._v("#")]),_._v(" Redis 哈希表的结构")]),_._v(" "),v("ul",[v("li",[_._v("Redis 内部使用哈希表（Hash Table）来存储键值对。")]),_._v(" "),v("li",[_._v("哈希表的每个位置称为一个“桶”（Bucket）。")]),_._v(" "),v("li",[_._v("通过哈希函数，将键映射到哈希表中的某个桶中。")])]),_._v(" "),v("h3",{attrs:{id:"处理哈希冲突的常见方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#处理哈希冲突的常见方法"}},[_._v("#")]),_._v(" 处理哈希冲突的常见方法")]),_._v(" "),v("h4",{attrs:{id:"_1-链地址法-separate-chaining"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-链地址法-separate-chaining"}},[_._v("#")]),_._v(" 1. "),v("strong",[_._v("链地址法（Separate Chaining）")])]),_._v(" "),v("p",[_._v("链地址法是哈希冲突处理的常见方法之一。在这种方法中，每个哈希表的桶不仅存储一个元素，而是存储一个指向链表的指针。链表中包含了所有哈希到同一个桶中的键值对。")]),_._v(" "),v("p",[v("strong",[_._v("机制")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("当多个键被哈希到同一个桶中时，这些键值对将被存储在一个链表中。")]),_._v(" "),v("li",[_._v("插入时，新元素将插入到链表中。")]),_._v(" "),v("li",[_._v("查找时，需要遍历链表中的所有节点，查找目标键。")])]),_._v(" "),v("p",[v("strong",[_._v("优点")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("链表可以动态增长，因此哈希表在负载因子较高时也能继续工作。")]),_._v(" "),v("li",[_._v("解决了冲突问题，避免了哈希表的扩展频繁触发。")])]),_._v(" "),v("p",[v("strong",[_._v("缺点")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("在链表较长时，查找、插入和删除操作的性能会下降（时间复杂度为 O(n)）。")]),_._v(" "),v("li",[_._v("链表需要额外的内存来存储指针。")])]),_._v(" "),v("h4",{attrs:{id:"_2-开放地址法-open-addressing"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-开放地址法-open-addressing"}},[_._v("#")]),_._v(" 2. "),v("strong",[_._v("开放地址法（Open Addressing）")])]),_._v(" "),v("p",[_._v("在开放地址法中，所有的元素都存储在哈希表本身，而不是外部的链表中。当发生哈希冲突时，算法会探测其他位置，直到找到一个空位置为止。")]),_._v(" "),v("p",[v("strong",[_._v("常见的探测策略")]),_._v(":")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("线性探测（Linear Probing）")]),_._v(": 当冲突发生时，向后一个位置依次探测，直到找到空闲的桶。")]),_._v(" "),v("li",[v("strong",[_._v("二次探测（Quadratic Probing）")]),_._v(": 采用二次函数的形式探测下一位置，避免“堆积”现象。")]),_._v(" "),v("li",[v("strong",[_._v("双重哈希（Double Hashing）")]),_._v(": 使用第二个哈希函数来计算探测的步长，进一步减少冲突。")])]),_._v(" "),v("p",[v("strong",[_._v("优点")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("所有元素都存储在哈希表中，节省了指针的内存开销。")]),_._v(" "),v("li",[_._v("在负载因子较低时，查找效率较高。")])]),_._v(" "),v("p",[v("strong",[_._v("缺点")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("当负载因子较高时，探测链会变长，导致查找性能下降。")]),_._v(" "),v("li",[_._v("需要处理删除操作时的特殊情况（如伪删除标记）。")])]),_._v(" "),v("h4",{attrs:{id:"_3-redis-的渐进式-rehash"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-redis-的渐进式-rehash"}},[_._v("#")]),_._v(" 3. "),v("strong",[_._v("Redis 的渐进式 rehash")])]),_._v(" "),v("p",[_._v("Redis 使用链地址法来处理哈希冲突，同时为了避免哈希表过度增长带来的性能问题，Redis 采用了渐进式 rehash（rehashing）机制。")]),_._v(" "),v("p",[v("strong",[_._v("机制")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("Redis 在需要扩展或收缩哈希表时，不会一次性进行 rehash 操作，而是将 rehash 操作分布到多个请求中渐进完成。")]),_._v(" "),v("li",[_._v("在渐进式 rehash 过程中，Redis 会同时维护两个哈希表：旧表和新表。每次处理一个操作时，会将一部分键值对从旧表迁移到新表中。")]),_._v(" "),v("li",[_._v("这种渐进式的处理方式，避免了因 rehash 带来的集中性能损耗，保证了 Redis 在高并发环境中的性能稳定性。")])]),_._v(" "),v("p",[v("strong",[_._v("优点")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("渐进式 rehash 使得 Redis 的响应时间稳定，不会因为表的扩展或收缩而造成性能突降。")]),_._v(" "),v("li",[_._v("保证了 Redis 在高并发访问场景下的稳定性和高性能。")])]),_._v(" "),v("h3",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" 总结")]),_._v(" "),v("p",[_._v("Redis 主要通过链地址法和渐进式 rehash 机制来处理哈希冲突。链地址法在处理冲突时，通过将多个键值对存储在同一个链表中，保证了哈希表的稳定性。而渐进式 rehash 则通过分阶段地扩展或收缩哈希表，避免了性能的剧烈波动。这两种机制结合，使得 Redis 在处理哈希冲突时既能保持高效，也能在负载变化时提供稳定的性能。")])])}),[],!1,null,null,null);v.default=r.exports}}]);