const { CosmosClient } = require("@azure/cosmos");

const client = new CosmosClient(process.env.COSMOS_CONNECTION_STRING);
const container = client.database("alani-care").container("appointments");

module.exports = async function (context, req) {
  try {
    const id = req.params.id;
    if (!id) {
      context.res = { status: 400, body: { error: "id is required" } };
      return;
    }

    await container.item(id, id).delete();
    context.res = { status: 200, body: { deleted: id } };
  } catch (err) {
    context.res = { status: 500, body: { error: err.message } };
  }
};
