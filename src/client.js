import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'qxsvd78r',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-10-24',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
    return builder.image(source);
};