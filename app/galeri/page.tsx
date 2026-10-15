import GaleriTabs from "@/components/GaleriTabs";
import { getGaleri } from "@/data/konten";

export const metadata = { title: "Galeri" };

export default function Galeri() {
  const semua = getGaleri();
  const fotos = semua.filter((g) => g.jenis === "foto");
  const videos = semua.filter((g) => g.jenis === "video");
  return <GaleriTabs fotos={fotos} videos={videos} />;
}
