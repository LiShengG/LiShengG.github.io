(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{437:function(_,v,t){"use strict";t.r(v);var e=t(4),s=Object(e.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("TCP 的四次挥手（Four-Way Handshake）是关闭一个可靠的 TCP 连接的过程。与三次握手建立连接时的状态变化一样，四次挥手在关闭连接的过程中也涉及双方状态的变化。以下是四次挥手的详细过程及连接状态的变化。")]),_._v(" "),v("h3",{attrs:{id:"四次挥手过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手过程"}},[_._v("#")]),_._v(" 四次挥手过程")]),_._v(" "),v("p",[v("strong",[_._v("阶段 1")]),_._v("："),v("strong",[_._v("客户端主动关闭连接")])]),_._v(" "),v("ol",[v("li",[v("strong",[_._v("客户端发送一个 "),v("code",[_._v("FIN")]),_._v("（Finish）报文段")]),_._v("，表示客户端没有数据要发送了，想要关闭连接。\n"),v("ul",[v("li",[v("strong",[_._v("状态变化")]),_._v("：\n"),v("ul",[v("li",[_._v("客户端状态："),v("code",[_._v("ESTABLISHED")]),_._v(" → "),v("code",[_._v("FIN_WAIT_1")])]),_._v(" "),v("li",[_._v("服务器状态："),v("code",[_._v("ESTABLISHED")])])])])])])]),_._v(" "),v("p",[v("strong",[_._v("阶段 2")]),_._v("："),v("strong",[_._v("服务器确认关闭请求")])]),_._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[v("strong",[_._v("服务器接收到 "),v("code",[_._v("FIN")]),_._v(" 报文段后，发送一个 "),v("code",[_._v("ACK")]),_._v(" 报文段")]),_._v("，确认收到客户端的关闭请求，同时服务器可能会继续发送数据，直到没有数据为止。\n"),v("ul",[v("li",[v("strong",[_._v("状态变化")]),_._v("：\n"),v("ul",[v("li",[_._v("客户端状态："),v("code",[_._v("FIN_WAIT_1")]),_._v(" → "),v("code",[_._v("FIN_WAIT_2")])]),_._v(" "),v("li",[_._v("服务器状态："),v("code",[_._v("ESTABLISHED")]),_._v(" → "),v("code",[_._v("CLOSE_WAIT")])])])])])])]),_._v(" "),v("p",[v("strong",[_._v("阶段 3")]),_._v("："),v("strong",[_._v("服务器准备关闭连接")])]),_._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[v("strong",[_._v("服务器准备关闭连接时，发送一个 "),v("code",[_._v("FIN")]),_._v(" 报文段给客户端")]),_._v("，表示服务器也没有数据要发送了。\n"),v("ul",[v("li",[v("strong",[_._v("状态变化")]),_._v("：\n"),v("ul",[v("li",[_._v("客户端状态："),v("code",[_._v("FIN_WAIT_2")])]),_._v(" "),v("li",[_._v("服务器状态："),v("code",[_._v("CLOSE_WAIT")]),_._v(" → "),v("code",[_._v("LAST_ACK")])])])])])])]),_._v(" "),v("p",[v("strong",[_._v("阶段 4")]),_._v("："),v("strong",[_._v("客户端确认关闭连接")])]),_._v(" "),v("ol",{attrs:{start:"4"}},[v("li",[v("strong",[_._v("客户端接收到服务器的 "),v("code",[_._v("FIN")]),_._v(" 报文段后，发送一个 "),v("code",[_._v("ACK")]),_._v(" 报文段给服务器")]),_._v("，表示连接关闭流程完成。\n"),v("ul",[v("li",[v("strong",[_._v("状态变化")]),_._v("：\n"),v("ul",[v("li",[_._v("客户端状态："),v("code",[_._v("FIN_WAIT_2")]),_._v(" → "),v("code",[_._v("TIME_WAIT")])]),_._v(" "),v("li",[_._v("服务器状态："),v("code",[_._v("LAST_ACK")]),_._v(" → "),v("code",[_._v("CLOSED")])])])])])])]),_._v(" "),v("p",[v("strong",[_._v("最终状态")]),_._v("：\n5. "),v("strong",[_._v("客户端在 "),v("code",[_._v("TIME_WAIT")]),_._v(" 状态保持一段时间（通常为 2倍的最大报文段生存时间（MSL））以确保服务器收到了 ACK，然后转换为 "),v("code",[_._v("CLOSED")]),_._v(" 状态")]),_._v("。")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("状态变化")]),_._v("：\n"),v("ul",[v("li",[_._v("客户端状态："),v("code",[_._v("TIME_WAIT")]),_._v(" → "),v("code",[_._v("CLOSED")])])])])]),_._v(" "),v("h3",{attrs:{id:"总结连接状态变化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结连接状态变化"}},[_._v("#")]),_._v(" 总结连接状态变化")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("操作")]),_._v(" "),v("th",[_._v("客户端状态")]),_._v(" "),v("th",[_._v("服务器状态")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("Start Disconnect")]),_._v(" "),v("td",[v("code",[_._v("ESTABLISHED")]),_._v(" → "),v("code",[_._v("FIN_WAIT_1")])]),_._v(" "),v("td",[v("code",[_._v("ESTABLISHED")])])]),_._v(" "),v("tr",[v("td",[_._v("Receive "),v("code",[_._v("FIN")])]),_._v(" "),v("td",[v("code",[_._v("FIN_WAIT_1")]),_._v(" → "),v("code",[_._v("FIN_WAIT_2")])]),_._v(" "),v("td",[v("code",[_._v("ESTABLISHED")]),_._v(" → "),v("code",[_._v("CLOSE_WAIT")])])]),_._v(" "),v("tr",[v("td",[_._v("Send "),v("code",[_._v("FIN")])]),_._v(" "),v("td",[v("code",[_._v("FIN_WAIT_2")])]),_._v(" "),v("td",[v("code",[_._v("CLOSE_WAIT")]),_._v(" → "),v("code",[_._v("LAST_ACK")])])]),_._v(" "),v("tr",[v("td",[_._v("Receive "),v("code",[_._v("ACK")])]),_._v(" "),v("td",[v("code",[_._v("FIN_WAIT_2")]),_._v(" → "),v("code",[_._v("TIME_WAIT")])]),_._v(" "),v("td",[v("code",[_._v("LAST_ACK")]),_._v(" → "),v("code",[_._v("CLOSED")])])]),_._v(" "),v("tr",[v("td",[_._v("Timeout (2MSL)")]),_._v(" "),v("td",[v("code",[_._v("TIME_WAIT")]),_._v(" → "),v("code",[_._v("CLOSED")])]),_._v(" "),v("td",[v("code",[_._v("CLOSED")])])])])]),_._v(" "),v("h3",{attrs:{id:"握手示意图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#握手示意图"}},[_._v("#")]),_._v(" 握手示意图")]),_._v(" "),v("p",[_._v("以下是 TCP 四次挥手的示意图：")]),_._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("Client                                               Server\n   |     FIN ------------------------------------------\x3e |\n   |                                                  |\n   |     <-------------------- ACK ------------------- |\n   |                                                  |\n   |     <-------------------- FIN ------------------- |\n   |                                                  |\n   |     ACK ------------------------------------------\x3e |\n   |                                                  |\n   |                  Connection Closed                |\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br"),v("span",{staticClass:"line-number"},[_._v("2")]),v("br"),v("span",{staticClass:"line-number"},[_._v("3")]),v("br"),v("span",{staticClass:"line-number"},[_._v("4")]),v("br"),v("span",{staticClass:"line-number"},[_._v("5")]),v("br"),v("span",{staticClass:"line-number"},[_._v("6")]),v("br"),v("span",{staticClass:"line-number"},[_._v("7")]),v("br"),v("span",{staticClass:"line-number"},[_._v("8")]),v("br"),v("span",{staticClass:"line-number"},[_._v("9")]),v("br"),v("span",{staticClass:"line-number"},[_._v("10")]),v("br")])]),v("h3",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" 总结")]),_._v(" "),v("p",[_._v("TCP 的四次挥手过程确保了正常和有序地关闭连接，每个阶段都通过状态变化反映连接的关闭过程。由于 TCP 是面向连接的协议，关闭连接的过程同样需要确保双方都确认没有更多的数据需要发送或接收。这种设计可以防止数据丢失，并确保连接的可靠性。")])])}),[],!1,null,null,null);v.default=s.exports}}]);