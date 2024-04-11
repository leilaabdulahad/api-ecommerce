const Message = require ('../models/Message')

exports.postMessage = async (req, res) => {
    const { name, email, message } = req.body

    if(!name || !email || !message) {
        return res.status(400).send({ message: "All fields are required"})
    } 

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(email)) {
    return res.status(400).send({ message: "Invalid email format" });
  }

        try{
            const newMessage = new Message({ name, email, message })
            await newMessage.save()
            res.status(200).send({message: "Message receieved successfully"})
        } catch(err){
            res.status(500).send({ message: 'An error occured while attempting to save the message', error: err.message})
        }
    
}