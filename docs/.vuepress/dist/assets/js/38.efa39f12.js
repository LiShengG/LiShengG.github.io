(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{388:function(t,s,n){"use strict";n.r(s);var a=n(4),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("1、怎么控制并发数？\n2、多个 goroutine 对同一个 map 写会 panic，异常是否可以用 defer 捕获？\n3、如何优雅的实现一个 goroutine 池（百度、手写代码）")])]),t._v(" "),s("p",[t._v("Goroutines 是 Go 语言并发编程的核心概念，Go 语言面试中经常涉及到与 Goroutines 相关的问题。以下是一些典型的 Goroutines 相关的面试题，涵盖了从基础到进阶的各个方面。")]),t._v(" "),s("h3",{attrs:{id:"_1-goroutine-的基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-goroutine-的基本概念"}},[t._v("#")]),t._v(" 1. "),s("strong",[t._v("Goroutine 的基本概念")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("问题")]),t._v(": 请解释什么是 Goroutine，它与传统的线程有什么区别？")]),t._v(" "),s("li",[s("strong",[t._v("回答要点")]),t._v(":\n"),s("ul",[s("li",[t._v("Goroutine 是 Go 语言中的轻量级线程，由 Go 运行时管理。")]),t._v(" "),s("li",[t._v("相较于操作系统线程，Goroutine 占用更少的内存，启动和销毁的开销更小。")]),t._v(" "),s("li",[t._v("Go 运行时负责调度 Goroutine，使其高效运行在多核处理器上。")])])])]),t._v(" "),s("h3",{attrs:{id:"_2-如何启动一个-goroutine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何启动一个-goroutine"}},[t._v("#")]),t._v(" 2. "),s("strong",[t._v("如何启动一个 Goroutine？")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("问题")]),t._v(": 请写出启动一个 Goroutine 的代码示例，并解释 Goroutine 的启动方式。")]),t._v(" "),s("li",[s("strong",[t._v("回答要点")]),t._v(":"),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, Goroutine"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("ul",[s("li",[t._v("使用 "),s("code",[t._v("go")]),t._v(" 关键字来启动一个 Goroutine，后跟一个函数调用。")]),t._v(" "),s("li",[t._v("启动 Goroutine 后，主函数将继续执行，而 Goroutine 运行在后台。")])])])]),t._v(" "),s("h3",{attrs:{id:"_3-goroutine-的调度模型-gmp-模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-goroutine-的调度模型-gmp-模型"}},[t._v("#")]),t._v(" 3. "),s("strong",[t._v("Goroutine 的调度模型（GMP 模型）")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("问题")]),t._v(": 请解释 Go 语言中的 Goroutine 调度模型。")]),t._v(" "),s("li",[s("strong",[t._v("回答要点")]),t._v(":\n"),s("ul",[s("li",[t._v("Go 的 Goroutine 调度采用 GMP 模型，即 Goroutine（G）、操作系统线程（M）、调度器（P）三者的结合。")]),t._v(" "),s("li",[t._v("G 表示 Goroutine，M 表示操作系统线程，P 表示调度器的处理器。")]),t._v(" "),s("li",[t._v("调度器通过 P 将 G 分配给 M 执行，P 控制 M 执行 Goroutine 的上下文切换。")]),t._v(" "),s("li",[t._v("GMP 模型使得 Goroutine 能高效运行在多核处理器上，提供并发能力。")])])])]),t._v(" "),s("h3",{attrs:{id:"_4-goroutine-泄漏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-goroutine-泄漏"}},[t._v("#")]),t._v(" 4. "),s("strong",[t._v("Goroutine 泄漏")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("问题")]),t._v(": 什么是 Goroutine 泄漏？如何避免？")]),t._v(" "),s("li",[s("strong",[t._v("回答要点")]),t._v(":\n"),s("ul",[s("li",[t._v("Goroutine 泄漏是指 Goroutine 无法正常退出，导致其持续占用资源。")]),t._v(" "),s("li",[t._v("可能的原因包括：Goroutine 阻塞在无法完成的 I/O 操作、无穷循环、等待无法接收的数据等。")]),t._v(" "),s("li",[t._v("避免 Goroutine 泄漏的方法：\n"),s("ul",[s("li",[t._v("使用 "),s("code",[t._v("context")]),t._v(" 控制 Goroutine 的生命周期。")]),t._v(" "),s("li",[t._v("确保 Goroutine 有明确的退出条件。")]),t._v(" "),s("li",[t._v("定期监控应用中的 Goroutine 数量。")])])])])])]),t._v(" "),s("h3",{attrs:{id:"_5-goroutine-和-channel-的关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-goroutine-和-channel-的关系"}},[t._v("#")]),t._v(" 5. "),s("strong",[t._v("Goroutine 和 Channel 的关系")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("问题")]),t._v(": 如何通过 Channel 实现 Goroutine 之间的通信？")]),t._v(" "),s("li",[s("strong",[t._v("回答要点")]),t._v(":"),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("ch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("chan")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送数据到 channel")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nvalue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v("ch "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从 channel 接收数据")]),t._v("\nfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("ul",[s("li",[t._v("Channel 是 Goroutine 之间进行通信的管道，可以用于同步 Goroutine。")]),t._v(" "),s("li",[t._v("通过 Channel 可以在 Goroutine 之间传递数据，实现安全的并发操作。")])])])]),t._v(" "),s("h3",{attrs:{id:"_6-goroutine-的并发与同步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-goroutine-的并发与同步"}},[t._v("#")]),t._v(" 6. "),s("strong",[t._v("Goroutine 的并发与同步")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("问题")]),t._v(": 在多个 Goroutine 并发执行时，如何确保数据安全？")]),t._v(" "),s("li",[s("strong",[t._v("回答要点")]),t._v(":\n"),s("ul",[s("li",[t._v("使用 Channel 来传递数据和控制并发。")]),t._v(" "),s("li",[t._v("使用 "),s("code",[t._v("sync.Mutex")]),t._v(" 或 "),s("code",[t._v("sync.RWMutex")]),t._v(" 实现对共享数据的互斥锁定。")]),t._v(" "),s("li",[t._v("使用 "),s("code",[t._v("sync.WaitGroup")]),t._v(" 来等待一组 Goroutine 完成。")])])])]),t._v(" "),s("h3",{attrs:{id:"_7-goroutine-的数量控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-goroutine-的数量控制"}},[t._v("#")]),t._v(" 7. "),s("strong",[t._v("Goroutine 的数量控制")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("问题")]),t._v(": 如何控制应用中 Goroutine 的数量，防止创建过多的 Goroutine？")]),t._v(" "),s("li",[s("strong",[t._v("回答要点")]),t._v(":\n"),s("ul",[s("li",[t._v("使用带缓冲的 Channel 控制并发 Goroutine 的数量："),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("ch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("chan")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 限制同时运行的 Goroutine 数量为 10")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 占用一个 Goroutine 配额")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v("ch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 释放 Goroutine 配额")]),t._v("\n        fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])])]),t._v(" "),s("li",[t._v("使用 "),s("code",[t._v("sync.Pool")]),t._v(" 来复用 Goroutine，减少 Goroutine 的创建和销毁次数。")])])])]),t._v(" "),s("h3",{attrs:{id:"_8-goroutine-的启动顺序与执行顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-goroutine-的启动顺序与执行顺序"}},[t._v("#")]),t._v(" 8. "),s("strong",[t._v("Goroutine 的启动顺序与执行顺序")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("问题")]),t._v(": 启动多个 Goroutine 后，能否保证它们的执行顺序？如何控制它们的执行顺序？")]),t._v(" "),s("li",[s("strong",[t._v("回答要点")]),t._v(":\n"),s("ul",[s("li",[t._v("Goroutine 的执行顺序不能被保证，因为 Goroutine 的调度由 Go 运行时决定。")]),t._v(" "),s("li",[t._v("如果需要控制 Goroutine 的执行顺序，可以通过 Channel 或 "),s("code",[t._v("sync.WaitGroup")]),t._v(" 等同步机制来实现："),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" wg sync"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WaitGroup\n\nwg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defer")]),t._v(" wg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Done")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Goroutine 1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defer")]),t._v(" wg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Done")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Goroutine 2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Wait")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等待两个 Goroutine 都执行完")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])])])])])]),t._v(" "),s("h3",{attrs:{id:"_9-go-func-闭包陷阱"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-go-func-闭包陷阱"}},[t._v("#")]),t._v(" 9. "),s("strong",[s("code",[t._v("go func")]),t._v(" 闭包陷阱")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("问题")]),t._v(": 在 Goroutine 中使用 "),s("code",[t._v("for")]),t._v(" 循环启动多个 Goroutine，为什么所有 Goroutine 打印的都是同一个值？")]),t._v(" "),s("li",[s("strong",[t._v("回答要点")]),t._v(":\n"),s("ul",[s("li",[t._v("这是因为 Goroutine 中的闭包捕获了循环变量的引用，而不是值。所有的 Goroutine 会共享同一个循环变量。")]),t._v(" "),s("li",[t._v("解决方法是显式传递变量的副本："),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 传递 i 的副本")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])])])])]),t._v(" "),s("p",[t._v("在 Go 中，当你在一个 "),s("code",[t._v("for")]),t._v(" 循环内启动多个 Goroutine，通常会遇到所有 Goroutine 打印相同的值，这个问题通常与闭包的变量捕获方式有关。")]),t._v(" "),s("p",[t._v("具体来说，"),s("code",[t._v("for")]),t._v(" 循环中的变量（例如循环变量 "),s("code",[t._v("i")]),t._v("）是被闭包捕获的，这意味着所有 Goroutine 都持有对该变量的引用，而不是在每次循环时创建一个新的副本。因此，当所有 Goroutine 启动时，可能 "),s("code",[t._v("for")]),t._v(" 循环已经结束，循环变量 "),s("code",[t._v("i")]),t._v(" 的值是最后一次迭代后的值。")]),t._v(" "),s("p",[t._v("为了修复这个问题，可以将循环变量作为参数传递给一个新的将要执行的函数，确保每个 Goroutine 都拥有一个独立的变量副本。你可以使用一个函数内的局部变量来实现这一点。以下是示例代码：")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将 i 作为参数传递给 Goroutine")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等待一会儿确保所有 Goroutine 有时间执行（这里只是为了演示，通常不推荐这样做）")]),t._v("\n\ttime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br")])]),s("p",[t._v("在这个示例中，每个 Goroutine 都接收了自己独立的 "),s("code",[t._v("i")]),t._v(" 的副本，这样每个 Goroutine 在运行时打印的就是自己对应的值，而不会打印同一个值。")]),t._v(" "),s("h3",{attrs:{id:"_10-goroutine-的调度与抢占"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-goroutine-的调度与抢占"}},[t._v("#")]),t._v(" 10. "),s("strong",[t._v("Goroutine 的调度与抢占")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("问题")]),t._v(": Go 语言如何实现 Goroutine 的调度？Goroutine 是否会被抢占？")]),t._v(" "),s("li",[s("strong",[t._v("回答要点")]),t._v(":\n"),s("ul",[s("li",[t._v("Go 语言使用 GMP 模型进行 Goroutine 的调度。")]),t._v(" "),s("li",[t._v("Goroutine 不会主动被抢占，而是通过特定的点（如函数调用、Channel 操作）触发调度。")]),t._v(" "),s("li",[t._v("Go 1.14 引入了 Goroutine 的抢占式调度机制，可以在 Goroutine 长时间运行时强制中断其执行，让其他 Goroutine 获得运行机会。")])])])]),t._v(" "),s("h3",{attrs:{id:"_11-goroutine-的启动和栈空间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-goroutine-的启动和栈空间"}},[t._v("#")]),t._v(" 11. "),s("strong",[t._v("Goroutine 的启动和栈空间")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("问题")]),t._v(": 启动一个 Goroutine 所需的栈空间有多大？这个栈空间是固定的吗？")]),t._v(" "),s("li",[s("strong",[t._v("回答要点")]),t._v(":\n"),s("ul",[s("li",[t._v("Goroutine 的初始栈空间很小，通常只有 2KB。")]),t._v(" "),s("li",[t._v("Goroutine 的栈空间是动态增长的，可以根据需要自动扩展和收缩。")]),t._v(" "),s("li",[t._v("这种动态栈机制是 Go 语言能够高效管理大量 Goroutine 的关键之一。")])])])]),t._v(" "),s("h3",{attrs:{id:"_12-goroutine-的最佳实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-goroutine-的最佳实践"}},[t._v("#")]),t._v(" 12. "),s("strong",[t._v("Goroutine 的最佳实践")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("问题")]),t._v(": 使用 Goroutine 时有哪些最佳实践？")]),t._v(" "),s("li",[s("strong",[t._v("回答要点")]),t._v(":\n"),s("ul",[s("li",[t._v("确保 Goroutine 能够及时退出，避免 Goroutine 泄漏。")]),t._v(" "),s("li",[t._v("在并发访问共享数据时使用适当的同步机制，如 Channel、Mutex 等。")]),t._v(" "),s("li",[t._v("使用 "),s("code",[t._v("context")]),t._v(" 控制 Goroutine 的生命周期和取消操作。")]),t._v(" "),s("li",[t._v("监控应用中的 Goroutine 数量，避免过度创建。")]),t._v(" "),s("li",[t._v("通过 "),s("code",[t._v("recover")]),t._v(" 捕获 Goroutine 中的 panic，避免整个程序崩溃。")])])])]),t._v(" "),s("p",[t._v("这些问题从 Goroutine 的基础概念到复杂的并发控制，能够有效考察候选人对 Go 语言并发编程的理解和实际应用能力。在面试中，对这些问题的深入理解和实践经验将帮助你更好地展示自己的技术水平。")])])}),[],!1,null,null,null);s.default=r.exports}}]);