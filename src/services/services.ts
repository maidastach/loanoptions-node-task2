import axios, { AxiosResponse } from "axios";
import config from "../configs/dotenv";
import { generateQuestions } from "../configs/readline";
import { isOfTypeTabs, sortDecreasingAlphabetically } from "../configs/utils";
import { ICategory, IDataFetched } from "../interfaces";

// Fetch all the data
export const fetchData = async (): Promise<IDataFetched | AxiosResponse> => {
  try {
    const { data } = await axios.get<IDataFetched>(config.API_ENDPOINT);
    return data;
  } catch (err: any) {
    return err;
  }
};

// Fetch by category
export const fetchDataByCategory = async (
  category: ICategory
): Promise<IDataFetched | AxiosResponse> => {
  try {
    const { data } = await axios.get<IDataFetched>(
      `${config.API_ENDPOINT}?Category=${category}`
    );
    return data;
  } catch (err: any) {
    return err;
  }
};

// NO NEED TO PASS ARGUMENTS, THEY WILL BE REQUESTED THROUGH THE CLI STDIN
export const renderDataByQuestions = async () => {
  console.log("FETCHING DATA.... \n");

  // Fetching all set of data
  const fullDataSet = await fetchData();
  if (axios.isAxiosError(fullDataSet)) {
    // Handling Error response, i would throw an error or use the next function
    console.log(fullDataSet.message);
    return;
  }

  // Mapping to get the API values
  const APIS = (fullDataSet as IDataFetched).entries.map(({ API }) => API);
  //sorting and printing
  const sortedAPIS = sortDecreasingAlphabetically(APIS);
  console.log(
    "\n PRINTING ALL THE APIS VALUES IN DECREASING ALPHABETICALLY ORDER \n"
  );
  sortedAPIS.forEach((api) => console.log(api));
  console.log("\n END OF ALL THE APIS VALUES \n");

  // Fetching category and limit by user input through CLI
  const { category, limit } = await generateQuestions();

  // Handling the invalid category input
  if (!category) {
    console.log("No Results");
    return;
  }

  // Filtering data by the category
  const dataByCategory = (fullDataSet as IDataFetched).entries.filter(
    ({ Category }) => Category.toLowerCase() === category.toLowerCase()
  );
  // Returning if no results
  if (!dataByCategory?.length) {
    console.log("\n No Results");
    return;
  }
  // Sorting the data by API name
  const sortedDataByCategory: IDataFetched["entries"] =
    sortDecreasingAlphabetically(dataByCategory, "API");

  //  If no valid limit passed i would render all the entries by that category name
  if (
    !limit ||
    !Number(limit) ||
    Number(limit) < 1 ||
    Number(limit) >= (fullDataSet as IDataFetched).count
  ) {
    sortedDataByCategory.forEach((e) =>
      console.log("\n" + JSON.stringify(e, null, 4))
    );
    return;
  }
  // Slicing the array by the limit and printing the values
  const slicedData = sortedDataByCategory.slice(0, parseInt(limit));
  slicedData.forEach((e) => console.log("\n" + JSON.stringify(e, null, 4)));
  return;
};

// NEED TO PASS 2 ARGUMENTS "CATEGORY" & "LIMIT" TO THE INITIAL COMMAND (es. node ./dist/index.js animals 5)
export const renderDataByCommand = async () => {
  console.log("FETCHING DATA.... \n");
  // Fetching all set of data
  const fullDataSet = await fetchData();
  if (axios.isAxiosError(fullDataSet)) {
    // Handling Error response, i would throw an error or use the next function
    console.log(fullDataSet.message);
    return;
  }

  // Mapping to get the API values
  const APIS = (fullDataSet as IDataFetched).entries.map(({ API }) => API);
  //sorting and printing
  const sortedAPIS = sortDecreasingAlphabetically(APIS);
  console.log(
    "\n PRINTING ALL THE APIS VALUES IN DECREASING ALPHABETICALLY ORDER \n"
  );
  sortedAPIS.forEach((api) => console.log(api));
  console.log("\n END OF ALL THE APIS VALUES \n");

  // Destructuring the arguments passed into CLI
  const [category, limit] = process?.argv?.slice(2);

  if (!category || category?.length > 127 || !isOfTypeTabs(category)) {
    // Handling the case where no category is passed or is not an aceptable value
    // same as above, could use an error handler here
    console.log("\n No Results");
    return;
  }

  // Filtering data by the category
  const dataByCategory = (fullDataSet as IDataFetched).entries.filter(
    ({ Category }) => Category.toLowerCase() === category.toLowerCase()
  );
  // Returning if no results
  if (!dataByCategory?.length) {
    console.log("\n No Results");
    return;
  }
  // Sorting the data by API name
  const sortedDataByCategory: IDataFetched["entries"] =
    sortDecreasingAlphabetically(dataByCategory, "API");

  //  If no valid limit passed i would render all the entries by that category name
  if (
    !limit ||
    !Number(limit) ||
    Number(limit) < 1 ||
    Number(limit) >= (fullDataSet as IDataFetched).count
  ) {
    sortedDataByCategory.forEach((e) =>
      console.log("\n" + JSON.stringify(e, null, 4))
    );
    return;
  }
  // Slicing the array by the limit and printing the values
  const slicedData = sortedDataByCategory.slice(0, parseInt(limit));
  slicedData.forEach((e) => console.log("\n" + JSON.stringify(e, null, 4)));
  return;
};
