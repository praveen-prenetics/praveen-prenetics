document.getElementById("button").onclick = function () {
    if (document.querySelector('#main input').value.length == 0) {
        alert("Please Enter a Task")
    }

    else {
        let quote = document.getElementById('quotes');
        quote.style.display = 'none';
        document.querySelector('#Tasks').innerHTML += 
        `<div class="checkbox_container"><div id="align">
           <input type="checkbox" id="box1"><div for="box1" id="taskname">
            ${document.querySelector('#main input').value}</div >
           </div><button class="delete"><i class="fa fa-trash-o"></i></button>
        </div>`;

        let task = document.getElementsByClassName("delete");
        for (let i = 0; i < task.length; i++) {
            task[i].onclick = function () {
                this.parentNode.remove();
            }
        }
        
        let done = document.getElementsByClassName("checkbox_container");
        for (let i=0; i<done.length; i++){
            done[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#main input").value = "";
       
    }
}