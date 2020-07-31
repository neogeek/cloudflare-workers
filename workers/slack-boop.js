addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

const boops = [
    'http://i.imgur.com/cglCCpl.jpg',
    'http://i.imgur.com/ha6BZrL.jpg',
    'http://i.imgur.com/YKRCznx.jpg',
    'https://i.imgur.com/PLwj35n.jpg',
    'https://media.giphy.com/media/134TFhxGhhRHBm/giphy.gif',
    'https://media.giphy.com/media/1RzmpQcaUS39S/giphy.gif',
    'https://media.giphy.com/media/2nI4vWfZWKp9u/giphy.gif',
    'https://media.giphy.com/media/34SJjVcQuih1K/giphy.gif',
    'https://media.giphy.com/media/8R44XMEY9ighy/giphy.gif',
    'https://media.giphy.com/media/99LhY1qc6jG8w/giphy.gif',
    'https://media.giphy.com/media/9gzelsogJsQpO/giphy.gif',
    'https://media.giphy.com/media/btKJis06RCYUw/giphy.gif',
    'https://media.giphy.com/media/BUlwrDd97bCYE/giphy.gif',
    'https://media.giphy.com/media/bUYHjltYaUr6/giphy.gif',
    'https://media.giphy.com/media/EMJVdPIe75viw/giphy.gif',
    'https://media.giphy.com/media/G0XwMKEgTIYNy/giphy.gif',
    'https://media.giphy.com/media/Gz3f3JBz11utq/giphy.gif',
    'https://media.giphy.com/media/heYtu4tcSEdJ6/giphy.gif',
    'https://media.giphy.com/media/i9qLaa2OTjoHu/giphy.gif',
    'https://media.giphy.com/media/IcDjLUwsIsYfe/giphy.gif',
    'https://media.giphy.com/media/IxwRh2HBaxSa4/giphy.gif',
    'https://media.giphy.com/media/JXVdcJxa9pqOQ/giphy.gif',
    'https://media.giphy.com/media/K0dXnEvVBKtxe/giphy.gif',
    'https://media.giphy.com/media/Krq2P3Ez9RFdK/giphy.gif',
    'https://media.giphy.com/media/lu1L73GxeFvW0/giphy.gif',
    'https://media.giphy.com/media/Mf4NqZAknusBq/giphy.gif',
    'https://media.giphy.com/media/nJ44zIdFWQiQ/giphy.gif',
    'https://media.giphy.com/media/nmCkwDK0LJmla/giphy.gif',
    'https://media.giphy.com/media/OXrJtB8CCJpIY/giphy.gif',
    'https://media.giphy.com/media/qz1exF3EvoCgo/giphy.gif',
    'https://media.giphy.com/media/rk2YLB0FczhQs/giphy.gif',
    'https://media.giphy.com/media/tSVOZpFpohGUM/giphy.gif',
    'https://media.giphy.com/media/U2tWjxugE8qKQ/giphy.gif',
    'https://media.giphy.com/media/Ue9tOnR3f6oes/giphy.gif',
    'https://media.giphy.com/media/uJsuIv6xh81X2/giphy.gif',
    'https://media.giphy.com/media/wCyhohC0Hc2Qg/giphy.gif',
    'https://media.giphy.com/media/XwnOjVqPIlXGM/giphy.gif',
    'https://media.giphy.com/media/xygiO54CCotd6/giphy.gif',
    'https://media.giphy.com/media/YPOVH1rdPmOcM/giphy.gif',
    'https://media.giphy.com/media/YuyYs9phgf3UY/giphy.gif',
    'https://media.giphy.com/media/z4bzULYN9MCsM/giphy.gif',
    'https://media.giphy.com/media/ZI8FSBC7WoJKE/giphy.gif'
];

async function handleRequest(request) {
    const init = {
        status: 200,
        headers: {
            'content-type': 'application/json;charset=UTF-8'
        }
    };

    return new Response(
        JSON.stringify({
            attachments: [
                {
                    image_url: boops[Math.floor(Math.random() * boops.length)]
                }
            ],
            response_type: 'in_channel'
        }),
        init
    );
}
