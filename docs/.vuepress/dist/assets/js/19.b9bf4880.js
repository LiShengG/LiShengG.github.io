(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{370:function(_,t,v){"use strict";v.r(t);var a=v(4),r=Object(a.a)({},(function(){var _=this,t=_._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("p",[_._v("Golang 的垃圾回收（Garbage Collection, GC）是通过标记-清除（mark-and-sweep）算法实现的。Golang 的 GC 触发时机取决于多种因素，主要包括堆内存分配情况、垃圾回收的目标暂停时间（GC STW time），以及系统负载等。")]),_._v(" "),t("h3",{attrs:{id:"_1-堆内存增长"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-堆内存增长"}},[_._v("#")]),_._v(" 1. "),t("strong",[_._v("堆内存增长")])]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("触发条件")]),_._v("：当堆内存分配超过了预设的阈值时，GC 会被触发。")]),_._v(" "),t("li",[t("strong",[_._v("内存增长阈值")]),_._v("：Golang 的垃圾回收器会动态调整触发垃圾回收的阈值。通常来说，如果当前的堆内存使用量超过上一次垃圾回收后存活对象的大小乘以一个比率（默认是 1.5），则会触发一次新的垃圾回收。这个比率可以通过环境变量 "),t("code",[_._v("GOGC")]),_._v(" 来调整。例如，"),t("code",[_._v("GOGC=100")]),_._v(" 表示堆增长 100% 后触发 GC。")])]),_._v(" "),t("h3",{attrs:{id:"_2-手动触发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-手动触发"}},[_._v("#")]),_._v(" 2. "),t("strong",[_._v("手动触发")])]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("触发条件")]),_._v("：调用 "),t("code",[_._v("runtime.GC()")]),_._v(" 会手动触发一次垃圾回收。")]),_._v(" "),t("li",[t("strong",[_._v("使用场景")]),_._v("：通常情况下，Golang 开发者不需要手动调用 GC，但在某些特殊场景下，比如希望在内存紧张时强制释放内存，或在性能测试中控制垃圾回收行为时，可能会使用 "),t("code",[_._v("runtime.GC()")]),_._v("。")])]),_._v(" "),t("h3",{attrs:{id:"_3-系统压力"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-系统压力"}},[_._v("#")]),_._v(" 3. "),t("strong",[_._v("系统压力")])]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("触发条件")]),_._v("：当系统检测到内存压力较大（如接近内存极限）时，GC 可能会更频繁地触发，以释放内存资源，防止程序因内存不足而崩溃。")]),_._v(" "),t("li",[t("strong",[_._v("使用场景")]),_._v("：在内存紧张的系统中，垃圾回收可能会被更频繁地调用，以防止内存占用过高。")])]),_._v(" "),t("h3",{attrs:{id:"_4-后台周期性回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-后台周期性回收"}},[_._v("#")]),_._v(" 4. "),t("strong",[_._v("后台周期性回收")])]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("触发条件")]),_._v("：Golang 的 GC 还会以一种低频的方式周期性地检查并回收内存，即使堆的增长没有达到触发阈值。这种回收通常不会造成较大的停顿，用于清理长时间未使用的内存。")]),_._v(" "),t("li",[t("strong",[_._v("使用场景")]),_._v("：这种回收机制能够在程序内存占用稳定但堆内有未使用对象时，逐步释放内存。")])]),_._v(" "),t("h3",{attrs:{id:"_5-垃圾回收目标时间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-垃圾回收目标时间"}},[_._v("#")]),_._v(" 5. "),t("strong",[_._v("垃圾回收目标时间")])]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("触发条件")]),_._v("：Golang 的 GC 设计目标是尽量将垃圾回收的暂停时间控制在目标时间以内。该目标时间可以通过环境变量 "),t("code",[_._v("GODEBUG=gctrace=1")]),_._v(" 来观察。垃圾回收器会根据目标时间动态调整触发的时机和频率。")]),_._v(" "),t("li",[t("strong",[_._v("使用场景")]),_._v("：如果程序的内存分配和释放频率较高，GC 可能会更频繁地触发以满足低暂停时间的要求。")])]),_._v(" "),t("h3",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" "),t("strong",[_._v("总结")])]),_._v(" "),t("p",[_._v("Golang 的 GC 触发时机主要由堆内存增长、系统内存压力、垃圾回收目标时间等因素决定。开发者可以通过调整 "),t("code",[_._v("GOGC")]),_._v(" 等环境变量来影响垃圾回收的触发频率和行为，但一般情况下不需要手动干预。Golang 的 GC 在设计时平衡了内存回收效率和程序的暂停时间，力求在高效管理内存的同时，尽量减少对程序性能的影响。")])])}),[],!1,null,null,null);t.default=r.exports}}]);