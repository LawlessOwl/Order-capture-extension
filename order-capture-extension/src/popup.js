const autoclickSwitcher = document.getElementById("autoclick")
const intervalInput = document.getElementById("interval")
const saveBtn = document.getElementById("saveBtn")

chrome.storage.sync.get(["autoclick", "interval"], (result) => {
    autoclickSwitcher.checked = result.autoclick ?? true
    intervalInput.value = result.interval ?? 4
})

saveBtn.addEventListener("click", () => {
    const autoclick = autoclickSwitcher.checked
    const interval = parseInt(intervalInput.value)

    chrome.storage.sync.set({ autoclick, interval }, () => {
        alert("Сохранили настройки!")
    })
})