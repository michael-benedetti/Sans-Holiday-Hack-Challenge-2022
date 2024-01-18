import ChallengeSummary from "../ChallengeSummary";
import {Accordion, AccordionDetails} from "@mui/material";
import {ChallengeDetails, Content, Pop, StyledSyntaxHighligher, TerminalPrompt} from "../Common";
import QuoteCard from "../QuoteCard";
import characters from "../characters";

function ExplorationViaAwsCli() {
  return (
    <Accordion>
      <ChallengeSummary title={"Exploration via AWS CLI"} difficulty={3}/>
      <AccordionDetails>
        <ChallengeDetails>
          Flex some more advanced AWS CLI skills to escalate privileges! Help Gerty Snowburrow in the Cloud Ring to get hints for this challenge.
        </ChallengeDetails>
        <Content>
          Heading further up Cloud Ring, we run into <Pop>Sulfrod</Pop> who has this to say:
        </Content>
        <QuoteCard
          character={characters.sulfrod}
          quote={0}
        />
        <Content>
          Accessing the terminal prompts us with another <Pop>AWS</Pop> challenge:
        </Content>
        <TerminalPrompt>
          Use Trufflehog to find credentials in the Gitlab instance at
          https://haugfactory.com/asnowball/aws_scripts.git.
          <br/>
          Configure these credentials for us-east-1 and then run:
          <br/>
          $ aws sts get-caller-identity
        </TerminalPrompt>
        <Content>
          Here's the result of running Truffelhog:
        </Content>
        <StyledSyntaxHighligher language={"sh"}>
          {
            `$ docker run -it -v "$PWD:/pwd" trufflesecurity/trufflehog:latest git https://haugfactory.com/asnowball/aws_scripts
🐷🔑🐷  TruffleHog. Unearth your secrets. 🐷🔑🐷

Found unverified result 🐷🔑❓
Detector Type: AWS
Decoder Type: PLAIN
Raw result: AKIAAIDAYRANYAHGQOHD
Repository: https://haugfactory.com/asnowball/aws_scripts
Timestamp: 2022-09-07 07:53:12 -0700 -0700
Line: 6
Commit: 106d33e1ffd53eea753c1365eafc6588398279b5
File: put_policy.py
Email: asnowball <alabaster@northpolechristmastown.local>`
          }
        </StyledSyntaxHighligher>
        <Content>
          We can clone the repo, and checkout the commit in which the <Pop>AWS</Pop> secrets were found:
        </Content>
        <StyledSyntaxHighligher language={"sh"}>
          {
            `$ git clone https://haugfactory.com/asnowball/aws_scripts
$ cd aws_scripts
$ git checkout 106d33e1ffd53eea753c1365eafc6588398279b5`
          }
        </StyledSyntaxHighligher>
        <Content>
          At this commit, we can inspect the contents of <Pop>put_policy.py</Pop>:
        </Content>
        <StyledSyntaxHighligher language={"sh"}>
          {
            `$ cat put_policy.py
import boto3
import json


iam = boto3.client('iam',
    region_name='us-east-1',
    aws_access_key_id="AKIAAIDAYRANYAHGQOHD",
    aws_secret_access_key="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",
)
# arn:aws:ec2:us-east-1:accountid:instance/*
response = iam.put_user_policy(
    PolicyDocument='{"Version":"2012-10-17","Statement":[{"Effect":"Allow","Action":["ssm:SendCommand"],"Resource":["arn:aws:ec2:us-east-1:748127089694:instance/i-0415bfb7dcfe279c5","arn:aws:ec2:us-east-1:748127089694:document/RestartServices"]}]}',
    PolicyName='AllAccessPolicy',
    UserName='nwt8_test',
)`
          }
        </StyledSyntaxHighligher>
        <Content>
          We now have an access key and secret key.
        </Content>
        <StyledSyntaxHighligher language={"sh"}>
          {
            `$ aws configure
AWS Access Key ID [None]: AKIAAIDAYRANYAHGQOHD
AWS Secret Access Key [None]: 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
Default region name [None]: us-east-1
Default output format [None]: 
$ aws sts get-caller-identity
{
    "UserId": "AIDAJNIAAQYHIAAHDDRA",
    "Account": "602123424321",
    "Arn": "arn:aws:iam::602123424321:user/haug"
}`
          }
        </StyledSyntaxHighligher>
        <TerminalPrompt>
          Managed (think: shared) policies can be attached to multiple users. Use the AWS CLI to find any policies
          attached to your user.
          <br/>
          The aws iam command to list attached user policies can be found here:
          <br/>
          https://awscli.amazonaws.com/v2/documentation/api/latest/reference/iam/index.html
          <br/>
          Hint: it is NOT list-user-policies.
        </TerminalPrompt>
        <StyledSyntaxHighligher language={"sh"}>
          {
            `$ aws iam list-attached-user-policies --user-name haug
{
    "AttachedPolicies": [
        {
            "PolicyName": "TIER1_READONLY_POLICY",
            "PolicyArn": "arn:aws:iam::602123424321:policy/TIER1_READONLY_POLICY"
        }
    ],
    "IsTruncated": false
}`
          }
        </StyledSyntaxHighligher>
        <TerminalPrompt>
          Now, view or get the policy that is attached to your user.
          <br/>
          The aws iam command to get a policy can be found here:
          <br/>
          https://awscli.amazonaws.com/v2/documentation/api/latest/reference/iam/index.html
        </TerminalPrompt>
        <StyledSyntaxHighligher language={"sh"}>
          {
            `$ aws iam get-policy --policy-arn arn:aws:iam::602123424321:policy/TIER1_READONLY_POLICY
{
    "Policy": {
        "PolicyName": "TIER1_READONLY_POLICY",
        "PolicyId": "ANPAYYOROBUERT7TGKUHA",
        "Arn": "arn:aws:iam::602123424321:policy/TIER1_READONLY_POLICY",
        "Path": "/",
        "DefaultVersionId": "v1",
        "AttachmentCount": 11,
        "PermissionsBoundaryUsageCount": 0,
        "IsAttachable": true,
        "Description": "Policy for tier 1 accounts to have limited read only access to certain resources in IAM, S3, and LAMBDA.",
        "CreateDate": "2022-06-21 22:02:30+00:00",
        "UpdateDate": "2022-06-21 22:10:29+00:00",
        "Tags": []
    }
}`
          }
        </StyledSyntaxHighligher>
        <TerminalPrompt>
          Attached policies can have multiple versions. View the default version of this policy.
          <br/>
          The aws iam command to get a policy version can be found here:
          <br/>
          https://awscli.amazonaws.com/v2/documentation/api/latest/reference/iam/index.html
        </TerminalPrompt>
        <StyledSyntaxHighligher language={"sh"}>
          {
            `$ aws iam get-policy-version --policy-arn arn:aws:iam::602123424321:policy/TI
ER1_READONLY_POLICY --version-id v1                                                            
{                                                                                              
    "PolicyVersion": {                                                                         
        "Document": {                                                                          
            "Version": "2012-10-17",                                                           
            "Statement": [                                                                     
                {                                                                              
                    "Effect": "Allow",                                                         
                    "Action": [                                                                
                        "lambda:ListFunctions",                                                
                        "lambda:GetFunctionUrlConfig"                                          
                    ],                                                                         
                    "Resource": "*"                                                            
                },                                                                             
                {                                                                              
                    "Effect": "Allow",                                                         
                    "Action": [
                        "iam:GetUserPolicy",
                        "iam:ListUserPolicies", 
                        "iam:ListAttachedUserPolicies"
                    ],
                    "Resource": "arn:aws:iam::602123424321:user/\${aws:username}"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "iam:GetPolicy",
                        "iam:GetPolicyVersion"
                    ],
                    "Resource": "arn:aws:iam::602123424321:policy/TIER1_READONLY_POLICY"
                },
                {
                    "Effect": "Deny",
                    "Principal": "*",
                    "Action": [
                        "s3:GetObject",
                        "lambda:Invoke*"
                    ],
                    "Resource": "*"
                }
            ]
        },
        "VersionId": "v1",
        "IsDefaultVersion": false,
        "CreateDate": "2022-06-21 22:02:30+00:00"
    }
}`
          }
        </StyledSyntaxHighligher>
        <TerminalPrompt>
          Inline policies are policies that are unique to a particular identity or resource. Use the AWS CLI to list the
          inline policies associated with your user.
          <br/>
          The aws iam command to list user policies can be found here:
          <br/>
          https://awscli.amazonaws.com/v2/documentation/api/latest/reference/iam/index.html
          <br/>
          Hint: it is NOT list-attached-user-policies.
        </TerminalPrompt>
        <StyledSyntaxHighligher language={"sh"}>
          {
            `$ aws iam list-user-policies --user-name haug
{
    "PolicyNames": [
        "S3Perms"
    ],
    "IsTruncated": false
}`
          }
        </StyledSyntaxHighligher>
        <TerminalPrompt>
          Now, use the AWS CLI to get the only inline policy for your user.
          <br/>
          The aws iam command to get a user policy can be found here:
          <br/>
          https://awscli.amazonaws.com/v2/documentation/api/latest/reference/iam/index.html
        </TerminalPrompt>
        <StyledSyntaxHighligher language={"sh"}>
          {
            `$ aws iam get-user-policy --user-name haug --policy-name S3Perms
{
    "UserPolicy": {
        "UserName": "haug",
        "PolicyName": "S3Perms",
        "PolicyDocument": {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Effect": "Allow",
                    "Action": [
                        "s3:ListObjects"
                    ],
                    "Resource": [
                        "arn:aws:s3:::smogmachines3",
                        "arn:aws:s3:::smogmachines3/*"
                    ]
                }
            ]
        }
    },
    "IsTruncated": false
}`
          }
        </StyledSyntaxHighligher>
        <TerminalPrompt>
          The inline user policy named S3Perms disclosed the name of an S3 bucket that you have permissions to list
          objects.
          <br/>
          List those objects!
          <br/>
          The aws s3api command to list objects in an s3 bucket can be found here:
          <br/>
          https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3api/index.html
        </TerminalPrompt>
        <StyledSyntaxHighligher language={"sh"}>
          {
            `$ aws s3api list-objects --bucket smogmachines3                              
{                                                                                              
    "IsTruncated": false,                                                                      
    "Marker": "",                                                                              
    "Contents": [                                                                              
        {                                                                                      
            "Key": "coal-fired-power-station.jpg",                                             
            "LastModified": "2022-09-23 20:40:44+00:00",                                       
            "ETag": "\\"1c70c98bebaf3cff781a8fd3141c2945\\"",                                    
            "Size": 59312,                                                                     
            "StorageClass": "STANDARD",                                                        
            "Owner": {                                                                         
                "DisplayName": "grinchum",                                                     
                "ID": "15f613452977255d09767b50ac4859adbb2883cd699efbabf12838fce47c5e60"       
            }
        },
        ...
        ...`
          }
        </StyledSyntaxHighligher>
        <TerminalPrompt>
          The attached user policy provided you several Lambda privileges. Use the AWS CLI to list Lambda functions.
          <br/>
          The aws lambda command to list functions can be found here:
          <br/>
          https://awscli.amazonaws.com/v2/documentation/api/latest/reference/lambda/index.html
        </TerminalPrompt>
        <StyledSyntaxHighligher language={"sh"}>
          {
            `$ aws lambda list-functions                                                  
{                                                                                              
    "Functions": [                                                                             
        {                                                                                      
            "FunctionName": "smogmachine_lambda",                                              
            "FunctionArn": "arn:aws:lambda:us-east-1:602123424321:function:smogmachine_lambda",
            "Runtime": "python3.9",                                                            
            "Role": "arn:aws:iam::602123424321:role/smogmachine_lambda",                       
            "Handler": "handler.lambda_handler",                                               
            "CodeSize": 2126,                                                                  
            "Description": "",                                                                 
            "Timeout": 600,                                                                    
            "MemorySize": 256,                                                                 
            "LastModified": "2022-09-07T19:28:23.634+0000",                                    
            "CodeSha256": "GFnsIZfgFNA1JZP3TgTI0tIavOpDLiYlg7oziWbtRsa=",                      
            "Version": "$LATEST",                                                              
            "VpcConfig": {                                                                     
                "SubnetIds": [                                                                 
                    "subnet-8c80a9cb8b3fa5505"
                ],
                "SecurityGroupIds": [
                    "sg-b51a01f5b4711c95c"
                ],
                "VpcId": "vpc-85ea8596648f35e00"
            },
            "Environment": {
                "Variables": {
                    "LAMBDASECRET": "975ceab170d61c75",
                    "LOCALMNTPOINT": "/mnt/smogmachine_files"
                }
            },
            "TracingConfig": {
                "Mode": "PassThrough"
            },
            "RevisionId": "7e198c3c-d4ea-48dd-9370-e5238e9ce06e",
            "FileSystemConfigs": [
                {
                    "Arn": "arn:aws:elasticfilesystem:us-east-1:602123424321:access-point/fsap-db3277b03c6e975d2",
                    "LocalMountPath": "/mnt/smogmachine_files"
                }
            ],
            "PackageType": "Zip",
            "Architectures": [
                "x86_64"
            ],
            "EphemeralStorage": {
                "Size": 512
            }
        }
    ]
}`
          }
        </StyledSyntaxHighligher>
        <TerminalPrompt>
          Lambda functions can have public URLs from which they are directly accessible.
          <br/>
          Use the AWS CLI to get the configuration containing the public URL of the Lambda function.
          <br/>
          The aws lambda command to get the function URL config can be found here:
          <br/>
          https://awscli.amazonaws.com/v2/documentation/api/latest/reference/lambda/index.html
        </TerminalPrompt>
        <StyledSyntaxHighligher language={"sh"}>
          {
            `elf@7fcaa16cbd57:~$ aws lambda get-function-url-config --function-name smogmachine_lambda
{
    "FunctionUrl": "https://rxgnav37qmvqxtaksslw5vwwjm0suhwc.lambda-url.us-east-1.on.aws/",
    "FunctionArn": "arn:aws:lambda:us-east-1:602123424321:function:smogmachine_lambda",
    "AuthType": "AWS_IAM",
    "Cors": {
        "AllowCredentials": false,
        "AllowHeaders": [],
        "AllowMethods": [
            "GET",
            "POST"
        ],
        "AllowOrigins": [
            "*"
        ],
        "ExposeHeaders": [],
        "MaxAge": 0
    },
    "CreationTime": "2022-09-07T19:28:23.808713Z",
    "LastModifiedTime": "2022-09-07T19:28:23.808713Z"
}`
          }
        </StyledSyntaxHighligher>
        <Content>
          This completes the challenge, to which <Pop>Sulfrod</Pop> has to say:
        </Content>
        <QuoteCard
          character={characters.sulfrod}
          quote={1}
        />
        <Content>
          Upon departing Cloud Ring, we are greeted by <Pop>Grinchum</Pop> yet again. Here's what he has to say:
        </Content>
        <QuoteCard
          character={characters.grinchum}
          quote={3}
        />
      </AccordionDetails>
    </Accordion>
  )
}

export default ExplorationViaAwsCli
