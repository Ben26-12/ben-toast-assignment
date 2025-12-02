var toastHolder = document.querySelector("#toast")
var dataHolder = [
    {
        type: "success",
        icon: "fa-solid fa-circle-check",
        title: "Successfully",
        subtitle: "This is a success toast, congratulations!"
    },
    {
        type: "error",
        icon: "fa-solid fa-circle-exclamation",
        title: "Error",
        subtitle: "Something went wrong, please try again!"
    },
    {
        type: "info",
        icon: "fa-solid fa-circle-info",
        title: "Information",
        subtitle: "Click any button you'd like to get the corresponded toast"
    }
]  

var buttons = document.querySelectorAll(".option .btn")

buttons.forEach(button => {
    button.onclick = function (e) {
        var data = dataHolder.find(data => {
            return button.className.includes(data.type)
        })
        var newToast = document.createElement('div')
        newToast.classList.add('toast-container')
        newToast.innerHTML = `
        <div class="toast-block ${data.type}">
          <i class="toast-icon ${data.icon}"></i> 
          <div class="toast-content">
            <h2>${data.title}</h2>
            <span>${data.subtitle}</span>
          </div>
        </div>
        `
        toastHolder.appendChild(newToast)
        setTimeout(() => {
            newToast.remove()
        }, 3000);
    }
})