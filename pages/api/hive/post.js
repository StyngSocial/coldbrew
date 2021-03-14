import hive from "@hiveio/hive-js"

export default function handler(req,res) {
    const {author, permlink, observer} = req.query
    const params = {
        author,
        permlink,
        observer
    }
    hive.api.callAsync("bridge.get_discussion", params)
        .then((resp) => {
            const post = Object.values(resp)
            res.status(200).send(post[0])
        })
        .catch((err) => res.send(err))
}