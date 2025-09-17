const { default: Image } = require("next/image");

export default function Brand() {
  return (
    <div className="bg-white">
      <Image
        src="/image/brand.png"
        alt="Trusted Events"
        width={1920}
        height={800}
        className="w-full h-auto object-contain"
        priority
      />
    </div>
  );
}
