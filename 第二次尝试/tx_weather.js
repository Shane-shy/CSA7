window.onload = () => {
    //封装ajax函数。此ajax封装函数取自第六次作业，然后部分修改
    function ajax({
        url, //地址
        params, //参数
        async = 'true', //是否异步
        dataType, //数据类型
        success, //成功时做出的反应
    }) {
        let xhr = new XMLHttpRequest();
        //所给接口均为get

        if (params && params != "") {
            url += params;
        }
        xhr.open("GET", url, async);
        xhr.send(null);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                    let result = null;
                    if (dataType == 'json') {
                        let result = JSON.parse(xhr.responseText)
                        success(result);
                    } else if (dataType == 'XML') {
                        result = xhr.responseXML;
                        success(result);
                    } else {
                        result = xhr.responseText;
                        success(result);
                    }
                }
            }
        }
    }

    function Orangechart(arr) {
        let myChart = echarts.init(document.querySelector("#echart_up"));
        let option;

        data = [{
            value: [
                "2021-1-1",
                arr[0]
            ]
        }, {

            value: [
                "2021-1-5",
                arr[1]
            ]
        }, {

            value: [
                "2021-1-9",
                arr[2]
            ]
        }, {

            value: [
                "2021-1-13",
                arr[3]
            ]
        }, {

            value: [
                "2021-1-17",
                arr[4]
            ]
        }, {

            value: [
                "2021-1-21",
                arr[5]
            ]
        }, {

            value: [
                "2021-1-25",
                arr[6]
            ]
        }, {

            value: [
                "2021-1-29",
                arr[7]
            ]
        }, {
            value: [
                "2021-1-29",
                arr[8]
            ]
        }]

        option = {
            xAxis: {
                type: 'time',
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false,

                },
            },
            yAxis: {
                type: 'value',
                max: 40,
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false

                },
            },
            series: [{
                data: data,
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        color: "orange ",
                        lineStyle: {
                            width: 3 //设置线条粗细
                        },
                        label: {
                            show: true,
                            formatter: function(data) {
                                let res = "";
                                res = data.data.value[1] + "°";
                                return res;
                            }
                        },

                    },

                },
                symbolSize: 6,
                symbol: 'circle',

            }],
            grid: {
                show: false,
                x: 40,
                x2: 20,
                y: 12,
            },

            textStyle: {
                fontSize: 15,
                color: 'black'
            }
        };


        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
    }

    function Lightbluechart(arr) {
        let myChart = echarts.init(document.querySelector("#echart_down"));
        let option;

        data = [{
            value: [
                "2021-1-1",
                arr[0]
            ]
        }, {

            value: [
                "2021-1-5",
                arr[1]
            ]
        }, {

            value: [
                "2021-1-9",
                arr[2]
            ]
        }, {

            value: [
                "2021-1-13",
                arr[3]
            ]
        }, {

            value: [
                "2021-1-17",
                arr[4]
            ]
        }, {

            value: [
                "2021-1-21",
                arr[5]
            ]
        }, {

            value: [
                "2021-1-25",
                arr[6]
            ]
        }, {

            value: [
                "2021-1-29",
                arr[7]
            ]
        }, {
            value: [
                "2021-1-29",
                arr[8]
            ]
        }]

        option = {
            xAxis: {
                type: 'time',
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false,

                },
            },
            yAxis: {
                type: 'value',
                max: 40,
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false

                },
            },
            series: [{
                data: data,
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        color: "lightblue ",
                        lineStyle: {
                            width: 3 //设置线条粗细
                        },
                        label: {
                            show: true,
                            formatter: function(data) {
                                let res = "";
                                res = data.data.value[1] + "°";
                                return res;
                            }
                        },

                    },

                },
                symbolSize: 6,
                symbol: 'circle',

            }],
            grid: {
                show: false,
                x: 40,
                x2: 20,
                y: 12,
            },

            textStyle: {
                fontSize: 15,
                color: 'black'
            }
        };


        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
    }

    //存储温度
    var bWendu = [];
    var yWendu = [];
    //搜索框
    let location = document.querySelector(".location");
    let all = document.querySelector(".all");
    let search = document.querySelector(".search");
    let input = document.querySelector(".search_area").querySelector("div").querySelector("input");
    let below = document.querySelector(".below");
    let search_delete = document.querySelector(".search_delete");
    let search_history = document.querySelector(".search_history");
    let city = document.getElementById("city");
    //获取当前年月日
    const date = new Date();
    const current_year = date.getFullYear();
    const current_month = date.getMonth() + 1;
    const current_date = date.getDate();
    location.addEventListener("touchend", function(e) {
        all.style.display = "none";
        search.style.display = "block";
        e.preventDefault();
    })
    input.onfocus = () => {
        below.style.display = "none";
    }
    input.onblur = () => {
        below.style.display = "block";
    }
    search_delete.addEventListener("touchend", function(e) {
        all.style.display = "block";
        search.style.display = "none";
        input.value = "";
        e.preventDefault();
    })


    input.onkeypress = (e) => {
        if (e.key === "Enter") {
            // 搜索框请求数据
            ajax({
                url: "https://tianqiapi.com/free/day?appid=18513295&appsecret=ijN27Pzy&city=",
                params: input.value,
                async: "true",
                dataType: "json",
                success: function(res) {
                    city.innerHTML = res.city;
                    // 生成历史记录
                    let lis = document.createElement("li");
                    let ul = document.querySelector(".history_city");
                    search_history.style.display = "block";
                    lis.innerHTML = res.city;
                    ul.insertBefore(lis, ul.children[0]);
                    let air = document.querySelector(".pic").querySelector("div").querySelector(".value");
                    air.innerHTML = res.air;
                    let tem = document.querySelector(".pic").querySelector(".temp");
                    tem.innerHTML = res.tem;
                    let wea = document.querySelector(".pic").querySelector(".weather_condition");
                    wea.innerHTML = res.wea;
                    let more = document.querySelector(".pic").querySelector(".more");
                    more.innerHTML = res.win + " " + res.win_speed;
                    //让历史记录可点击
                    let history_ul = document.querySelector(".search_history").querySelector(".history").querySelector("ul");
                    for (let i = 0; i < history_ul.children.length; i++) {
                        history_ul.children[i].addEventListener("touchend", function(e) {
                            ajax({
                                url: "https://tianqiapi.com/free/day?appid=18513295&appsecret=ijN27Pzy&city=",
                                params: history_ul.children[i].innerHTML,
                                async: "true",
                                dataType: "json",
                                success: function(res) {
                                    let city = document.getElementById("city");
                                    city.innerHTML = res.city;
                                    //生成历史记录
                                    let lis = document.createElement("li");
                                    let ul = document.querySelector(".history_city");
                                    search_history.style.display = "block";
                                    lis.innerHTML = res.city;
                                    ul.insertBefore(lis, ul.children[0]);
                                    let air = document.querySelector(".pic").querySelector("div").querySelector(".value");
                                    air.innerHTML = res.air;
                                    let tem = document.querySelector(".pic").querySelector(".temp");
                                    tem.innerHTML = res.tem;
                                    let wea = document.querySelector(".pic").querySelector(".weather_condition");
                                    wea.innerHTML = res.wea;
                                    let more = document.querySelector(".pic").querySelector(".more");
                                    more.innerHTML = res.win + " " + res.win_speed;

                                    // console.log(res);
                                    // 今明两天天气
                                    ajax({
                                        url: "https://v0.yiketianqi.com/api?version=v91&appid=18513295&appsecret=ijN27Pzy&ext=&city=",
                                        params: city.innerHTML,
                                        async: "true",
                                        dataType: "json",
                                        success: function(res) {
                                            // console.log(res);
                                            let today_temp = document.querySelector(".weather_box").querySelector(".weather_today").querySelector(".weather_temp");
                                            let tomorrow_temp = document.querySelector(".weather_box").querySelector(".weather_tomorrow").querySelector(".weather_temp");
                                            today_temp.innerHTML = res.data[0].tem1 + "/" + res.data[0].tem2;
                                            tomorrow_temp.innerHTML = res.data[1].tem1 + "/" + res.data[1].tem2;
                                            let today_weather_cdt = document.querySelector(".weather_box").querySelector(".weather_today").querySelector(".weather_cdt");
                                            let tomorrow_weather_cdt = document.querySelector(".weather_box").querySelector(".weather_tomorrow").querySelector(".weather_cdt");
                                            today_weather_cdt.innerHTML = res.data[0].wea;
                                            tomorrow_weather_cdt.innerHTML = res.data[1].wea;
                                            let today_img = document.querySelector(".weather_box").querySelector(".weather_today").querySelector("img");
                                            let tomorrow_img = document.querySelector(".weather_box").querySelector(".weather_tomorrow").querySelector("img");
                                            let weather_name_today = res.data[0].wea_day_img;
                                            let weather_name_tomorrow = res.data[1].wea_day_img;
                                            today_img.src = "../iconfont/font_weather/" + weather_name_today + ".png";
                                            tomorrow_img.src = "../iconfont/font_weather/" + weather_name_tomorrow + ".png";
                                            let level = document.querySelector(".pic").querySelector(".level")
                                            level.innerHTML = res.data[0].air_level;
                                        }
                                    })

                                    //时刻天气
                                    ajax({
                                            url: "https://v0.yiketianqi.com/api?version=v62&appid=18513295&appsecret=ijN27Pzy&city=",
                                            params: city.innerHTML,
                                            async: "true",
                                            dataType: "json",
                                            success: function(res) {
                                                // console.log(res);
                                                let current_time = document.querySelectorAll(".current_time");
                                                for (let i = 0; i < 23; i++) {
                                                    current_time[i].innerHTML = res.hours[i].hours;
                                                }
                                                let current_img = document.querySelectorAll("#current_img");
                                                // console.log(current_img);
                                                for (let i = 0; i < 23; i++) {
                                                    current_img[i].src = "../iconfont/font_weather/" + res.hours[i].wea_img + ".png";
                                                }
                                                let current_degree = document.querySelectorAll(".current_degree");
                                                for (let i = 0; i < 23; i++) {
                                                    current_degree[i].innerHTML = res.hours[i].tem;
                                                }
                                            }
                                        })
                                        //类轮播图
                                    ajax({
                                        url: "https://www.tianqiapi.com/life/lifepro?appid=18513295&appsecret=ijN27Pzy&city=",
                                        params: city.innerHTML,
                                        async: "true",
                                        dataType: "json",
                                        success: function(res) {
                                            // console.log(res);
                                            let f_line = document.querySelectorAll("#f_line");
                                            let title = document.querySelectorAll(".title");
                                            let infor = document.querySelectorAll(".infor");
                                            let btn = document.querySelectorAll(".btn_close");
                                            let names = ["chuanyi", "yusan", "ganmao", "xiche", "yundong", "fangshai", "diaoyu", "lvyou", "jiaotong", "wuran", "shushidu", "liangshai", "huazhuang", "chenlian", "guomin", "zhongshu"];
                                            let colors = ["#e1a4c", "#c1a4e0", "#dfc79c", "#b5e6a8", "#e6d99d", "#dbada0", "#a3dfd4", "#edac96", "#8ba5af", "#b28a90", "#9ec48c", "#a6bacc", "#e09090", "#87c5dd", "#95a3db", "#ff8a65"];
                                            // // //这个有简便点的方法吗？
                                            f_line[0].innerHTML = res.data.chuanyi.level;
                                            title[0].innerHTML = res.data.chuanyi.name;
                                            title[0].style.backgroundColor = "#e1a4c4";
                                            btn[0].style.backgroundColor = "#e1a4c4";
                                            infor[0].innerHTML = res.data.chuanyi.desc;

                                            f_line[1].innerHTML = res.data.yusan.level;
                                            title[1].innerHTML = res.data.yusan.name;
                                            title[1].style.backgroundColor = "#c1a4e0";
                                            btn[1].style.backgroundColor = "#c1a4e0";
                                            infor[1].innerHTML = res.data.yusan.desc;

                                            f_line[2].innerHTML = res.data.ganmao.level;
                                            title[2].innerHTML = res.data.ganmao.name;
                                            title[2].style.backgroundColor = "#dfc79c";
                                            btn[2].style.backgroundColor = "#dfc79c";
                                            infor[2].innerHTML = res.data.ganmao.desc;

                                            f_line[3].innerHTML = res.data.xiche.level;
                                            title[3].innerHTML = res.data.xiche.name;
                                            title[3].style.backgroundColor = "#b5e6a8";
                                            btn[3].style.backgroundColor = "#b5e6a8";
                                            infor[3].innerHTML = res.data.xiche.desc;

                                            f_line[4].innerHTML = res.data.yundong.level;
                                            title[4].innerHTML = res.data.yundong.name;
                                            title[4].style.backgroundColor = "#e6d99d";
                                            btn[4].style.backgroundColor = "#e6d99d";
                                            infor[4].innerHTML = res.data.yundong.desc;

                                            f_line[5].innerHTML = res.data.fangshai.level;
                                            title[5].innerHTML = res.data.fangshai.name;
                                            title[5].style.backgroundColor = "#dbada0";
                                            btn[5].style.backgroundColor = "#dbada0";
                                            infor[5].innerHTML = res.data.fangshai.desc;

                                            f_line[6].innerHTML = res.data.diaoyu.level;
                                            title[6].innerHTML = res.data.diaoyu.name;
                                            title[6].style.backgroundColor = "#a3dfd4";
                                            btn[6].style.backgroundColor = "#a3dfd4";
                                            infor[6].innerHTML = res.data.diaoyu.desc;

                                            f_line[7].innerHTML = res.data.lvyou.level;
                                            title[7].innerHTML = res.data.lvyou.name;
                                            title[7].style.backgroundColor = "#edac96";
                                            btn[7].style.backgroundColor = "#edac96";
                                            infor[7].innerHTML = res.data.lvyou.desc;

                                            f_line[8].innerHTML = res.data.jiaotong.level;
                                            title[8].innerHTML = res.data.jiaotong.name;
                                            title[8].style.backgroundColor = "#8ba5af";
                                            btn[8].style.backgroundColor = "#8ba5af";
                                            infor[8].innerHTML = res.data.jiaotong.desc;

                                            f_line[9].innerHTML = res.data.wuran.level;
                                            title[9].innerHTML = res.data.wuran.name;
                                            title[9].style.backgroundColor = "#b28a90";
                                            btn[9].style.backgroundColor = "#b28a90";
                                            infor[9].innerHTML = res.data.wuran.desc;

                                            f_line[10].innerHTML = res.data.shushidu.level;
                                            title[10].innerHTML = res.data.shushidu.name;
                                            title[10].style.backgroundColor = "#9ec48c";
                                            btn[10].style.backgroundColor = "#9ec48c";
                                            infor[10].innerHTML = res.data.shushidu.desc;

                                            f_line[11].innerHTML = res.data.liangshai.level;
                                            title[11].innerHTML = res.data.liangshai.name;
                                            title[11].style.backgroundColor = "#a6bacc";
                                            btn[11].style.backgroundColor = "#a6bacc";
                                            infor[11].innerHTML = res.data.liangshai.desc;

                                            f_line[12].innerHTML = res.data.huazhuang.level;
                                            title[12].innerHTML = res.data.huazhuang.name;
                                            title[12].style.backgroundColor = "#e09090";
                                            btn[12].style.backgroundColor = "#e09090";
                                            infor[12].innerHTML = res.data.huazhuang.desc;

                                            f_line[13].innerHTML = res.data.chenlian.level;
                                            title[13].innerHTML = res.data.chenlian.name;
                                            title[13].style.backgroundColor = "#87c5dd";
                                            btn[13].style.backgroundColor = "#87c5dd";
                                            infor[13].innerHTML = res.data.chenlian.desc;

                                            f_line[14].innerHTML = res.data.guomin.level;
                                            title[14].innerHTML = res.data.guomin.name;
                                            title[14].style.backgroundColor = "#95a3db";
                                            btn[14].style.backgroundColor = "#95a3db";
                                            infor[14].innerHTML = res.data.guomin.desc;

                                            f_line[15].innerHTML = res.data.zhongshu.level;
                                            title[15].innerHTML = res.data.zhongshu.name;
                                            title[15].style.backgroundColor = "#ff8a65";
                                            btn[15].style.backgroundColor = "#ff8a65";
                                            infor[15].innerHTML = res.data.zhongshu.desc;

                                        }
                                    })


                                    //折线图 上下数据
                                    ajax({ //获取七天天气情况
                                        url: "https://v0.yiketianqi.com/api?version=v91&appid=18513295&appsecret=ijN27Pzy&city=",
                                        params: city.innerHTML,
                                        async: "true",
                                        dataType: "json",
                                        success: function(res) {
                                            // console.log(res);
                                            let weeks = document.querySelector(".weather_predict").querySelectorAll("#week");
                                            let dates = document.querySelector(".weather_predict").querySelectorAll("#date");
                                            let weather_cdt_days = document.querySelectorAll("#weather_cdt_day");
                                            let weather_cdt_nights = document.querySelectorAll("#weather_cdt_night");
                                            let wind_directions = document.querySelectorAll(".wind_direction");
                                            let wind_levels = document.querySelectorAll(".wind_level");
                                            let day_imgs = document.querySelectorAll("#day_img");
                                            let night_imgs = document.querySelectorAll("#night_img");
                                            for (let i = 0; i < 7; i++) {
                                                if (i == 0) {
                                                    weeks[i].innerHTML = "今天";
                                                } else if (i == 1) {
                                                    weeks[i].innerHTML = "明天";
                                                } else if (i > 1) {
                                                    weeks[i].innerHTML = res.data[i].week;
                                                }

                                                dates[i].innerHTML = res.data[i].date.slice(5, res.data[i].date.length);
                                                weather_cdt_days[i].innerHTML = res.data[i].wea_day;
                                                weather_cdt_nights[i].innerHTML = res.data[i].wea_night;
                                                wind_directions[i].innerHTML = res.data[i].win[1];
                                                wind_levels[i].innerHTML = res.data[i].win_speed;
                                                day_imgs[i].src = "../iconfont/font_weather/" + res.data[i].wea_day_img + ".png";
                                                night_imgs[i].src = "../iconfont/font_weather/" + res.data[i].wea_night_img + ".png";
                                                bWendu.push(res.data[i].tem1);
                                                yWendu.push(res.data[i].tem2);
                                            }
                                            // console.log(bWendu);
                                            // console.log(yWendu);
                                            bWendu = bWendu.map(Number);
                                            yWendu = yWendu.map(Number);
                                            Orangechart(bWendu);
                                            Lightbluechart(yWendu);
                                        }
                                    })

                                }
                            });

                            all.style.display = "block";
                            search.style.display = "none";
                            e.preventDefault();
                        })
                    }
                    // console.log(res);
                    //今明两天天气
                    ajax({
                        url: "https://v0.yiketianqi.com/api?version=v91&appid=18513295&appsecret=ijN27Pzy&ext=&city=",
                        params: city.innerHTML,
                        async: "true",
                        dataType: "json",
                        success: function(res) {
                            // console.log(res);
                            let today_temp = document.querySelector(".weather_box").querySelector(".weather_today").querySelector(".weather_temp");
                            let tomorrow_temp = document.querySelector(".weather_box").querySelector(".weather_tomorrow").querySelector(".weather_temp");
                            today_temp.innerHTML = res.data[0].tem1 + "/" + res.data[0].tem2;
                            tomorrow_temp.innerHTML = res.data[1].tem1 + "/" + res.data[1].tem2;
                            let today_weather_cdt = document.querySelector(".weather_box").querySelector(".weather_today").querySelector(".weather_cdt");
                            let tomorrow_weather_cdt = document.querySelector(".weather_box").querySelector(".weather_tomorrow").querySelector(".weather_cdt");
                            today_weather_cdt.innerHTML = res.data[0].wea;
                            tomorrow_weather_cdt.innerHTML = res.data[1].wea;
                            let today_img = document.querySelector(".weather_box").querySelector(".weather_today").querySelector("img");
                            let tomorrow_img = document.querySelector(".weather_box").querySelector(".weather_tomorrow").querySelector("img");
                            let weather_name_today = res.data[0].wea_day_img;
                            let weather_name_tomorrow = res.data[1].wea_day_img;
                            today_img.src = "../iconfont/font_weather/" + weather_name_today + ".png";
                            tomorrow_img.src = "../iconfont/font_weather/" + weather_name_tomorrow + ".png";
                            let level = document.querySelector(".pic").querySelector(".level")
                            level.innerHTML = res.data[0].air_level;
                        }
                    })

                    //时刻天气
                    ajax({
                            url: "https://v0.yiketianqi.com/api?version=v62&appid=18513295&appsecret=ijN27Pzy&city=",
                            params: city.innerHTML,
                            async: "true",
                            dataType: "json",
                            success: function(res) {
                                // console.log(res);
                                let current_time = document.querySelectorAll(".current_time");
                                for (let i = 0; i < 23; i++) {
                                    current_time[i].innerHTML = res.hours[i].hours;
                                }
                                let current_img = document.querySelectorAll("#current_img");
                                // console.log(current_img);
                                for (let i = 0; i < 23; i++) {
                                    current_img[i].src = "../iconfont/font_weather/" + res.hours[i].wea_img + ".png";
                                }
                                let current_degree = document.querySelectorAll(".current_degree");
                                for (let i = 0; i < 23; i++) {
                                    current_degree[i].innerHTML = res.hours[i].tem;
                                }
                            }
                        })
                        //类轮播图
                    ajax({
                        url: "https://www.tianqiapi.com/life/lifepro?appid=18513295&appsecret=ijN27Pzy&city=",
                        params: city.innerHTML,
                        async: "true",
                        dataType: "json",
                        success: function(res) {
                            // console.log(res);
                            let f_line = document.querySelectorAll("#f_line");
                            let title = document.querySelectorAll(".title");
                            let infor = document.querySelectorAll(".infor");
                            let btn = document.querySelectorAll(".btn_close");
                            let names = ["chuanyi", "yusan", "ganmao", "xiche", "yundong", "fangshai", "diaoyu", "lvyou", "jiaotong", "wuran", "shushidu", "liangshai", "huazhuang", "chenlian", "guomin", "zhongshu"];
                            let colors = ["#e1a4c", "#c1a4e0", "#dfc79c", "#b5e6a8", "#e6d99d", "#dbada0", "#a3dfd4", "#edac96", "#8ba5af", "#b28a90", "#9ec48c", "#a6bacc", "#e09090", "#87c5dd", "#95a3db", "#ff8a65"];
                            // // //这个有简便点的方法吗？
                            f_line[0].innerHTML = res.data.chuanyi.level;
                            title[0].innerHTML = res.data.chuanyi.name;
                            title[0].style.backgroundColor = "#e1a4c4";
                            btn[0].style.backgroundColor = "#e1a4c4";
                            infor[0].innerHTML = res.data.chuanyi.desc;

                            f_line[1].innerHTML = res.data.yusan.level;
                            title[1].innerHTML = res.data.yusan.name;
                            title[1].style.backgroundColor = "#c1a4e0";
                            btn[1].style.backgroundColor = "#c1a4e0";
                            infor[1].innerHTML = res.data.yusan.desc;

                            f_line[2].innerHTML = res.data.ganmao.level;
                            title[2].innerHTML = res.data.ganmao.name;
                            title[2].style.backgroundColor = "#dfc79c";
                            btn[2].style.backgroundColor = "#dfc79c";
                            infor[2].innerHTML = res.data.ganmao.desc;

                            f_line[3].innerHTML = res.data.xiche.level;
                            title[3].innerHTML = res.data.xiche.name;
                            title[3].style.backgroundColor = "#b5e6a8";
                            btn[3].style.backgroundColor = "#b5e6a8";
                            infor[3].innerHTML = res.data.xiche.desc;

                            f_line[4].innerHTML = res.data.yundong.level;
                            title[4].innerHTML = res.data.yundong.name;
                            title[4].style.backgroundColor = "#e6d99d";
                            btn[4].style.backgroundColor = "#e6d99d";
                            infor[4].innerHTML = res.data.yundong.desc;

                            f_line[5].innerHTML = res.data.fangshai.level;
                            title[5].innerHTML = res.data.fangshai.name;
                            title[5].style.backgroundColor = "#dbada0";
                            btn[5].style.backgroundColor = "#dbada0";
                            infor[5].innerHTML = res.data.fangshai.desc;

                            f_line[6].innerHTML = res.data.diaoyu.level;
                            title[6].innerHTML = res.data.diaoyu.name;
                            title[6].style.backgroundColor = "#a3dfd4";
                            btn[6].style.backgroundColor = "#a3dfd4";
                            infor[6].innerHTML = res.data.diaoyu.desc;

                            f_line[7].innerHTML = res.data.lvyou.level;
                            title[7].innerHTML = res.data.lvyou.name;
                            title[7].style.backgroundColor = "#edac96";
                            btn[7].style.backgroundColor = "#edac96";
                            infor[7].innerHTML = res.data.lvyou.desc;

                            f_line[8].innerHTML = res.data.jiaotong.level;
                            title[8].innerHTML = res.data.jiaotong.name;
                            title[8].style.backgroundColor = "#8ba5af";
                            btn[8].style.backgroundColor = "#8ba5af";
                            infor[8].innerHTML = res.data.jiaotong.desc;

                            f_line[9].innerHTML = res.data.wuran.level;
                            title[9].innerHTML = res.data.wuran.name;
                            title[9].style.backgroundColor = "#b28a90";
                            btn[9].style.backgroundColor = "#b28a90";
                            infor[9].innerHTML = res.data.wuran.desc;

                            f_line[10].innerHTML = res.data.shushidu.level;
                            title[10].innerHTML = res.data.shushidu.name;
                            title[10].style.backgroundColor = "#9ec48c";
                            btn[10].style.backgroundColor = "#9ec48c";
                            infor[10].innerHTML = res.data.shushidu.desc;

                            f_line[11].innerHTML = res.data.liangshai.level;
                            title[11].innerHTML = res.data.liangshai.name;
                            title[11].style.backgroundColor = "#a6bacc";
                            btn[11].style.backgroundColor = "#a6bacc";
                            infor[11].innerHTML = res.data.liangshai.desc;

                            f_line[12].innerHTML = res.data.huazhuang.level;
                            title[12].innerHTML = res.data.huazhuang.name;
                            title[12].style.backgroundColor = "#e09090";
                            btn[12].style.backgroundColor = "#e09090";
                            infor[12].innerHTML = res.data.huazhuang.desc;

                            f_line[13].innerHTML = res.data.chenlian.level;
                            title[13].innerHTML = res.data.chenlian.name;
                            title[13].style.backgroundColor = "#87c5dd";
                            btn[13].style.backgroundColor = "#87c5dd";
                            infor[13].innerHTML = res.data.chenlian.desc;

                            f_line[14].innerHTML = res.data.guomin.level;
                            title[14].innerHTML = res.data.guomin.name;
                            title[14].style.backgroundColor = "#95a3db";
                            btn[14].style.backgroundColor = "#95a3db";
                            infor[14].innerHTML = res.data.guomin.desc;

                            f_line[15].innerHTML = res.data.zhongshu.level;
                            title[15].innerHTML = res.data.zhongshu.name;
                            title[15].style.backgroundColor = "#ff8a65";
                            btn[15].style.backgroundColor = "#ff8a65";
                            infor[15].innerHTML = res.data.zhongshu.desc;

                        }
                    })

                    //折线图 上下数据
                    ajax({ //获取七天天气情况
                        url: "https://v0.yiketianqi.com/api?version=v91&appid=18513295&appsecret=ijN27Pzy&city=",
                        params: city.innerHTML,
                        async: "true",
                        dataType: "json",
                        success: function(res) {
                            console.log(res);
                            let weeks = document.querySelector(".weather_predict").querySelectorAll("#weeks");
                            let dates = document.querySelector(".weather_predict").querySelectorAll("#date");
                            let weather_cdt_days = document.querySelectorAll("#weather_cdt_day");
                            let weather_cdt_nights = document.querySelectorAll("#weather_cdt_night");
                            let wind_directions = document.querySelectorAll("#wind_direction");
                            let wind_levels = document.querySelectorAll("#wind_level");
                            let day_imgs = document.querySelectorAll("#day_img");
                            let night_imgs = document.querySelectorAll("#night_img");
                            for (let i = 0; i < 7; i++) {
                                if (i == 0) {
                                    weeks[i].innerHTML = "今天";
                                } else if (i == 1) {
                                    weeks[i].innerHTML = "明天";
                                } else if (i > 1) {
                                    weeks[i].innerHTML = res.data[i].week;
                                }

                                dates[i].innerHTML = res.data[i].date.slice(5, res.data[i].date.length);
                                weather_cdt_days[i].innerHTML = res.data[i].wea_day;
                                weather_cdt_nights[i].innerHTML = res.data[i].wea_night;
                                wind_directions[i].innerHTML = res.data[i].win[1];
                                wind_levels[i].innerHTML = res.data[i].win_speed;
                                day_imgs[i].src = "../iconfont/font_weather/" + res.data[i].wea_day_img + ".png";
                                night_imgs[i].src = "../iconfont/font_weather/" + res.data[i].wea_night_img + ".png";
                                bWendu.push(res.data[i].tem1);
                                yWendu.push(res.data[i].tem2);
                            }
                            // console.log(bWendu);
                            // console.log(yWendu);
                            bWendu = bWendu.map(Number);
                            yWendu = yWendu.map(Number);
                            Orangechart(bWendu);
                            Lightbluechart(yWendu);
                        }
                    })

                }
            });
            all.style.display = "block";
            search.style.display = "none";
            input.value = "";
        }

    }

    //搜索框内的小垃圾桶
    let bin = document.querySelector(".bin");
    bin.onclick = () => {
            search_history.style.display = "none";
            let lis = document.querySelector(".history_city").querySelectorAll("li");
            let ul = document.querySelector(".history_city");
            for (let i = lis.length - 1; i >= 0; i--) {
                ul.removeChild(lis[i]);
            }
        }
        //点击li自动搜索
    let pop_city_lis = document.querySelector(".pop_city").querySelector("ul").querySelectorAll("li");
    for (let i = 0; i < pop_city_lis.length; i++) {
        pop_city_lis[i].onclick = () => {
            ajax({
                url: "https://tianqiapi.com/free/day?appid=18513295&appsecret=ijN27Pzy&city=",
                params: pop_city_lis[i].innerHTML,
                async: "true",
                dataType: "json",
                success: function(res) {
                    let city = document.getElementById("city");
                    city.innerHTML = res.city;
                    //生成历史记录
                    let lis = document.createElement("li");
                    let ul = document.querySelector(".history_city");
                    search_history.style.display = "block";
                    lis.innerHTML = res.city;
                    ul.insertBefore(lis, ul.children[0]);
                    let air = document.querySelector(".pic").querySelector(".box_2_left").querySelector(".value");
                    air.innerHTML = res.air;
                    let tem = document.querySelector(".pic").querySelector(".temp");
                    tem.innerHTML = res.tem;
                    let wea = document.querySelector(".pic").querySelector(".weather_condition");
                    wea.innerHTML = res.wea;
                    let more = document.querySelector(".pic").querySelector(".more");
                    more.innerHTML = res.win + " " + res.win_speed;
                    //让历史记录可点击
                    let history_ul = document.querySelector(".search_history").querySelector(".history").querySelector("ul");
                    for (let i = 0; i < history_ul.children.length; i++) {
                        history_ul.children[i].addEventListener("touchend", function(e) {
                            ajax({
                                url: "https://tianqiapi.com/free/day?appid=18513295&appsecret=ijN27Pzy&city=",
                                params: history_ul.children[i].innerHTML,
                                async: "true",
                                dataType: "json",
                                success: function(res) {
                                    let city = document.getElementById("city");
                                    city.innerHTML = res.city;
                                    //生成历史记录
                                    let lis = document.createElement("li");
                                    let ul = document.querySelector(".history_city");
                                    search_history.style.display = "block";
                                    lis.innerHTML = res.city;
                                    ul.insertBefore(lis, ul.children[0]);
                                    let air = document.querySelector(".pic").querySelector("div").querySelector(".value");
                                    air.innerHTML = res.air;
                                    let tem = document.querySelector(".pic").querySelector(".temp");
                                    tem.innerHTML = res.tem;
                                    let wea = document.querySelector(".pic").querySelector(".weather_condition");
                                    wea.innerHTML = res.wea;
                                    let more = document.querySelector(".pic").querySelector(".more");
                                    more.innerHTML = res.win + " " + res.win_speed;

                                    // console.log(res);
                                    // 今明两天天气
                                    ajax({
                                        url: "https://v0.yiketianqi.com/api?version=v91&appid=18513295&appsecret=ijN27Pzy&ext=&city=",
                                        params: city.innerHTML,
                                        async: "true",
                                        dataType: "json",
                                        success: function(res) {
                                            // console.log(res);
                                            let today_temp = document.querySelector(".weather_box").querySelector(".weather_today").querySelector(".weather_temp");
                                            let tomorrow_temp = document.querySelector(".weather_box").querySelector(".weather_tomorrow").querySelector(".weather_temp");
                                            today_temp.innerHTML = res.data[0].tem1 + "/" + res.data[0].tem2;
                                            tomorrow_temp.innerHTML = res.data[1].tem1 + "/" + res.data[1].tem2;
                                            let today_weather_cdt = document.querySelector(".weather_box").querySelector(".weather_today").querySelector(".weather_cdt");
                                            let tomorrow_weather_cdt = document.querySelector(".weather_box").querySelector(".weather_tomorrow").querySelector(".weather_cdt");
                                            today_weather_cdt.innerHTML = res.data[0].wea;
                                            tomorrow_weather_cdt.innerHTML = res.data[1].wea;
                                            let today_img = document.querySelector(".weather_box").querySelector(".weather_today").querySelector("img");
                                            let tomorrow_img = document.querySelector(".weather_box").querySelector(".weather_tomorrow").querySelector("img");
                                            let weather_name_today = res.data[0].wea_day_img;
                                            let weather_name_tomorrow = res.data[1].wea_day_img;
                                            today_img.src = "../iconfont/font_weather/" + weather_name_today + ".png";
                                            tomorrow_img.src = "../iconfont/font_weather/" + weather_name_tomorrow + ".png";
                                            let level = document.querySelector(".pic").querySelector(".level")
                                            level.innerHTML = res.data[0].air_level;
                                        }
                                    })

                                    //时刻天气
                                    ajax({
                                            url: "https://v0.yiketianqi.com/api?version=v62&appid=18513295&appsecret=ijN27Pzy&city=",
                                            params: city.innerHTML,
                                            async: "true",
                                            dataType: "json",
                                            success: function(res) {
                                                // console.log(res);
                                                let current_time = document.querySelectorAll(".current_time");
                                                for (let i = 0; i < 23; i++) {
                                                    current_time[i].innerHTML = res.hours[i].hours;
                                                }
                                                let current_img = document.querySelectorAll("#current_img");
                                                // console.log(current_img);
                                                for (let i = 0; i < 23; i++) {
                                                    current_img[i].src = "../iconfont/font_weather/" + res.hours[i].wea_img + ".png";
                                                }
                                                let current_degree = document.querySelectorAll(".current_degree");
                                                for (let i = 0; i < 23; i++) {
                                                    current_degree[i].innerHTML = res.hours[i].tem;
                                                }
                                            }
                                        })
                                        //类轮播图
                                    ajax({
                                        url: "https://www.tianqiapi.com/life/lifepro?appid=18513295&appsecret=ijN27Pzy&city=",
                                        params: city.innerHTML,
                                        async: "true",
                                        dataType: "json",
                                        success: function(res) {
                                            // console.log(res);
                                            let f_line = document.querySelectorAll("#f_line");
                                            let title = document.querySelectorAll(".title");
                                            let infor = document.querySelectorAll(".infor");
                                            let btn = document.querySelectorAll(".btn_close");
                                            let names = ["chuanyi", "yusan", "ganmao", "xiche", "yundong", "fangshai", "diaoyu", "lvyou", "jiaotong", "wuran", "shushidu", "liangshai", "huazhuang", "chenlian", "guomin", "zhongshu"];
                                            let colors = ["#e1a4c", "#c1a4e0", "#dfc79c", "#b5e6a8", "#e6d99d", "#dbada0", "#a3dfd4", "#edac96", "#8ba5af", "#b28a90", "#9ec48c", "#a6bacc", "#e09090", "#87c5dd", "#95a3db", "#ff8a65"];
                                            // // //这个有简便点的方法吗？
                                            f_line[0].innerHTML = res.data.chuanyi.level;
                                            title[0].innerHTML = res.data.chuanyi.name;
                                            title[0].style.backgroundColor = "#e1a4c4";
                                            btn[0].style.backgroundColor = "#e1a4c4";
                                            infor[0].innerHTML = res.data.chuanyi.desc;

                                            f_line[1].innerHTML = res.data.yusan.level;
                                            title[1].innerHTML = res.data.yusan.name;
                                            title[1].style.backgroundColor = "#c1a4e0";
                                            btn[1].style.backgroundColor = "#c1a4e0";
                                            infor[1].innerHTML = res.data.yusan.desc;

                                            f_line[2].innerHTML = res.data.ganmao.level;
                                            title[2].innerHTML = res.data.ganmao.name;
                                            title[2].style.backgroundColor = "#dfc79c";
                                            btn[2].style.backgroundColor = "#dfc79c";
                                            infor[2].innerHTML = res.data.ganmao.desc;

                                            f_line[3].innerHTML = res.data.xiche.level;
                                            title[3].innerHTML = res.data.xiche.name;
                                            title[3].style.backgroundColor = "#b5e6a8";
                                            btn[3].style.backgroundColor = "#b5e6a8";
                                            infor[3].innerHTML = res.data.xiche.desc;

                                            f_line[4].innerHTML = res.data.yundong.level;
                                            title[4].innerHTML = res.data.yundong.name;
                                            title[4].style.backgroundColor = "#e6d99d";
                                            btn[4].style.backgroundColor = "#e6d99d";
                                            infor[4].innerHTML = res.data.yundong.desc;

                                            f_line[5].innerHTML = res.data.fangshai.level;
                                            title[5].innerHTML = res.data.fangshai.name;
                                            title[5].style.backgroundColor = "#dbada0";
                                            btn[5].style.backgroundColor = "#dbada0";
                                            infor[5].innerHTML = res.data.fangshai.desc;

                                            f_line[6].innerHTML = res.data.diaoyu.level;
                                            title[6].innerHTML = res.data.diaoyu.name;
                                            title[6].style.backgroundColor = "#a3dfd4";
                                            btn[6].style.backgroundColor = "#a3dfd4";
                                            infor[6].innerHTML = res.data.diaoyu.desc;

                                            f_line[7].innerHTML = res.data.lvyou.level;
                                            title[7].innerHTML = res.data.lvyou.name;
                                            title[7].style.backgroundColor = "#edac96";
                                            btn[7].style.backgroundColor = "#edac96";
                                            infor[7].innerHTML = res.data.lvyou.desc;

                                            f_line[8].innerHTML = res.data.jiaotong.level;
                                            title[8].innerHTML = res.data.jiaotong.name;
                                            title[8].style.backgroundColor = "#8ba5af";
                                            btn[8].style.backgroundColor = "#8ba5af";
                                            infor[8].innerHTML = res.data.jiaotong.desc;

                                            f_line[9].innerHTML = res.data.wuran.level;
                                            title[9].innerHTML = res.data.wuran.name;
                                            title[9].style.backgroundColor = "#b28a90";
                                            btn[9].style.backgroundColor = "#b28a90";
                                            infor[9].innerHTML = res.data.wuran.desc;

                                            f_line[10].innerHTML = res.data.shushidu.level;
                                            title[10].innerHTML = res.data.shushidu.name;
                                            title[10].style.backgroundColor = "#9ec48c";
                                            btn[10].style.backgroundColor = "#9ec48c";
                                            infor[10].innerHTML = res.data.shushidu.desc;

                                            f_line[11].innerHTML = res.data.liangshai.level;
                                            title[11].innerHTML = res.data.liangshai.name;
                                            title[11].style.backgroundColor = "#a6bacc";
                                            btn[11].style.backgroundColor = "#a6bacc";
                                            infor[11].innerHTML = res.data.liangshai.desc;

                                            f_line[12].innerHTML = res.data.huazhuang.level;
                                            title[12].innerHTML = res.data.huazhuang.name;
                                            title[12].style.backgroundColor = "#e09090";
                                            btn[12].style.backgroundColor = "#e09090";
                                            infor[12].innerHTML = res.data.huazhuang.desc;

                                            f_line[13].innerHTML = res.data.chenlian.level;
                                            title[13].innerHTML = res.data.chenlian.name;
                                            title[13].style.backgroundColor = "#87c5dd";
                                            btn[13].style.backgroundColor = "#87c5dd";
                                            infor[13].innerHTML = res.data.chenlian.desc;

                                            f_line[14].innerHTML = res.data.guomin.level;
                                            title[14].innerHTML = res.data.guomin.name;
                                            title[14].style.backgroundColor = "#95a3db";
                                            btn[14].style.backgroundColor = "#95a3db";
                                            infor[14].innerHTML = res.data.guomin.desc;

                                            f_line[15].innerHTML = res.data.zhongshu.level;
                                            title[15].innerHTML = res.data.zhongshu.name;
                                            title[15].style.backgroundColor = "#ff8a65";
                                            btn[15].style.backgroundColor = "#ff8a65";
                                            infor[15].innerHTML = res.data.zhongshu.desc;

                                        }
                                    })

                                    //折线图 上下数据
                                    ajax({ //获取七天天气情况
                                        url: "https://v0.yiketianqi.com/api?version=v91&appid=18513295&appsecret=ijN27Pzy&city=",
                                        params: city.innerHTML,
                                        async: "true",
                                        dataType: "json",
                                        success: function(res) {
                                            // console.log(res);
                                            let weeks = document.querySelector(".weather_predict").querySelectorAll("#weeks");
                                            let dates = document.querySelector(".weather_predict").querySelectorAll("#date");
                                            let weather_cdt_days = document.querySelectorAll("#weather_cdt_day");
                                            let weather_cdt_nights = document.querySelectorAll("#weather_cdt_night");
                                            let wind_directions = document.querySelectorAll("#wind_direction");
                                            let wind_levels = document.querySelectorAll("#wind_level");
                                            let day_imgs = document.querySelectorAll("#day_img");
                                            let night_imgs = document.querySelectorAll("#night_img");
                                            for (let i = 0; i < 7; i++) {
                                                if (i == 0) {
                                                    weeks[i].innerHTML = "今天";
                                                } else if (i == 1) {
                                                    weeks[i].innerHTML = "明天";
                                                } else if (i > 1) {
                                                    weeks[i].innerHTML = res.data[i].week;
                                                }

                                                dates[i].innerHTML = res.data[i].date.slice(5, res.data[i].date.length);
                                                weather_cdt_days[i].innerHTML = res.data[i].wea_day;
                                                weather_cdt_nights[i].innerHTML = res.data[i].wea_night;
                                                wind_directions[i].innerHTML = res.data[i].win[1];
                                                wind_levels[i].innerHTML = res.data[i].win_speed;
                                                day_imgs[i].src = "../iconfont/font_weather/" + res.data[i].wea_day_img + ".png";
                                                night_imgs[i].src = "../iconfont/font_weather/" + res.data[i].wea_night_img + ".png";
                                                bWendu.push(res.data[i].tem1);
                                                yWendu.push(res.data[i].tem2);
                                            }
                                            // console.log(bWendu);
                                            // console.log(yWendu);bWendu = bWendu.map(Number);
                                            bWendu = bWendu.map(Number);
                                            yWendu = yWendu.map(Number);
                                            Orangechart(bWendu);
                                            Lightbluechart(yWendu);
                                        }
                                    })

                                }
                            });

                            all.style.display = "block";
                            search.style.display = "none";
                            e.preventDefault();
                        })
                    }
                    // console.log(res);
                    // 今明两天天气
                    ajax({
                        url: "https://v0.yiketianqi.com/api?version=v91&appid=18513295&appsecret=ijN27Pzy&ext=&city=",
                        params: city.innerHTML,
                        async: "true",
                        dataType: "json",
                        success: function(res) {
                            // console.log(res);
                            let today_temp = document.querySelector(".weather_box").querySelector(".weather_today").querySelector(".weather_temp");
                            let tomorrow_temp = document.querySelector(".weather_box").querySelector(".weather_tomorrow").querySelector(".weather_temp");
                            today_temp.innerHTML = res.data[0].tem1 + "/" + res.data[0].tem2;
                            tomorrow_temp.innerHTML = res.data[1].tem1 + "/" + res.data[1].tem2;
                            let today_weather_cdt = document.querySelector(".weather_box").querySelector(".weather_today").querySelector(".weather_cdt");
                            let tomorrow_weather_cdt = document.querySelector(".weather_box").querySelector(".weather_tomorrow").querySelector(".weather_cdt");
                            today_weather_cdt.innerHTML = res.data[0].wea;
                            tomorrow_weather_cdt.innerHTML = res.data[1].wea;
                            let today_img = document.querySelector(".weather_box").querySelector(".weather_today").querySelector("img");
                            let tomorrow_img = document.querySelector(".weather_box").querySelector(".weather_tomorrow").querySelector("img");
                            let weather_name_today = res.data[0].wea_day_img;
                            let weather_name_tomorrow = res.data[1].wea_day_img;
                            today_img.src = "../iconfont/font_weather/" + weather_name_today + ".png";
                            tomorrow_img.src = "../iconfont/font_weather/" + weather_name_tomorrow + ".png";
                            let level = document.querySelector(".pic").querySelector(".level")
                            level.innerHTML = res.data[0].air_level;
                        }
                    })

                    //时刻天气
                    ajax({
                            url: "https://v0.yiketianqi.com/api?version=v62&appid=18513295&appsecret=ijN27Pzy&city=",
                            params: city.innerHTML,
                            async: "true",
                            dataType: "json",
                            success: function(res) {
                                // console.log(res);
                                let current_time = document.querySelectorAll(".current_time");
                                for (let i = 0; i < 23; i++) {
                                    current_time[i].innerHTML = res.hours[i].hours;
                                }
                                let current_img = document.querySelectorAll("#current_img");
                                // console.log(current_img);
                                for (let i = 0; i < 23; i++) {
                                    current_img[i].src = "../iconfont/font_weather/" + res.hours[i].wea_img + ".png";
                                }
                                let current_degree = document.querySelectorAll(".current_degree");
                                for (let i = 0; i < 23; i++) {
                                    current_degree[i].innerHTML = res.hours[i].tem;
                                }
                            }
                        })
                        //类轮播图
                    ajax({
                        url: "https://www.tianqiapi.com/life/lifepro?appid=18513295&appsecret=ijN27Pzy&city=",
                        params: city.innerHTML,
                        async: "true",
                        dataType: "json",
                        success: function(res) {
                            // console.log(res);
                            let f_line = document.querySelectorAll("#f_line");
                            let title = document.querySelectorAll(".title");
                            let infor = document.querySelectorAll(".infor");
                            let btn = document.querySelectorAll(".btn_close");
                            let names = ["chuanyi", "yusan", "ganmao", "xiche", "yundong", "fangshai", "diaoyu", "lvyou", "jiaotong", "wuran", "shushidu", "liangshai", "huazhuang", "chenlian", "guomin", "zhongshu"];
                            let colors = ["#e1a4c", "#c1a4e0", "#dfc79c", "#b5e6a8", "#e6d99d", "#dbada0", "#a3dfd4", "#edac96", "#8ba5af", "#b28a90", "#9ec48c", "#a6bacc", "#e09090", "#87c5dd", "#95a3db", "#ff8a65"];
                            // // //这个有简便点的方法吗？
                            f_line[0].innerHTML = res.data.chuanyi.level;
                            title[0].innerHTML = res.data.chuanyi.name;
                            title[0].style.backgroundColor = "#e1a4c4";
                            btn[0].style.backgroundColor = "#e1a4c4";
                            infor[0].innerHTML = res.data.chuanyi.desc;

                            f_line[1].innerHTML = res.data.yusan.level;
                            title[1].innerHTML = res.data.yusan.name;
                            title[1].style.backgroundColor = "#c1a4e0";
                            btn[1].style.backgroundColor = "#c1a4e0";
                            infor[1].innerHTML = res.data.yusan.desc;

                            f_line[2].innerHTML = res.data.ganmao.level;
                            title[2].innerHTML = res.data.ganmao.name;
                            title[2].style.backgroundColor = "#dfc79c";
                            btn[2].style.backgroundColor = "#dfc79c";
                            infor[2].innerHTML = res.data.ganmao.desc;

                            f_line[3].innerHTML = res.data.xiche.level;
                            title[3].innerHTML = res.data.xiche.name;
                            title[3].style.backgroundColor = "#b5e6a8";
                            btn[3].style.backgroundColor = "#b5e6a8";
                            infor[3].innerHTML = res.data.xiche.desc;

                            f_line[4].innerHTML = res.data.yundong.level;
                            title[4].innerHTML = res.data.yundong.name;
                            title[4].style.backgroundColor = "#e6d99d";
                            btn[4].style.backgroundColor = "#e6d99d";
                            infor[4].innerHTML = res.data.yundong.desc;

                            f_line[5].innerHTML = res.data.fangshai.level;
                            title[5].innerHTML = res.data.fangshai.name;
                            title[5].style.backgroundColor = "#dbada0";
                            btn[5].style.backgroundColor = "#dbada0";
                            infor[5].innerHTML = res.data.fangshai.desc;

                            f_line[6].innerHTML = res.data.diaoyu.level;
                            title[6].innerHTML = res.data.diaoyu.name;
                            title[6].style.backgroundColor = "#a3dfd4";
                            btn[6].style.backgroundColor = "#a3dfd4";
                            infor[6].innerHTML = res.data.diaoyu.desc;

                            f_line[7].innerHTML = res.data.lvyou.level;
                            title[7].innerHTML = res.data.lvyou.name;
                            title[7].style.backgroundColor = "#edac96";
                            btn[7].style.backgroundColor = "#edac96";
                            infor[7].innerHTML = res.data.lvyou.desc;

                            f_line[8].innerHTML = res.data.jiaotong.level;
                            title[8].innerHTML = res.data.jiaotong.name;
                            title[8].style.backgroundColor = "#8ba5af";
                            btn[8].style.backgroundColor = "#8ba5af";
                            infor[8].innerHTML = res.data.jiaotong.desc;

                            f_line[9].innerHTML = res.data.wuran.level;
                            title[9].innerHTML = res.data.wuran.name;
                            title[9].style.backgroundColor = "#b28a90";
                            btn[9].style.backgroundColor = "#b28a90";
                            infor[9].innerHTML = res.data.wuran.desc;

                            f_line[10].innerHTML = res.data.shushidu.level;
                            title[10].innerHTML = res.data.shushidu.name;
                            title[10].style.backgroundColor = "#9ec48c";
                            btn[10].style.backgroundColor = "#9ec48c";
                            infor[10].innerHTML = res.data.shushidu.desc;

                            f_line[11].innerHTML = res.data.liangshai.level;
                            title[11].innerHTML = res.data.liangshai.name;
                            title[11].style.backgroundColor = "#a6bacc";
                            btn[11].style.backgroundColor = "#a6bacc";
                            infor[11].innerHTML = res.data.liangshai.desc;

                            f_line[12].innerHTML = res.data.huazhuang.level;
                            title[12].innerHTML = res.data.huazhuang.name;
                            title[12].style.backgroundColor = "#e09090";
                            btn[12].style.backgroundColor = "#e09090";
                            infor[12].innerHTML = res.data.huazhuang.desc;

                            f_line[13].innerHTML = res.data.chenlian.level;
                            title[13].innerHTML = res.data.chenlian.name;
                            title[13].style.backgroundColor = "#87c5dd";
                            btn[13].style.backgroundColor = "#87c5dd";
                            infor[13].innerHTML = res.data.chenlian.desc;

                            f_line[14].innerHTML = res.data.guomin.level;
                            title[14].innerHTML = res.data.guomin.name;
                            title[14].style.backgroundColor = "#95a3db";
                            btn[14].style.backgroundColor = "#95a3db";
                            infor[14].innerHTML = res.data.guomin.desc;

                            f_line[15].innerHTML = res.data.zhongshu.level;
                            title[15].innerHTML = res.data.zhongshu.name;
                            title[15].style.backgroundColor = "#ff8a65";
                            btn[15].style.backgroundColor = "#ff8a65";
                            infor[15].innerHTML = res.data.zhongshu.desc;

                        }
                    })

                    //折线图 上下数据  
                    ajax({ //获取七天天气情况
                        url: "https://v0.yiketianqi.com/api?version=v91&appid=18513295&appsecret=ijN27Pzy&city=",
                        params: city.innerHTML,
                        async: "true",
                        dataType: "json",
                        success: function(res) {
                            console.log(res);
                            let weeks = document.querySelector(".weather_predict").querySelectorAll("#weeks");
                            let dates = document.querySelector(".weather_predict").querySelectorAll("#date");
                            let weather_cdt_days = document.querySelectorAll("#weather_cdt_day");
                            let weather_cdt_nights = document.querySelectorAll("#weather_cdt_night");
                            let wind_directions = document.querySelectorAll("#wind_direction");
                            let wind_levels = document.querySelectorAll("#wind_level");
                            let day_imgs = document.querySelectorAll("#day_img");
                            let night_imgs = document.querySelectorAll("#night_img");
                            for (let i = 0; i < 7; i++) {
                                if (i == 0) {
                                    weeks[i].innerHTML = "今天";
                                } else if (i == 1) {
                                    weeks[i].innerHTML = "明天";
                                } else if (i > 1) {
                                    weeks[i].innerHTML = res.data[i].week;
                                }

                                dates[i].innerHTML = res.data[i].date.slice(5, res.data[i].date.length);
                                weather_cdt_days[i].innerHTML = res.data[i].wea_day;
                                weather_cdt_nights[i].innerHTML = res.data[i].wea_night;
                                wind_directions[i].innerHTML = res.data[i].win[1];
                                wind_levels[i].innerHTML = res.data[i].win_speed;
                                day_imgs[i].src = "../iconfont/font_weather/" + res.data[i].wea_day_img + ".png";
                                night_imgs[i].src = "../iconfont/font_weather/" + res.data[i].wea_night_img + ".png";
                                bWendu.push(res.data[i].tem1);
                                yWendu.push(res.data[i].tem2);
                            }

                            bWendu = bWendu.map(Number);
                            yWendu = yWendu.map(Number);
                            Orangechart(bWendu);
                            Lightbluechart(yWendu);
                        }
                    })

                }
            });

            all.style.display = "block";
            search.style.display = "none";
        }
    }
    //实现小方框点击后弹窗
    let cover = document.querySelector(".cover");
    let window = document.querySelectorAll(".window");
    let box_lis = document.querySelector(".bBox").querySelectorAll("li");
    let body = document.querySelector("body");
    for (let i = 0; i < box_lis.length; i++) {
        box_lis[i].addEventListener("click", function(e) {
            cover.style.display = "block";
            window[i].style.display = "block";
            body.style.overflow = "hidden";
            e.preventDefault();
        })
    }
    //关闭小方框的弹窗
    let btn_close = document.querySelectorAll(".btn_close");
    for (let i = 0; i < btn_close.length; i++) {
        btn_close[i].addEventListener("click", function(e) {
            cover.style.display = "none";
            window[i].style.display = "none";
            body.style.overflow = "";
            e.preventDefault();
        })
    };

    //实现分享按钮
    let btn_share = document.querySelector(".btn-share");
    let methods = document.querySelector(".methods");
    btn_share.addEventListener("click", function(e) {
        cover.style.display = "block";
        methods.style.display = "block";
        body.style.overflow = "hidden";
        e.preventDefault();
    });
    //关闭分享按钮
    let delete_nav = document.querySelector(".delete_nav");
    delete_nav.addEventListener("click", function(e) {
            cover.style.display = "none";
            methods.style.display = "none";
            body.style.overflow = "";
            e.preventDefault();
        })
        //实现手动版的轮播图
    let startX, moveX, distanceX;
    let bBox = document.querySelector(".bBox");
    let ul_bottom = document.querySelector(".bBox").querySelector(".slide_box").querySelectorAll("ul");
    let bBox_width = bBox.clientWidth;
    // console.log(bBox_width);
    bBox.addEventListener("touchstart", function(e) {
        startX = e.targetTouches[0].clientX;
        // console.log(startX);
    })
    bBox.addEventListener("touchmove", function(e) {
            let f_spot = document.querySelector("#f_spot");
            let s_spot = document.querySelector("#s_spot");
            moveX = e.targetTouches[0].clientX;
            distanceX = (moveX - startX) * 0.6;
            // console.log(distanceX);
            ul_bottom[0].style.transform = "translateX" + "(" + distanceX + "vw", "0)";
            ul_bottom[1].style.transform = "translateX" + "(" + distanceX + "vw", "0)";
            if (-distanceX > bBox_width * 0.13) {
                // console.log(distanceX);
                ul_bottom[0].style.transform = "translateX(-100%)";
                ul_bottom[1].style.transform = "translateX(-100%)";
            } else if (-distanceX < 0) {
                // console.log(distanceX);
                ul_bottom[0].style.transform = "translateX(0)";
                ul_bottom[1].style.transform = "translateX(0)";

            }
            //控制小圆点
            if (-distanceX < bBox_width * 0.13) {
                f_spot.className = "current";
                s_spot.className = "";
            } else if (-distanceX > bBox_width * 0.13) {
                f_spot.className = "";
                s_spot.className = "current";
            }


        })
        //实现点击侧栏小方框
    let Box = document.querySelector("#Box");
    let x = document.querySelector("#x");
    let box_left = document.querySelector(".box_left");
    Box.addEventListener("click", function(e) {
        cover.style.display = "block";
        box_left.style.display = "block";
        body.style.overflow = "hidden";
        e.preventDefault();

    });
    x.addEventListener("click", function(e) {
        cover.style.display = "none";
        box_left.style.display = "none";
        body.style.overflow = "";
        e.preventDefault();
    })




}