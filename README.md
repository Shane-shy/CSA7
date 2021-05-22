##CSA考核

1. 实现的功能

   + 搜索框部分
     + 点击中部，可弹出搜索框。搜索框中包含历史记录以及热门城市。
     + 点击热门城市的中的小框或者在搜索框中输入城市均可进行天气搜索。
     + 搜索过的城市会被加入到历史记录内。
     + 点击历史记录旁的垃圾篓，会清空历史记录，并且隐藏历史记录的位置。
     + 点击取消，可返回到原始界面。同时设置了*e*.preventDefault();防止点击穿透。
     + 右侧的分享按钮点击后会出现5中分享方式。点击取消可关闭。
     + 弹窗出现时，背景变黑并虚化。
   + 中间部分
     + 可显示当前温度，天气情况，当前的风向以及风强。
     + 左上角的小绿块可显示空气质量和对空气质量的平均。
     + 点击小绿块可查询更详细的空气质量。点击右上角×可关闭。（但因为接口间存在问题，获取失败）
   + 今日天气和明日天气预报
     + 可显示今天和明天的天气温度和天气的情况描述。
     + 可显示天气情况的图标。
   + 二十四小时天气预报
     + 可显示当前到未来二十四小时的天气温度，天气情况的图标以及当时的时间。
     + 实现了溢出隐藏，隐藏的部分可通过向右滑动显示。
   + 七天天气预报
     + 可显示当前到未来七天的星期、日期、白天与夜晚天气温度，天气情况以及其图标。
     + 可显示白天与夜晚天气温度的平滑折线图。
     + 同样实现了溢出隐藏，隐藏部分可通过向右滑动显示。实现方式与上一个相同。
   + 生活指数
     + 这里有十六个不同的生活指数。每一个都可点击，并且弹出更详细的生活建议。
     + 每个弹出的详细生活建议的边框颜色均不同。
     + 点击我知道了可返回原界面。
     + 弹窗出现时，背景变黑并虚化。
     + 该板块可左右滑动，实现溢出隐藏。下端的灰色长方形可根据当前的页数而改变。

2. 使用的技术

   + 布局上，主要使用了浮动进行布局。实在不行的，采用定位进行完善。距离单位采用的是vw和vh，因此可是配其他设备。
   + 获取数据上，使用自己封装的ajax函数进行获取。
   + 使用了css，JavaScript进行美化。
   + 绘制平滑折线图，使用了echart.js进行绘制。

3. 亮点

   + 无

4. 缺点

   + 由于是第一次写这么长的程序，从一开始就没有封装函数的概念。除了使用率最高的ajax和echart进行了封装外，几乎没有封装其他函数。导致了程序特别混乱，甚至到最后我自己的不想去看。
   + 一些程序重复率高，程序不简洁。由于过于不简洁，使数据请求次数过多，导致请求速度慢。
   + 绘制的echart图像，不能适配其他设备。

5. 总结

   ​		这次考核，让我深刻领悟到了封装函数的重要性，以及写大一点的程序，要先想好思路，不能想到哪里写哪里，同时也多亏了之前写了一点注释，不然最后自己也看不懂。总的来说，这次考核让我对前端的一些知识进行了有效的复习，更重要的是让我深刻认识到了良好的编程习惯的重要性，这对以后的编程有很大的帮助。

6. 接口附录

   + https://tianqiapi.com/free/day?  获取搜索城市当前的基本天气情况，空气指数以及评价。

   +  https://v0.yiketianqi.com/api? 获取二十四小时的时刻天气基本情况。

   + https://www.tianqiapi.com/life/lifepro?  获取生活指数和相关建议。

     （以上大多是付费接口，新用户仅能使用2000次）
