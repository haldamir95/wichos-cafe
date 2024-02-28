'use client'
import { Provider } from "react-redux";
import { Image } from "@nextui-org/image";
import logoImage from '../public/Copia de favicon.ico'
import store from "@/store/store";

export default function Home() {
    return (
        <Provider store={store}>
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <Image
                width={500}
                alt="NextUI hero Image"
                src={logoImage.src}
            />
        </section>
        </Provider>
    );
}
