
import {
    BlobServiceClient,
} from '@azure/storage-blob';

const account = process.env.STORAGE_ACCOUNT_NAME!;
const accountKey = process.env.STORAGE_ACCOUNT_KEY!;
const connectionString = `DefaultEndpointsProtocol=https;AccountName=${account};AccountKey=${accountKey};EndpointSuffix=core.windows.net`;

const getBlobServiceClient = () =>
    BlobServiceClient.fromConnectionString(connectionString);

export const getContainerCount = async () => {
    console.log('calling azure storage');
    const blobServiceClient = getBlobServiceClient();
    const containers = blobServiceClient.listContainers();
    let count = 0;
    for await (const _ of containers) {
        count++;
    }
    return count;
}