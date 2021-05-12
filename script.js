function gerar(){
    var num = document.getElementById('numero')
    var res = document.getElementById('tabuada')
    res.style.display = 'block'
    if (num.value.length == 0){
        window.alert('Preencha o campo Número')
    } else{
        res.innerHTML = ''
        var n = Number(num.value)
        for(var c = 1; c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            res.appendChild(item)
            }
    }
}