export const cloption = {
    tooltip: {
        trigger: 'item'
    },
    series: [
        {
            type: 'pie',
            radius: '50%',
            data: [
                { value: 0, name: '处理中' },
                { value: 0, name: '已终止' },
                { value: 1, name: '已完成' },
            ],
        }
    ]
};
