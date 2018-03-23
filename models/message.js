let mongoose = require("mongoose");

let messageSchema = mongoose.Schema({
    to: String,
    from: String,
    timestamp: Date,
    media: [
        {
            type: String,
            url: String,
        }
    ],
    destruction_time: Date,
    is_locked: Boolean,
    seen: Boolean,
    recieved: Boolean,
});

let Message = mongoose.model("Message", messageSchema, "messages");

module.exports = Message;