'use client';
import { useEffect, useRef } from "react";

export default function InstagramFeed() {
    const metricsRef = useRef({ startTime: 0 });

    useEffect(() => {
        console.log('⏱️ InstagramFeed component mounted');
        metricsRef.current.startTime = performance.now();

        // Cargar el script de Elfsight si no está ya cargado
        const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');

        if (!existingScript) {
            const script = document.createElement('script');
            script.src = 'https://elfsightcdn.com/platform.js';
            script.async = true;

            script.onload = () => {
                const scriptTime = performance.now() - metricsRef.current.startTime;
                console.log(`✅ Elfsight script loaded in ${scriptTime.toFixed(2)}ms`);
            };

            script.onerror = () => {
                console.error('❌ Error loading Elfsight script');
            };

            document.body.appendChild(script);
        } else {
            console.log('✅ Elfsight script already present');
        }

        // Observar cuando el widget se renderiza
        const observer = new MutationObserver(() => {
            const widgetContainer = document.querySelector('.elfsight-app-8f278c7a-662d-4231-9802-d94c96b13e3e');
            if (widgetContainer && widgetContainer.children.length > 0) {
                const totalTime = performance.now() - metricsRef.current.startTime;
                console.log(`🎉 Widget fully rendered in ${totalTime.toFixed(2)}ms`);
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="pt-20 padding-responsive">
            <div
                className="elfsight-app-8f278c7a-662d-4231-9802-d94c96b13e3e"
                data-elfsight-app
            ></div>
        </section>
    );
}