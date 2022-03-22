document.getElementById('rangoopacidad').addEventListener('input', handleInputChange)

function handleInputChange(e) {
  if(document.getElementById('rangoopacidad').value !== document.getElementById('rangevalue').value) {
    let target = e.target
    if (e.target.type !== 'range') {
      target = document.getElementById('range')
    } 
    const min = target.min
    const max = target.max
    const val = target.value

    document.getElementById('rangevalue').value=val; 
    const roundToHundredth = (value) => {
      return Number(value.toFixed());
    };
    const opacidadFinal = roundToHundredth(val*1);
    try{
      var value = opacidadFinal;
      chrome.storage.sync.set({'opacidad2': value});
    } catch(error) { console.log(error)}
  } else { }
}

document.getElementById('rangoopacidad2').addEventListener('input', handleInputChange2)

function handleInputChange2(e) {
  if(document.getElementById('rangoopacidad2').value !== document.getElementById('rangevalue2').value) {
    let target = e.target
    if (e.target.type !== 'range') {
      target = document.getElementById('range')
    } 
    const min = target.min
    const max = target.max
    const val2 = target.value

    document.getElementById('rangevalue2').value=val2; 
    const roundToHundredth2 = (value) => {
      return Number(value.toFixed());
    };
    const opacidadFinal4 = roundToHundredth2(val2*1);
    try{
      var value = opacidadFinal4;
      chrome.storage.sync.set({'opacidad4': value});
    } catch(error) { console.log(error)}
  } else { }
}

document.getElementById('rangoopacidad3').addEventListener('input', handleInputChange3)

function handleInputChange3(e) {
  if(document.getElementById('rangoopacidad3').value !== document.getElementById('rangevalue3').value) {
    let target = e.target
    if (e.target.type !== 'range') {
      target = document.getElementById('range')
    } 
    const min = target.min
    const max = target.max
    const val3 = target.value
    const roundToHundredth3 = (value) => {
      return Number(value.toFixed());
    };
    const opacidadFinal4 = roundToHundredth3(val3*1);
    document.getElementById('rangevalue3').value=val3; 
    
    try{
      var value = opacidadFinal4;
      chrome.storage.sync.set({'opacidad8': value});
    } catch(error) { console.log(error)}
  } else { }
}