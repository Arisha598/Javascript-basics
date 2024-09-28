var input=document.querySelector("input");
var data = [
    { name: "arjun", src: "https://images.unsplash.com/photo-1595923664102-0aa33886723b?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "rekha", src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "rohit", src: "https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "zoya", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "sonakshi", src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "mohak", src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "chikku", src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
]
var persons="";
data.forEach(function (elem) {
    persons += `<div class="person">
                <div class="img">
                <img src="${elem.src}" alt="" srcset=""></div>
                <h4>${elem.name}</h4>
                </div>`
})
document.querySelector(".people").innerHTML=persons;

input.addEventListener("input",function(){
    var matching =  data.filter(function(e){
       return e.name.startsWith(input.value);
    })
    var persons="";
    matching.forEach(function (elem) {
        persons += `<div class="person">
                    <div class="img">
                    <img src="${elem.src}" alt="" srcset=""></div>
                    <h4>${elem.name}</h4>
                    </div>`
    })
    document.querySelector(".people").innerHTML=persons;
})