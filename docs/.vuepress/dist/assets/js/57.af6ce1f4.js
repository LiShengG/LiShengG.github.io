(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{411:function(_,v,t){"use strict";t.r(v);var s=t(4),l=Object(s.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[v("code",[_._v("std::deque")]),_._v("（双端队列）、"),v("code",[_._v("std::vector")]),_._v("（动态数组）和 "),v("code",[_._v("std::list")]),_._v("（双向链表）是 C++ STL 中的三种常用容器。它们各自有不同的特性和适用场景。以下是它们的对比：")]),_._v(" "),v("h3",{attrs:{id:"_1-内存结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-内存结构"}},[_._v("#")]),_._v(" 1. 内存结构")]),_._v(" "),v("ul",[v("li",[v("p",[v("strong",[_._v("std::vector")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("使用连续的内存块来存储元素。")]),_._v(" "),v("li",[_._v("适合随机访问，但在插入或删除元素时，可能需要移动大量元素。")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("std::deque")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("使用多个不连续的内存块（通常是链表结构）。")]),_._v(" "),v("li",[_._v("允许在两端高效地插入和删除元素。")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("std::list")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("使用双向链表结构，每个元素都有指向前后元素的指针。")]),_._v(" "),v("li",[_._v("不需要连续的内存块，适合频繁的插入和删除操作。")])])])]),_._v(" "),v("h3",{attrs:{id:"_2-访问速度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-访问速度"}},[_._v("#")]),_._v(" 2. 访问速度")]),_._v(" "),v("ul",[v("li",[v("p",[v("strong",[_._v("std::vector")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("随机访问速度快，时间复杂度为 O(1)。")]),_._v(" "),v("li",[_._v("由于内存连续，缓存友好。")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("std::deque")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("随机访问速度稍慢，时间复杂度为 O(1)，但由于不连续的内存，可能会有缓存不友好的情况。")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("std::list")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("不支持随机访问，访问元素的时间复杂度为 O(n)。")])])])]),_._v(" "),v("h3",{attrs:{id:"_3-插入和删除操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-插入和删除操作"}},[_._v("#")]),_._v(" 3. 插入和删除操作")]),_._v(" "),v("ul",[v("li",[v("p",[v("strong",[_._v("std::vector")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("在末尾插入元素效率高（摊销时间复杂度为 O(1)），但在中间或开头插入/删除元素效率低（时间复杂度为 O(n)）。")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("std::deque")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("在两端插入和删除元素效率高（时间复杂度为 O(1)），在中间插入/删除效率较低（时间复杂度为 O(n)）。")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("std::list")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("在任意位置插入和删除元素效率高（时间复杂度为 O(1)，前提是已知位置），但需要遍历链表找到位置（时间复杂度为 O(n)）。")])])])]),_._v(" "),v("h3",{attrs:{id:"_4-内存管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-内存管理"}},[_._v("#")]),_._v(" 4. 内存管理")]),_._v(" "),v("ul",[v("li",[v("p",[v("strong",[_._v("std::vector")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("当容量不足时，会重新分配更大的内存块并复制元素，可能导致性能下降。")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("std::deque")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("不需要连续的内存块，插入和删除时更灵活，减少了重新分配的需要。")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("std::list")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("每个元素都有额外的指针开销，内存使用效率较低。")])])])]),_._v(" "),v("h3",{attrs:{id:"_5-使用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-使用场景"}},[_._v("#")]),_._v(" 5. 使用场景")]),_._v(" "),v("ul",[v("li",[v("p",[v("strong",[_._v("std::vector")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("适合需要频繁随机访问和在末尾插入的场景，如动态数组、栈等。")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("std::deque")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("适合需要在两端频繁插入和删除的场景，如双端队列、缓冲区等。")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("std::list")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("适合需要频繁插入和删除的场景，尤其是在中间位置，如实现队列、栈等。")])])])]),_._v(" "),v("h3",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" 总结")]),_._v(" "),v("p",[_._v("选择 "),v("code",[_._v("std::vector")]),_._v("、"),v("code",[_._v("std::deque")]),_._v(" 还是 "),v("code",[_._v("std::list")]),_._v(" 主要取决于具体的使用场景和性能需求。"),v("code",[_._v("std::vector")]),_._v(" 适合随机访问和末尾插入，"),v("code",[_._v("std::deque")]),_._v(" 适合两端操作，而 "),v("code",[_._v("std::list")]),_._v(" 则适合频繁的插入和删除操作。")])])}),[],!1,null,null,null);v.default=l.exports}}]);