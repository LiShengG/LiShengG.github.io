(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{433:function(_,v,l){"use strict";l.r(v);var e=l(4),o=Object(e.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("I/O 多路复用（I/O Multiplexing）是一种在操作系统中用于高效地管理多个 I/O 事件的技术。它允许一个进程同时监听多个文件描述符（如套接字、管道、终端等）的状态变化，当这些文件描述符中的任何一个变得可读、可写或发生错误时，进程能够及时地得到通知并处理相应的 I/O 操作。")]),_._v(" "),v("h3",{attrs:{id:"定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[_._v("#")]),_._v(" "),v("strong",[_._v("定义")])]),_._v(" "),v("p",[_._v("I/O 多路复用是指通过一个机制（如 "),v("code",[_._v("select")]),_._v("、"),v("code",[_._v("poll")]),_._v(" 或 "),v("code",[_._v("epoll")]),_._v("），使一个进程能够同时监视多个 I/O 通道（文件描述符），当其中任何一个通道准备好进行 I/O 操作时，操作系统会通知该进程，以便它进行相应的 I/O 操作。这种机制允许单个进程有效地处理多个 I/O 事件，从而提高资源利用率和系统并发性能。")]),_._v(" "),v("h3",{attrs:{id:"适用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#适用场景"}},[_._v("#")]),_._v(" "),v("strong",[_._v("适用场景")])]),_._v(" "),v("p",[_._v("I/O 多路复用通常应用于需要同时处理多个 I/O 事件的场景，如：")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("网络服务器")]),_._v("：同时处理多个客户端的连接请求。")]),_._v(" "),v("li",[v("strong",[_._v("实时通信系统")]),_._v("：如聊天服务器、消息队列系统等。")]),_._v(" "),v("li",[v("strong",[_._v("事件驱动的程序")]),_._v("：如 GUI 应用程序或需要响应多种事件源的服务。")])]),_._v(" "),v("h3",{attrs:{id:"工作原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#工作原理"}},[_._v("#")]),_._v(" "),v("strong",[_._v("工作原理")])]),_._v(" "),v("p",[_._v("通过 I/O 多路复用，程序不必为每一个 I/O 操作都创建一个独立的线程或进程，而是可以在一个或少数几个线程中处理多个 I/O 操作。这减少了系统资源的占用（如线程/进程开销），并避免了大量的上下文切换，从而提高了系统的吞吐量和响应速度。")]),_._v(" "),v("h3",{attrs:{id:"关键点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关键点"}},[_._v("#")]),_._v(" "),v("strong",[_._v("关键点")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("效率")]),_._v("：在大多数场景下，多路复用比为每个 I/O 事件创建单独的线程或进程更加高效。")]),_._v(" "),v("li",[v("strong",[_._v("非阻塞 I/O")]),_._v("：多路复用通常与非阻塞 I/O 配合使用，使得进程可以在等待 I/O 完成时继续处理其他任务。")]),_._v(" "),v("li",[v("strong",[_._v("事件驱动")]),_._v("：多路复用机制本质上是事件驱动的，即在 I/O 事件发生时通知进程，而不是让进程一直等待某个 I/O 操作完成。")])]),_._v(" "),v("p",[_._v("Linux 的系统 I/O 模型中，"),v("code",[_._v("select")]),_._v("、"),v("code",[_._v("poll")]),_._v(" 和 "),v("code",[_._v("epoll")]),_._v(" 都是用于多路复用 I/O 操作的机制。它们的主要作用是监听多个文件描述符（比如套接字）的状态变化（如可读、可写、异常），以便在这些文件描述符可用时进行相应的 I/O 操作。虽然它们的功能相似，但在实现原理、性能和适用场景上有明显的区别。")]),_._v(" "),v("h3",{attrs:{id:"_1-select"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-select"}},[_._v("#")]),_._v(" 1. "),v("strong",[v("code",[_._v("select")])])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("实现原理")]),_._v("：\n"),v("ul",[v("li",[v("code",[_._v("select")]),_._v(" 使用的是一个固定大小的数组（通常大小为 "),v("code",[_._v("FD_SETSIZE")]),_._v("，一般为 1024）来存储监控的文件描述符。")]),_._v(" "),v("li",[_._v("内核会遍历整个文件描述符集，检查每个文件描述符的状态，并将结果返回给用户空间。")]),_._v(" "),v("li",[v("code",[_._v("select")]),_._v(" 的每次调用都会重新设置这个数组，并将其传递给内核，这意味着每次调用都需要重新检查所有的文件描述符。")])])]),_._v(" "),v("li",[v("strong",[_._v("优缺点")]),_._v("：\n"),v("ul",[v("li",[v("strong",[_._v("优点")]),_._v("：支持跨平台应用，几乎所有的 Unix 系统都支持 "),v("code",[_._v("select")]),_._v("，其 API 设计简单，易于理解和使用。")]),_._v(" "),v("li",[v("strong",[_._v("缺点")]),_._v("：在处理大量文件描述符时性能差，主要是因为每次调用都需要遍历整个文件描述符集，并且受限于 "),v("code",[_._v("FD_SETSIZE")]),_._v(" 的限制（通常为 1024）。")])])])]),_._v(" "),v("h3",{attrs:{id:"_2-poll"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-poll"}},[_._v("#")]),_._v(" 2. "),v("strong",[v("code",[_._v("poll")])])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("实现原理")]),_._v("：\n"),v("ul",[v("li",[v("code",[_._v("poll")]),_._v(" 和 "),v("code",[_._v("select")]),_._v(" 类似，但它使用了一个由 "),v("code",[_._v("pollfd")]),_._v(" 结构体数组组成的链表，这个数组可以动态扩展，克服了 "),v("code",[_._v("select")]),_._v(" 中 "),v("code",[_._v("FD_SETSIZE")]),_._v(" 的限制。")]),_._v(" "),v("li",[v("code",[_._v("poll")]),_._v(" 通过循环遍历这个数组，检查每个文件描述符的状态，返回所有处于就绪状态的文件描述符。")]),_._v(" "),v("li",[_._v("每次调用 "),v("code",[_._v("poll")]),_._v(" 时，整个文件描述符集都要被传递给内核，这和 "),v("code",[_._v("select")]),_._v(" 类似。")])])]),_._v(" "),v("li",[v("strong",[_._v("优缺点")]),_._v("：\n"),v("ul",[v("li",[v("strong",[_._v("优点")]),_._v("：克服了 "),v("code",[_._v("select")]),_._v(" 中文件描述符数量的限制，适合处理超过 1024 个文件描述符的场景。")]),_._v(" "),v("li",[v("strong",[_._v("缺点")]),_._v("：在处理大量文件描述符时，性能仍然不理想，因为同样需要遍历整个文件描述符集。")])])])]),_._v(" "),v("h3",{attrs:{id:"_3-epoll"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-epoll"}},[_._v("#")]),_._v(" 3. "),v("strong",[v("code",[_._v("epoll")])])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("实现原理")]),_._v("：\n"),v("ul",[v("li",[v("code",[_._v("epoll")]),_._v(" 是 Linux 特有的 I/O 多路复用机制，设计上更加高效，适用于大量并发连接的场景。")]),_._v(" "),v("li",[v("code",[_._v("epoll")]),_._v(" 使用一个 "),v("code",[_._v("epoll")]),_._v(" 实例来管理文件描述符，用户可以通过 "),v("code",[_._v("epoll_ctl")]),_._v(" 向这个实例中添加或删除文件描述符，这些操作是增量式的，也就是说，不需要每次调用都重新传递整个文件描述符集。")]),_._v(" "),v("li",[v("code",[_._v("epoll")]),_._v(" 采用了事件通知机制，当某个文件描述符的状态发生变化时，内核会自动将该事件加入到 "),v("code",[_._v("epoll")]),_._v(" 实例的事件队列中。用户调用 "),v("code",[_._v("epoll_wait")]),_._v(" 时，只需要检查这些发生变化的事件，而不是遍历所有文件描述符。")]),_._v(" "),v("li",[v("code",[_._v("epoll")]),_._v(" 支持两种工作模式：水平触发（Level-triggered, LT）和边缘触发（Edge-triggered, ET）。\n"),v("ul",[v("li",[v("strong",[_._v("LT（Level-triggered）")]),_._v("：默认模式，只要文件描述符处于就绪状态，就会返回事件。")]),_._v(" "),v("li",[v("strong",[_._v("ET（Edge-triggered）")]),_._v("：高效模式，仅在文件描述符状态从未就绪变为就绪时返回事件。")])])])])]),_._v(" "),v("li",[v("strong",[_._v("优缺点")]),_._v("：\n"),v("ul",[v("li",[v("strong",[_._v("优点")]),_._v("：适合大规模并发连接场景，能够高效处理大量文件描述符，性能非常优越。使用事件通知机制，减少了遍历开销，且不受文件描述符数量的限制。")]),_._v(" "),v("li",[v("strong",[_._v("缺点")]),_._v("：API 较为复杂，使用不当可能会导致难以排查的错误，比如使用 ET 模式时需要小心处理可能的事件丢失。")])])])]),_._v(" "),v("h3",{attrs:{id:"区别总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#区别总结"}},[_._v("#")]),_._v(" "),v("strong",[_._v("区别总结")])]),_._v(" "),v("ol",[v("li",[v("p",[v("strong",[_._v("性能")]),_._v("：")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("select")]),_._v(" 和 "),v("code",[_._v("poll")]),_._v(" 在处理大量文件描述符时性能较差，因为它们都需要每次调用时遍历所有的文件描述符。")]),_._v(" "),v("li",[v("code",[_._v("epoll")]),_._v(" 通过事件通知机制，在文件描述符数量较多时，性能要远优于 "),v("code",[_._v("select")]),_._v(" 和 "),v("code",[_._v("poll")]),_._v("，尤其在高并发场景下，"),v("code",[_._v("epoll")]),_._v(" 的效率明显更高。")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("可扩展性")]),_._v("：")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("select")]),_._v(" 受限于 "),v("code",[_._v("FD_SETSIZE")]),_._v("（通常为 1024），不适合处理大量文件描述符。")]),_._v(" "),v("li",[v("code",[_._v("poll")]),_._v(" 支持的文件描述符数量取决于系统的内存大小，但其遍历方式仍然限制了扩展性。")]),_._v(" "),v("li",[v("code",[_._v("epoll")]),_._v(" 没有文件描述符数量限制，支持大规模并发场景，具有更好的扩展性。")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("使用复杂性")]),_._v("：")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("select")]),_._v(" 和 "),v("code",[_._v("poll")]),_._v(" 使用较为简单，适合处理少量连接或低并发场景。")]),_._v(" "),v("li",[v("code",[_._v("epoll")]),_._v(" 的使用较为复杂，特别是在使用 ET 模式时需要更加小心，适合需要处理大量并发连接的高性能场景。")])])])]),_._v(" "),v("h3",{attrs:{id:"应用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[_._v("#")]),_._v(" "),v("strong",[_._v("应用场景")])]),_._v(" "),v("ul",[v("li",[v("code",[_._v("select")]),_._v(" 和 "),v("code",[_._v("poll")]),_._v(" 适合处理连接数量较少的场景，比如传统的网络服务或简单的 I/O 多路复用应用。")]),_._v(" "),v("li",[v("code",[_._v("epoll")]),_._v(" 适合处理大规模并发连接的场景，比如高性能的 Web 服务器、代理服务器、消息推送服务等。")])])])}),[],!1,null,null,null);v.default=o.exports}}]);