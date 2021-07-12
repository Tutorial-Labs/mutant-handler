import {Handler, Context} from 'aws-lambda';
import {MutantHandlerController} from "./controller/mutant-handler-controller";

const mutantHandlerController = new MutantHandlerController();
const response = {
  statusCode: 200,
  body: JSON.stringify({
    message: 'SQS event processed.',
  }),
};

// @ts-ignore
export const save: Handler = (event: any, context: Context) => {

  event.Records.forEach(function(record) {
    mutantHandlerController.saveMessages(
      record.messageAttributes.dna.stringValue,
      record.messageAttributes.isMutant.stringValue === "true" ? 1 : 0
    );
  });

  return response;
};