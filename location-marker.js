const markers = [
    {
        id: 'marker1', name: 'Aurora House',
        class: 'circle filled', text: 'A1',
        RV: '2', PD: '1', location: [22, 9]
    },
    {
        id: 'marker2', name: 'Go Above or Below',
        class: 'circle filled', text: 'A2',
        RV: '2', PD: '2', location: [26, 28]
    },
    {
        id: 'marker3', name: 'City of Ecstasy',
        class: 'circle filled', text: 'A4',
        RV: '7', PD: '3', location: [78, 33]
    },
    {
        id: 'marker4', name: 'Parade with Gods',
        class: 'circle filled', text: 'A5',
        RV: '6', PD: '2', location: [65, 28]
    },
    {
        id: 'marker5', name: 'Hill Making',
        class: 'square solid', text: 'B1',
        RV: '1', PD: '5', location: [12, 56]
    },
    {
        id: 'marker6', name: 'Lino',
        class: 'square dashed', text: 'B2',
        RV: '2', PD: '1', location: [22, 85]
    },
    {
        id: 'marker7', name: 'Play Time',
        class: 'circle filled', text: 'A3',
        RV: '3', PD: '2', location: [32, 30]
    },
    {
        id: 'marker8', name: 'Play Time',
        class: 'square dashed', text: 'B3',
        RV: '3', PD: '2', location: [30, 84]
    },
]
// 规则：
// Real-Virtual = 1-9 / Physical-Digital = 1-9
// circle = 建筑 / square = 交互 / 
// filled = 完成 / solid = 进行中 / dashed = idea（未开始）

// 获取容器元素
const container = document.getElementById('location-marker');

// 遍历 Marker 数据并创建元素
markers.forEach(marker => {
    // 创建 div 元素
    const div = document.createElement('div');

    // 设置 id 和 class 属性
    div.id = marker.id;
    div.className = marker.class;

    // 创建 p 元素
    const p = document.createElement('p');

    // 设置 p 元素的内容
    p.textContent = marker.text;

    // 将 p 元素添加到 div 元素
    div.appendChild(p);

    // 设置样式
    div.style.left = `${marker.location[0]}%`;
    div.style.bottom = `${marker.location[1]}%`;

    // 将 div 元素添加到容器元素
    container.appendChild(div);
});




// Draw lines between markers
const routeCanvas = document.getElementById('route-canvas');
const routeCtx = routeCanvas.getContext('2d');

// Set canvas size to match container dimensions
routeCanvas.width = container.offsetWidth;
routeCanvas.height = container.offsetHeight;

// Get container dimensions and offsets
const containerRect = container.getBoundingClientRect();
const canvasRect = routeCanvas.getBoundingClientRect();

// Calculate canvas offset relative to container
const canvasOffsetX = canvasRect.left - containerRect.left;
const canvasOffsetY = canvasRect.top - containerRect.top;

// Temporary markers 1
const tempMarkers1 = [
    markers[0],
    markers[1],
    markers[6],
    markers[2],
    markers[3],
]
// Draw lines
routeCtx.beginPath();
const randomStartX = (Math.floor(Math.random() * 2) + 10) / 100 * containerRect.width;
const randomStartY = (Math.floor(Math.random() * 2) + 4) / 100 * containerRect.width;
routeCtx.moveTo((tempMarkers1[0].location[0] / 100) * containerRect.width - randomStartX, containerRect.height - (tempMarkers1[0].location[1] / 100) * containerRect.height - 30 - randomStartY);

routeCtx.lineTo((tempMarkers1[0].location[0] / 100) * containerRect.width, containerRect.height - (tempMarkers1[0].location[1] / 100) * containerRect.height - 30);
// Draw lines
routeCtx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
routeCtx.lineWidth = 1;

// Set the dash pattern
routeCtx.setLineDash([10, 5]); // 10 pixels dash, 5 pixels gap
routeCtx.stroke();

routeCtx.beginPath();
routeCtx.moveTo((tempMarkers1[0].location[0] / 100) * containerRect.width, containerRect.height - (tempMarkers1[0].location[1] / 100) * containerRect.height - 30);

