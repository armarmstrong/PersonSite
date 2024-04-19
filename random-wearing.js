var randomPercentages = [];
var randomLength = [];

for (var i = 0; i < 4; i++) {
    var randomNumber = Math.random() * 40; // 生成0到80之间的随机数
    randomPercentages.push(randomNumber); // 存入数组
}

// 将left值应用到CSS样式中
document.querySelector("#cross-line > #row-line > div:nth-child(1)").style.left = randomPercentages[0] + "%";
document.querySelector("#cross-line > #row-line > div:nth-child(2)").style.left = randomPercentages[0] + randomPercentages[1] + "%";
document.querySelector("#cross-line > #col-line > div:nth-child(1)").style.top = randomPercentages[2] + "%";
document.querySelector("#cross-line > #col-line > div:nth-child(2)").style.top = randomPercentages[2] + randomPercentages[3] + "%";

document.querySelector("#cross-line > #row-line > div:nth-child(1)").style.width = randomPercentages[0] * 2 + "px";
document.querySelector("#cross-line > #row-line > div:nth-child(2)").style.width = randomPercentages[1] * 2 + "px";
document.querySelector("#cross-line > #col-line > div:nth-child(1)").style.height = randomPercentages[2] * 2 + "px";
document.querySelector("#cross-line > #col-line > div:nth-child(2)").style.height = randomPercentages[3] * 2 + "px";
