(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{436:function(s,_,i){"use strict";i.r(_);var e=i(4),v=Object(e.a)({},(function(){var s=this,_=s._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[_("p",[s._v("以下是Redis学习大纲，专门为分布式存储开发人员设计，以帮助你系统地掌握Redis的核心概念和应用：")]),s._v(" "),_("h3",{attrs:{id:"_1-redis基础"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-redis基础"}},[s._v("#")]),s._v(" 1. "),_("strong",[s._v("Redis基础")])]),s._v(" "),_("ul",[_("li",[s._v("Redis简介：历史、特性、应用场景")]),s._v(" "),_("li",[s._v("Redis数据类型：字符串(String)、列表(List)、集合(Set)、有序集合(Sorted Set)、哈希(Hash)")]),s._v(" "),_("li",[s._v("Redis命令：基本的增删改查操作")]),s._v(" "),_("li",[s._v("持久化机制：RDB、AOF")])]),s._v(" "),_("h3",{attrs:{id:"_2-高级数据结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-高级数据结构"}},[s._v("#")]),s._v(" 2. "),_("strong",[s._v("高级数据结构")])]),s._v(" "),_("ul",[_("li",[s._v("HyperLogLog：基数估算")]),s._v(" "),_("li",[s._v("Bitmaps：位图操作")]),s._v(" "),_("li",[s._v("Geospatial：地理位置相关操作")])]),s._v(" "),_("h3",{attrs:{id:"_3-redis事务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-redis事务"}},[s._v("#")]),s._v(" 3. "),_("strong",[s._v("Redis事务")])]),s._v(" "),_("ul",[_("li",[s._v("Redis事务的基本概念：MULTI、EXEC、WATCH")]),s._v(" "),_("li",[s._v("事务的实现及局限性")])]),s._v(" "),_("h3",{attrs:{id:"_4-redis脚本"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-redis脚本"}},[s._v("#")]),s._v(" 4. "),_("strong",[s._v("Redis脚本")])]),s._v(" "),_("ul",[_("li",[s._v("Lua脚本支持")]),s._v(" "),_("li",[s._v("Redis与Lua的结合：使用EVAL和EVALSHA执行Lua脚本")]),s._v(" "),_("li",[s._v("脚本在分布式环境中的应用")])]),s._v(" "),_("h3",{attrs:{id:"_5-redis高可用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-redis高可用"}},[s._v("#")]),s._v(" 5. "),_("strong",[s._v("Redis高可用")])]),s._v(" "),_("ul",[_("li",[s._v("Redis复制：主从复制(Master-Slave Replication)")]),s._v(" "),_("li",[s._v("Redis Sentinel：监控、自动故障转移和通知")]),s._v(" "),_("li",[s._v("Redis Cluster：分片、分区及节点通信")])]),s._v(" "),_("h3",{attrs:{id:"_6-redis性能优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-redis性能优化"}},[s._v("#")]),s._v(" 6. "),_("strong",[s._v("Redis性能优化")])]),s._v(" "),_("ul",[_("li",[s._v("内存优化：内存模型、内存使用分析、Redis内存管理策略")]),s._v(" "),_("li",[s._v("查询优化：Pipeline、事务、连接池")]),s._v(" "),_("li",[s._v("持久化策略优化：RDB和AOF的配置与调优")]),s._v(" "),_("li",[s._v("Redis配置文件优化")])]),s._v(" "),_("h3",{attrs:{id:"_7-redis分布式锁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-redis分布式锁"}},[s._v("#")]),s._v(" 7. "),_("strong",[s._v("Redis分布式锁")])]),s._v(" "),_("ul",[_("li",[s._v("实现分布式锁的原理")]),s._v(" "),_("li",[s._v("Redlock算法的深入理解及实现")])]),s._v(" "),_("h3",{attrs:{id:"_8-redis与分布式系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-redis与分布式系统"}},[s._v("#")]),s._v(" 8. "),_("strong",[s._v("Redis与分布式系统")])]),s._v(" "),_("ul",[_("li",[s._v("Redis在分布式系统中的应用场景")]),s._v(" "),_("li",[s._v("Redis在分布式存储中的角色：缓存层、消息队列、会话管理")]),s._v(" "),_("li",[s._v("Redis持久化与CAP理论")])]),s._v(" "),_("h3",{attrs:{id:"_9-redis与其他存储系统的比较"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-redis与其他存储系统的比较"}},[s._v("#")]),s._v(" 9. "),_("strong",[s._v("Redis与其他存储系统的比较")])]),s._v(" "),_("ul",[_("li",[s._v("Redis vs Memcached")]),s._v(" "),_("li",[s._v("Redis与关系型数据库的对比：使用场景、性能、架构")]),s._v(" "),_("li",[s._v("Redis与其他NoSQL数据库的对比（如Cassandra、MongoDB）")])]),s._v(" "),_("h3",{attrs:{id:"_10-redis安全性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_10-redis安全性"}},[s._v("#")]),s._v(" 10. "),_("strong",[s._v("Redis安全性")])]),s._v(" "),_("ul",[_("li",[s._v("Redis的安全模型：用户认证、ACL")]),s._v(" "),_("li",[s._v("防火墙配置、数据加密、传输加密")])]),s._v(" "),_("h3",{attrs:{id:"_11-redis运维与监控"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_11-redis运维与监控"}},[s._v("#")]),s._v(" 11. "),_("strong",[s._v("Redis运维与监控")])]),s._v(" "),_("ul",[_("li",[s._v("Redis的监控工具：Redis-cli、Redis-stat、Redis-exporter")]),s._v(" "),_("li",[s._v("性能监控指标：QPS、内存使用率、连接数等")]),s._v(" "),_("li",[s._v("故障排查：常见错误及处理方法")])]),s._v(" "),_("h3",{attrs:{id:"_12-redis实战项目"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_12-redis实战项目"}},[s._v("#")]),s._v(" 12. "),_("strong",[s._v("Redis实战项目")])]),s._v(" "),_("ul",[_("li",[s._v("实现一个简单的Redis缓存层")]),s._v(" "),_("li",[s._v("构建一个高可用的Redis集群")]),s._v(" "),_("li",[s._v("基于Redis实现分布式锁系统")])]),s._v(" "),_("h3",{attrs:{id:"_13-redis前沿与社区"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_13-redis前沿与社区"}},[s._v("#")]),s._v(" 13. "),_("strong",[s._v("Redis前沿与社区")])]),s._v(" "),_("ul",[_("li",[s._v("Redis 7的新特性")]),s._v(" "),_("li",[s._v("Redis Modules：第三方扩展模块")]),s._v(" "),_("li",[s._v("Redis社区资源：官方文档、博客、会议")])]),s._v(" "),_("p",[s._v("你可以根据你的时间安排和兴趣点，逐步深入学习。Redis虽然上手容易，但涉及的领域广泛，特别是与分布式系统结合时，有很多深度内容值得研究。")])])}),[],!1,null,null,null);_.default=v.exports}}]);