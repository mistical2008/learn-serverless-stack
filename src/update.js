import { dynamoDb } from './util/dynamoDb'
import { handler } from './util/handler'


export const main = handler(async (event) => {
  // Request body is passed in as a JSON encoded string in 'event.body'
  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      // The attributes of the item to be created
      userId: "123", // The id of the author
      noteId: event.pathParameters.id
    },
    UpdateExpression: "SET content = :content, attachment = :attachment",
    ExpressionAttributeValues: {
      ":content": data.content || null,
      ":attachment": data.attachment || "attachment",
    },
    ReturnValues: "ALL_NEW"
  };

  const result = await dynamoDb.update(params);

  return {
    statusCode: 201,
    status: "Ok",
    data: result
  };
});
