import { dynamoDb } from './util/dynamoDb'
import { handler } from './util/handler'


export const main = handler(async () => {

  const params = {
    TableName: process.env.TABLE_NAME,
    KeyConditionExpression: "userId = :userId",
    ExpressionAttributeValues: {
      ":userId": "123", // The id of the author
    },
  };

  const result = await dynamoDb.query(params);

  return result.Items;
});
