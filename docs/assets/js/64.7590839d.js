(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{413:function(e,r,t){"use strict";t.r(r);var a=t(4),_=Object(a.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"raft"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#raft"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/383555591",target:"_blank",rel:"noopener noreferrer"}},[e._v("raft"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"_1-1-三个子问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-三个子问题"}},[e._v("#")]),e._v(" 1.1 三个子问题：")]),e._v(" "),r("ol",[r("li",[r("strong",[e._v("Leader election")]),e._v("领导选举：")]),e._v(" "),r("li",[r("strong",[e._v("Log replication")]),e._v("日志复制：")]),e._v(" "),r("li",[r("strong",[e._v("Safety 安全性")]),e._v("：特殊 case，保证 Raft 算法的完备性；")])]),e._v(" "),r("p",[e._v("所以，Raft 算法核心流程可以归纳为：")]),e._v(" "),r("ul",[r("li",[e._v("选出 leader，接收外部的数据更新/删除请求；")]),e._v(" "),r("li",[e._v("日志复制到其他 follower 节点")]),e._v(" "),r("li",[e._v("leader 故障，重新选举新 leader；")])]),e._v(" "),r("h2",{attrs:{id:"_2-1-leader-election"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-leader-election"}},[e._v("#")]),e._v(" "),r("strong",[e._v("2.1 Leader Election")])]),e._v(" "),r("p",[e._v("集群中每个节点只能处于 Leader、Follower 和 Candidate 三种状态的一种:")]),e._v(" "),r("ol",[r("li",[r("strong",[e._v("follower 从节点")]),e._v("：")]),e._v(" "),r("li",[r("strong",[e._v("candidate 候选者")]),e._v("：")]),e._v(" "),r("li",[r("strong",[e._v("leader 主节点")]),e._v("：")])]),e._v(" "),r("ul",[r("li",[e._v("成为 leader 节点后，接受客户端的数据请求，负责日志同步；")]),e._v(" "),r("li",[e._v("遇到更高任期 Term 的 candidate 之前任期的 leader 转化为 follower，且投票；")]),e._v(" "),r("li",[e._v("遇到更高任期 Term 的 leader ，之前任期的 leader 转化为 follower；")])]),e._v(" "),r("p",[e._v("具体的节点状态转换参考下图：\n"),r("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2024/png/32548312/1720221832744-afa207e2-67fc-4af9-b37c-84f86bbec1a1.png#averageHue=%23f6f6f6&clientId=u73ec2c27-fa11-4&from=paste&id=udfc89ee5&originHeight=291&originWidth=600&originalType=url&ratio=1.3499999046325684&rotation=0&showTitle=false&size=64877&status=done&style=none&taskId=ub496ea3d-bb3e-496b-9549-89ed16bd7e7&title=",alt:"image.png"}})]),e._v(" "),r("p",[e._v("每个任期 Term 都有自TermId，全局唯一、单调递增。")]),e._v(" "),r("h2",{attrs:{id:"_2-2-log-replication日志复制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-log-replication日志复制"}},[e._v("#")]),e._v(" "),r("strong",[e._v("2.2 Log Replication")]),r("a",{attrs:{href:"https://www.zhihu.com/search?q=%E6%97%A5%E5%BF%97%E5%A4%8D%E5%88%B6&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%22383555591%22%7D",target:"_blank",rel:"noopener noreferrer"}},[e._v("日志复制"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("选举 leader 成功后，对外提供服务。Leader 接收客户端请求，转化为 log 复制命令，其他节点完成日志复制请求。每个日志复制请求包括状态机命令 & 任期号，同时还有前一个日志的任期号和日志索引。"),r("a",{attrs:{href:"https://www.zhihu.com/search?q=%E7%8A%B6%E6%80%81%E6%9C%BA%E5%91%BD%E4%BB%A4&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%22383555591%22%7D",target:"_blank",rel:"noopener noreferrer"}},[e._v("状态机命令"),r("OutboundLink")],1),e._v("表示客户端请求的数据操作指令，任期号表示 leader 的当前任期。\nfollower 日志复制请求的处理流程：")]),e._v(" "),r("ol",[r("li",[e._v("follower 会使用前一个日志的任期号和日志索引来对比自己的数据：")])]),e._v(" "),r("ul",[r("li",[e._v("如果相同，接收复制请求，回复 ok；")]),e._v(" "),r("li",[e._v("否则回拒绝复制当前日志，回复 error；")])]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[e._v("leader 收到拒绝复后，继续发送复制请求，带上更前面的日志term和index；")]),e._v(" "),r("li",[e._v("循环，直到找到一个共同的任期号&日志索引。 follower 从这个索引值开始复制，最终和 leader 节点日志保持一致；")]),e._v(" "),r("li",[e._v("超过半数节点复制日志成功， commite ；")])]),e._v(" "),r("h2",{attrs:{id:"_2-3-safety-安全性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-safety-安全性"}},[e._v("#")]),e._v(" "),r("strong",[e._v("2.3 Safety 安全性")])]),e._v(" "),r("h2",{attrs:{id:"_2-3-1-election-safety-选举安全性-避免脑裂问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-election-safety-选举安全性-避免脑裂问题"}},[e._v("#")]),e._v(" "),r("strong",[e._v("2.3.1 Election Safety 选举安全性：避免")]),r("a",{attrs:{href:"https://www.zhihu.com/search?q=%E8%84%91%E8%A3%82&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%22383555591%22%7D",target:"_blank",rel:"noopener noreferrer"}},[e._v("脑裂"),r("OutboundLink")],1),r("strong",[e._v("问题")])]),e._v(" "),r("p",[e._v("一个Term 内只能有一个 leader，投票原则：")]),e._v(" "),r("ul",[r("li",[e._v("一个term，follower 只会"),r("strong",[e._v("投票一次票")]),e._v("，先来先得；")]),e._v(" "),r("li",[e._v("Candidate 存储的日志至少要和 follower 一样新；")]),e._v(" "),r("li",[e._v("超过半数投票, 成为 leader；")])]),e._v(" "),r("h2",{attrs:{id:"_2-3-2-leader-append-only-日志只能-leader-添加修改"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-leader-append-only-日志只能-leader-添加修改"}},[e._v("#")]),e._v(" "),r("strong",[e._v("2.3.2 Leader Append-Only 日志只能 leader 添加修改")])]),e._v(" "),r("p",[e._v("所有的数据请求都要交给 leader 节点处理，要求：")]),e._v(" "),r("ol",[r("li",[e._v("leader 只能日志追加日志，"),r("strong",[e._v("不能覆盖日志")]),e._v("；")]),e._v(" "),r("li",[e._v("只有 leader 的日志项才能被提交，follower 不能接收写请求和提交日志；")]),e._v(" "),r("li",[e._v("只有已经提交的日志项，才能被应用到"),r("a",{attrs:{href:"https://www.zhihu.com/search?q=%E7%8A%B6%E6%80%81%E6%9C%BA&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%22383555591%22%7D",target:"_blank",rel:"noopener noreferrer"}},[e._v("状态机"),r("OutboundLink")],1),e._v("中；")]),e._v(" "),r("li",[e._v("选举时限制新 leader 日志包含所有已提交日志项；")])]),e._v(" "),r("h2",{attrs:{id:"_2-3-3-log-matching-日志匹配特性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-3-log-matching-日志匹配特性"}},[e._v("#")]),e._v(" "),r("strong",[e._v("2.3.3 Log Matching 日志匹配特性")])]),e._v(" "),r("p",[e._v("保证日志的唯一性，要求：")]),e._v(" "),r("ol",[r("li",[e._v("相同索引和任期号，存储的命令是相同的；")]),e._v(" "),r("li",[e._v("着相同索引和任期号，它们之间所有条目完全一样；")])]),e._v(" "),r("h2",{attrs:{id:"_2-3-4-leader-completeness-leader-必须具备最新提交日志"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-4-leader-completeness-leader-必须具备最新提交日志"}},[e._v("#")]),e._v(" "),r("strong",[e._v("2.3.4 Leader Completeness ：leader 必须具备最新提交日志")])]),e._v(" "),r("p",[e._v("只"),r("strong",[e._v("有拥有最新提交日志的 follower 节点才有资格成为 leader 节点")])]),e._v(" "),r("blockquote",[r("p",[e._v("candidate 竞选投票时携带最新提交日志，follower 用自己日志和 candidate 做比较。")])]),e._v(" "),r("p",[e._v("日志更新 比较日志项的 "),r("a",{attrs:{href:"https://www.zhihu.com/search?q=term&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%22383555591%22%7D",target:"_blank",rel:"noopener noreferrer"}},[e._v("term"),r("OutboundLink")],1),e._v(" 和 index：")]),e._v(" "),r("ul",[r("li",[e._v("如果 TermId 不同，选 TermId 最大的；")]),e._v(" "),r("li",[e._v("如果 TermId 相同，选 Index 最大的；")])]),e._v(" "),r("h2",{attrs:{id:"_2-3-5-state-machine-safety-确保当前任期日志提交"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-5-state-machine-safety-确保当前任期日志提交"}},[e._v("#")]),e._v(" "),r("strong",[e._v("2.3.5 State Machine Safety ：确保当前任期日志提交")])]),e._v(" "),r("p",[e._v("Raft 日志提交有额外安全机制：leader 只能提交当前任期 Term 的日志，旧任期 Term（以前的数据）只能通过当前任期 Term 的数据提交来间接完成提交。简单的说，日志提交有两个条件需要满足：")]),e._v(" "),r("ol",[r("li",[r("strong",[e._v("当前任期")]),e._v("；")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.zhihu.com/search?q=%E5%A4%8D%E5%88%B6%E7%BB%93%E7%82%B9&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%22383555591%22%7D",target:"_blank",rel:"noopener noreferrer"}},[e._v("复制结点"),r("OutboundLink")],1),r("strong",[e._v("超过半数")]),e._v("；")])])])}),[],!1,null,null,null);r.default=_.exports}}]);