/**
 * AJAX 如何工作
 * 网页中发生一个事件（页面加载、按钮点击）
 * 由 JavaScript 创建 XMLHttpRequest 对象
 * XMLHttpRequest 对象向 web 服务器发送请求
 * 服务器处理该请求
 * 服务器将响应发送回网页
 * 由 JavaScript 读取响应
 * 由 JavaScript 执行正确的动作（比如更新页面）
 */



 /**
  * AJAX - XMLHttpRequest 对象
  * Ajax 的核心是 XMLHttpRequest 对象。
  * 
  * XMLHttpRequest 对象
  * 所有现代浏览器都支持 XMLHttpRequest 对象。
  * XMLHttpRequest 对象用于同幕后服务器交换数据。
  * 这意味着可以更新网页的部分，而不需要重新加载整个页面。
  * 
  * 创建 XMLHttpRequest 对象
  * 所有现代浏览器（Chrom、IE7+、Firefox、Safari 以及 Opera）都有内建的 XMLHttpRequest 对象。
  * 创建 XMLHttpRequest 的语法是： variable = new XMLHttpRequest();
  * 
  * XMLHttpRequest 对象方法
  * new XMLHttpRequest()    创建新的 XMLHttpRequest 对象
  * abort()                 取消当前请求
  * getAllResponseHeaders() 返回头部信息
  * getResponseHeader()     返回特定的头部信息
  * open(method, url, async, user, psw)     method：请求类型 GET 或 POST 
  *                                         url：文件位置 
  *                                         async：true（异步）或 false（同步） 
  *                                         user：可选的用户名称     
  *                                         psw：可选的密码
  * send()                  将请求发送到服务器，用于 GET 请求
  * send(string)            将请求发送到服务器，用于 POST 请求
  * setRequestHeader()      向要发送的报头添加标签/值对
  * 
  * XMLHttpRequest 对象属性
  * onreadystatechange      定义当 readyState 属性发生变化时被调用的函数
  * readyState              保存 XMLHttpRequest 的状态。
  *                         0：请求未初始化
  *                         1：服务器连接已建立
  *                         2：请求已收到
  *                         3：正在处理请求
  *                         4：请求已完成且响应已就绪
  * responseText            以字符串返回响应数据
  * responseXML             以 XML 数据返回响应数据
  * status                  返回请求的状态号    200: "OK"  403: "Forbidden"    404: "Not Found"
  * statusText              返回状态文本（比如 "OK" 或 "Not Found"）
  */

  /**
   * AJAX - 向服务器发送请求
   * XMLHttpRequest 对象用于同服务器交换数据。
   * 向服务器发送请求
   * 如需向服务器发送请求，我们使用 XMLHttpRequest 对象的 open() 和 send() 方法：
   * xhttp.open("GET", "ajax_info.txt", true);
   * xhttp.send();
   * 
   * open(method, url, async)           规定请求的类型
   *                                    method：请求的类型：GET 还是 POST
   *                                    url：服务器（文件）位置
   *                                    async：true（异步）或 false（同步）
   * 
   * send()                             向服务器发送请求（用于 GET）
   * send(string)                       向服务器发送请求（用于 POST）
   * 
   * GET 还是 POST？    GET 比 POST 更简单更快，可用于大多数情况下。
   * 不过，请在以下情况始终使用 POST：缓存文件不是选项（更新服务器上的文件或数据库）
   * 向服务器发送大量数据（POST 无大小限制）发送用户输入（可包含未知字符），POST 比 GET 更强大更安全
   * 
   * setRequestHeader(header, value)    向请求添加 HTTP 头部
   *                                    header：规定头部名称
   *                                    value：规定头部值
   * 
   * 如需异步发送请求，open() 方法的 async 参数必须设置为 true
   * 
   * onreadystatechange 属性
   * 通过 XMLHttpRequest 对象，您可以定义当请求接收到应答时所执行的函数。
   * 这个函数是在 XMLHttpResponse 对象的 onreadystatechange 属性中定义的
   * 
   * 同步请求
   * 如需执行同步的请求，请把 open() 方法中的第三个参数设置为 false
   * xhttp.open("GET", "ajax_info.txt", false);
   */

   /**
    * AJAX - 服务器响应
    * onreadystatechange 属性       定义了当 readyState 属性发生改变时所调用的函数。
    * readyState属性                存留 XMLHttpRequest 的状态。  0: 请求未初始化   1: 服务器连接已建立   2: 请求已接收   3: 正在处理请求   4: 请求已完成且响应已就绪
    * onreadystatechange属性        定义当 readyState 发生变化时执行的函数。
    * status 属性和 statusText属性  存有 XMLHttpRequest 对象的状态。
    * status 属性   200: "OK"     403: "Forbidden"    404: "Page not found"
    * statusText                    返回状态文本（例如 "OK" 或 "Not Found"）
    * 
    * 每当 readyState 发生变化时就会调用 onreadystatechange 函数。
    * 当 readyState 为 4，status 为 200 时，响应就绪
    * onreadystatechange 被触发五次（0-4），每次 readyState 都发生变化。
    * 
    * 使用回调函数
    * 回调函数是一种作为参数被传递到另一个函数的函数。
    * 如果您的网站中有多个 AJAX 任务，那么您应该创建一个执行 XMLHttpRequest 对象的函数，以及一个供每个 AJAX 任务的回调函数。
    * 该函数应当包含 URL 以及当响应就绪时调用的函数。
    * 
    * 服务器响应属性
    * responseText  获取字符串形式的响应数据
    * responseXML   获取 XML 数据形式的响应数据
    * 
    * 服务器响应方法
    * getResponseHeader()       从服务器返回特定的头部信息
    * getAllResponseHeaders()   从服务器返回所有头部信息
    * 
    * responseText属性: responseText 属性以 JavaScript 字符串的形式返回服务器响应
    * 
    * responseXML属性: XML HttpRequest 对象有一个內建的 XML 解析器。ResponseXML 属性以 XML DOM 对象返回服务器响应。
    * 
    * getAllResponseHeaders() 方法返回所有来自服务器响应的头部信息。
    * 
    * getResponseHeader() 方法返回来自服务器响应的特定头部信息。
    */