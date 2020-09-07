

$(document).ready(() =>
{
    var socket = io('http://localhost:3000')
    socket.on('receivedMessage', message => {
        renderMessage(message)
    })
    $('#chat').submit(event =>
    {
        event.preventDefault()
        var author = $('input[name=username]').val()
        var text = $('input[name=message]').val()

        if (author.length && text.length) {
            var message = {
                author: author,
                text: text,
            }
            socket.emit('sendMessage', message)
            
            $('input[name=message], textarea').val("")
        }
    })

})

function renderMessage(message){
    $('#messages').append(`<div class="message"><strong>${message.author}</strong>: ${message.text}</div>`)
}