let intervalId

const clickIfBtnExist = (btnSelector) => {
  const btn = document.querySelector(btnSelector)
  if (btn) {
    btn.click()
    return true
  } else {
    return false
  }
}

const clickInModal = () => {
  const modal = document.querySelector('.col-xs-12')
  if (modal) {
    const btnInModal = modal.querySelector(".btn-success")
    if (btnInModal) {
      btnInModal.click()
    }
  }
}

const processOrders = () => {
  const orderBtn = document.querySelector(".btn-in-bar")
  if (orderBtn) {
    orderBtn.click()
    setTimeout(clickInModal, 100)
  }
}

const startAutoclick = (interval) => {
  if (intervalId) clearInterval(intervalId)

  intervalId = setInterval(() => {
    clickIfBtnExist(".btn-success")
    setTimeout(processOrders, 500)
  }, interval * 1000)
}

chrome.storage.sync.get(["autoclick", "interval"], (result) => {
  const enabled = result.autoclick ?? true
  const interval = result.interval ?? 4

  if (enabled) {
    startAutoclick(interval)
  }
})
