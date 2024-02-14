import { Image } from "@nextui-org/image";
import logoImage from '../public/Copia de favicon.ico'

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <Image
                width={500}
                alt="NextUI hero Image"
                src={logoImage.src}
            />
        </section>
    );
}
