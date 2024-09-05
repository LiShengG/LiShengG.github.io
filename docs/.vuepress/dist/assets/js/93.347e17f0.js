(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{443:function(_,v,a){"use strict";a.r(v);var t=a(4),r=Object(t.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("在应用层对文件进行访问时，"),v("code",[_._v("mmap()")]),_._v("和"),v("code",[_._v("read()/write()")]),_._v("是两种常用的方法，它们在工作原理、性能、适用场景等方面都有显著区别。")]),_._v(" "),v("h3",{attrs:{id:"_1-工作原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-工作原理"}},[_._v("#")]),_._v(" 1. "),v("strong",[_._v("工作原理")])]),_._v(" "),v("ul",[v("li",[v("p",[v("strong",[v("code",[_._v("mmap()")])]),_._v(":")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("mmap()")]),_._v("将文件或设备的内容直接映射到进程的虚拟地址空间中，使文件的内容在内存中表现为一个数组，程序可以像访问内存一样直接读取或修改文件数据。")]),_._v(" "),v("li",[_._v("操作系统负责在内存和文件之间进行数据交换，通过页表和缺页处理机制来确保数据的有效访问。")])])]),_._v(" "),v("li",[v("p",[v("strong",[v("code",[_._v("read()/write()")])]),_._v(":")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("read()")]),_._v("从文件中读取数据并将其拷贝到用户空间的缓冲区中，"),v("code",[_._v("write()")]),_._v("则将用户空间缓冲区的数据写入到文件中。")]),_._v(" "),v("li",[_._v("这些系统调用涉及显式的数据拷贝操作，从内核缓冲区到用户缓冲区，或从用户缓冲区到内核缓冲区。")])])])]),_._v(" "),v("h3",{attrs:{id:"_2-性能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-性能"}},[_._v("#")]),_._v(" 2. "),v("strong",[_._v("性能")])]),_._v(" "),v("ul",[v("li",[v("p",[v("strong",[v("code",[_._v("mmap()")])]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("性能通常较高，特别是对大文件或频繁访问的文件片段，因为它避免了用户态与内核态之间的数据拷贝。")]),_._v(" "),v("li",[v("code",[_._v("mmap()")]),_._v("还支持懒加载（lazy loading），即当某一页首次被访问时才加载进内存，这减少了不必要的I/O操作。")]),_._v(" "),v("li",[_._v("适合随机访问大文件的场景，减少了I/O操作的开销。")])])]),_._v(" "),v("li",[v("p",[v("strong",[v("code",[_._v("read()/write()")])]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("通常性能较"),v("code",[_._v("mmap()")]),_._v("低，尤其是在处理大量数据时，因为每次调用"),v("code",[_._v("read()")]),_._v("或"),v("code",[_._v("write()")]),_._v("都需要在用户态和内核态之间进行数据拷贝。")]),_._v(" "),v("li",[_._v("适合顺序读写或处理小文件的场景。")])])])]),_._v(" "),v("h3",{attrs:{id:"_3-内存使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-内存使用"}},[_._v("#")]),_._v(" 3. "),v("strong",[_._v("内存使用")])]),_._v(" "),v("ul",[v("li",[v("p",[v("strong",[v("code",[_._v("mmap()")])]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("内存使用效率较高，因为数据直接映射到虚拟内存空间中，且支持共享内存，多个进程可以通过"),v("code",[_._v("mmap()")]),_._v("共享同一段内存。")]),_._v(" "),v("li",[_._v("但是，如果文件较大，映射到内存中可能会导致内存压力。")])])]),_._v(" "),v("li",[v("p",[v("strong",[v("code",[_._v("read()/write()")])]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("需要用户空间的缓冲区来存储读入的数据，因此内存需求与文件大小无关，而是与应用程序使用的缓冲区大小有关。")])])])]),_._v(" "),v("h3",{attrs:{id:"_4-同步与一致性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-同步与一致性"}},[_._v("#")]),_._v(" 4. "),v("strong",[_._v("同步与一致性")])]),_._v(" "),v("ul",[v("li",[v("p",[v("strong",[v("code",[_._v("mmap()")])]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("数据在修改后不会立即写回到文件，而是由内核在适当的时间点（如内存压力、调用"),v("code",[_._v("msync()")]),_._v("或文件关闭时）进行同步。")]),_._v(" "),v("li",[_._v("需要特别注意内存与文件之间的一致性管理。")])])]),_._v(" "),v("li",[v("p",[v("strong",[v("code",[_._v("read()/write()")])]),_._v(":")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("write()")]),_._v("调用通常会将数据直接写入文件，或在文件关闭时进行刷新，因此一致性更好控制。")])])])]),_._v(" "),v("h3",{attrs:{id:"_5-复杂性与控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-复杂性与控制"}},[_._v("#")]),_._v(" 5. "),v("strong",[_._v("复杂性与控制")])]),_._v(" "),v("ul",[v("li",[v("p",[v("strong",[v("code",[_._v("mmap()")])]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("相对复杂，开发者需要理解虚拟内存、页面管理等概念。")]),_._v(" "),v("li",[_._v("对内存的操作（如越界访问）可能导致段错误（segmentation fault），需要谨慎处理。")])])]),_._v(" "),v("li",[v("p",[v("strong",[v("code",[_._v("read()/write()")])]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("使用相对简单，语义清晰，适合更广泛的应用场景。")])])])]),_._v(" "),v("h3",{attrs:{id:"_6-适用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-适用场景"}},[_._v("#")]),_._v(" 6. "),v("strong",[_._v("适用场景")])]),_._v(" "),v("ul",[v("li",[v("p",[v("strong",[v("code",[_._v("mmap()")])]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("适用于大文件、内存映射数据库、高性能应用（如多媒体处理、图像处理），以及需要共享内存的进程间通信（IPC）。")])])]),_._v(" "),v("li",[v("p",[v("strong",[v("code",[_._v("read()/write()")])]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("适用于常规文件操作、小文件处理、顺序读写以及无需复杂内存管理的场景。")])])])]),_._v(" "),v("h3",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" 总结")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("mmap()")]),_._v("在性能和内存使用上更高效，尤其适合大文件和频繁访问的场景，但需要开发者具备一定的内存管理知识。")]),_._v(" "),v("li",[v("code",[_._v("read()/write()")]),_._v("相对简单直接，适用性广泛，更易于控制数据的一致性和流向，但性能在某些场景下可能不如"),v("code",[_._v("mmap()")]),_._v("高。")])]),_._v(" "),v("hr"),_._v(" "),v("p",[_._v("是的，使用 "),v("code",[_._v("mmap()")]),_._v(" 时，当访问到映射文件的某个内存页面，而该页面尚未加载到内存中时，会发生缺页中断（Page Fault）。以下是缺页中断触发后的系统处理过程：")]),_._v(" "),v("h3",{attrs:{id:"_1-触发缺页中断"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-触发缺页中断"}},[_._v("#")]),_._v(" 1. "),v("strong",[_._v("触发缺页中断")])]),_._v(" "),v("ul",[v("li",[_._v("应用程序通过 "),v("code",[_._v("mmap()")]),_._v(" 将文件映射到虚拟地址空间中。当程序首次访问映射区域中的某个页面时，操作系统会检查该页面是否已经在物理内存中。")]),_._v(" "),v("li",[_._v("如果页面尚未加载到物理内存中，就会触发缺页中断（Page Fault）。")])]),_._v(" "),v("h3",{attrs:{id:"_2-内核处理缺页中断"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-内核处理缺页中断"}},[_._v("#")]),_._v(" 2. "),v("strong",[_._v("内核处理缺页中断")])]),_._v(" "),v("ul",[v("li",[_._v("缺页中断处理器（Page Fault Handler）接管控制，操作系统进入内核态以处理这个中断。")]),_._v(" "),v("li",[_._v("操作系统查找映射文件在磁盘上的位置，根据访问的虚拟地址确定需要加载的文件块（即页面）。")])]),_._v(" "),v("h3",{attrs:{id:"_3-读取数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-读取数据"}},[_._v("#")]),_._v(" 3. "),v("strong",[_._v("读取数据")])]),_._v(" "),v("ul",[v("li",[_._v("操作系统会从文件系统中读取相应的页面数据，并将其加载到物理内存中。这通常涉及从磁盘读取数据并存储在内核的页缓存中（Page Cache）。")]),_._v(" "),v("li",[_._v("内存中的页面可能会被复制到多个进程的虚拟地址空间中，或者在多进程共享内存的情况下，直接共享页面。")])]),_._v(" "),v("h3",{attrs:{id:"_4-更新页表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-更新页表"}},[_._v("#")]),_._v(" 4. "),v("strong",[_._v("更新页表")])]),_._v(" "),v("ul",[v("li",[_._v("一旦页面被加载到物理内存中，操作系统会更新进程的页表（Page Table），将虚拟地址映射到对应的物理内存地址。")]),_._v(" "),v("li",[_._v("页表更新后，再次访问该页面时，就不会触发缺页中断，直接通过页表映射访问物理内存中的数据。")])]),_._v(" "),v("h3",{attrs:{id:"_5-恢复用户态执行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-恢复用户态执行"}},[_._v("#")]),_._v(" 5. "),v("strong",[_._v("恢复用户态执行")])]),_._v(" "),v("ul",[v("li",[_._v("缺页中断处理完成后，控制权返回给用户态进程，进程继续执行，访问的页面数据已经在内存中，因此访问操作可以顺利进行。")])]),_._v(" "),v("h3",{attrs:{id:"可能的性能影响"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#可能的性能影响"}},[_._v("#")]),_._v(" 可能的性能影响")]),_._v(" "),v("ul",[v("li",[_._v("虽然 "),v("code",[_._v("mmap()")]),_._v(" 避免了显式的用户态与内核态之间的数据拷贝，但缺页中断处理仍然会带来一些性能开销，尤其是在高频率访问或大量缺页中断的情况下。")]),_._v(" "),v("li",[_._v("从磁盘读取数据的速度远慢于内存访问，因此频繁的缺页中断会导致I/O瓶颈，影响整体性能。")])]),_._v(" "),v("h3",{attrs:{id:"进一步优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进一步优化"}},[_._v("#")]),_._v(" 进一步优化")]),_._v(" "),v("ul",[v("li",[_._v("使用 "),v("code",[_._v("madvise()")]),_._v(" 等系统调用，可以提示操作系统如何更好地管理页面，例如提前加载（prefetching）或延迟加载。")]),_._v(" "),v("li",[_._v("对于频繁访问的文件片段，提前将这些页面加载到内存中，可以减少运行时的缺页中断，提升性能。")])]),_._v(" "),v("p",[_._v("总结来说，当 "),v("code",[_._v("mmap()")]),_._v(" 引发缺页中断时，系统确实会从磁盘中读取相应的数据块，将其加载到内存中，然后恢复进程的正常执行。")]),_._v(" "),v("hr"),_._v(" "),v("p",[v("code",[_._v("mmap()")]),_._v(" 映射的虚拟地址空间属于"),v("strong",[_._v("用户地址空间")]),_._v("。")]),_._v(" "),v("h3",{attrs:{id:"解释"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#解释"}},[_._v("#")]),_._v(" 解释：")]),_._v(" "),v("ul",[v("li",[v("p",[v("strong",[_._v("用户地址空间（User Space）")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("用户空间是进程可以直接访问的内存区域，通常限制在每个进程的虚拟地址空间中。")]),_._v(" "),v("li",[v("code",[_._v("mmap()")]),_._v(" 调用将文件或设备映射到进程的用户地址空间中，这样进程可以通过访问该虚拟地址空间来读取或写入映射文件的内容。")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("内核地址空间（Kernel Space）")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("内核空间是操作系统内核所使用的内存区域，用户进程不能直接访问。所有对内核空间的访问必须通过系统调用（如 "),v("code",[_._v("read()")]),_._v("、"),v("code",[_._v("write()")]),_._v("、"),v("code",[_._v("mmap()")]),_._v(" 等）间接进行。")])])])]),_._v(" "),v("h3",{attrs:{id:"mmap-映射的具体过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mmap-映射的具体过程"}},[_._v("#")]),_._v(" "),v("code",[_._v("mmap()")]),_._v(" 映射的具体过程：")]),_._v(" "),v("ul",[v("li",[_._v("当进程调用 "),v("code",[_._v("mmap()")]),_._v(" 时，操作系统会在该进程的用户地址空间内找到一个空闲的虚拟内存区域，并将其映射到指定的文件或设备。")]),_._v(" "),v("li",[_._v("这个虚拟地址空间是进程专有的，其他进程无法直接访问，除非使用共享内存（如 "),v("code",[_._v("MAP_SHARED")]),_._v(" 标志）。")])]),_._v(" "),v("h3",{attrs:{id:"特殊情况"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#特殊情况"}},[_._v("#")]),_._v(" 特殊情况：")]),_._v(" "),v("ul",[v("li",[_._v("在某些特殊情况下，内核也可以使用 "),v("code",[_._v("mmap()")]),_._v(" 的类似机制来映射内核地址空间，但这不是典型的用户态 "),v("code",[_._v("mmap()")]),_._v(" 调用的使用场景。常规的 "),v("code",[_._v("mmap()")]),_._v(" 调用是为用户空间进程提供服务的。")])]),_._v(" "),v("p",[_._v("因此，"),v("strong",[_._v("常规的 "),v("code",[_._v("mmap()")]),_._v(" 调用映射的虚拟地址空间属于用户地址空间")]),_._v("。")])])}),[],!1,null,null,null);v.default=r.exports}}]);