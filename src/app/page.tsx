import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="w-full h-screen bg-gradient grid place-content-center">
        <link rel="icon" href="../icons/logo.ico" type="image/x-icon" />
        <Image
          alt="Logo-Sycode"
          src={"/icons/logo-light.svg"}
          width={210}
          height={270}
          className="Image"
        />
        <h2>Em Manutenção</h2>
      </main>
    </>
  );
}
