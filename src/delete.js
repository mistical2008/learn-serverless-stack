import { dynamoDb } from './util/dynamoDb'
import { handler } from './util/handler'


export const main = handler(async (event) => {

  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      userId: "123", // The id of the author
      noteId: event.pathParameters.id
    },
  };

  const result = await dynamoDb.delete(params);

  return {
    statusCode: 201,
    status: "Ok",
    data: result
  };
});
