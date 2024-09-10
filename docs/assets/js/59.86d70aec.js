(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{410:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("C++ 标准库提供了多种数据结构，每种数据结构在不同场景下具有不同的应用和性能特性。以下是 C++ 中一些常用的数据结构：")]),s._v(" "),t("h3",{attrs:{id:"_0-std-priority-queue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-std-priority-queue"}},[s._v("#")]),s._v(" 0. "),t("strong",[t("code",[s._v("std::priority_queue")])])]),s._v(" "),t("ul",[t("li",[s._v("最大堆（最大优先级在顶部），元素按照优先级顺序被访问。")]),s._v(" "),t("li",[s._v("特性：元素插入后自动排序。")]),s._v(" "),t("li",[s._v("复杂度："),t("code",[s._v("O(1)")]),s._v(" 随机访问，"),t("code",[s._v("O(1)")]),s._v(" 末尾添加，"),t("code",[s._v("O(n)")]),s._v(" 插入或删除。")])]),s._v(" "),t("h3",{attrs:{id:"_1-std-vector"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-std-vector"}},[s._v("#")]),s._v(" 1. "),t("strong",[t("code",[s._v("std::vector")])])]),s._v(" "),t("ul",[t("li",[s._v("动态数组，可以在末尾添加和删除元素，支持随机访问。")]),s._v(" "),t("li",[s._v("特性：自动扩展大小，元素存储在连续的内存块中。")]),s._v(" "),t("li",[s._v("复杂度："),t("code",[s._v("O(1)")]),s._v(" 随机访问，"),t("code",[s._v("O(1)")]),s._v(" 末尾添加，"),t("code",[s._v("O(n)")]),s._v(" 插入或删除。")])]),s._v(" "),t("h3",{attrs:{id:"_2-std-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-std-list"}},[s._v("#")]),s._v(" 2. "),t("strong",[t("code",[s._v("std::list")])])]),s._v(" "),t("ul",[t("li",[s._v("双向链表，允许快速的插入和删除操作。")]),s._v(" "),t("li",[s._v("特性：不支持随机访问，适合频繁插入或删除操作的场景。")]),s._v(" "),t("li",[s._v("复杂度："),t("code",[s._v("O(1)")]),s._v(" 插入或删除，"),t("code",[s._v("O(n)")]),s._v(" 访问。")])]),s._v(" "),t("h3",{attrs:{id:"_3-std-deque"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-std-deque"}},[s._v("#")]),s._v(" 3. "),t("strong",[t("code",[s._v("std::deque")])])]),s._v(" "),t("ul",[t("li",[s._v("双端队列，支持在两端快速插入和删除元素。")]),s._v(" "),t("li",[s._v("特性：类似 "),t("code",[s._v("vector")]),s._v("，但允许在两端高效操作。")]),s._v(" "),t("li",[s._v("复杂度："),t("code",[s._v("O(1)")]),s._v(" 随机访问，"),t("code",[s._v("O(1)")]),s._v(" 两端插入或删除。")])]),s._v(" "),t("h3",{attrs:{id:"_4-std-set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-std-set"}},[s._v("#")]),s._v(" 4. "),t("strong",[t("code",[s._v("std::set")])])]),s._v(" "),t("ul",[t("li",[s._v("有序集合，元素按照键值自动排序，所有元素唯一。")]),s._v(" "),t("li",[s._v("特性：基于红黑树实现，适合需要有序、不重复元素的场景。")]),s._v(" "),t("li",[s._v("复杂度："),t("code",[s._v("O(log n)")]),s._v(" 插入、删除、查找。")]),s._v(" "),t("li",[s._v("std::set 中的元素是有序的，通常按照升序排列。以下是一个示例，展示了如何遍历 std::set 并输出其元素，确保输出的顺序是从小到大的。")])]),s._v(" "),t("div",{staticClass:"language-C++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('#include <set>  \nint main() {\n    // 创建一个 set   \n    std::set<int> mySet = {1, 4, 8, 20};  \n    // 插入元素\n    mySet.insert(6);\n    // 删除元素\n    mySet.erase(6);\n    //查找元素 \n    auto it = mySet.find(4);\n    if (it != mySet.end()) {\n        cout <<"*it:" << *it <<endl; //4\n    }\n    // 统计元素\n    auto c = mySet.count(4);\n    cout << "count " << c <<endl;    //1\n\n    // lower_bound 返回指向第一个不小于指定值的元素的迭代器。\n    auto lowIt = mySet.lower_bound(8);\n    cout << "lower_bound:" << *lowIt <<endl;//8\n\n    // upper_bound, 返回指向第一个大于指定值的元素的迭代器。\n    auto it2 = mySet.upper_bound(8);\n    cout << "upper_bound:" << *it2 <<endl;//20\n    \n    // 遍历 set  \n    for (const auto& elem : mySet) {  \n            std::cout << elem << " ";  //1 4 8 20\n    } \n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br")])]),t("ul",[t("li",[s._v("使用自定义的规则排序定义set")])]),s._v(" "),t("div",{staticClass:"language-C++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// 自定义比较函数  \nstruct CustomComparator {  \n    bool operator()(const std::string& a, const std::string& b) const {  \n        // 按长度排序，如果长度相同则按字典顺序排序  \n        if (a.size() != b.size()) {  \n            return a.size() < b.size();  \n        }  \n        return a < b;  \n    }  \n};  \n\nint main() {  \n    // 使用自定义比较函数构造 set  \n    std::set<std::string, CustomComparator> mySet;  \n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h3",{attrs:{id:"_5-std-map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-std-map"}},[s._v("#")]),s._v(" 5. "),t("strong",[t("code",[s._v("std::map")])])]),s._v(" "),t("ul",[t("li",[s._v("有序字典，键值对的集合，键按顺序排列。")]),s._v(" "),t("li",[s._v("特性：基于红黑树实现，键值对唯一。")]),s._v(" "),t("li",[s._v("复杂度："),t("code",[s._v("O(log n)")]),s._v(" 插入、删除、查找。")]),s._v(" "),t("li",[s._v("自定义排序规则map，按照key")])]),s._v(" "),t("div",{staticClass:"language-C++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('// 自定义比较函数  \nstruct CustomComparator {  \n    bool operator()(const std::string& a, const std::string& b) const {  \n        // 按长度排序，如果长度相同则按字典顺序排序  \n        if (a.size() != b.size()) {  \n            return a.size() < b.size();  \n        }  \n        return a < b;  \n    }  \n};  \n\nint main() {  \n    // 使用自定义比较函数构造 map  \n    std::map<std::string, int, CustomComparator> myMap;  \n\n    // 插入元素  \n    myMap["apple"] = 1;  \n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("ul",[t("li",[s._v("自定义排序规则map，按照value")])]),s._v(" "),t("div",{staticClass:"language-C++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('#include <map>  \n#include <vector>  \n// 函数用于根据值排序  \nbool compareByValue(const std::pair<std::string, int>& a, const std::pair<std::string, int>& b) {  \n    return a.second < b.second; // 按值升序排序  \n}  \n\nint main() {  \n    // 创建一个 map  \n    std::map<std::string, int> myMap;  \n    myMap["apple"] = 3;  \n    myMap["banana"] = 1;   \n\n    // 将 map 转换为 vector 以便排序  \n    std::vector<std::pair<std::string, int>> vec(myMap.begin(), myMap.end());  \n    // 根据值排序  \n    std::sort(vec.begin(), vec.end(), compareByValue);  \n    for (const auto& pair : vec) {  \n        std::cout << pair.first << ": " << pair.second << std::endl;  \n    }  \n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("h3",{attrs:{id:"_6-std-unordered-set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-std-unordered-set"}},[s._v("#")]),s._v(" 6. "),t("strong",[t("code",[s._v("std::unordered_set")])])]),s._v(" "),t("ul",[t("li",[s._v("无序集合，元素不按顺序存储，所有元素唯一。")]),s._v(" "),t("li",[s._v("特性：基于哈希表实现，适合需要快速查找、不重复元素的场景。")]),s._v(" "),t("li",[s._v("复杂度："),t("code",[s._v("O(1)")]),s._v(" 插入、删除、查找（平均）。")]),s._v(" "),t("li",[s._v("遍历 std::unordered_set 的结果是无序的，因为它是基于哈希表实现的。以下是一个示例，展示了如何遍历 std::unordered_set 并输出其元素。由于元素的存储顺序是随机的，每次运行程序时输出的顺序可能会不同。")])]),s._v(" "),t("div",{staticClass:"language-C++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('// 创建一个 unordered_set 并插入元素  \nstd::unordered_set<int> mySet = {5, 1, 3, 2, 4};  \n// 遍历 unordered_set  \nstd::cout << "Elements in unordered_set: ";  \nfor (const auto& elem : mySet) {  \n        std::cout << elem << " ";  \n}  \n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"_7-std-unordered-map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-std-unordered-map"}},[s._v("#")]),s._v(" 7. "),t("strong",[t("code",[s._v("std::unordered_map")])])]),s._v(" "),t("ul",[t("li",[s._v("无序字典，键值对的集合，键不按顺序存储。")]),s._v(" "),t("li",[s._v("特性：基于哈希表实现，适合需要快速查找的键值对集合。")]),s._v(" "),t("li",[s._v("复杂度："),t("code",[s._v("O(1)")]),s._v(" 插入、删除、查找（平均）。")])]),s._v(" "),t("h3",{attrs:{id:"_8-std-stack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-std-stack"}},[s._v("#")]),s._v(" 8. "),t("strong",[t("code",[s._v("std::stack")])])]),s._v(" "),t("ul",[t("li",[s._v("后进先出（LIFO）栈，基于 "),t("code",[s._v("deque")]),s._v(" 实现。")]),s._v(" "),t("li",[s._v("特性：只允许在一端（栈顶）插入和删除元素。")]),s._v(" "),t("li",[s._v("复杂度："),t("code",[s._v("O(1)")]),s._v(" 插入和删除。")])]),s._v(" "),t("h3",{attrs:{id:"_9-std-queue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-std-queue"}},[s._v("#")]),s._v(" 9. "),t("strong",[t("code",[s._v("std::queue")])])]),s._v(" "),t("ul",[t("li",[s._v("先进先出（FIFO）队列，基于 "),t("code",[s._v("deque")]),s._v(" 实现。")]),s._v(" "),t("li",[s._v("特性：只允许在一端（队尾）插入，在另一端（队首）删除。")]),s._v(" "),t("li",[s._v("复杂度："),t("code",[s._v("O(1)")]),s._v(" 插入和删除。")])]),s._v(" "),t("h3",{attrs:{id:"_10-std-deque"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-std-deque"}},[s._v("#")]),s._v(" 10. "),t("strong",[t("code",[s._v("std::deque")])])]),s._v(" "),t("ul",[t("li",[s._v("双端队列，既可以在队首也可以在队尾高效插入和删除。")]),s._v(" "),t("li",[s._v("特性：允许在两端进行高效的插入和删除操作。")]),s._v(" "),t("li",[s._v("复杂度："),t("code",[s._v("O(1)")]),s._v(" 插入和删除。")])]),s._v(" "),t("h3",{attrs:{id:"_11-std-bitset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-std-bitset"}},[s._v("#")]),s._v(" 11. "),t("strong",[t("code",[s._v("std::bitset")])])]),s._v(" "),t("ul",[t("li",[s._v("定长的二进制位数组，适用于位操作。")]),s._v(" "),t("li",[s._v("特性：高效存储和操作二进制位。")]),s._v(" "),t("li",[s._v("复杂度："),t("code",[s._v("O(1)")]),s._v(" 位操作。")])]),s._v(" "),t("h3",{attrs:{id:"_12-std-array"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-std-array"}},[s._v("#")]),s._v(" 12. "),t("strong",[t("code",[s._v("std::array")])])]),s._v(" "),t("ul",[t("li",[s._v("定长数组，大小在编译时固定。")]),s._v(" "),t("li",[s._v("特性：提供类似于 "),t("code",[s._v("vector")]),s._v(" 的接口，但大小固定且不能动态调整。")]),s._v(" "),t("li",[s._v("复杂度："),t("code",[s._v("O(1)")]),s._v(" 随机访问。")])]),s._v(" "),t("h3",{attrs:{id:"_13-std-forward-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_13-std-forward-list"}},[s._v("#")]),s._v(" 13. "),t("strong",[t("code",[s._v("std::forward_list")])])]),s._v(" "),t("ul",[t("li",[s._v("单向链表，比 "),t("code",[s._v("std::list")]),s._v(" 更轻量级。")]),s._v(" "),t("li",[s._v("特性：适合只需要单向遍历和操作的场景。")]),s._v(" "),t("li",[s._v("复杂度："),t("code",[s._v("O(1)")]),s._v(" 插入或删除，"),t("code",[s._v("O(n)")]),s._v(" 访问。")])]),s._v(" "),t("h3",{attrs:{id:"_14-std-multiset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_14-std-multiset"}},[s._v("#")]),s._v(" 14. "),t("strong",[t("code",[s._v("std::multiset")])])]),s._v(" "),t("ul",[t("li",[s._v("允许重复元素的有序集合，元素按顺序存储。")]),s._v(" "),t("li",[s._v("特性：基于红黑树实现，适合需要有序、允许重复元素的场景。")]),s._v(" "),t("li",[s._v("复杂度："),t("code",[s._v("O(log n)")]),s._v(" 插入、删除、查找。")])]),s._v(" "),t("h3",{attrs:{id:"_15-std-multimap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15-std-multimap"}},[s._v("#")]),s._v(" 15. "),t("strong",[t("code",[s._v("std::multimap")])])]),s._v(" "),t("ul",[t("li",[s._v("允许重复键的有序字典，键按顺序排列。")]),s._v(" "),t("li",[s._v("特性：基于红黑树实现，适合需要有序、允许重复键的键值对集合。")]),s._v(" "),t("li",[s._v("复杂度："),t("code",[s._v("O(log n)")]),s._v(" 插入、删除、查找。")])]),s._v(" "),t("h3",{attrs:{id:"_16-std-unordered-multiset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_16-std-unordered-multiset"}},[s._v("#")]),s._v(" 16. "),t("strong",[t("code",[s._v("std::unordered_multiset")])])]),s._v(" "),t("ul",[t("li",[s._v("允许重复元素的无序集合，元素不按顺序存储。")]),s._v(" "),t("li",[s._v("特性：基于哈希表实现，适合需要快速查找、允许重复元素的场景。")]),s._v(" "),t("li",[s._v("复杂度："),t("code",[s._v("O(1)")]),s._v(" 插入、删除、查找（平均）。")])]),s._v(" "),t("h3",{attrs:{id:"_17-std-unordered-multimap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_17-std-unordered-multimap"}},[s._v("#")]),s._v(" 17. "),t("strong",[t("code",[s._v("std::unordered_multimap")])])]),s._v(" "),t("ul",[t("li",[s._v("允许重复键的无序字典，键不按顺序存储。")]),s._v(" "),t("li",[s._v("特性：基于哈希表实现，适合需要快速查找、允许重复键的键值对集合。")]),s._v(" "),t("li",[s._v("复杂度："),t("code",[s._v("O(1)")]),s._v(" 插入、删除、查找（平均）。")])]),s._v(" "),t("h3",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("C++ 提供了丰富的数据结构，每种数据结构都有其特定的用途和性能特点。根据不同的应用场景选择合适的数据结构，可以有效提升程序的性能和代码的简洁性。")])])}),[],!1,null,null,null);t.default=e.exports}}]);