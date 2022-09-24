const button = document.querySelector("button");

button.addEventListener("click", () => {
    Notification.requestPermission().then(perm => {
        if (perm === "granted") {
            const notification = new Notification("Example Notification", {
                body: "Visible Notification",
                data: { any: "data really.."},
                icon: "logo.png",
                tag: "visible notification"
            })

            notification.addEventListener("error", e=> {
                alert("error");
            })
        }
    })
})

let notification
let interval
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        const leaveDate = new Date()
        interval = setInterval(() => {
            notification = new Notification("Come back you..", {
                body: `You have been gone for ${Math.round(
                    (new Date() - leaveDate) / 1000
                )} seconds.`,
                tag: "come back"
            })
        }, 100)
    } else {
        if (interval) clearInterval(interval)
        if (notification) notification.close()
    }
})


