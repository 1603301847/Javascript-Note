/**
 * JSON: JavaScript Object Notation（JavaScript 对象标记法）。
 * JSON 是一种存储和交换数据的语法。
 * JSON 是通过 JavaScript 对象标记法书写的文本。
 */



/**
 * 交换数据
 * 当数据在浏览器与服务器之间进行交换时，这些数据只能是文本。
 * JSON 属于文本，并且我们能够把任何 JavaScript 对象转换为 JSON，然后将 JSON 发送到服务器。
 * 我们也能把从服务器接收到的任何 JSON 转换为 JavaScript 对象。
 * 以这样的方式，我们能够把数据作为 JavaScript 对象来处理，无需复杂的解析和转译。
 */



/**
 * 什么是 JSON？
 * JSON 指的是 JavaScript 对象标记法（JavaScript Object Notation）
 * JSON 是一种轻量级的数据交换格式
 * JSON 具有自我描述性且易于理解
 * JSON 独立于语言
 * JSON 使用 JavaScript 语法，但是 JSON 格式是纯文本的。
 * 文本可被任何编程语言作为数据来读取和使用。
 * JSON 格式最初由 Douglas Crockford 提出。
 */



/**
 * 为什么使用 JSON？
 * 因为 JSON 格式仅仅是文本，它能够轻松地在服务器浏览器之间传输，并用作任何编程语言的数据格式。
 * JavaScript 提供內建函数把以 JSON 格式写的字符串转换为原生 JavaScript 对象：JSON.parse()
 * 因此，如果您以 JSON 格式从服务器接收数据，那么您可以像任何其他 JavaScript 对象那样使用它。
 */



/**
  * JSON 语法是 JavaScript 语法的子集。
  *
  * JSON 语法规则
  * JSON 语法衍生于 JavaScript 对象标记法语法：
  * 数据在名称/值对中
  * 数据由逗号分隔
  * 花括号容纳对象
  * 方括号容纳数组
  *
  * JSON 数据- 名称和值
  * JSON 数据写为名称/值对。
  * 名称/值由字段名称构成，后跟冒号和值：
  * 实例 "name":"Bill Gates"
  * JSON 名称需要双引号。而 JavaScript 名称不需要。
  * JSON – 求值为 JavaScript 对象
  * JSON 格式几乎等同于 JavaScript 对象。
  * 在 JSON 中，键必须是字符串，由双引号包围：
  * 
  * JSON
  * { "name":"Bill Gates" }
  * 在 JavaScript 中，键可以是字符串、数字或标识符名称：
  * 
  * JavaScript
  * { name:"Bill Gates" }
  * JSON 值
  * 在 JSON 中，值必须是以下数据类型之一：
  * 字符串
  * 数字
  * 对象（JSON 对象）
  * 数组
  * 布尔
  * null
  * 在 JavaScript 中，以上所列均可为值，外加其他有效的 JavaScript 表达式，包括：
  * 函数
  * 日期
  * undefined
  * 在 JSON 中，字符串值必须由双引号编写：
  * JSON
  * { "name":"Bill Gates" }
  * 在 JavaScript 中，您可以书写使用双引号或单引号的字符串值：
  * 
  * JavaScript
  * { name:'Bill Gates' }
*/





/**
 * JSON vs XML
 * JSON 和 XML 均可用于从 web 服务器接收数据。
 * 
 * 下面的 JSON 和 XML 实例都定义了雇员对象，包含了由 3 个雇员构成的数组：
 * JSON 实例
 *  {"employees":[
        { "firstName":"Bill", "lastName":"Gates" },
        { "firstName":"Steve", "lastName":"Jobs" },
        { "firstName":"Elon", "lastName":"Musk" }
    ]}
 * XML 实例
 *  <employees>
        <employee>
            <firstName>Bill</firstName>
            <lastName>Gates</lastName>
        </employee>
        <employee>
            <firstName>Steve</firstName>
            <lastName>Jobs</lastName>
        </employee>
        <employee>
            <firstName>Elon</firstName>
            <lastName>Musk</lastName>
        </employee>
    </employees>
 *
 * JSON 类似 XML，因为:
 * JSON 和 XML 都是“自描述的”（人类可读的）
 * JSON 和 XML 都是分级的（值中有值）
 * JSON 和 XML 都能被大量编程语言解析和使用
 * JSON 和 XML 都能被 XMLHttpRequest 读取
 * JSON 与 XML 的差异在于：
 * JSON 不使用标签
 * JSON 更短
 * JSON 的读写速度更快
 * JSON 可使用数组
 * 最大的不同在于：XML 必须使用 XML 解析器进行解析。而 JSON 可通过标准的 JavaScript 函数进行解析。
 * 
 * 为什么 JSON 比 XML 更好？
 * XML 比 JSON 更难解析。
 * JSON 被解析为可供使用的 JavaScript 对象。
 * 对于 AJAX 应用程序，JSON 比 XML 更快更易用：
 * 
 * 使用 XML
 * 读取 XML 文档
 * 使用 XML DOM 遍历文档
 * 提取变量中存储的值
 * 
 * 使用 JSON
 * 读取 JSON 字符串
 * JSON.Parse JSON 字符串
 */

 /***
  * JSON 数据类型
  * 
  * 有效的数据类型
  * 
  * 在 JSON 中，值必须是以下数据类型之一：
  * 字符串
  * 数字
  * 对象（JSON 对象）
  * 数组
  * 布尔
  * Null
  * 
  * JSON 的值不可以是以下数据类型之一：
  * 函数
  * 日期
  * undefined
  * 
  * JSON 字符串: JSON 中的字符串必须用双引号包围。
  * { "name":"John" }
  * 
  * JSON 数字: JSON 中的数字必须是整数或浮点数。
  * { "age":30 }
  * 
  * JSON 对象: JSON 中的值可以是对象。
  * {"employee":{ "name":"Bill Gates", "age":62, "city":"Seattle" }}
  * JSON 中作为值的对象必须遵守与 JSON 对象相同的规则。
  * 
  * JSON 数组:JSON 中的值可以是数组。
  * {"employees":[ "Bill", "Steve", "David" ]}
  * 
  * JSON 布尔:JSON 中的值可以是 true/false。
  * { "sale":true }
  * 
  * JSON null:JSON 中的值可以是 null。
  * { "middlename":null }
  */