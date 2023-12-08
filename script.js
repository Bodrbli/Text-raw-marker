'use strict'
const div1 = document.getElementById('back');

                        // Событие для каждого элемента

/* document.querySelectorAll('.pane')
  .forEach(p =>
    p.addEventListener('click', function (event) {
        for (let node of div1.childNodes) {
            node.className = 'pane';
        }
        p.classList.toggle('orange');
    })
); */

                        // Событие для корневого элемента

/* div1.addEventListener('click', function (event) {
    for (let node of div1.childNodes) {
        node.className = 'pane';
    }
    event.target.classList.toggle('orange');
}); */

                        // Сложный вариант
div1.addEventListener('click', function (event) {
    document.getSelection().removeAllRanges();
    if (!event.ctrlKey && !event.shiftKey) {
    for (let node of div1.childNodes) {
        node.className = 'pane';
    }
    event.target.classList.toggle('orange');
    } else if (event.ctrlKey) {
        event.target.classList.toggle('orange');
    } else if (event.shiftKey) {
        let firstID, secondID;
        for (let node of div1.childNodes) {
            if(node.className === 'pane orange') {
                firstID = node.id;
            } else if (node === event.target){
                secondID = node.id;
            }
        }
        if(firstID < secondID) {
            for (let i = ++firstID; i <= secondID; i++) {
               let a = document.getElementById(i);
               a.classList.toggle('orange');
            }
        } else {
            for (let i = secondID; i < firstID; i++) {
                let a = document.getElementById(i);
                a.classList.toggle('orange');
            }
        }    
    }
}); 

                  