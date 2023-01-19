const messagesFromReactAppListener = (message, sender, response) => {
    console.log('[content.js]. Message received', {
        message,
        sender,
    })

    // example of the code
    if (
        sender.id === chrome.runtime.id &&
        message.from === "Sender" &&
        message.message === "delete logo") {

        const logo = document.getElementById('hplogo');
        logo?.parentElement?.removeChild(logo)
    }
}

chrome.runtime.onMessage.addListener(messagesFromReactAppListener);