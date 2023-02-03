export function pick() {
    // Create div to show hsl value 
    const hslDiv = document.createElement("div")
    hslDiv.setAttribute('class', 'test hsl')
    
    // create text node for hsl val
    const hslValue = document.createTextNode('hsl(0, 50%, 0%)')
    hslDiv.appendChild(hslValue)
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(hslDiv, currentDiv);

    // Create hue div 
    const hueDiv = document.createElement("div")
    hueDiv.setAttribute('class', 'text hue')
    hueDiv.setAttribute('style', 'position: absolute;')
    let hueValue = document.createTextNode(`hue 0`);
    hueDiv.appendChild(hueValue)
    const prevDiv = document.getElementById("div1");
    document.body.insertBefore(hueDiv, prevDiv);

    // Create luminosity div
    const lumDiv = document.createElement("div")
    lumDiv.setAttribute('class', 'text luminosity')
    lumDiv.setAttribute('style', 'position: absolute;')
    const lumValue = document.createTextNode('luminosity  0')
    lumDiv.appendChild(lumValue)
    const prev1Div = document.getElementById("div1");
    document.body.insertBefore(lumDiv, prev1Div);
  
    // Create svg
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttributeNS(null, 'height', window.innerHeight)
    svg.setAttributeNS(null, 'width', window.innerWidth)

    // Create line axis X
    var axisX = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    axisX.setAttributeNS(null, 'id', 'axisY')
    axisX.setAttributeNS(null, 'x1', 0)
    axisX.setAttributeNS(null, 'x2', 0)
    axisX.setAttributeNS(null, 'y1', 0)
    axisX.setAttributeNS(null, 'y2', 0)

    // Create line axis Y
    var axisY = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    axisY.setAttributeNS(null, 'id', 'axisX')
    axisY.setAttributeNS(null, 'y1', 0)
    axisY.setAttributeNS(null, 'y2', 0)
    axisY.setAttributeNS(null, 'x1',0)
    axisY.setAttributeNS(null, 'x2', 0)
    axisX.style.stroke = 'white'
    axisX.style.strokeWidth = '1'
    axisY.style.stroke = 'white'
    axisY.style.strokeWidth = '1'
    svg.append(axisX, axisY)
    document.body.append(svg)
   
    // When mouse move
    document.addEventListener("mousemove", event =>{
        // Sewt X and Y axis according to hue and lum value 
        // The X axis will vary the hue value between 0 and 360.
        // The Y axis will vary the luminosity value between 0 and 100.
        let windowWidth = document.documentElement.clientWidth
        let x = event.clientX
        let windowHeigth = document.documentElement.clientHeight
        let y = event.clientY
        let hue = (x/windowWidth) *360
        let lum = (y/windowHeigth) * 100

        //show hue, lum, hsl value on page
        hueDiv.textContent = `hue \n ${Math.round(hue)}`
        lumDiv.textContent = `luminosity \n ${Math.round(lum)}`
        hslDiv.textContent = `hsl(${Math.round(hue)}, 50%, ${Math.round(lum)}%)`
        document.body.style.background = `hsl(${Math.round(hue)}, 50%, ${Math.round(lum)}%)`

        // show svg line on page
        let lineX = document.getElementById('axisY')
        lineX.setAttributeNS(null, 'x1', 0)
        lineX.setAttributeNS(null, 'x2', window.innerWidth)
        lineX.setAttributeNS(null, 'y1', event.clientY)
        lineX.setAttributeNS(null, 'y2', event.clientY)
        
        let lineY = document.getElementById('axisX')
        lineY.setAttributeNS(null, 'y1', 0)
        lineY.setAttributeNS(null, 'y2', window.innerHeight)
        lineY.setAttributeNS(null, 'x1', event.clientX)
        lineY.setAttributeNS(null, 'x2', event.clientX)
       
        lineX.style.stroke = 'white'
        lineX.style.strokeWidth = '1'
        lineY.style.stroke = 'white'
        lineY.style.strokeWidth = '1'

    });
    // When mouse click, copy hsl val to clipboard 
        document.addEventListener('click', event =>{
        let copyValue = document.querySelector('.hsl').innerHTML
        navigator.clipboard.writeText(copyValue)
    })
}