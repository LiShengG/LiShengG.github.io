(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{420:function(s,a,_){"use strict";_.r(a);var t=_(4),v=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("Redis 事务（Transactions）是一个一次性执行多个命令的功能。通过事务，Redis 能够保证一系列命令按顺序执行而不被其他客户端的命令打断。尽管与传统数据库中的事务概念相比，Redis 的事务功能较为简单，但在某些场景下非常有用。")]),s._v(" "),a("h3",{attrs:{id:"_1-redis事务的基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-redis事务的基本概念"}},[s._v("#")]),s._v(" 1. "),a("strong",[s._v("Redis事务的基本概念")])]),s._v(" "),a("p",[s._v("Redis 中的事务由以下几个主要步骤组成：")]),s._v(" "),a("ol",[a("li",[a("strong",[s._v("开启事务")]),s._v("：使用 "),a("code",[s._v("MULTI")]),s._v(" 命令开启一个事务。之后的命令会被逐一入队，但不会立即执行。")]),s._v(" "),a("li",[a("strong",[s._v("入队命令")]),s._v("：事务内的所有命令都会被入队，而不是立即执行。")]),s._v(" "),a("li",[a("strong",[s._v("执行事务")]),s._v("：使用 "),a("code",[s._v("EXEC")]),s._v(" 命令提交事务，所有入队的命令会按顺序执行。")]),s._v(" "),a("li",[a("strong",[s._v("取消事务")]),s._v("：如果在事务执行之前，发现有问题，可以使用 "),a("code",[s._v("DISCARD")]),s._v(" 命令取消事务，清空命令队列。")])]),s._v(" "),a("h4",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("MULTI\nSET key1 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value1"')]),s._v("\nINCR counter\nEXEC\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("在这个示例中，"),a("code",[s._v('SET key1 "value1"')]),s._v(" 和 "),a("code",[s._v("INCR counter")]),s._v(" 两个命令会被顺序入队，直到 "),a("code",[s._v("EXEC")]),s._v(" 命令执行时，这些命令才会按顺序执行。")]),s._v(" "),a("h3",{attrs:{id:"_2-redis事务的特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-redis事务的特性"}},[s._v("#")]),s._v(" 2. "),a("strong",[s._v("Redis事务的特性")])]),s._v(" "),a("h4",{attrs:{id:"_1-单一性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-单一性"}},[s._v("#")]),s._v(" 1. "),a("strong",[s._v("单一性")]),s._v("：")]),s._v(" "),a("p",[s._v("Redis 事务没有隔离级别的概念，所有命令要么全部执行，要么一个也不执行。因此，Redis 事务要么成功，要么失败，不存在部分成功的情况。")]),s._v(" "),a("h4",{attrs:{id:"_2-事务的非原子性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-事务的非原子性"}},[s._v("#")]),s._v(" 2. "),a("strong",[s._v("事务的非原子性")]),s._v("：")]),s._v(" "),a("p",[s._v("虽然 Redis 在事务中保证命令的顺序执行，但并不能保证整个事务是原子的。每个命令是独立执行的，因此某些命令可能成功，而其他命令可能失败（如命令语法错误、数据类型错误等），而且 Redis 不会在事务中遇到错误时自动回滚已执行的命令。")]),s._v(" "),a("h4",{attrs:{id:"_3-乐观锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-乐观锁"}},[s._v("#")]),s._v(" 3. "),a("strong",[s._v("乐观锁")]),s._v("：")]),s._v(" "),a("p",[s._v("Redis 支持 "),a("code",[s._v("WATCH")]),s._v(" 命令，可以在事务开始前监视一个或多个键。如果在事务执行前这些键被其他客户端修改，事务将被中止，不会执行 "),a("code",[s._v("EXEC")]),s._v(" 中的命令。这种机制被称为“乐观锁”。")]),s._v(" "),a("h3",{attrs:{id:"_3-redis事务的执行过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-redis事务的执行过程"}},[s._v("#")]),s._v(" 3. "),a("strong",[s._v("Redis事务的执行过程")])]),s._v(" "),a("ol",[a("li",[a("strong",[s._v("MULTI")]),s._v("：开启事务。所有后续命令会被放入一个队列中，而不会立即执行。")]),s._v(" "),a("li",[a("strong",[s._v("命令入队")]),s._v("：事务中的每个命令都会依次入队。")]),s._v(" "),a("li",[a("strong",[s._v("WATCH")]),s._v("（可选）：在执行 "),a("code",[s._v("EXEC")]),s._v(" 之前，监视一个或多个键。如果这些键在事务执行前发生了变化，事务将被取消。")]),s._v(" "),a("li",[a("strong",[s._v("EXEC")]),s._v("：提交事务，Redis 按顺序执行事务队列中的所有命令。如果有 "),a("code",[s._v("WATCH")]),s._v("，那么只有在监视的键未被修改的情况下才会执行。")]),s._v(" "),a("li",[a("strong",[s._v("DISCARD")]),s._v("：如果需要取消事务，可以使用 "),a("code",[s._v("DISCARD")]),s._v(" 命令，清空事务队列，并取消 "),a("code",[s._v("WATCH")]),s._v("。")])]),s._v(" "),a("h3",{attrs:{id:"_4-redis事务的局限性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-redis事务的局限性"}},[s._v("#")]),s._v(" 4. "),a("strong",[s._v("Redis事务的局限性")])]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("没有回滚机制")]),s._v("：如果事务中的某个命令失败，Redis 不会自动回滚已执行的命令。例如，在执行 "),a("code",[s._v("INCR key")]),s._v(" 时，如果键的类型不是整数，该命令将失败，但之前的命令仍会生效。")]),s._v(" "),a("li",[a("strong",[s._v("没有隔离级别")]),s._v("：传统数据库的事务有多个隔离级别（如读未提交、读已提交、可重复读、串行化），但 Redis 没有隔离级别的概念。这意味着事务中的命令仍然可能受到其他命令的影响。")]),s._v(" "),a("li",[a("strong",[s._v("错误处理")]),s._v("：由于 Redis 事务无法回滚，一旦事务执行，所有入队的命令将按照顺序执行，并且一旦某个命令出错，后续命令仍然会继续执行。")])]),s._v(" "),a("h3",{attrs:{id:"_5-事务的典型应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-事务的典型应用场景"}},[s._v("#")]),s._v(" 5. "),a("strong",[s._v("事务的典型应用场景")])]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("乐观锁控制的并发更新")]),s._v("：利用 "),a("code",[s._v("WATCH")]),s._v(" 和事务，可以避免并发更新导致的数据不一致问题。")]),s._v(" "),a("li",[a("strong",[s._v("批量操作")]),s._v("：将多个命令作为一个批次执行，确保这些命令按顺序执行且不被打断。")]),s._v(" "),a("li",[a("strong",[s._v("简单的原子操作组合")]),s._v("：在一些需要原子性组合操作的场景中，事务可以确保多个操作的顺序性。")])]),s._v(" "),a("h4",{attrs:{id:"示例-使用-watch-实现乐观锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-使用-watch-实现乐观锁"}},[s._v("#")]),s._v(" 示例：使用 "),a("code",[s._v("WATCH")]),s._v(" 实现乐观锁")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("WATCH balance\nval "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" GET balance\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    MULTI\n    DECR balance "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n    INCR purchase_count\n    EXEC\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    UNWATCH\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# handle error")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("在这个例子中，"),a("code",[s._v("WATCH balance")]),s._v(" 监视 "),a("code",[s._v("balance")]),s._v(" 键。如果 "),a("code",[s._v("balance")]),s._v(" 在事务提交之前被其他客户端修改，"),a("code",[s._v("EXEC")]),s._v(" 将不会执行，事务将被中止。")]),s._v(" "),a("h3",{attrs:{id:"_6-redis事务与传统数据库事务的比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-redis事务与传统数据库事务的比较"}},[s._v("#")]),s._v(" 6. "),a("strong",[s._v("Redis事务与传统数据库事务的比较")])]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("原子性")]),s._v("：传统数据库事务是原子的，要么全部执行，要么全部回滚；而 Redis 事务无法回滚，只能确保命令顺序执行。")]),s._v(" "),a("li",[a("strong",[s._v("隔离性")]),s._v("：传统数据库提供了不同的隔离级别，Redis 没有隔离级别的概念，可能导致“脏读”或“不可重复读”的情况。")]),s._v(" "),a("li",[a("strong",[s._v("一致性")]),s._v("：Redis 通过 "),a("code",[s._v("WATCH")]),s._v(" 提供类似于乐观锁的机制，确保在多客户端环境下的一致性。")])]),s._v(" "),a("p",[s._v("总结来说，Redis 的事务功能虽然简单，但在某些需要顺序执行多个命令或保证数据一致性的场景中仍然非常有用。根据具体业务需求，可以结合 "),a("code",[s._v("WATCH")]),s._v(" 等机制来提高事务的可靠性。")])])}),[],!1,null,null,null);a.default=v.exports}}]);