#!/bin/bash

STACK_NAME="react-ecomm-app-hosting"
TEMPLATE_FILE="react-app-infrastructure.yml"
APP_NAME="reactEcommApp"
BUCKET_NAME="reactcjecommapp"

# Check if stack exists
if aws cloudformation describe-stacks --stack-name $STACK_NAME >/dev/null 2>&1; then
    echo "Stack exists, performing update..."
    aws cloudformation update-stack \
        --stack-name $STACK_NAME \
        --template-body file://$TEMPLATE_FILE \
        --parameters \
            ParameterKey=ApplicationName,ParameterValue=$APP_NAME \
            ParameterKey=Environment,ParameterValue=prod \
            ParameterKey=CreateNewBucket,ParameterValue=false \
        --capabilities CAPABILITY_NAMED_IAM || {
            echo "No updates to be performed or stack update failed"
            exit 0
        }

    echo "Waiting for stack update to complete..."
    aws cloudformation wait stack-update-complete --stack-name $STACK_NAME
else
    echo "Stack does not exist, creating new stack..."
    aws cloudformation create-stack \
        --stack-name $STACK_NAME \
        --template-body file://$TEMPLATE_FILE \
        --parameters \
            ParameterKey=ApplicationName,ParameterValue=$APP_NAME \
            ParameterKey=Environment,ParameterValue=prod \
            ParameterKey=CreateNewBucket,ParameterValue=true \
            ParameterKey=S3BucketName,ParameterValue=$BUCKET_NAME \
        --capabilities CAPABILITY_NAMED_IAM

    echo "Waiting for stack creation to complete..."
    aws cloudformation wait stack-create-complete --stack-name $STACK_NAME
fi

# Get the outputs
echo "Stack deployment completed. Fetching outputs..."
aws cloudformation describe-stacks \
    --stack-name $STACK_NAME \
    --query 'Stacks[0].Outputs[*].[OutputKey,OutputValue]' \
    --output table