import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmSkXMqYNQpweBtwVsTnVmKJWyNWfgpwvGfpemQaii3LZA/0.jpeg`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'New Home for Larry',
  description: 'A frame for Larry the bird',
  openGraph: {
    title: 'Larry meets Farcaster',
    description: 'A frame bringing the origin spirit of Twitter to a new home.',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmSkXMqYNQpweBtwVsTnVmKJWyNWfgpwvGfpemQaii3LZA/0.jpeg`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>New Home for Larry</h1>
    </>
  );
}
