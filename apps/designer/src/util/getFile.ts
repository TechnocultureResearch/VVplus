import { z } from "zod";
import { viewModelSchema } from "./schema"; //viewmodel commented
import data from "../../public/house.json";

// this code fetches the data from the data file by usng the schema defined in schema.ts. Not in a working condition right now and has several errors that need to be fixed later

const getFileName = () => {
  const floors = z.array(viewModelSchema).parse(data);
  return floors;
};

export default getFileName;
