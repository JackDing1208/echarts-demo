var chart1 = echarts.init(document.getElementById('xxx1'), 'wonderland');

// 指定图表的配置项和数据
var option1 = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data: ['销量']
    },
    xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};

// 使用刚指定的配置项和数据显示图表。
chart1.setOption(option1);
setTimeout(()=>{
    option1.title.text='数据没有实现响应式更新'
    chart1.setOption(option1);
},5000)
var chart2 = echarts.init(document.getElementById('xxx2'), 'dark');

// 指定图表的配置项和数据
var option2 = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data: ['吃饭','睡觉']
    },
    xAxis: {
        data: ["一月", "二月", "三月", "四月", "五月", "六月"],
        data: ["一月", "二月", "三月", "四月", "五月", "六月"]

    },
    yAxis: {},
    series: [
        {
            name: '吃饭',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20]

        },
        {
            name: '睡觉',
            type: 'line',
            data: [17, 20, 8, 16, 20, 25]

        },
    ]
};

// 使用刚指定的配置项和数据显示图表。
chart2.setOption(option2);

var chart3 = echarts.init(document.getElementById('xxx3'));
chart3.setOption({
    backgroundColor: '#2c343c',
    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '80%',
            data: [
                {value: 235, name: '视频广告'},
                {value: 274, name: '联盟广告'},
                {value: 310, name: '邮件营销'},
                {value: 335, name: '直接访问'},
                {value: 400, name: '搜索引擎'}
            ],
            roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
})
