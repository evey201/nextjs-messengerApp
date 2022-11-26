import Pusher from 'pusher';
import ClientPusher from 'pusher-js' 

export const serverPusher = new Pusher({
    appId: `${process.env.PUSHER_APP_ID}`,
    key: `${process.env.PUSHER_APP_KEY}`,
    secret:`${process.env.PUSHER_SECRET}`,
    // cluster: `${process.env.PUSHER_CLUSTER}`,
    cluster: 'eu',
    useTLS: true,
})

export const clientPusher = new ClientPusher(`${process.env.CLIENT_PUSHER_KEY}`, {
    // cluster: `${process.env.PUSHER_CLUSTER}`,
    cluster: 'eu',
    forceTLS: true
 })