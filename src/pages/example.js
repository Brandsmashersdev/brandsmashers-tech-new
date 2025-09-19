import Image from 'next/image';

export default function Example() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dynamic Placeholder Image</h1>
      <Image
        src="/api/placeholder/400/200"
        unoptimized
        alt="Placeholder"
        width={400}
        height={200}
      />
    </div>
  );
}
