import { MongoClient } from "mongodb"

class MongoConnection {
    static client = new MongoClient("mongodb+srv://admin:1234@sergiodbct.1fypdz2.mongodb.net/?retryWrites=true&w=majority&appName=SergioDBCT")
    static db = this.client.db("tp2")

    static connection = async () => {
       await this.client.connect()
    }
}

export default MongoConnection
