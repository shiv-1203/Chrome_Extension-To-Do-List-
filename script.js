
function update1() {
    title = document.getElementById('text').value
    if (title != '') {
        if (localStorage.getItem('ItemsJson') == null) {
            itemjsonarr = []
            itemjsonarr.push(title)
            localStorage.setItem('ItemsJson', JSON.stringify(itemjsonarr))
        }
        else {
            itemjsonarr = JSON.parse(localStorage.getItem('ItemsJson'))
            itemjsonarr.push(title)
            localStorage.setItem('ItemsJson', JSON.stringify(itemjsonarr))
        }
        update();
    }
    else {
        alert("Enter the title");
    }
}
var ind1 = 0;
function update() {
    if (localStorage.getItem('ItemsJson') == null) {
        itemjsonarr = []
        localStorage.setItem('ItemsJson', JSON.stringify(itemjsonarr))
    }
    else {
        itemjsonarr = JSON.parse(localStorage.getItem('ItemsJson'))
    }
    let tabbody = document.getElementById('tabbody');
    let str = "";
    itemjsonarr.forEach((element, index) => {
        str += `
        <tr>
        <th class="row">${index + 1}</th>
        <td class="row">${element}</td>
        <td class="row"><input type="checkbox" class="button2" id="bkk"></td>
        </tr>`
    });
    tabbody.innerHTML = str;
}
add1 = document.getElementById('button')
add1.addEventListener('click', update1)
update()
add2 = document.getElementById('but')
add2.addEventListener('click', del)
function del() {
    var ele = document.getElementsByClassName('button2');
    for (var i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            itemjsonarr = JSON.parse(localStorage.getItem('ItemsJson'));
            itemjsonarr.splice(i, 1);
            localStorage.setItem('ItemsJson', JSON.stringify(itemjsonarr));
            update()
        }
    }
}