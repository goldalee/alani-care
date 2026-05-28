const { CosmosClient } = require("@azure/cosmos");

const client = new CosmosClient(process.env.COSMOS_CONNECTION_STRING);
const container = client.database("alani-care").container("appointments");

module.exports = async function (context, req) {
  try {
    const appt = req.body;

    if (!appt || !appt.specialist || !appt.date) {
      context.res = { status: 400, body: { error: "specialist and date are required" } };
      return;
    }

    // Upsert so edits also work
    const { resource } = await container.items.upsert({
      id: appt.id || Date.now().toString(36),
      ...appt
    });

    context.res = { status: 200, body: resource };
  } catch (err) {
    context.res = { status: 500, body: { error: err.message } };
  }
};
