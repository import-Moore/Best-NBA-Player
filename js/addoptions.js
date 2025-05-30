//这个文件用于动态地向选择框中添加option

// // 球星列表
// const stars = [
//     { name: '乔丹', value: 'Jordan' },
//     { name: '詹姆斯', value: 'LeBron' },
//     { name: '魔术师', value: 'Magic' },
//     { name: '贾巴尔', value: 'Jabbar' },
//     { name: '科比', value: 'Kobe' },
//     { name: '库里', value: 'Curry' },
//     { name: '邓肯', value: 'Duncan' },
//     { name: '奥尼尔', value: 'O\'Neal' }
// ];

// // 获取 select 元素
// const select = document.getElementById('Player-Selector');

// // 创建选项并添加到 select 元素中
// stars.forEach(star => {
//     const option = document.createElement('option');
//     option.value = star.value;
//     option.textContent = star.name;
//     select.appendChild(option);
// });


// 数据列表
const metrics = [
    { name: '得分', value: 'PTS', description: '得分（Points），指球员在赛季中的场均得分。' },
    { name: '出场次数', value: 'G', description: '出场次数（Games Played），指球员在赛季中出场的比赛次数。' },
    { name: '首发出场次数', value: 'GS', description: '首发出场次数（Games Started），指球员作为首发球员出场的比赛次数。' },
    { name: '出场时间', value: 'MP', description: '出场时间（Minutes Played），指球员在赛季中的场均出场时间。' },
    { name: '投篮命中数', value: 'FG', description: '投篮命中数（Field Goals Made），指球员在赛季中场均成功投篮的次数。' },
    { name: '投篮出手数', value: 'FGA', description: '投篮出手数（Field Goals Attempted），指球员在赛季中场均尝试投篮的次数。' },
    { name: '投篮命中率', value: 'FG%', description: '投篮命中率（Field Goal Percentage），指球员投篮命中数与投篮出手数的比例。' },
    { name: '三分球命中数', value: '3P', description: '三分球命中数（Three-Point Field Goals Made），指球员在赛季中场均成功投中的三分球次数。' },
    { name: '三分球出手数', value: '3PA', description: '三分球出手数（Three-Point Field Goals Attempted），指球员在赛季中场均出手的三分球次数。' },
    { name: '三分球命中率', value: '3P%', description: '三分球命中率（Three-Point Field Goal Percentage），指球员三分球命中数与三分球出手数的比例。' },
    { name: '两分球命中数', value: '2P', description: '两分球命中数（Two-Point Field Goals Made），指球员在赛季中场均投中的两分球次数。' },
    { name: '两分球出手数', value: '2PA', description: '两分球出手数（Two-Point Field Goals Attempted），指球员在赛季中场均尝试的两分球次数。' },
    { name: '两分球命中率', value: '2P%', description: '两分球命中率（Two-Point Field Goal Percentage），指球员两分球命中数与两分球出手数的比例。' },
    { name: '有效投篮命中率', value: 'eFG%', description: '有效投篮命中率（Effective Field Goal Percentage），考虑三分球的投篮命中率。' },
    { name: '罚球命中数', value: 'FT', description: '罚球命中数（Free Throws Made），指球员在赛季中场均成功罚中的球数。' },
    { name: '罚球出手数', value: 'FTA', description: '罚球出手数（Free Throws Attempted），指球员在赛季中场均尝试罚中的球数。' },
    { name: '罚球命中率', value: 'FT%', description: '罚球命中率（Free Throw Percentage），指球员罚球命中数与罚球出手数的比例。' },
    { name: '进攻篮板球', value: 'ORB', description: '进攻篮板球（Offensive Rebounds），指球员在赛季中场均抢到的进攻篮板球数。' },
    { name: '防守篮板球', value: 'DRB', description: '防守篮板球（Defensive Rebounds），指球员在赛季中场均抢到的防守篮板球数。' },
    { name: '总篮板球', value: 'TRB', description: '总篮板球（Total Rebounds），指球员在赛季中的场均篮板球数，即进攻篮板和防守篮板的总和。' },
    { name: '助攻', value: 'AST', description: '助攻（Assists），指球员在赛季中场均帮助队友得分的次数。' },
    { name: '抢断', value: 'STL', description: '抢断（Steals），指球员在赛季中场均成功从对手手中抢断球的次数。' },
    { name: '盖帽', value: 'BLK', description: '盖帽（Blocks），指球员在赛季中场均阻止对手投篮得分的次数。' },
    { name: '失误', value: 'TOV', description: '失误（Turnovers），指球员在赛季中场均失误导致球权转换给对手的次数。' },
    { name: '犯规', value: 'PF', description: '犯规（Personal Fouls），指球员在赛季中场均犯规的次数。' }
];


const select2 = document.getElementById('Type-Selector');

metrics.forEach(data => {
    const option = document.createElement('option');
    option.value = data.value;
    option.textContent = data.name;
    select2.appendChild(option);
})