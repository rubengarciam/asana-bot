import Status from 'http-status-codes';
import endpoints from "../../utils/asana/endpoints"
import axios from "axios"
import parser from "../../utils/asana/parser"
import validateWebhook from "../../utils/asana/validateWebhook"

module.exports = async (req, res) => {

    const xHookHeader = req.headers["x-hook-secret"];

    // Request to connect a new webhook
    if (xHookHeader) {
        res.setHeader('x-hook-secret', xHookHeader)
        console.log(xHookHeader)
        console.log(req.query)
        // res.send("OK")
    } else {
        // Go through events
        const { body } = req
        console.log(JSON.stringify(body))
        console.log(validateWebhook("", JSON.stringify(body), req.headers["x-hook-signature"]))
    }
    res.send("🤖 at work *beep!*")
}

//f60f727d088e92587ba2b1736874c2a0