//POST message
exports.postMessage = (req, res) => {
    const { name, email, message } = req.body

    if(!name || !email || !message) {
        return res.status(400).send({ message: "All fields are required"})
    }
    res.status(200).send({message: "Message receieved successfully"})
}