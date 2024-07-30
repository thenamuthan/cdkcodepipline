import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class lambdastack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);

      //creating lambda function
      const demolambda = new lambda.Function(this, 'MyFunction', {
        runtime: lambda.Runtime.NODEJS_18_X,
        code: lambda.Code.fromInline('exports.handler =_=>"Hello.cdkdemo";'),
        handler: 'index.handler',
      });

    }
}