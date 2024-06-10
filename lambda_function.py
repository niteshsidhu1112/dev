import json
import boto3
from datetime import datetime


def lambda_handler(event, context):
    # TODO implement
    today_date=datetime.today().strftime('%Y-%m-%d')
    s3_client = boto3.client('s3')
    today_date=datetime.today().strftime('%Y-%m-%d')
    objects = s3_client.list_objects_v2(Bucket='aws-nitesh-raw',Prefix='src_data/'+today_date+'/')
    if objects['KeyCount']==0:
        print("file not present for "+today_date)
        return {
        'FilePresent': 'No'
                }
    else:
        print("file present for ",today_date)
        return {
        'FilePresent': 'Yes'
                }
