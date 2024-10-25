import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.ATLAS_URI || "";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

async function connectToDatabase() {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    // Set the database variable to the 'employees' database
    db = client.db("employees");
  } catch (err) {
    console.error(err);
    throw new Error("Failed to connect to the database");
  }
}

// Call the function to connect when the module is loaded
await connectToDatabase();

export default db;
