const mongoose = require('mongoose');

const ConnectDB = async() => {
    try {
        const conn = await mongoose.connect('mongodb://NoteScreen:WiBUqMFg72aCH9HT@ac-fh4nkyu-shard-00-00.1zx4yva.mongodb.net:27017,ac-fh4nkyu-shard-00-01.1zx4yva.mongodb.net:27017,ac-fh4nkyu-shard-00-02.1zx4yva.mongodb.net:27017/?ssl=true&replicaSet=atlas-81p4jg-shard-0&authSource=admin&retryWrites=true&w=majority&appName=NoteCluster', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = ConnectDB;