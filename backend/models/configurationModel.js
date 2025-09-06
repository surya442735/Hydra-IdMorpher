const mongoose = require('mongoose');

const configurationSchema = new mongoose.Schema({
    _id: String, // Assuming the configId is the document's ID
    data: [[String]], // Based on the expected output [[sym1, sym2,..]]
    remark: String
});

module.exports = mongoose.model('Configuration', configurationSchema);