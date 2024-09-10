(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{409:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("在 C++ 工程师的面试中，STL 中的 "),a("code",[s._v("map")]),s._v(" 和 "),a("code",[s._v("unordered_map")]),s._v(" 是常见的考察点。它们的用法、底层实现和性能差异等方面都会被重点考察。以下是一些典型的面试题：")]),s._v(" "),a("h3",{attrs:{id:"_1-map-和-unordered-map-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-map-和-unordered-map-的区别"}},[s._v("#")]),s._v(" 1. "),a("strong",[a("code",[s._v("map")]),s._v(" 和 "),a("code",[s._v("unordered_map")]),s._v(" 的区别")])]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("问题")]),s._v(": 请解释 "),a("code",[s._v("map")]),s._v(" 和 "),a("code",[s._v("unordered_map")]),s._v(" 之间的主要区别。")]),s._v(" "),a("li",[a("strong",[s._v("回答要点")]),s._v(":\n"),a("ul",[a("li",[a("strong",[s._v("底层实现")]),s._v(":\n"),a("ul",[a("li",[a("code",[s._v("map")]),s._v(" 是基于红黑树（自平衡二叉搜索树）实现的，键值对是有序的。")]),s._v(" "),a("li",[a("code",[s._v("unordered_map")]),s._v(" 是基于哈希表实现的，键值对是无序的。")])])]),s._v(" "),a("li",[a("strong",[s._v("查找、插入、删除的时间复杂度")]),s._v(":\n"),a("ul",[a("li",[a("code",[s._v("map")]),s._v(" 的时间复杂度为 "),a("code",[s._v("O(log n)")]),s._v("。")]),s._v(" "),a("li",[a("code",[s._v("unordered_map")]),s._v(" 的平均时间复杂度为 "),a("code",[s._v("O(1)")]),s._v("，最坏情况是 "),a("code",[s._v("O(n)")]),s._v("。")])])]),s._v(" "),a("li",[a("strong",[s._v("使用场景")]),s._v(":\n"),a("ul",[a("li",[s._v("使用 "),a("code",[s._v("map")]),s._v(" 时需要保持键的有序性。")]),s._v(" "),a("li",[s._v("使用 "),a("code",[s._v("unordered_map")]),s._v(" 时更关注查找效率，而不关心键的顺序。")])])])])])]),s._v(" "),a("h3",{attrs:{id:"_2-unordered-map-的哈希函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-unordered-map-的哈希函数"}},[s._v("#")]),s._v(" 2. "),a("strong",[a("code",[s._v("unordered_map")]),s._v(" 的哈希函数")])]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("问题")]),s._v(": "),a("code",[s._v("unordered_map")]),s._v(" 是如何确定每个键的存储位置的？你能自定义哈希函数吗？")]),s._v(" "),a("li",[a("strong",[s._v("回答要点")]),s._v(":\n"),a("ul",[a("li",[a("code",[s._v("unordered_map")]),s._v(" 使用哈希函数将键映射到存储桶中，默认使用 "),a("code",[s._v("std::hash")]),s._v("。")]),s._v(" "),a("li",[s._v("可以通过模板参数自定义哈希函数和相等性比较函数。例如："),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyHash")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("size_t "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("operator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" MyType"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自定义哈希逻辑")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nstd"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("unordered_map"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("MyType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ValueType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" MyHash"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" myMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])])])]),s._v(" "),a("h3",{attrs:{id:"_3-map-和-unordered-map-的遍历顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-map-和-unordered-map-的遍历顺序"}},[s._v("#")]),s._v(" 3. "),a("strong",[a("code",[s._v("map")]),s._v(" 和 "),a("code",[s._v("unordered_map")]),s._v(" 的遍历顺序")])]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("问题")]),s._v(": 在遍历 "),a("code",[s._v("map")]),s._v(" 和 "),a("code",[s._v("unordered_map")]),s._v(" 时，键值对的遍历顺序是什么样的？")]),s._v(" "),a("li",[a("strong",[s._v("回答要点")]),s._v(":\n"),a("ul",[a("li",[a("strong",[a("code",[s._v("map")])]),s._v(": 键值对按键的顺序（从小到大）遍历，因为底层是红黑树。")]),s._v(" "),a("li",[a("strong",[a("code",[s._v("unordered_map")])]),s._v(": 键值对的遍历顺序是无序的，因为底层是哈希表，顺序取决于哈希函数和当前哈希表的状态。")])])])]),s._v(" "),a("h3",{attrs:{id:"_4-map-和-unordered-map-的内存使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-map-和-unordered-map-的内存使用"}},[s._v("#")]),s._v(" 4. "),a("strong",[a("code",[s._v("map")]),s._v(" 和 "),a("code",[s._v("unordered_map")]),s._v(" 的内存使用")])]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("问题")]),s._v(": 讨论 "),a("code",[s._v("map")]),s._v(" 和 "),a("code",[s._v("unordered_map")]),s._v(" 的内存使用情况。哪种容器更节省内存？")]),s._v(" "),a("li",[a("strong",[s._v("回答要点")]),s._v(":\n"),a("ul",[a("li",[a("strong",[a("code",[s._v("map")])]),s._v(": 因为是基于红黑树实现的，每个节点额外存储父节点指针、左右子节点指针和颜色信息，因此内存开销较大。")]),s._v(" "),a("li",[a("strong",[a("code",[s._v("unordered_map")])]),s._v(": 虽然需要存储哈希表的桶，但通常情况下比 "),a("code",[s._v("map")]),s._v(" 更节省内存，尤其在大规模数据时，哈希表更节省空间。")])])])]),s._v(" "),a("h3",{attrs:{id:"_5-自定义类型作为键"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-自定义类型作为键"}},[s._v("#")]),s._v(" 5. "),a("strong",[s._v("自定义类型作为键")])]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("问题")]),s._v(": 如何在 "),a("code",[s._v("map")]),s._v(" 和 "),a("code",[s._v("unordered_map")]),s._v(" 中使用自定义类型作为键？")]),s._v(" "),a("li",[a("strong",[s._v("回答要点")]),s._v(":\n"),a("ul",[a("li",[a("strong",[a("code",[s._v("map")])]),s._v(": 自定义类型必须实现 "),a("code",[s._v("operator<")]),s._v(" 以便在红黑树中比较键的大小。"),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyType")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("operator")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" MyType"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nstd"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("map"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("MyType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ValueType"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" myMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])]),s._v(" "),a("li",[a("strong",[a("code",[s._v("unordered_map")])]),s._v(": 自定义类型必须提供哈希函数和相等性比较函数。"),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyType")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("operator")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" MyType"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyHash")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("size_t "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("operator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" MyType"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token generic-function"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hash")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nstd"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("unordered_map"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("MyType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ValueType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" MyHash"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" myMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])])])])]),s._v(" "),a("h3",{attrs:{id:"_6-性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-性能优化"}},[s._v("#")]),s._v(" 6. "),a("strong",[s._v("性能优化")])]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("问题")]),s._v(": 在使用 "),a("code",[s._v("map")]),s._v(" 和 "),a("code",[s._v("unordered_map")]),s._v(" 时，有哪些可以进行性能优化的策略？")]),s._v(" "),a("li",[a("strong",[s._v("回答要点")]),s._v(":\n"),a("ul",[a("li",[s._v("对于 "),a("code",[s._v("map")]),s._v("：\n"),a("ul",[a("li",[s._v("预分配内存，减少内存分配的次数。")]),s._v(" "),a("li",[s._v("如果可以确定键值对是有序插入的，避免无序插入导致的重平衡。")])])]),s._v(" "),a("li",[s._v("对于 "),a("code",[s._v("unordered_map")]),s._v("：\n"),a("ul",[a("li",[s._v("选择合适的初始大小，减少哈希表的扩展次数。")]),s._v(" "),a("li",[s._v("使用自定义哈希函数，以减少冲突，优化查找时间。")])])])])])]),s._v(" "),a("h3",{attrs:{id:"_7-迭代器失效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-迭代器失效"}},[s._v("#")]),s._v(" 7. "),a("strong",[s._v("迭代器失效")])]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("问题")]),s._v(": 讨论在 "),a("code",[s._v("map")]),s._v(" 和 "),a("code",[s._v("unordered_map")]),s._v(" 中迭代器失效的情况。插入和删除操作是否会使迭代器失效？")]),s._v(" "),a("li",[a("strong",[s._v("回答要点")]),s._v(":\n"),a("ul",[a("li",[a("strong",[a("code",[s._v("map")])]),s._v(": 插入操作不会使现有的迭代器失效，但删除操作会使指向被删除元素的迭代器失效。")]),s._v(" "),a("li",[a("strong",[a("code",[s._v("unordered_map")])]),s._v(": 由于可能触发 rehash，插入操作可能会使所有迭代器失效。删除操作只会使指向被删除元素的迭代器失效。")])])])]),s._v(" "),a("h3",{attrs:{id:"_8-unordered-map-最坏情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-unordered-map-最坏情况"}},[s._v("#")]),s._v(" 8. "),a("strong",[a("code",[s._v("unordered_map")]),s._v(" 最坏情况")])]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("问题")]),s._v(": "),a("code",[s._v("unordered_map")]),s._v(" 的最坏情况性能是什么？如何避免这种情况？")]),s._v(" "),a("li",[a("strong",[s._v("回答要点")]),s._v(":\n"),a("ul",[a("li",[s._v("最坏情况是所有键哈希到同一个桶中，导致查找、插入和删除的时间复杂度退化为 "),a("code",[s._v("O(n)")]),s._v("。")]),s._v(" "),a("li",[s._v("可以通过选择合适的哈希函数，避免哈希冲突来减少最坏情况发生的概率。")])])])]),s._v(" "),a("h3",{attrs:{id:"_9-使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-使用场景"}},[s._v("#")]),s._v(" 9. "),a("strong",[s._v("使用场景")])]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("问题")]),s._v(": 在什么情况下你会选择 "),a("code",[s._v("map")]),s._v("，在什么情况下你会选择 "),a("code",[s._v("unordered_map")]),s._v("？")]),s._v(" "),a("li",[a("strong",[s._v("回答要点")]),s._v(":\n"),a("ul",[a("li",[s._v("选择 "),a("code",[s._v("map")]),s._v("：当你需要保持键的有序性时，如实现有序字典或基于范围查询的操作。")]),s._v(" "),a("li",[s._v("选择 "),a("code",[s._v("unordered_map")]),s._v("：当你更关心查找和插入的速度，而不关心键的顺序时，如快速查找元素。")])])])]),s._v(" "),a("h3",{attrs:{id:"_10-容量管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-容量管理"}},[s._v("#")]),s._v(" 10. "),a("strong",[s._v("容量管理")])]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("问题")]),s._v(": "),a("code",[s._v("unordered_map")]),s._v(" 如何管理其容量？你如何控制 "),a("code",[s._v("unordered_map")]),s._v(" 的增长策略？")]),s._v(" "),a("li",[a("strong",[s._v("回答要点")]),s._v(":\n"),a("ul",[a("li",[a("code",[s._v("unordered_map")]),s._v(" 会自动管理其容量，并在负载因子超过一定阈值时进行扩展。")]),s._v(" "),a("li",[s._v("可以使用 "),a("code",[s._v("reserve")]),s._v(" 方法来预先分配内存，减少扩展次数，提高性能。")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);