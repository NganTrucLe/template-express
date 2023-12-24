import { connect } from "mongoose";

export default async () => {
  const CONNECTION_STRING = "mongodb://127.0.0.1/SHOP";
  try {
    await connect(CONNECTION_STRING);
    console.log("Database connected");
  } catch (err) {
    console.log("Database connection failed", err);
    process.exit(1);
  }
};

// Tool convert from sql to csv to import to database
// https://www.rebasedata.com/convert-mysql-to-csv-online