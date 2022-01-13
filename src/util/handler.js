export function handler(lambda) {
  return async function (event, context) {
    let body, statusCode;

    try {
      body = await lambda(event, context);
      statusCode = 200;
    } catch (e) {
      const body = {error: e.message};
      console.error(body)
      statusCode = 500;
    }

    return {
      statusCode,
      body: JSON.stringify(body),
    };
  };
}
