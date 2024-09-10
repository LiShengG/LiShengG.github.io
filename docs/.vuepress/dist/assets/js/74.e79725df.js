(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{431:function(_,v,t){"use strict";t.r(v);var e=t(4),r=Object(e.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h3",{attrs:{id:"ceph系统架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ceph系统架构"}},[_._v("#")]),_._v(" ceph系统架构")]),_._v(" "),v("p",[_._v("Ceph文件系统从设计概念上可以拆分为四个部分，即客户端(Clients)、元数据服务器(Metadata Servers)、对象存储集群(Object Storage Cluster)和集群监控(Cluster Monitor) 。")]),_._v(" "),v("ol",[v("li",[v("p",[v("strong",[_._v("客户端 (Clients)")]),_._v(":")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("描述")]),_._v(": Ceph 客户端是用户和应用程序与 Ceph 集群交互的接口。客户端可以是访问 Ceph 的块存储、文件存储或对象存储的任何应用程序或服务。")]),_._v(" "),v("li",[v("strong",[_._v("功能")]),_._v(":\n"),v("ul",[v("li",[v("strong",[_._v("CephFS 客户端")]),_._v(": 提供 POSIX 兼容的文件系统接口，可以通过内核模块或 FUSE（Filesystem in Userspace）挂载 Ceph 文件系统。")]),_._v(" "),v("li",[v("strong",[_._v("RBD 客户端")]),_._v(": 提供 RADOS 块设备的接口，支持块存储的创建、删除、快照和克隆等操作。")]),_._v(" "),v("li",[v("strong",[_._v("RADOS Gateway (RGW)")]),_._v(": 提供对象存储服务的 HTTP RESTful 接口，兼容 Amazon S3 和 OpenStack Swift API，允许用户通过 REST API 存储和检索对象。")])])])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("元数据服务器 (Metadata Servers, MDS)")]),_._v(":")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("描述")]),_._v(": Ceph 的元数据服务器负责管理 Ceph 文件系统（CephFS）的元数据，包括目录结构、文件名、文件属性（权限、时间戳等）。")]),_._v(" "),v("li",[v("strong",[_._v("功能")]),_._v(":\n"),v("ul",[v("li",[v("strong",[_._v("管理元数据")]),_._v(": 处理 CephFS 的元数据操作，如创建和删除目录、打开和关闭文件、权限检查等。")]),_._v(" "),v("li",[v("strong",[_._v("负载分布")]),_._v(": 使用动态子树分区（Dynamic Subtree Partitioning）将元数据负载分布在多个 MDS 实例上，从而优化性能和扩展性。")]),_._v(" "),v("li",[v("strong",[_._v("元数据缓存")]),_._v(": 客户端与 MDS 之间建立会话，客户端缓存常用的元数据信息以减少MDS负载。")])])])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("对象存储集群 (Object Storage Cluster, OSD Cluster)")]),_._v(":")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("描述")]),_._v(": 对象存储集群是 Ceph 的核心存储层，由多个对象存储守护进程（OSD）组成。每个 OSD 通常对应一个物理存储设备（如硬盘或 SSD）。")]),_._v(" "),v("li",[v("strong",[_._v("功能")]),_._v(":\n"),v("ul",[v("li",[v("strong",[_._v("数据存储")]),_._v(": 存储实际的数据对象，这些对象可能是文件系统块、块设备数据块或对象存储对象。")]),_._v(" "),v("li",[v("strong",[_._v("数据复制和恢复")]),_._v(": 使用 CRUSH 算法进行数据的分布和复制，确保数据的可靠性和可用性。OSD 负责数据的复制、恢复和重新平衡。")]),_._v(" "),v("li",[v("strong",[_._v("故障检测和报告")]),_._v(": OSD 守护进程检测集群中的故障并向 Ceph Monitor 报告，参与集群内的数据恢复和再平衡操作。")])])])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("集群监控 (Cluster Monitor, MON)")]),_._v(":")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("描述")]),_._v(": Ceph Monitor 是负责维护集群状态的组件，包括监控集群的健康状态、管理认证和访问控制等。")]),_._v(" "),v("li",[v("strong",[_._v("功能")]),_._v(":\n"),v("ul",[v("li",[v("strong",[_._v("维护集群状态地图（Cluster Maps）")]),_._v(": 包括 MON Map、OSD Map、PG Map、CRUSH Map 等，确保 Ceph 集群中的所有客户端和守护进程都能访问一致的集群状态。")]),_._v(" "),v("li",[v("strong",[_._v("集群管理")]),_._v(": 使用 Paxos 协议实现分布式一致性，确保在集群状态变化（如 OSD 的加入或退出）时的可靠性和一致性。")]),_._v(" "),v("li",[v("strong",[_._v("认证和授权")]),_._v(": 管理 Ceph 集群的认证密钥和授权策略，确保客户端和守护进程的安全交互。")])])])])])]),_._v(" "),v("p",[_._v("在实际运行中，Clients使用Metadata Server执行元数据操作(识别和定位数据存储位置)，Metadata Server负责管理已存储数据的位置和即将存储数据的位置，需要注意的是集群元数据也存储在存储集群中 ，而实际的 File l/O操作发生在Clients 与Object Storage Cluster之间，即Ceph文件系统实现了元数据与数据之间的分离，Clients端先与Metadata Server交互并进行元数据操作以获取数据存储位置信息，之后再与Storage Cluster交互进行实际的数据存取操作。在这种元数据与数据分离的设计中，高层次的POSIX功能，如对文件的打开、关闭和重命名，由Metadata Servers进行管理，而POSIX功能，如读和写(File l/0)，则直接由Object Storage Cluster进行管理。")]),_._v(" "),v("h2",{attrs:{id:"ceph写数据流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ceph写数据流程"}},[_._v("#")]),_._v(" ceph写数据流程")]),_._v(" "),v("p",[_._v("Ceph 写入一个大数据时，涉及多个组件的协同工作，包括客户端、Ceph Monitor (MON)、对象存储守护进程 (OSD) 和 Ceph 元数据服务器 (MDS)（如果是 CephFS）。以下是从各个组件协同交互角度分析 Ceph 写入大数据的内部处理流程：")]),_._v(" "),v("h3",{attrs:{id:"_1-客户端发起写入请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-客户端发起写入请求"}},[_._v("#")]),_._v(" 1. 客户端发起写入请求")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("客户端（Client）")]),_._v("：在 Ceph 中，客户端可以是 Ceph 文件系统 (CephFS)、RADOS 块设备 (RBD)、或者 RADOS Gateway (RGW) 对象存储的使用者。对于大数据的写入，假设客户端使用 CephFS。")])]),_._v(" "),v("h3",{attrs:{id:"_2-cephfs-写入大数据的流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-cephfs-写入大数据的流程"}},[_._v("#")]),_._v(" 2. CephFS 写入大数据的流程")]),_._v(" "),v("ol",[v("li",[v("p",[v("strong",[_._v("获取元数据（Ceph Metadata Server, MDS）")]),_._v(":")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("客户端请求元数据")]),_._v(": 客户端首先向 Ceph Metadata Server (MDS) 请求目标文件的元数据。如果文件不存在，则需要创建文件，并由 MDS 分配相应的inode和初始元数据。")]),_._v(" "),v("li",[v("strong",[_._v("元数据分布")]),_._v(": MDS 负责管理文件系统的元数据（如目录结构、文件名、权限等），并将这些信息提供给客户端。MDS 使用动态子树分区来分布元数据负载。")]),_._v(" "),v("li",[v("strong",[_._v("元数据缓存")]),_._v(": MDS 会将元数据返回给客户端，客户端将这些元数据信息缓存起来以减少后续的 MDS 访问。")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("数据切分和对象映射（Client 和 RADOS）")]),_._v(":")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("数据切分")]),_._v(": Ceph 客户端将大数据分割成更小的对象（通常是 4MB 或更大的块）。这使得 Ceph 可以更高效地分布和管理数据。")]),_._v(" "),v("li",[v("strong",[_._v("对象映射")]),_._v(": 客户端使用 CRUSH (Controlled Replication Under Scalable Hashing) 算法计算每个数据对象应该存储到哪些 OSD 上。CRUSH 算法考虑了集群拓扑和数据分布策略来确定对象的存放位置，而不依赖于集中式元数据服务器。")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("对象写入（Object Storage Daemon, OSD）")]),_._v(":")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("写入操作启动")]),_._v(": 客户端将数据对象发送到目标 OSD。OSD 接收到写入请求后，将数据临时存储在其本地缓存（通常是内存或 SSD 日志）中以确保快速响应。")]),_._v(" "),v("li",[v("strong",[_._v("数据复制")]),_._v(": 根据 Ceph 的配置（例如三副本），目标 OSD 会同步地将数据对象复制到另外的 OSD 副本。OSD 之间的复制过程由 CRUSH 映射和 PG（Placement Group）机制控制。")]),_._v(" "),v("li",[v("strong",[_._v("一致性和持久化")]),_._v(": 当所有副本的 OSD 都确认接收到数据后，它们将数据从临时缓存写入到其持久存储（如硬盘或 SSD）上，确保数据持久化。这时，主 OSD 会向客户端确认写入操作完成。")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("数据写入确认和完成")]),_._v(":")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("客户端确认")]),_._v(": 当主 OSD 接收到所有副本 OSD 的确认后，它向客户端返回成功的写入确认。")]),_._v(" "),v("li",[v("strong",[_._v("MDS 元数据更新")]),_._v(": 如果写入涉及文件大小或属性的变化，客户端会发送一个请求到 MDS，更新文件的元数据信息（如文件大小、修改时间等）。")]),_._v(" "),v("li",[v("strong",[_._v("MDS 日志记录")]),_._v(": MDS 可能会记录一些日志信息来确保元数据的一致性，并在必要时将这些信息持久化到 Ceph 集群中。")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("数据完整性和恢复（OSD 自愈机制）")]),_._v(":")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("健康监控")]),_._v(": Ceph Monitor (MON) 持续监控集群的健康状态，包括 OSD 的在线/离线状态。当某个 OSD 失效时，MON 会更新 OSD Map 并通知集群。")]),_._v(" "),v("li",[v("strong",[_._v("数据恢复")]),_._v(": 如果某个 OSD 失效，Ceph 的自愈机制会自动启动。CRUSH 算法重新计算需要恢复的对象，并将其重新复制到其他 OSD 上，以确保数据的高可用性和完整性。")])])])]),_._v(" "),v("h3",{attrs:{id:"_3-各个组件的协同工作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-各个组件的协同工作"}},[_._v("#")]),_._v(" 3. 各个组件的协同工作")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("客户端")]),_._v(": 负责数据切分和 CRUSH 映射，决定数据的写入位置，并向 OSD 发起写入请求。")]),_._v(" "),v("li",[v("strong",[_._v("Ceph Monitor (MON)")]),_._v(": 负责维护集群的全局状态，包括 OSD Map、集群健康状况等。它不直接参与数据写入，但提供集群的一致性和高可用性保障。")]),_._v(" "),v("li",[v("strong",[_._v("Ceph Metadata Server (MDS)")]),_._v(": 主要用于 CephFS，负责元数据管理，确保文件系统操作的高效性和一致性。")]),_._v(" "),v("li",[v("strong",[_._v("OSD（对象存储守护进程）")]),_._v(": 负责实际的数据存储、复制、恢复和数据一致性，直接处理客户端的数据写入请求。")]),_._v(" "),v("li",[v("strong",[_._v("CRUSH 算法")]),_._v(": 提供数据的去中心化分布策略，使得 Ceph 能够高效地在集群中放置和管理数据对象。")])]),_._v(" "),v("h2",{attrs:{id:"ceph读数据流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ceph读数据流程"}},[_._v("#")]),_._v(" ceph读数据流程")]),_._v(" "),v("p",[_._v("在 Ceph 中，读取数据的流程同样涉及多个组件的协同工作，包括客户端（Client）、Ceph Monitor (MON)、对象存储守护进程 (OSD) 和 Ceph 元数据服务器 (MDS)（如果是 CephFS）。以下是 Ceph 读取数据时的详细处理流程：")]),_._v(" "),v("h3",{attrs:{id:"_1-客户端发起读取请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-客户端发起读取请求"}},[_._v("#")]),_._v(" 1. 客户端发起读取请求")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("客户端（Client）")]),_._v("：读取请求可以来自不同的客户端接口，例如 Ceph 文件系统 (CephFS)、RADOS 块设备 (RBD)、或者 RADOS Gateway (RGW) 对象存储。我们假设客户端使用 CephFS 进行数据读取。")])]),_._v(" "),v("h3",{attrs:{id:"_2-cephfs-读取数据的流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-cephfs-读取数据的流程"}},[_._v("#")]),_._v(" 2. CephFS 读取数据的流程")]),_._v(" "),v("ol",[v("li",[v("p",[v("strong",[_._v("获取元数据（Ceph Metadata Server, MDS）")]),_._v(":")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("客户端请求元数据")]),_._v(": 当客户端需要读取文件中的数据时，首先向 Ceph Metadata Server (MDS) 请求目标文件的元数据。如果客户端缓存中已经有相关的元数据（比如文件的inode信息和文件在RADOS中的分布情况），则可以直接使用；否则需要向 MDS 进行请求。")]),_._v(" "),v("li",[v("strong",[_._v("元数据分布")]),_._v(": MDS 管理 CephFS 文件系统的元数据（如目录结构、文件名、权限等）。MDS 负责向客户端提供必要的元数据信息，使客户端知道如何定位数据对象。")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("数据对象定位（Client 和 RADOS）")]),_._v(":")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("对象映射")]),_._v(": 客户端根据从 MDS 获取的元数据信息，使用 CRUSH 算法计算数据对象的存储位置。CRUSH 算法考虑了集群拓扑和数据分布策略，帮助客户端计算出每个数据对象所在的 OSD。")]),_._v(" "),v("li",[v("strong",[_._v("计算数据位置")]),_._v(": Ceph 客户端确定数据对象所在的 Placement Group (PG)，然后使用 PG 来定位具体的 OSD。")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("向 OSD 发起读取请求（Object Storage Daemon, OSD）")]),_._v(":")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("读取请求")]),_._v(": 客户端直接向存储数据对象的 OSD 发起读取请求。由于客户端已经知道数据对象的位置，因此可以直接联系对应的 OSD。")]),_._v(" "),v("li",[v("strong",[_._v("主 OSD 处理请求")]),_._v(": 每个 PG 都有一个主 OSD（Primary OSD），它接收到读取请求后，会协调读取操作。如果主 OSD无法访问数据（例如硬盘问题），它会尝试从副本 OSD 读取。")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("数据返回客户端")]),_._v(":")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("读取数据块")]),_._v(": 主 OSD 读取数据块并将其返回给客户端。如果数据块损坏或丢失，Ceph 会尝试从副本 OSD 读取。")]),_._v(" "),v("li",[v("strong",[_._v("直接传输数据")]),_._v(": 如果主 OSD 可用且数据完好，读取数据会直接返回给客户端，客户端则接收数据并进行处理。")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("数据完整性和错误处理")]),_._v(":")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("数据校验")]),_._v(": 在读取数据时，Ceph 会进行数据校验（例如通过校验和）来确保数据的完整性。如果校验失败，Ceph 会尝试从其他副本 OSD 读取数据。")]),_._v(" "),v("li",[v("strong",[_._v("读取恢复")]),_._v(": 如果 OSD 上的数据不可用，Ceph 会利用其他副本 OSD 进行数据恢复，并且在后台将损坏的数据重新复制到新的 OSD 上。")])])])]),_._v(" "),v("h3",{attrs:{id:"_3-各个组件的协同工作-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-各个组件的协同工作-2"}},[_._v("#")]),_._v(" 3. 各个组件的协同工作")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("客户端（Client）")]),_._v(": 负责发起读取请求，定位数据对象所在的 OSD，并直接从 OSD 读取数据。")]),_._v(" "),v("li",[v("strong",[_._v("Ceph Monitor (MON)")]),_._v(": 监控集群状态，确保客户端和 OSD 具有最新的集群信息，但不直接参与读取操作。")]),_._v(" "),v("li",[v("strong",[_._v("Ceph Metadata Server (MDS)")]),_._v(": 主要用于 CephFS，提供文件元数据，使客户端能够定位文件数据在RADOS中的位置。")]),_._v(" "),v("li",[v("strong",[_._v("OSD（对象存储守护进程）")]),_._v(": 负责实际的数据存储和读取，直接处理客户端的读取请求，并根据需要进行数据校验和恢复操作。")]),_._v(" "),v("li",[v("strong",[_._v("CRUSH 算法")]),_._v(": 帮助客户端计算数据对象的存储位置，使得客户端可以无中心化地定位数据，避免瓶颈和集中式调度问题。")])]),_._v(" "),v("h3",{attrs:{id:"_4-ceph-读取数据的优点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-ceph-读取数据的优点"}},[_._v("#")]),_._v(" 4. Ceph 读取数据的优点")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("高效性")]),_._v(": 客户端能够直接与 OSD 交互读取数据，避免了中间层次的转发和瓶颈，提高了数据访问效率。")]),_._v(" "),v("li",[v("strong",[_._v("无中心化")]),_._v(": 通过 CRUSH 算法和客户端计算数据位置，Ceph 避免了单点故障和性能瓶颈，提升了系统的扩展性和容错能力。")]),_._v(" "),v("li",[v("strong",[_._v("数据完整性和自愈能力")]),_._v(": Ceph 在读取过程中进行数据校验，确保数据的完整性，并在数据损坏时自动进行数据恢复，保证高可用性。")])])])}),[],!1,null,null,null);v.default=r.exports}}]);