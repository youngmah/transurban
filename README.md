Requirement:

1.	Create a public repository in GitHub (https://github.com/)
2.	Create AWS Free Account (https://aws.amazon.com/free/).  If you have an existing account that is fine to use as well.
3.	Using the Serverless Framework create an API that can be deployed to your AWS account (https://serverless.com/)
a.	Code should be written in Node.js
b.	API will consist of 1 interface Pairs
c.	Pairs will take one input that is an array of numbers
d.	It will return the number of matching pairs for the array
Example Input:	 [10, 20, 20, 10, 10, 30, 50, 10, 20]
Example output:	 3
e.	Add security to the API by not allowing calls to be made without providing an assigned API key
4.	Commit the project to the GitHub repository you created in step 1.  Include all source code, unit tests, serverless files.  Do not include any generated files.  For instance, the node_modules/ directory created from a npm install command
5.	Please email back a url to the repository and a url and API key to your API running in AWS.

Installation:

npm install -g serverless
npm install -g mocha
mkdir my-express-application && cd my-express-application
npm install --save express serverless-http
aws ssm put-parameter --name "API_KEY" --value "test123" --type "String"
aws ssm get-parameters --names "API_KEY"

Deploy:

sls deploy

Unit test:

cd test
npm test

Integration test:

curl -d "[10, 20, 20, 10, 10, 30, 50, 10, 20]" -X POST https://09czw1knsa.execute-api.us-west-2.amazonaws.com/dev/Pair
curl -d "[10, 20, 20, 10, 10, 30, 50, 10, 20]" -H "API_KEY: test123" -X POST https://09czw1knsa.execute-api.us-west-2.amazonaws.com/dev/Pair
