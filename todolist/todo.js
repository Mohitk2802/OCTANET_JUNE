const sec = document.getElementById("sec");
const i1 = document.getElementById("i1");
const i2 = document.getElementById("i2");
const add = document.querySelector("#add");
const task = localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")):[];
func();
function func (){
    task.forEach((value,index)=>{
        const div = document.createElement("div");
        div.setAttribute("class","list");
        sec.append(div);
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        div1.setAttribute("id","one");
        div2.setAttribute("id","two");
        div1.innerText = value.title;
        div2.innerText = value.disc;
        div.append(div1);
        div.append(div2);
        const btn = document.createElement("button");
        btn.setAttribute("class","del");
        btn.addEventListener("click",()=>{
            rem();
            task.splice(index,1);
            localStorage.setItem("task",JSON.stringify(task));
            func();
        });
        btn.innerText = "–";
        div.append(btn);
    });
};
function rem(){
    task.forEach((value,index)=>{
        const div = document.querySelector(".list");
        div.remove();
    });
};
add.addEventListener("click",(e)=>{
    e.preventDefault();
    if(i1.value != "" && i2.value != "")
    {
        rem();
        task.push({
            title: i1.value,
            disc: i2.value,
        });
        localStorage.setItem("task",JSON.stringify(task));
        func();
    }
    else
    {
        alert("ENTER BOTH FIELDS");
    }
});
