# e-comm

First, make sure you have Node.js installed on your system. You can check by running:
node --version
npm --version

Install the project dependencies using npm:
npm install

To start the development server:
npm run dev
This will start the Vite development server. By default, it will be available at http://localhost:5173

To build the project for production:
npm run build

To preview the production build locally:
npm run preview
Production preview: http://localhost:4173

# To deploy this application to AWS

First provision all the necessary infra in AWS using:
cd infrastructure
./provision-infra.sh

After Deployment
After you deploy this template, CloudFormation will output:

S3 bucket name
CloudFront distribution ID
CloudFront domain name
IAM user access key and secret key

Take these values and add them to your GitHub repository secrets under environment prod:
https://github.com/nnsantosh/react-ecomm-app/settings/secrets/actions

AWS_ACCESS_KEY_ID: The DeploymentUserAccessKey output value
AWS_SECRET_ACCESS_KEY: The DeploymentUserSecretKey output value
AWS_S3_BUCKET: The S3BucketName output value
AWS_CLOUDFRONT_DISTRIBUTION_ID: The CloudFrontDistributionId output value

After this any change in source code will trigger the github actions which will deploy your code to AWS and the application can be accessed by using cloudfront domain name

Check the app
