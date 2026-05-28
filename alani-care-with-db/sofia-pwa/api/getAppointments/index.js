const { CosmosClient } = require("@azure/cosmos");

const client = new CosmosClient(process.env.COSMOS_CONNECTION_STRING);
const container = client.database("alani-care").container("appointments");

module.exports = async function (context, req) {
  try {
    const { resources } = await container.items
      .query("SELECT * FROM c ORDER BY c.date ASC")
      .fetchAll();

    context.res = {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: resources
    };
  } catch (err) {
    context.res = { status: 500, body: { error: err.message } };
  }
};
