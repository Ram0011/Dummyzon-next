import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <div>
        <h1>Page not found!</h1>
        <Image
          src={"https://img.icons8.com/color/48/crying-baby.png"}
          alt=".."
          width={48}
          height={48}
        />
      </div>
    </>
  );
}
