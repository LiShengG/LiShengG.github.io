(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{394:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("C++11 引入了移动语义（Move Semantics），这是对传统的拷贝语义（Copy Semantics）的重要扩展。移动语义可以显著提升性能，特别是在处理大量数据或动态分配的资源时。理解移动语义以及如何使用"),t("code",[s._v("std::move")]),s._v("是现代C++编程的核心技能。")]),s._v(" "),t("h3",{attrs:{id:"一、什么是移动语义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是移动语义"}},[s._v("#")]),s._v(" 一、什么是移动语义？")]),s._v(" "),t("p",[s._v("移动语义允许C++程序在转移所有权时“移动”资源，而不是“拷贝”它们。这意味着在某些情况下，数据可以从一个对象“偷走”到另一个对象中，而不是被复制，这样可以避免不必要的内存分配和数据复制操作，从而提升程序性能。")]),s._v(" "),t("h4",{attrs:{id:"_1-传统的拷贝语义-copy-semantics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-传统的拷贝语义-copy-semantics"}},[s._v("#")]),s._v(" 1. 传统的拷贝语义（Copy Semantics）")]),s._v(" "),t("p",[s._v("在没有移动语义之前，当我们需要从一个对象初始化另一个对象，或在赋值时，我们通常会使用拷贝构造函数或拷贝赋值运算符。这些操作会创建目标对象的一个副本：")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("string str1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello, World!"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nstd"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("string str2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" str1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 拷贝构造函数被调用")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("在这个例子中，"),t("code",[s._v("str2")]),s._v(" 是 "),t("code",[s._v("str1")]),s._v(" 的一个独立副本。")]),s._v(" "),t("h4",{attrs:{id:"_2-移动语义-move-semantics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-移动语义-move-semantics"}},[s._v("#")]),s._v(" 2. 移动语义（Move Semantics）")]),s._v(" "),t("p",[s._v("移动语义则允许资源被转移，而不是被复制：")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("string str1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello, World!"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nstd"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("string str2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("move")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 移动构造函数被调用")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("在这个例子中，"),t("code",[s._v("str2")]),s._v(" 接管了 "),t("code",[s._v("str1")]),s._v(" 的资源，而 "),t("code",[s._v("str1")]),s._v(" 被置于一种“空”或“未定义”的状态。这避免了不必要的拷贝操作，提升了性能。")]),s._v(" "),t("h3",{attrs:{id:"二、什么是-std-move"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、什么是-std-move"}},[s._v("#")]),s._v(" 二、什么是 "),t("code",[s._v("std::move")]),s._v("？")]),s._v(" "),t("p",[t("code",[s._v("std::move")]),s._v(" 是一个标准库函数，用来显式地将一个对象转换为“右值引用”（rvalue reference），以便可以使用移动语义。")]),s._v(" "),t("h4",{attrs:{id:"_1-左值与右值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-左值与右值"}},[s._v("#")]),s._v(" 1. 左值与右值")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("左值（lvalue）")]),s._v("：表示一个有明确地址的对象，可以获取它的地址。大多数变量都是左值。")]),s._v(" "),t("li",[t("strong",[s._v("右值（rvalue）")]),s._v("：表示一个没有明确地址的临时对象，通常是表达式的结果。")])]),s._v(" "),t("h4",{attrs:{id:"_2-std-move-的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-std-move-的作用"}},[s._v("#")]),s._v(" 2. "),t("code",[s._v("std::move")]),s._v(" 的作用")]),s._v(" "),t("p",[t("code",[s._v("std::move")]),s._v(" 不会移动对象本身，它只是将一个左值（lvalue）转换为右值引用（rvalue reference），从而允许它参与移动语义。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("string str1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello, World!"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nstd"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("string str2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("move")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// str1 被转换为右值引用，触发移动构造")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("使用 "),t("code",[s._v("std::move")]),s._v(" 后，"),t("code",[s._v("str1")]),s._v(" 被“标记”为可以“被偷走”其资源，接下来的操作就会触发移动构造函数或移动赋值运算符。")]),s._v(" "),t("h3",{attrs:{id:"三、什么时候需要实现移动构造函数和移动赋值运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、什么时候需要实现移动构造函数和移动赋值运算符"}},[s._v("#")]),s._v(" 三、什么时候需要实现移动构造函数和移动赋值运算符？")]),s._v(" "),t("p",[s._v("当你的类管理动态资源（如动态内存、文件句柄、网络连接等）时，特别是在资源占用很大的情况下，考虑实现移动构造函数和移动赋值运算符。")]),s._v(" "),t("h4",{attrs:{id:"_1-移动构造函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-移动构造函数"}},[s._v("#")]),s._v(" 1. 移动构造函数")]),s._v(" "),t("p",[s._v("移动构造函数是通过右值引用来构造新对象的，它从另一个对象“偷走”资源而不是复制资源：")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyClass")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("MyClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("MyClass"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" other"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("noexcept")]),s._v(" \n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("data")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("other"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        other"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("nullptr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 偷走资源，并将原对象置于“空”状态")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("ul",[t("li",[t("code",[s._v("MyClass(MyClass&& other) noexcept")]),s._v("：这是移动构造函数，它接受一个右值引用。")]),s._v(" "),t("li",[t("code",[s._v("noexcept")]),s._v("：表示该函数不会抛出异常，通常在移动构造函数中使用，以允许标准库进行一些优化。")]),s._v(" "),t("li",[t("code",[s._v("data(other.data)")]),s._v("：将 "),t("code",[s._v("other")]),s._v(" 对象的 "),t("code",[s._v("data")]),s._v(" 指针“偷走”给当前对象。")]),s._v(" "),t("li",[t("code",[s._v("other.data = nullptr")]),s._v("：将 "),t("code",[s._v("other")]),s._v(" 的 "),t("code",[s._v("data")]),s._v(" 指针置为 "),t("code",[s._v("nullptr")]),s._v("，表示它不再拥有资源。")])]),s._v(" "),t("h4",{attrs:{id:"_2-移动赋值运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-移动赋值运算符"}},[s._v("#")]),s._v(" 2. 移动赋值运算符")]),s._v(" "),t("p",[s._v("移动赋值运算符也是通过右值引用来将资源从一个对象转移到另一个对象中，通常需要释放当前对象已有的资源：")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyClass")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    MyClass"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("operator")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("MyClass"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" other"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("noexcept")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("other"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 防止自我赋值")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 释放已有资源")]),s._v("\n            data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" other"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 转移资源")]),s._v("\n            other"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("nullptr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将原对象置于“空”状态")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("ul",[t("li",[t("code",[s._v("operator=(MyClass&& other) noexcept")]),s._v("：这是移动赋值运算符，它处理资源的转移。")]),s._v(" "),t("li",[s._v("检查自我赋值后，先释放当前对象持有的资源，然后转移 "),t("code",[s._v("other")]),s._v(" 的资源，并将 "),t("code",[s._v("other")]),s._v(" 置为空。")])]),s._v(" "),t("h4",{attrs:{id:"_3-什么时候自动生成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-什么时候自动生成"}},[s._v("#")]),s._v(" 3. 什么时候自动生成？")]),s._v(" "),t("p",[s._v("如果你的类没有定义任何自定义的拷贝/移动构造函数或赋值运算符，且类的所有成员都可以移动（如基本类型指针或支持移动语义的对象），编译器会自动为你的类生成默认的移动构造函数和移动赋值运算符。")]),s._v(" "),t("h3",{attrs:{id:"四、总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、总结"}},[s._v("#")]),s._v(" 四、总结")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("移动语义")]),s._v(" 通过转移而非复制资源来提升程序性能。")]),s._v(" "),t("li",[s._v("使用 "),t("code",[s._v("std::move")]),s._v(" 可以显式地将一个左值转换为右值引用，从而触发移动语义。")]),s._v(" "),t("li",[s._v("当你的类管理动态资源时，考虑实现 "),t("strong",[s._v("移动构造函数")]),s._v(" 和 "),t("strong",[s._v("移动赋值运算符")]),s._v("，以避免不必要的资源复制。")]),s._v(" "),t("li",[s._v("移动语义非常适合需要高效管理资源的场景，如容器类、智能指针类或任何涉及大量数据转移的类。通过理解和使用移动语义，C++程序员可以编写出性能更高的代码，特别是在处理大数据或复杂对象时。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);