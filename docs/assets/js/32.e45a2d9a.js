(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{384:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("C++ 内存管理是涉及内存申请、释放、智能指针、内存安全（野指针、悬空指针）、内存池等")]),t._v(" "),s("h3",{attrs:{id:"_1-什么是内存泄漏-如何检测和避免内存泄漏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是内存泄漏-如何检测和避免内存泄漏"}},[t._v("#")]),t._v(" 1. "),s("strong",[t._v("什么是内存泄漏？如何检测和避免内存泄漏？")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("解答方向")]),t._v(":\n"),s("ul",[s("li",[s("strong",[t._v("内存泄漏")]),t._v(": 动态分配的内存未被释放，导致内存无法被重用。")]),t._v(" "),s("li",[s("strong",[t._v("检测")]),t._v(": 使用工具如 Valgrind、AddressSanitizer 等来检测内存泄漏。")]),t._v(" "),s("li",[s("strong",[t._v("避免")]),t._v(": 通过良好的编码习惯，使用智能指针（如 "),s("code",[t._v("std::unique_ptr")]),t._v("、"),s("code",[t._v("std::shared_ptr")]),t._v("）来管理动态内存。")])])])]),t._v(" "),s("h3",{attrs:{id:"_2-c-中的栈和堆的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-c-中的栈和堆的区别"}},[t._v("#")]),t._v(" 2. "),s("strong",[t._v("C++ 中的栈和堆的区别？")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("解答方向")]),t._v(":\n"),s("ul",[s("li",[s("strong",[t._v("栈")]),t._v(": 自动分配和释放，存储局部变量，生命周期由函数作用域决定。")]),t._v(" "),s("li",[s("strong",[t._v("堆")]),t._v(": 由程序员手动分配和释放，存储动态分配的内存，生命周期由程序员决定。")])])])]),t._v(" "),s("h3",{attrs:{id:"_3-解释-new-和-malloc-的区别。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-解释-new-和-malloc-的区别。"}},[t._v("#")]),t._v(" 3. "),s("strong",[t._v("解释 "),s("code",[t._v("new")]),t._v(" 和 "),s("code",[t._v("malloc")]),t._v(" 的区别。")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("解答方向")]),t._v(":\n"),s("ul",[s("li",[s("code",[t._v("new")]),t._v(" 是 C++ 的运算符，分配内存并调用构造函数。"),s("code",[t._v("malloc")]),t._v(" 是 C 的函数，仅分配内存，不调用构造函数。")]),t._v(" "),s("li",[s("code",[t._v("new")]),t._v(" 返回指定类型的指针，"),s("code",[t._v("malloc")]),t._v(" 返回 "),s("code",[t._v("void*")]),t._v(" 指针，需要强制类型转换。")]),t._v(" "),s("li",[s("code",[t._v("new")]),t._v(" 失败时抛出 "),s("code",[t._v("std::bad_alloc")]),t._v(" 异常，"),s("code",[t._v("malloc")]),t._v(" 失败时返回 "),s("code",[t._v("NULL")]),t._v("。")])])])]),t._v(" "),s("h3",{attrs:{id:"_4-new底层实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-new底层实现"}},[t._v("#")]),t._v(" 4. New底层实现")]),t._v(" "),s("p",[t._v("在 C++ 中，"),s("code",[t._v("new")]),t._v(" 运算符用于在堆上分配内存并构造对象。"),s("code",[t._v("new")]),t._v(" 运算符底层的实现涉及内存分配和对象初始化两个主要步骤。")]),t._v(" "),s("blockquote",[s("p",[t._v("4.1 "),s("strong",[t._v("内存分配")])])]),t._v(" "),s("ul",[s("li",[t._v("当你使用 "),s("code",[t._v("new")]),t._v(" 运算符时，它首先调用 "),s("code",[t._v("operator new")]),t._v(" 函数，该函数负责在堆上分配足够的内存以容纳指定类型的对象。")]),t._v(" "),s("li",[t._v("默认情况下，"),s("code",[t._v("operator new")]),t._v(" 函数调用标准库中的 "),s("code",[t._v("malloc")]),t._v(" 函数来执行内存分配。"),s("code",[t._v("malloc")]),t._v(" 函数会请求操作系统分配一块内存，并返回这块内存的首地址。")]),t._v(" "),s("li",[t._v("如果内存分配失败，"),s("code",[t._v("operator new")]),t._v(" 会抛出 "),s("code",[t._v("std::bad_alloc")]),t._v(" 异常，而不是返回 "),s("code",[t._v("NULL")]),t._v("。")])]),t._v(" "),s("p",[t._v("示例实现：")]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("operator")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("std"),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("size_t size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("malloc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bad_alloc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 分配失败，抛出异常")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("blockquote",[s("p",[t._v("4.2 "),s("strong",[t._v("对象构造")])])]),t._v(" "),s("ul",[s("li",[t._v("内存分配成功后，"),s("code",[t._v("new")]),t._v(" 运算符会调用对象的构造函数。构造函数使用上一步分配的内存地址，将对象初始化。")]),t._v(" "),s("li",[t._v("如果对象的构造函数中有复杂的初始化逻辑（如分配资源），这些操作会在这一阶段完成。")])]),t._v(" "),s("p",[t._v("整个过程可以用以下代码段表示：")]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用 new 创建对象的过程")]),t._v("\nMyClass"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("其底层类似于：")]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" mem "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("operator")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sizeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyClass"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 分配内存")]),t._v("\nMyClass"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在分配的内存上调用构造函数")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("blockquote",[s("p",[t._v("4.3 "),s("strong",[t._v("失败处理")])])]),t._v(" "),s("ul",[s("li",[t._v("如果内存分配或构造函数失败（如构造函数抛出异常），"),s("code",[t._v("new")]),t._v(" 运算符将释放之前分配的内存，并将异常向上传播。这确保了没有内存泄漏或未初始化的对象。")])]),t._v(" "),s("blockquote",[s("p",[t._v("4.4 "),s("strong",[t._v("对齐要求")])])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("new")]),t._v(" 操作符还需要考虑内存对齐。某些平台要求特定类型的数据存储在特定对齐的内存地址上，以提高访问效率。")])]),t._v(" "),s("blockquote",[s("p",[t._v("4.5 "),s("strong",[t._v("自定义 "),s("code",[t._v("operator new")])])])]),t._v(" "),s("ul",[s("li",[t._v("C++ 允许用户重载 "),s("code",[t._v("operator new")]),t._v("，以实现自定义内存分配策略。例如，你可以使用内存池来优化分配或在嵌入式系统中使用特殊的内存管理策略。")])]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" MyClass"),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("operator")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("std"),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("size_t size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义内存分配逻辑")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("custom_alloc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bad_alloc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h3",{attrs:{id:"_6-什么是悬空指针-如何避免"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-什么是悬空指针-如何避免"}},[t._v("#")]),t._v(" 6. "),s("strong",[t._v("什么是悬空指针？如何避免？")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("解答方向")]),t._v(":\n"),s("ul",[s("li",[s("strong",[t._v("悬空指针")]),t._v(": 指向已释放的内存区域的指针。")]),t._v(" "),s("li",[s("strong",[t._v("避免")]),t._v(": 在释放内存后将指针置为 "),s("code",[t._v("NULL")]),t._v("，使用智能指针替代原生指针。")])])])]),t._v(" "),s("h3",{attrs:{id:"_7-什么是内存对齐-为什么需要内存对齐"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-什么是内存对齐-为什么需要内存对齐"}},[t._v("#")]),t._v(" 7. "),s("strong",[t._v("什么是内存对齐？为什么需要内存对齐？")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("解答方向")]),t._v(":\n"),s("ul",[s("li",[s("strong",[t._v("内存对齐")]),t._v(": 是指将数据存储在内存中的某些特定地址上，以提高访问速度。")]),t._v(" "),s("li",[s("strong",[t._v("需要")]),t._v(": 不同的处理器要求数据以特定的边界对齐，否则会导致性能下降或无法访问。")])])])]),t._v(" "),s("h3",{attrs:{id:"_8-c-中的浅拷贝和深拷贝是什么-有什么区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-c-中的浅拷贝和深拷贝是什么-有什么区别"}},[t._v("#")]),t._v(" 8. "),s("strong",[t._v("C++ 中的浅拷贝和深拷贝是什么？有什么区别？")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("解答方向")]),t._v(":\n"),s("ul",[s("li",[s("strong",[t._v("浅拷贝")]),t._v(": 拷贝对象的值，但不复制动态分配的内存，仅复制指针。")]),t._v(" "),s("li",[s("strong",[t._v("深拷贝")]),t._v(": 拷贝对象及其动态分配的内存，复制内存内容。")]),t._v(" "),s("li",[s("strong",[t._v("区别")]),t._v(": 浅拷贝可能导致多个对象指向同一块内存，导致内存泄漏或悬空指针；深拷贝则更安全。")])])])]),t._v(" "),s("h3",{attrs:{id:"_9-什么是双重释放-如何防止"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-什么是双重释放-如何防止"}},[t._v("#")]),t._v(" 9. "),s("strong",[t._v("什么是双重释放？如何防止？")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("解答方向")]),t._v(":\n"),s("ul",[s("li",[s("strong",[t._v("双重释放")]),t._v(": 对同一块内存调用 "),s("code",[t._v("delete")]),t._v(" 或 "),s("code",[t._v("free")]),t._v(" 两次，会导致程序崩溃或未定义行为。")]),t._v(" "),s("li",[s("strong",[t._v("防止")]),t._v(": 释放内存后立即将指针置为 "),s("code",[t._v("NULL")]),t._v("，使用智能指针管理内存。")])])])]),t._v(" "),s("h3",{attrs:{id:"_10-c-中内存池-memory-pool-是什么-如何实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-c-中内存池-memory-pool-是什么-如何实现"}},[t._v("#")]),t._v(" 10. "),s("strong",[t._v("C++ 中内存池（Memory Pool）是什么？如何实现？")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("解答方向")]),t._v(":\n"),s("ul",[s("li",[s("strong",[t._v("内存池")]),t._v(": 预先分配一大块内存，然后按需从中分配小块内存，减少频繁调用 "),s("code",[t._v("new")]),t._v(" 和 "),s("code",[t._v("delete")]),t._v(" 的开销。")]),t._v(" "),s("li",[s("strong",[t._v("实现")]),t._v(": 维护一个可用内存块的列表，每次分配时从列表中取出，释放时将内存块归还到列表中。")])])])]),t._v(" "),s("h3",{attrs:{id:"_11-如何实现自定义的内存管理器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-如何实现自定义的内存管理器"}},[t._v("#")]),t._v(" 11. "),s("strong",[t._v("如何实现自定义的内存管理器？")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("解答方向")]),t._v(":\n"),s("ul",[s("li",[t._v("通过重载 "),s("code",[t._v("new")]),t._v("、"),s("code",[t._v("delete")]),t._v(" 运算符或创建内存池来管理内存分配和释放，提升程序性能。")]),t._v(" "),s("li",[t._v("可以实现内存复用、减少碎片、优化特定场景下的内存分配等。")])])])]),t._v(" "),s("h3",{attrs:{id:"_12-谈谈-raii-resource-acquisition-is-initialization-在内存管理中的作用。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-谈谈-raii-resource-acquisition-is-initialization-在内存管理中的作用。"}},[t._v("#")]),t._v(" 12. "),s("strong",[t._v("谈谈 RAII（Resource Acquisition Is Initialization）在内存管理中的作用。")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("解答方向")]),t._v(":\n"),s("ul",[s("li",[s("strong",[t._v("RAII")]),t._v(": 资源获取即初始化，资源（如内存）在对象创建时获取，在对象销毁时释放。")]),t._v(" "),s("li",[s("strong",[t._v("作用")]),t._v(": 自动管理资源生命周期，防止资源泄漏。例如，智能指针就是 RAII 的应用。")])])])]),t._v(" "),s("h3",{attrs:{id:"_13-c-中常见的内存管理错误有哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13-c-中常见的内存管理错误有哪些"}},[t._v("#")]),t._v(" 13. "),s("strong",[t._v("C++ 中常见的内存管理错误有哪些？")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("解答方向")]),t._v(":\n"),s("ul",[s("li",[s("strong",[t._v("内存泄漏")]),t._v(": 动态分配的内存未被释放。")]),t._v(" "),s("li",[s("strong",[t._v("悬空指针")]),t._v(": 使用了已释放的内存。")]),t._v(" "),s("li",[s("strong",[t._v("双重释放")]),t._v(": 对同一块内存调用 "),s("code",[t._v("delete")]),t._v(" 或 "),s("code",[t._v("free")]),t._v(" 两次。")]),t._v(" "),s("li",[s("strong",[t._v("野指针")]),t._v(": 指针未初始化即使用。")])])])]),t._v(" "),s("h3",{attrs:{id:"_14-什么时候应该使用-std-allocator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14-什么时候应该使用-std-allocator"}},[t._v("#")]),t._v(" 14. "),s("strong",[t._v("什么时候应该使用 "),s("code",[t._v("std::allocator")]),t._v("？")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("解答方向")]),t._v(":\n"),s("ul",[s("li",[s("strong",[s("code",[t._v("std::allocator")])]),t._v(": 是 C++ 标准库中提供的内存分配器，用于在容器中自定义内存管理。")]),t._v(" "),s("li",[s("strong",[t._v("使用场景")]),t._v(": 当需要优化容器的内存分配策略或在特定场景下管理内存时，可以使用 "),s("code",[t._v("std::allocator")]),t._v(" 来替代默认的分配器。")])])])]),t._v(" "),s("h3",{attrs:{id:"_15-new-和-delete-的工作机制是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_15-new-和-delete-的工作机制是什么"}},[t._v("#")]),t._v(" 15. "),s("strong",[t._v("new 和 delete 的工作机制是什么？")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("解答方向")]),t._v(":\n"),s("ul",[s("li",[s("code",[t._v("new")]),t._v(" 调用 "),s("code",[t._v("operator new")]),t._v(" 分配内存，然后调用构造函数初始化对象。")]),t._v(" "),s("li",[s("code",[t._v("delete")]),t._v(" 调用析构函数销毁对象，然后调用 "),s("code",[t._v("operator delete")]),t._v(" 释放内存。")]),t._v(" "),s("li",[t._v("可以重载 "),s("code",[t._v("operator new")]),t._v(" 和 "),s("code",[t._v("operator delete")]),t._v(" 以自定义内存分配行为。")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);