for (let i = 1; i < tempMarkers1.length; i++) {
    // Generate random offset within a range of +/- 10 pixels
    const randomOffsetX = Math.floor(Math.random() * 21) - 10;
    const randomOffsetY = Math.floor(Math.random() * 21) - 10;
    const midPointX = (tempMarkers1[i].location[0] + tempMarkers1[i-1].location[0]) / 200 * containerRect.width;
    const midPointY = containerRect.height - (tempMarkers1[i].location[1] + tempMarkers1[i-1].location[1]) / 200 * containerRect.height - 30;
    const destinationX = (tempMarkers1[i].location[0] / 100) * containerRect.width;
    const destinationY = containerRect.height - (tempMarkers1[i].location[1] / 100) * containerRect.height - 30;
    
    const oneThirdPointX = midPointX - (destinationX - midPointX) / 2;
    const oneThirdPointY = midPointY - (destinationY - midPointY) / 2;
    const twoThirdsPointX = midPointX + (destinationX - midPointX) / 2;
    const twoThirdsPointY = midPointY + (destinationY - midPointY) / 2;
    

    if (i === 3) {
        const intermediateX1 = oneThirdPointX - randomOffsetX;
        const intermediateY1 = oneThirdPointY - randomOffsetY;
        const intermediateX2 = midPointX + randomOffsetX;
        const intermediateY2 = midPointY + randomOffsetY;
        // Draw curved line with quadraticCurveTo
        routeCtx.lineTo(intermediateX1, intermediateY1);
        routeCtx.lineTo(intermediateX2, intermediateY2);

        routeCtx.lineTo(destinationX, destinationY);
    } else {
        routeCtx.lineTo(destinationX, destinationY);
    }
}
routeCtx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
routeCtx.lineWidth = 4;
routeCtx.setLineDash([0]);
routeCtx.stroke();

// Temporary markers 2
const tempMarkers2 = [
    markers[4],
    markers[5],
    markers[7],
]
// Draw lines
routeCtx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
routeCtx.lineWidth = 4;

routeCtx.beginPath();
routeCtx.moveTo((tempMarkers2[0].location[0] / 100) * containerRect.width, containerRect.height - (tempMarkers2[0].location[1] / 100) * containerRect.height - 30);

for (let i = 1; i < tempMarkers2.length; i++) {
    // Generate random offset within a range of +/- 10 pixels
    const randomOffsetX = Math.floor(Math.random() * 21) - 10;
    const randomOffsetY = Math.floor(Math.random() * 21) - 10;
    const midPointX = (tempMarkers2[i].location[0] + tempMarkers2[i-1].location[0]) / 200 * containerRect.width;
    const midPointY = containerRect.height - (tempMarkers2[i].location[1] + tempMarkers2[i-1].location[1]) / 200 * containerRect.height - 30;
    const destinationX = (tempMarkers2[i].location[0] / 100) * containerRect.width;
    const destinationY = containerRect.height - (tempMarkers2[i].location[1] / 100) * containerRect.height - 30;
    
    const oneThirdPointX = midPointX - (destinationX - midPointX) / 2;
    const oneThirdPointY = midPointY - (destinationY - midPointY) / 2;
    const twoThirdsPointX = midPointX + (destinationX - midPointX) / 2;
    const twoThirdsPointY = midPointY + (destinationY - midPointY) / 2;
    

    if (i + 1 % 2 === 0) {
        const intermediateX = twoThirdsPointX + randomOffsetX;
        const intermediateY = twoThirdsPointY + randomOffsetY;
        // Draw curved line with quadraticCurveTo
        routeCtx.lineTo(intermediateX, intermediateY);
        routeCtx.lineTo(destinationX, destinationY);
    } else {
        const intermediateX = oneThirdPointX + randomOffsetX;
        const intermediateY = oneThirdPointY + randomOffsetY;
        // Draw curved line with quadraticCurveTo
        routeCtx.lineTo(intermediateX, intermediateY);
        routeCtx.lineTo(destinationX, destinationY);
    }
}

routeCtx.stroke();



// Temporary markers 3
const tempMarkers3 = [
    markers[3],
    markers[4],
]
// Draw lines
routeCtx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
routeCtx.lineWidth = 1;

// Set the dash pattern
routeCtx.setLineDash([10, 5]); // 10 pixels dash, 5 pixels gap


routeCtx.beginPath();
routeCtx.moveTo((tempMarkers3[0].location[0] / 100) * containerRect.width, containerRect.height - (tempMarkers3[0].location[1] / 100) * containerRect.height - 30);

routeCtx.lineTo((tempMarkers3[1].location[0] / 100) * containerRect.width, containerRect.height - (tempMarkers3[1].location[1] / 100) * containerRect.height - 30);

routeCtx.stroke();
