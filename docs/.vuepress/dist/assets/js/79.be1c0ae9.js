(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{433:function(_,v,t){"use strict";t.r(v);var r=t(4),e=Object(r.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("blockquote",[v("p",[v("strong",[_._v("DAOS（Distributed Asynchronous Object Storage）")]),_._v(" 是一种高性能的分布式存储系统，专门设计用于处理大规模的存储需求，尤其是在高性能计算（HPC）环境中。DAOS 的架构由多个组件构成，这些组件共同工作以实现高效的数据存储、访问和管理。")])]),_._v(" "),v("p",[_._v("DAOS 包括一下 主要组件：")]),_._v(" "),v("h3",{attrs:{id:"_1-daos-server"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-daos-server"}},[_._v("#")]),_._v(" 1. "),v("strong",[_._v("DAOS Server")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("作用")]),_._v("：DAOS Server 是运行在存储节点上的核心服务，负责处理客户端请求并管理存储设备（如 NVMe SSD）。每个 DAOS Server 负责直接与物理存储介质交互，同时执行数据冗余、复制和故障恢复等操作。")]),_._v(" "),v("li",[v("strong",[_._v("功能")]),_._v("：\n"),v("ul",[v("li",[_._v("管理存储资源（如 NVMe 和 SCM）。")]),_._v(" "),v("li",[_._v("处理客户端的数据请求。")]),_._v(" "),v("li",[_._v("管理池（Storage Pools）的元数据和对象的存储位置。")]),_._v(" "),v("li",[_._v("支持多线程并发操作以提高性能。")])])])]),_._v(" "),v("h3",{attrs:{id:"_2-daos-client"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-daos-client"}},[_._v("#")]),_._v(" 2. "),v("strong",[_._v("DAOS Client")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("作用")]),_._v("：DAOS Client 是运行在应用程序节点上的库，它为用户应用程序提供访问 DAOS 存储的接口。客户端库通过网络与 DAOS Server 进行通信。")]),_._v(" "),v("li",[v("strong",[_._v("功能")]),_._v("：\n"),v("ul",[v("li",[_._v("提供 POSIX、Key-Value 和对象存储等不同的接口，方便应用程序通过不同方式访问数据。")]),_._v(" "),v("li",[_._v("通过 RPC（Remote Procedure Call）与 DAOS Server 通信。")]),_._v(" "),v("li",[_._v("负责数据 I/O 操作的缓存、聚合和优化。")])])])]),_._v(" "),v("h3",{attrs:{id:"_3-storage-pools"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-storage-pools"}},[_._v("#")]),_._v(" 3. "),v("strong",[_._v("Storage Pools")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("作用")]),_._v("：存储池是 DAOS 中的一个逻辑存储区域。每个池由多个 DAOS Server 的存储设备组成，池可以根据需要进行扩展和缩减。存储池为不同的应用程序提供隔离的存储空间。")]),_._v(" "),v("li",[v("strong",[_._v("功能")]),_._v("：\n"),v("ul",[v("li",[_._v("管理与池相关的元数据和空间分配。")]),_._v(" "),v("li",[_._v("支持多租户环境，为不同的应用程序提供隔离的存储区域。")]),_._v(" "),v("li",[_._v("提供冗余和故障恢复机制，保证数据的高可用性和持久性。")])])])]),_._v(" "),v("h3",{attrs:{id:"_4-containers"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-containers"}},[_._v("#")]),_._v(" 4. "),v("strong",[_._v("Containers")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("作用")]),_._v("：容器是 DAOS 中存储对象的基本单元，它为一组相关数据（如文件集或数据集）提供存储空间。每个容器与存储池关联，但容器之间是独立的。")]),_._v(" "),v("li",[v("strong",[_._v("功能")]),_._v("：\n"),v("ul",[v("li",[_._v("存储应用程序数据和元数据。")]),_._v(" "),v("li",[_._v("提供数据一致性和版本控制。")]),_._v(" "),v("li",[_._v("支持不同的数据模型（如 POSIX 文件系统、对象存储、Key-Value 存储等）。")]),_._v(" "),v("li",[_._v("容器可以配置不同的性能和冗余策略，适应不同应用的需求。")])])])]),_._v(" "),v("h3",{attrs:{id:"_5-object-storage-model"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-object-storage-model"}},[_._v("#")]),_._v(" 5. "),v("strong",[_._v("Object Storage Model")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("作用")]),_._v("：DAOS 的对象存储模型用于存储非结构化数据，并通过分布式方式管理对象。对象可以存储在 DAOS 的存储池和容器中。")]),_._v(" "),v("li",[v("strong",[_._v("功能")]),_._v("：\n"),v("ul",[v("li",[_._v("支持多种对象类型，包括 Key-Value 对象、结构化对象和未结构化对象。")]),_._v(" "),v("li",[_._v("使用对象 ID 来唯一标识和访问数据。")]),_._v(" "),v("li",[_._v("对象被分块存储，并且可以在多个 DAOS Server 之间分布。")])])])]),_._v(" "),v("h3",{attrs:{id:"_6-scm-storage-class-memory"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-scm-storage-class-memory"}},[_._v("#")]),_._v(" 6. "),v("strong",[_._v("SCM (Storage Class Memory)")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("作用")]),_._v("：SCM（存储类内存）是一种新型的高性能非易失性内存，DAOS 使用 SCM 来存储关键的元数据和加速 I/O 操作。SCM 是比 NVMe 更快速的存储层，提供极低的延迟。")]),_._v(" "),v("li",[v("strong",[_._v("功能")]),_._v("：\n"),v("ul",[v("li",[_._v("存储元数据以及小的 I/O 请求。")]),_._v(" "),v("li",[_._v("提供低延迟的持久性存储，用于加速数据访问。")]),_._v(" "),v("li",[_._v("作为 NVMe SSD 存储的缓存，提升整体系统性能。")])])])]),_._v(" "),v("h3",{attrs:{id:"_7-nvme-non-volatile-memory-express"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-nvme-non-volatile-memory-express"}},[_._v("#")]),_._v(" 7. "),v("strong",[_._v("NVMe (Non-Volatile Memory Express)")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("作用")]),_._v("：NVMe SSD 是 DAOS 用于存储数据的高性能持久性存储介质，负责存储大量的数据对象和大块数据。")]),_._v(" "),v("li",[v("strong",[_._v("功能")]),_._v("：\n"),v("ul",[v("li",[_._v("处理大规模数据的存储和读取。")]),_._v(" "),v("li",[_._v("提供高吞吐量和低延迟的存储性能，特别适用于高性能计算和数据密集型应用。")]),_._v(" "),v("li",[_._v("与 SCM 结合使用，形成分层存储结构，提高数据访问的整体效率。")])])])]),_._v(" "),v("h3",{attrs:{id:"_8-control-plane-daos-control"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-control-plane-daos-control"}},[_._v("#")]),_._v(" 8. "),v("strong",[_._v("Control Plane (DAOS Control)")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("作用")]),_._v("：控制平面用于管理 DAOS 集群的整体运维和配置。它允许集群管理员配置、管理和监控 DAOS 集群中的资源，如存储池和节点。")]),_._v(" "),v("li",[v("strong",[_._v("功能")]),_._v("：\n"),v("ul",[v("li",[_._v("管理存储池的创建、扩展、缩小。")]),_._v(" "),v("li",[_._v("配置和监控 DAOS 集群的状态。")]),_._v(" "),v("li",[_._v("处理节点的启动、停止和故障恢复。")]),_._v(" "),v("li",[_._v("提供集群运维的自动化工具。")])])])]),_._v(" "),v("h3",{attrs:{id:"_9-placement-engine"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9-placement-engine"}},[_._v("#")]),_._v(" 9. "),v("strong",[_._v("Placement Engine")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("作用")]),_._v("：对象在 DAOS 中是通过一种智能的 "),v("strong",[_._v("Placement Engine（放置引擎）")]),_._v(" 进行分布的。放置引擎决定了数据对象在 DAOS Server 之间的分布方式，确保数据的负载均衡和高可用性。")]),_._v(" "),v("li",[v("strong",[_._v("功能")]),_._v("：\n"),v("ul",[v("li",[_._v("根据数据的大小、类型和访问模式，选择最优的数据分布策略。")]),_._v(" "),v("li",[_._v("保证数据冗余，提供高可用性和数据恢复能力。")]),_._v(" "),v("li",[_._v("在集群扩展或收缩时重新调整数据分布。")])])])]),_._v(" "),v("h3",{attrs:{id:"_10-fault-detection-and-recovery"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-fault-detection-and-recovery"}},[_._v("#")]),_._v(" 10. "),v("strong",[_._v("Fault Detection and Recovery")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("作用")]),_._v("：DAOS 集群具有内置的故障检测和恢复机制，能够自动检测存储节点的故障并进行修复，确保数据的高可用性和一致性。")]),_._v(" "),v("li",[v("strong",[_._v("功能")]),_._v("：\n"),v("ul",[v("li",[_._v("自动检测存储节点或设备的故障。")]),_._v(" "),v("li",[_._v("启动数据恢复过程，重新分配受影响的数据对象，避免数据丢失。")]),_._v(" "),v("li",[_._v("提供数据复制、纠删码等数据保护机制。")])])])]),_._v(" "),v("hr"),_._v(" "),v("h3",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" 总结：")]),_._v(" "),v("p",[_._v("DAOS 由多个组件构成，主要包括 "),v("strong",[_._v("DAOS Server")]),_._v(" 和 "),v("strong",[_._v("DAOS Client")]),_._v(" 负责数据存储和访问，"),v("strong",[_._v("Storage Pools")]),_._v(" 和 "),v("strong",[_._v("Containers")]),_._v(" 提供数据存储管理，"),v("strong",[_._v("SCM")]),_._v(" 和 "),v("strong",[_._v("NVMe")]),_._v(" 提供高性能存储介质，"),v("strong",[_._v("控制平面")]),_._v(" 和 "),v("strong",[_._v("放置引擎")]),_._v(" 负责集群管理与数据分布，"),v("strong",[_._v("故障检测与恢复")]),_._v(" 提供数据的高可用性和冗余保护。")]),_._v(" "),v("p",[_._v("这些组件协同工作，共同实现了 DAOS 在高性能计算和大规模存储需求中的高吞吐量、低延迟、可扩展性和高可用性。")])])}),[],!1,null,null,null);v.default=e.exports}}]);