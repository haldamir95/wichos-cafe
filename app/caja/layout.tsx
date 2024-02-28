'use client'
import { Provider } from "react-redux";
import store from "@/store/store";


export default function CajaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Provider store={store}>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                {/* <div className="inline-block max-w-lg text-center justify-center"> */}
                {children}
            </section>
        </Provider>
    );
}
