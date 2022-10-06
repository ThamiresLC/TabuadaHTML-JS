function calcular(){
    var num = document.getElementById('num')
    var tabu = document.getElementById('tabu')
    if(num.value.length == 0){
        alert('Por favor, digite um número!')
    }else {
        var n = Number(num.value)
        tabu.innerHTML = ''
        for (var c = 1; c <= 10; c++) {

            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tabu${c}`
            tabu.appendChild(item)
            
        }
    }
}