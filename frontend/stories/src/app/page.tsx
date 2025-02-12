import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/Nav";
import Video from "./components/Video";

export default function Home() {
  return (
    <>
      <Video src="https://www.w3schools.com/html/mov_bbb.mp4" // Video de prueba (URL pública)
        title="Prueba de Video" />\
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      <Nav />
    </>

  );
}
