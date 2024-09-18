(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{447:function(_,v,t){"use strict";t.r(v);var s=t(4),r=Object(s.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("Redis 主从复制是 Redis 高可用性的重要基础之一。通过主从复制，Redis 可以实现数据的冗余备份、读写分离，以及在主节点发生故障时通过从节点进行数据恢复。以下是 Redis 主从复制的详细实现过程：")]),_._v(" "),v("h3",{attrs:{id:"_1-主从复制的基本概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-主从复制的基本概念"}},[_._v("#")]),_._v(" 1. "),v("strong",[_._v("主从复制的基本概念")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("主节点（Master）")]),_._v("：负责处理所有的写操作，并将数据同步到从节点。")]),_._v(" "),v("li",[v("strong",[_._v("从节点（Slave）")]),_._v("：负责接收主节点的数据更新，可以提供读操作，分担主节点的读压力。")]),_._v(" "),v("li",[v("strong",[_._v("一主多从")]),_._v("：一个主节点可以有多个从节点，从节点之间也可以相互复制，形成链式复制结构。")])]),_._v(" "),v("h3",{attrs:{id:"_2-主从复制的配置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-主从复制的配置"}},[_._v("#")]),_._v(" 2. "),v("strong",[_._v("主从复制的配置")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("配置从节点")]),_._v("：\n"),v("ul",[v("li",[_._v("在 "),v("code",[_._v("redis.conf")]),_._v(" 文件中，设置 "),v("code",[_._v("slaveof <masterip> <masterport>")]),_._v("，指定从节点应该复制哪个主节点的数据。")]),_._v(" "),v("li",[_._v("也可以在 Redis 启动后，通过命令行执行 "),v("code",[_._v("SLAVEOF <masterip> <masterport>")]),_._v(" 来动态设置从节点。")])])]),_._v(" "),v("li",[v("strong",[_._v("从节点的只读性")]),_._v("：\n"),v("ul",[v("li",[_._v("默认情况下，从节点是只读的，不允许执行写操作。这是为了保证数据一致性。")])])])]),_._v(" "),v("h3",{attrs:{id:"_3-复制的初始同步-initial-sync"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-复制的初始同步-initial-sync"}},[_._v("#")]),_._v(" 3. "),v("strong",[_._v("复制的初始同步（Initial Sync）")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("触发条件")]),_._v("：当从节点首次连接主节点，或者主从连接丢失后重新连接时，会触发初始同步。")]),_._v(" "),v("li",[v("strong",[_._v("步骤")]),_._v("：\n"),v("ol",[v("li",[v("strong",[_._v("RDB文件传输")]),_._v("：从节点向主节点发送 "),v("code",[_._v("PSYNC")]),_._v(" 命令请求同步，主节点会创建一个 RDB 快照，并将快照文件发送给从节点。从节点接收并加载 RDB 文件，更新本地数据库到主节点的状态。")]),_._v(" "),v("li",[v("strong",[_._v("同步增量数据")]),_._v("：在 RDB 文件传输和加载的过程中，主节点接收到的写操作会记录在复制积压缓冲区中。当从节点加载完 RDB 文件后，主节点会将缓冲区中的增量数据发送给从节点，从节点应用这些数据，使得自身的数据状态与主节点保持一致。")])])])]),_._v(" "),v("h3",{attrs:{id:"_4-增量复制-incremental-sync"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-增量复制-incremental-sync"}},[_._v("#")]),_._v(" 4. "),v("strong",[_._v("增量复制（Incremental Sync）")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("工作原理")]),_._v("：\n"),v("ul",[v("li",[_._v("在初始同步完成后，主节点的所有写操作会被异步地复制到从节点。从节点接收这些写操作并应用到自身的数据库中。")]),_._v(" "),v("li",[_._v("增量复制是异步的，这意味着主节点在发送写操作给从节点后，不必等待从节点的确认即可继续处理其他请求。")])])])]),_._v(" "),v("h3",{attrs:{id:"_5-心跳检测与自动重连"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-心跳检测与自动重连"}},[_._v("#")]),_._v(" 5. "),v("strong",[_._v("心跳检测与自动重连")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("心跳机制")]),_._v("：\n"),v("ul",[v("li",[_._v("从节点会定期向主节点发送 "),v("code",[_._v("PING")]),_._v(" 命令，以确认连接的健康状态。")]),_._v(" "),v("li",[_._v("主节点会向从节点发送 "),v("code",[_._v("PING")]),_._v(" 命令，并期望从节点回复 "),v("code",[_._v("PONG")]),_._v("，以检测从节点的状态。")])])]),_._v(" "),v("li",[v("strong",[_._v("自动重连")]),_._v("：\n"),v("ul",[v("li",[_._v("如果主从连接断开，从节点会不断尝试重新连接主节点。当连接恢复后，从节点会通过 "),v("code",[_._v("PSYNC")]),_._v(" 命令请求同步，继续接收主节点的更新。")])])])]),_._v(" "),v("h3",{attrs:{id:"_6-部分重同步-partial-resynchronization"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-部分重同步-partial-resynchronization"}},[_._v("#")]),_._v(" 6. "),v("strong",[_._v("部分重同步（Partial Resynchronization）")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("积压缓冲区")]),_._v("：\n"),v("ul",[v("li",[_._v("主节点维护一个固定大小的复制积压缓冲区，用于存储最近一段时间内的写操作。当从节点与主节点的连接短暂中断后，如果缓冲区中的数据足够覆盖断开的时间窗口，从节点可以请求部分重同步。")])])]),_._v(" "),v("li",[v("strong",[_._v("部分重同步的实现")]),_._v("：\n"),v("ul",[v("li",[_._v("从节点在重新连接主节点时，通过 "),v("code",[_._v("PSYNC")]),_._v(" 命令发送上次复制的偏移量。如果主节点的积压缓冲区包含从该偏移量开始的所有更新，则主节点仅需发送这些更新，从节点可以快速恢复与主节点的数据同步。")])])])]),_._v(" "),v("h3",{attrs:{id:"_7-数据一致性与延迟"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-数据一致性与延迟"}},[_._v("#")]),_._v(" 7. "),v("strong",[_._v("数据一致性与延迟")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("一致性保证")]),_._v("：\n"),v("ul",[v("li",[_._v("由于复制是异步进行的，存在主节点和从节点数据短暂不一致的情况。为了确保某些场景下的强一致性，可以使用 "),v("code",[_._v("WAIT")]),_._v(" 命令，强制主节点等待至少一定数量的从节点确认数据写入。")])])]),_._v(" "),v("li",[v("strong",[_._v("复制延迟")]),_._v("：\n"),v("ul",[v("li",[_._v("在高负载或者网络延迟较大的情况下，从节点可能会落后主节点一定的时间。这种复制延迟可以通过监控和优化网络、调整从节点配置来减少。")])])])]),_._v(" "),v("h3",{attrs:{id:"_8-故障转移与恢复"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-故障转移与恢复"}},[_._v("#")]),_._v(" 8. "),v("strong",[_._v("故障转移与恢复")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("手动故障转移")]),_._v("：\n"),v("ul",[v("li",[_._v("如果主节点发生故障，可以手动将某个从节点提升为主节点。提升后，其他从节点应重新配置为从属于新的主节点。")])])]),_._v(" "),v("li",[v("strong",[_._v("自动故障转移")]),_._v("：\n"),v("ul",[v("li",[_._v("结合 Redis Sentinel，可以实现自动故障转移。当哨兵检测到主节点故障时，会自动选举一个从节点作为新的主节点，并更新其他从节点的配置。")]),_._v(" "),v("li",[_._v("Redis Sentinel 是一个独立的进程，与 Redis 服务器进程是分开的。每个 Sentinel 实例都是一个单独运行的进程，负责监控指定的 Redis 主节点和从节点的健康状态，协调自动故障转移，以及向客户端提供主节点的最新信息。在部署时，通常会运行多个 Sentinel 实例，形成一个集群，这样可以提高系统的可靠性和容错能力。每个 Sentinel 实例独立地监控 Redis 实例，但它们之间通过发布/订阅机制进行通信，共同决定主节点的健康状态和是否需要执行故障转移。")])])])]),_._v(" "),v("h3",{attrs:{id:"_9-主从复制的高级配置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9-主从复制的高级配置"}},[_._v("#")]),_._v(" 9. "),v("strong",[_._v("主从复制的高级配置")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("延迟复制（Replica Delays）")]),_._v("：可以配置从节点延迟一定时间接受主节点的更新，用于防止误操作导致的数据丢失。")]),_._v(" "),v("li",[v("strong",[_._v("链式复制（Chained Replication）")]),_._v("：从节点可以从另一个从节点复制数据，而不是直接从主节点，这样可以减轻主节点的负担。")]),_._v(" "),v("li",[v("strong",[_._v("只读从节点")]),_._v("：可以配置从节点只接受读操作，不允许写操作，以确保从节点的数据不被修改。")])]),_._v(" "),v("p",[_._v("通过以上机制，Redis 主从复制可以实现数据的冗余备份、读写分离，并为高可用性提供了基础保障。")])])}),[],!1,null,null,null);v.default=r.exports}}]);