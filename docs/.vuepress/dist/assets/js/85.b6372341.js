(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{439:function(_,v,t){"use strict";t.r(v);var s=t(4),a=Object(s.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("TCP 的三次握手（Three-Way Handshake）是建立可靠 TCP 连接的重要过程。在这个过程中，客户端和服务器通过一系列的状态变化互相确认对方的可用性，以确保连接的可靠性。以下是 TCP 三次握手的详细过程及连接状态变化。")]),_._v(" "),v("h3",{attrs:{id:"三次握手过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三次握手过程"}},[_._v("#")]),_._v(" 三次握手过程")]),_._v(" "),v("h4",{attrs:{id:"阶段-1-连接请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#阶段-1-连接请求"}},[_._v("#")]),_._v(" "),v("strong",[_._v("阶段 1")]),_._v("："),v("strong",[_._v("连接请求")])]),_._v(" "),v("ol",[v("li",[v("strong",[_._v("客户端准备建立连接")]),_._v("，发送一个 "),v("code",[_._v("SYN")]),_._v("（Sync）报文段到服务器。这个报文中包含客户端生成的初始序列号（"),v("code",[_._v("seq")]),_._v("）。\n"),v("ul",[v("li",[v("strong",[_._v("状态变化")]),_._v("：\n"),v("ul",[v("li",[_._v("客户端状态："),v("code",[_._v("CLOSED")]),_._v(" → "),v("code",[_._v("SYN_SENT")])]),_._v(" "),v("li",[_._v("服务器状态："),v("code",[_._v("CLOSED")])])])])])])]),_._v(" "),v("h4",{attrs:{id:"阶段-2-连接确认"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#阶段-2-连接确认"}},[_._v("#")]),_._v(" "),v("strong",[_._v("阶段 2")]),_._v("："),v("strong",[_._v("连接确认")])]),_._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[v("strong",[_._v("服务器接收到客户的 "),v("code",[_._v("SYN")])]),_._v(" 报文段，回应一个 "),v("code",[_._v("SYN-ACK")]),_._v("（Sync-Acknowledgment）报文段。这个报文中包含服务器生成的初始序列号（"),v("code",[_._v("seq")]),_._v("），并确认客户端的 "),v("code",[_._v("SYN")]),_._v(" 报文（确认号 "),v("code",[_._v("ack")]),_._v(" 为客户端的初始序列号 + 1）。\n"),v("ul",[v("li",[v("strong",[_._v("状态变化")]),_._v("：\n"),v("ul",[v("li",[_._v("客户端状态："),v("code",[_._v("SYN_SENT")]),_._v("（继续保持）")]),_._v(" "),v("li",[_._v("服务器状态："),v("code",[_._v("CLOSED")]),_._v(" → "),v("code",[_._v("SYN_RECEIVED")])])])])])])]),_._v(" "),v("h4",{attrs:{id:"阶段-3-连接确认"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#阶段-3-连接确认"}},[_._v("#")]),_._v(" "),v("strong",[_._v("阶段 3")]),_._v("："),v("strong",[_._v("连接确认")])]),_._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[v("strong",[_._v("客户端接收到服务器的 "),v("code",[_._v("SYN-ACK")])]),_._v(" 报文段后，发送一个 "),v("code",[_._v("ACK")]),_._v("（确认）报文段给服务器，确认号为 "),v("code",[_._v("ack")]),_._v(" += 1，表示连接建立完成。\n"),v("ul",[v("li",[v("strong",[_._v("状态变化")]),_._v("：\n"),v("ul",[v("li",[_._v("客户端状态："),v("code",[_._v("SYN_SENT")]),_._v(" → "),v("code",[_._v("ESTABLISHED")])]),_._v(" "),v("li",[_._v("服务器状态："),v("code",[_._v("SYN_RECEIVED")]),_._v(" → "),v("code",[_._v("ESTABLISHED")])])])])])])]),_._v(" "),v("h3",{attrs:{id:"总结连接状态变化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结连接状态变化"}},[_._v("#")]),_._v(" 总结连接状态变化")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("操作")]),_._v(" "),v("th",[_._v("客户端状态")]),_._v(" "),v("th",[_._v("服务器状态")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("Start Connection")]),_._v(" "),v("td",[v("code",[_._v("CLOSED")]),_._v(" → "),v("code",[_._v("SYN_SENT")])]),_._v(" "),v("td",[v("code",[_._v("CLOSED")])])]),_._v(" "),v("tr",[v("td",[_._v("Recieve "),v("code",[_._v("SYN")])]),_._v(" "),v("td",[v("code",[_._v("SYN_SENT")])]),_._v(" "),v("td",[v("code",[_._v("CLOSED")]),_._v(" → "),v("code",[_._v("SYN_RECEIVED")])])]),_._v(" "),v("tr",[v("td",[_._v("Send "),v("code",[_._v("SYN-ACK")])]),_._v(" "),v("td",[v("code",[_._v("SYN_SENT")])]),_._v(" "),v("td",[v("code",[_._v("SYN_RECEIVED")])])]),_._v(" "),v("tr",[v("td",[_._v("Recieve "),v("code",[_._v("ACK")])]),_._v(" "),v("td",[v("code",[_._v("SYN_SENT")]),_._v(" → "),v("code",[_._v("ESTABLISHED")])]),_._v(" "),v("td",[v("code",[_._v("SYN_RECEIVED")]),_._v(" → "),v("code",[_._v("ESTABLISHED")])])])])]),_._v(" "),v("h3",{attrs:{id:"握手示意图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#握手示意图"}},[_._v("#")]),_._v(" 握手示意图")]),_._v(" "),v("p",[_._v("以下是 TCP 三次握手的示意图：")]),_._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("Client                                               Server\n   |     SYN(seq=x) ----------------------------------\x3e |\n   |                                                  |\n   |     <----------------- SYN-ACK(seq=y, ack=x+1) ---|\n   |                                                  |\n   |     ACK(ack=y+1) --------------------------------\x3e |\n   |                                                  |\n   |                  Connection Established          |\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br"),v("span",{staticClass:"line-number"},[_._v("2")]),v("br"),v("span",{staticClass:"line-number"},[_._v("3")]),v("br"),v("span",{staticClass:"line-number"},[_._v("4")]),v("br"),v("span",{staticClass:"line-number"},[_._v("5")]),v("br"),v("span",{staticClass:"line-number"},[_._v("6")]),v("br"),v("span",{staticClass:"line-number"},[_._v("7")]),v("br"),v("span",{staticClass:"line-number"},[_._v("8")]),v("br")])]),v("h3",{attrs:{id:"可能的异常情况"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#可能的异常情况"}},[_._v("#")]),_._v(" 可能的异常情况")]),_._v(" "),v("p",[_._v("在 TCP 三次握手过程中，虽然通常情况下连接的建立是顺利的，但在网络环境中，可能会出现各种异常场景。以下是一些可能的异常情况及其相应的描述：")]),_._v(" "),v("h4",{attrs:{id:"_1-重复的-syn-请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-重复的-syn-请求"}},[_._v("#")]),_._v(" 1. "),v("strong",[_._v("重复的 SYN 请求")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("场景")]),_._v("：客户端由于网络延迟或者重试机制，可能会重复发送同一个 SYN 报文。")]),_._v(" "),v("li",[v("strong",[_._v("影响")]),_._v("：服务器可能会将其视为正常的连接请求，并返回多次 SYN-ACK。这种情况不会影响最终的连接建立，因为服务器最终会等待客户端的有效 ACK。")])]),_._v(" "),v("h4",{attrs:{id:"_2-丢失的-syn-ack-响应"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-丢失的-syn-ack-响应"}},[_._v("#")]),_._v(" 2. "),v("strong",[_._v("丢失的 SYN-ACK 响应")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("场景")]),_._v("：在第一步中，客户端发送 SYN 请求后，服务器发送 SYN-ACK 报文段，但这个 ACK 报文在传输过程中丢失。")]),_._v(" "),v("li",[v("strong",[_._v("影响")]),_._v("：客户端因未收到 SYN-ACK，会在超时后重新发送 SYN 请求，导致连接重试。服务器会响应新的 SYN 请求。")])]),_._v(" "),v("h4",{attrs:{id:"_3-没有确认的连接-ack-丢失"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-没有确认的连接-ack-丢失"}},[_._v("#")]),_._v(" 3. "),v("strong",[_._v("没有确认的连接（ACK 丢失）")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("场景")]),_._v("：客户端的 ACK 报文段可能在传输中丢失，导致服务器未收到确认。")]),_._v(" "),v("li",[v("strong",[_._v("影响")]),_._v("：此时，服务器会在超时后认为连接没有建立，并可能关闭等待状态，或重新发送 SYN-ACK 报文。")])]),_._v(" "),v("h4",{attrs:{id:"_4-伪装的-syn-攻击"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-伪装的-syn-攻击"}},[_._v("#")]),_._v(" 4. "),v("strong",[_._v("伪装的 SYN 攻击")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("场景")]),_._v("：网络攻击者产生大量伪造的 SYN 请求，攻击的目标是耗尽服务器的资源。")]),_._v(" "),v("li",[v("strong",[_._v("影响")]),_._v("：服务器会因接收到大量的 SYN 请求而处于半连接状态，最终可能导致拒绝服务（DoS）。这会造成正常用户无法建立连接。")])]),_._v(" "),v("h4",{attrs:{id:"_5-tcp-连接请求到错误的端口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-tcp-连接请求到错误的端口"}},[_._v("#")]),_._v(" 5. "),v("strong",[_._v("TCP 连接请求到错误的端口")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("场景")]),_._v("：客户端尝试连接到服务器的一个不存在的端口。")]),_._v(" "),v("li",[v("strong",[_._v("影响")]),_._v("：服务器将返回一个 RST（重置）报文段。客户端会立即感知连接失败。")])]),_._v(" "),v("h4",{attrs:{id:"_6-序列号冲突"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-序列号冲突"}},[_._v("#")]),_._v(" 6. "),v("strong",[_._v("序列号冲突")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("场景")]),_._v("：如果客户端重启并重新发送先前的连接请求，而一个新的 SYN 报文段的序列号与之前的连接请求重复。")]),_._v(" "),v("li",[v("strong",[_._v("影响")]),_._v("：服务器可能无法正确识别这个请求，因为它可能误认为这是个重发的连接请求，从而导致旧连接的状态混淆。")])]),_._v(" "),v("h4",{attrs:{id:"_7-mtu-最大传输单元-问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-mtu-最大传输单元-问题"}},[_._v("#")]),_._v(" 7. "),v("strong",[_._v("MTU（最大传输单元）问题")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("场景")]),_._v("：网络中的 MTU 设置不一致，导致 SYN 或 SYN-ACK 报文过大被损坏或丢失。")]),_._v(" "),v("li",[v("strong",[_._v("影响")]),_._v("：连接建立失败，客户端无法收到其请求的确认。")])]),_._v(" "),v("h4",{attrs:{id:"_8-主动端的网络分区"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-主动端的网络分区"}},[_._v("#")]),_._v(" 8. "),v("strong",[_._v("主动端的网络分区")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("场景")]),_._v("：客户端在发送 SYN 且等待 SYN-ACK 期间失去与服务器的网络连接。")]),_._v(" "),v("li",[v("strong",[_._v("影响")]),_._v("：相同的情形会使连接无法建立，导致重试和超时。")])]),_._v(" "),v("h4",{attrs:{id:"_9-拒绝连接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9-拒绝连接"}},[_._v("#")]),_._v(" 9. "),v("strong",[_._v("拒绝连接")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("场景")]),_._v("：服务器由于负载过重、策略限制或防火墙阻挡拒绝新的连接请求。")]),_._v(" "),v("li",[v("strong",[_._v("影响")]),_._v("：服务器可能返回一个 RST 报文，客户端会知道连接请求被拒绝。")])]),_._v(" "),v("h3",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" 总结")]),_._v(" "),v("p",[_._v("TCP 三次握手过程中可能出现的异常情况主要都与网络不稳定、丢包、攻击以及服务器的资源管理有关。在设计和实施 TCP 连接时，因此要考虑这些潜在的问题，并根据实际应用的需求进行合理的异常处理和保障措施，以确保网络连接的可靠性和安全性。")])])}),[],!1,null,null,null);v.default=a.exports}}]);