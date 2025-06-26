import { MongoClient } from "mongodb"

class MongoConnection {
    static client = new MongoClient("mongodb+srv://<tu_usuario>:<tu_clave>@clustertest.yjhytvq.mongodb.net/?retryWrites=true&w=majority&appName=<tu_cluster>")
    static db = this.client.db("tp2")

    static connection = async () => {
       await this.client.connect()
    }
}

export default MongoConnection