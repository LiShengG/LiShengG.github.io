(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{433:function(_,v,s){"use strict";s.r(v);var t=s(4),l=Object(t.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("在使用 MySQL 和 Redis 的场景中，双写一致性问题指的是在数据更新时，如何确保 MySQL 和 Redis 中的数据保持一致。这种一致性问题在缓存更新和数据库更新操作之间的顺序和事务性处理上尤为关键。如果处理不当，可能会导致数据不一致的情况。以下是几种常见的策略和方法，用来确保 MySQL 和 Redis 之间的双写一致性。")]),_._v(" "),v("h3",{attrs:{id:"_1-延迟双删策略-delayed-double-delete"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-延迟双删策略-delayed-double-delete"}},[_._v("#")]),_._v(" 1. "),v("strong",[_._v("延迟双删策略（Delayed Double Delete）")])]),_._v(" "),v("p",[v("strong",[_._v("机制")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("在更新数据时，首先删除 Redis 中的缓存，然后更新 MySQL 中的数据库，最后再次删除 Redis 中的缓存。")])]),_._v(" "),v("p",[v("strong",[_._v("实现步骤")]),_._v(":")]),_._v(" "),v("ol",[v("li",[v("strong",[_._v("第一次删除 Redis 缓存")]),_._v(": 在更新 MySQL 数据之前，先删除 Redis 中对应的数据。")]),_._v(" "),v("li",[v("strong",[_._v("更新 MySQL 数据")]),_._v(": 在删除缓存之后，更新 MySQL 中的数据。")]),_._v(" "),v("li",[v("strong",[_._v("延迟删除 Redis 缓存")]),_._v(": 更新 MySQL 数据之后，等待一段时间（如 500ms），再删除一次 Redis 中的缓存。")])]),_._v(" "),v("p",[v("strong",[_._v("优点")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("避免了缓存和数据库的先后顺序问题，通过延迟删除的方式确保缓存数据的正确性。")])]),_._v(" "),v("p",[v("strong",[_._v("缺点")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("时间窗口的选择较为敏感，设置不当可能会导致在某些并发情况下仍然存在不一致问题。")]),_._v(" "),v("li",[_._v("增加了系统的复杂性，需要精心设计延迟时间。")])]),_._v(" "),v("h3",{attrs:{id:"_2-先更新数据库-再删除缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-先更新数据库-再删除缓存"}},[_._v("#")]),_._v(" 2. "),v("strong",[_._v("先更新数据库，再删除缓存")])]),_._v(" "),v("p",[v("strong",[_._v("机制")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("在数据更新时，先更新 MySQL 数据库，然后删除 Redis 中的缓存。")])]),_._v(" "),v("p",[v("strong",[_._v("实现步骤")]),_._v(":")]),_._v(" "),v("ol",[v("li",[v("strong",[_._v("更新 MySQL 数据")]),_._v(": 首先将新的数据写入 MySQL 数据库。")]),_._v(" "),v("li",[v("strong",[_._v("删除 Redis 缓存")]),_._v(": 在更新数据库成功后，删除 Redis 中对应的缓存。")])]),_._v(" "),v("p",[v("strong",[_._v("优点")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("简单易用，能够在大部分情况下保持一致性。")])]),_._v(" "),v("p",[v("strong",[_._v("缺点")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("存在并发问题：如果在数据库更新后但缓存删除之前，有新的请求访问了旧的缓存，可能会导致数据不一致。")]),_._v(" "),v("li",[_._v("若删除缓存失败或出现异常，可能会导致旧数据依然存在缓存中。")])]),_._v(" "),v("h3",{attrs:{id:"_3-先删除缓存-再更新数据库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-先删除缓存-再更新数据库"}},[_._v("#")]),_._v(" 3. "),v("strong",[_._v("先删除缓存，再更新数据库")])]),_._v(" "),v("p",[v("strong",[_._v("机制")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("在数据更新时，先删除 Redis 中的缓存，然后更新 MySQL 数据库。")])]),_._v(" "),v("p",[v("strong",[_._v("实现步骤")]),_._v(":")]),_._v(" "),v("ol",[v("li",[v("strong",[_._v("删除 Redis 缓存")]),_._v(": 在更新 MySQL 数据之前，先删除 Redis 中的缓存。")]),_._v(" "),v("li",[v("strong",[_._v("更新 MySQL 数据")]),_._v(": 删除缓存后，更新 MySQL 数据库中的记录。")])]),_._v(" "),v("p",[v("strong",[_._v("优点")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("避免了并发读写的问题，因为缓存在更新前已经被删除。")])]),_._v(" "),v("p",[v("strong",[_._v("缺点")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("如果删除缓存后，数据库更新失败，则会导致缓存没有数据，但数据库中有旧数据，可能引发数据不一致问题。")]),_._v(" "),v("li",[_._v("需要配合其他机制（如消息队列）来处理更新失败的场景。")])]),_._v(" "),v("h3",{attrs:{id:"_4-使用消息队列"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-使用消息队列"}},[_._v("#")]),_._v(" 4. "),v("strong",[_._v("使用消息队列")])]),_._v(" "),v("p",[v("strong",[_._v("机制")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("在更新 MySQL 数据后，将缓存更新的操作异步推送到消息队列中，由消费者来处理 Redis 的缓存更新或删除操作。")])]),_._v(" "),v("p",[v("strong",[_._v("实现步骤")]),_._v(":")]),_._v(" "),v("ol",[v("li",[v("strong",[_._v("更新 MySQL 数据")]),_._v(": 先更新 MySQL 数据。")]),_._v(" "),v("li",[v("strong",[_._v("发送消息到队列")]),_._v(": 数据库更新成功后，将缓存更新操作推送到消息队列中。")]),_._v(" "),v("li",[v("strong",[_._v("消费消息")]),_._v(": 消费者从队列中读取消息，执行 Redis 缓存的删除或更新操作。")])]),_._v(" "),v("p",[v("strong",[_._v("优点")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("异步处理，能够减轻主流程的压力，并确保数据库和缓存的一致性。")]),_._v(" "),v("li",[_._v("消息队列具有重试机制，可以确保缓存更新操作的最终一致性。")])]),_._v(" "),v("p",[v("strong",[_._v("缺点")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("系统复杂度增加，需要维护消息队列及其消费者。")]),_._v(" "),v("li",[_._v("存在一定的延迟，缓存更新的操作并不是实时的。")])]),_._v(" "),v("h3",{attrs:{id:"_5-分布式锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-分布式锁"}},[_._v("#")]),_._v(" 5. "),v("strong",[_._v("分布式锁")])]),_._v(" "),v("p",[v("strong",[_._v("机制")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("在更新数据库和缓存时，使用分布式锁确保同一时刻只有一个线程能够进行更新操作，从而避免并发带来的不一致性。")])]),_._v(" "),v("p",[v("strong",[_._v("实现步骤")]),_._v(":")]),_._v(" "),v("ol",[v("li",[v("strong",[_._v("获取分布式锁")]),_._v(": 在更新操作前，获取一个全局的分布式锁。")]),_._v(" "),v("li",[v("strong",[_._v("更新 MySQL 数据")]),_._v(": 在获取锁后，更新 MySQL 数据库。")]),_._v(" "),v("li",[v("strong",[_._v("删除或更新 Redis 缓存")]),_._v(": 更新数据库后，删除或更新 Redis 缓存。")]),_._v(" "),v("li",[v("strong",[_._v("释放分布式锁")]),_._v(": 完成操作后，释放分布式锁。")])]),_._v(" "),v("p",[v("strong",[_._v("优点")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("能够完全避免并发导致的缓存和数据库不一致问题。")])]),_._v(" "),v("p",[v("strong",[_._v("缺点")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("可能会导致性能瓶颈，尤其是在高并发场景下，锁的获取和释放会影响系统性能。")])]),_._v(" "),v("h3",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" "),v("strong",[_._v("总结")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("延迟双删策略")]),_._v(" 适用于多数场景，能够有效降低数据不一致的概率。")]),_._v(" "),v("li",[v("strong",[_._v("先删除缓存，再更新数据库")]),_._v(" 是比较直接的方案，但需要确保数据库更新的可靠性。")]),_._v(" "),v("li",[v("strong",[_._v("消息队列")]),_._v(" 适合对一致性要求较高但允许一定延迟的场景。")]),_._v(" "),v("li",[v("strong",[_._v("分布式锁")]),_._v(" 虽然能够提供强一致性保障，但在高并发场景下可能会带来性能问题。")])]),_._v(" "),v("p",[_._v("不同场景下，需要结合系统的实际需求和性能要求，选择最合适的方案来确保 MySQL 和 Redis 之间的双写一致性。")])])}),[],!1,null,null,null);v.default=l.exports}}]);