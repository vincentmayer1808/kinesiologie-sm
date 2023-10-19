import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Services } from "./Services";

export const HomePage = () => {
  return (
    <>
      <div className="relative flex justify-center items-center w-full p-3 mb-5 shrink">
        <Image
          src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696431033/KSMlogo_oobig8.webp"
          alt="Logo KSM"
          // fill
          // resize="(max-width:768px)100vw, 700px"
          width={2000}
          height={1500}
          className="h-auto max-w-3xl overflow-hidden"
        />
        <div className="absolute bottom-0 left-0 z-10 text-left md:w-1/2 pl-5 pb-2">
          <h1 className="text-xl md:text-4xl font-semibold text-pilates">
            Vivez les bienfaits de l&#8217;activité physique au quotidien!
          </h1>
          <p className="text-gris md:text-2xl">
            Une approche individualisée et humaine.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 bg-gradient-to-b from-rosekine to white text-gris w-full text-center p-6">
        <h2 className="text-3xl">La Kinésiologie c&#8217;est quoi?</h2>
        <p>
          La kinésiologie est l&#8217;étude de la dynamique du mouvement humain ainsi que de ses composantes (anatomiques, physiologiques, neurologiques, biochimiques, biomécaniques, neuromotrices, psychologiques) en interaction avec son environnement. (Alliance canadienne de kinésiologie-CKA)
        </p>
        <p>En autres mots; un spécialiste du corps humain et de l&#8217;activité physique.</p>
        <Link
          href="/kinesiologie"
          className="w-52 bg-pilates px-3 py-2 flex items-center justify-center font-semibold text-center text-white rounded-lg ring-white ring-2 hover:scale-105 transtion-all duration-200 hover:ring-vert hover:shadow-vert hover:shadow-lg hover:ring-vert"
        >
          EN SAVOIR PLUS
        </Link>
      </div>
      <Services />

      <div className="flex flex-col sm:flex-row items-center justify-center">
        <div className="sm:w-1/2 p-5 relative max-w-sm">
          <Image
            src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696343046/quiSab_thmik5.webp"
            alt="photo de Sabrina"
            width={1000}
            height={1000}
          />
        </div>
        <div className="sm:w-1/2 max-w-72 p-2 flex flex-col items-center justify-center gap-4 p-6">
          <h2 className="text-2xl text-center">Qui Suis-Je?</h2>
          <p className="text-center">
            Depuis toujours, j&#8217;adore bouger et aider les gens. Avec mes études, j&#8217;ai compris davantage les bienfaits d&#8217;intégrer un style de vie actif. Maintenant, je souhaite vous aider à y parvenir parce que… non ce n&#8217;est pas facile!
          </p>
          <p>Pour moi, la kinésiologie est … </p>
          <Link
            href="/about"
            className="w-52 bg-pilates px-3 py-2 flex items-center justify-center font-semibold text-center text-white rounded-lg ring-white ring-2 hover:shadow-lg hover:shadow-vert hover:scale-105 transtion-all duration-200 hover:ring-vert"
          >
            EN SAVOIR PLUS
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center bg-stone-200 w-full text-gris p-6">
        <p className=" text-center text-2xl italic w-2/3">
          &#39;&#39;L&#8217;accompagnement que j&#8217;ai reçu était à la fois motivant et personnalisé. Les exercices recommandés étaient clairs et agréables à réaliser. Sabrina fait preuve d&#8217;une grande écoute envers les besoins de la personne qu&#8217;elle accompagne, sans mettre de jugement, ce que crée un environnement propice à l&#8217;échange.&#39;&#39;
        </p>
        <p className="text-right">- Anna-Kim</p>
      </div>
      <div className="p-6 w-full bg-gris flex flex-col justify-center items-center gap-2 py-4 text-center">
        <p className="text-white text-4xl font-semibold">
          Fais appel à ton Kinésiologue dès aujourd&#8217;hui!
        </p>
        <Link
          href="/contact"
          className="w-52 bg-pilates px-3 py-2 flex items-center justify-center font-semibold text-center text-white rounded-lg ring-white ring-2 hover:shadow-lg hover:shadow-vert hover:scale-105 transtion-all duration-200 hover:ring-vert"
        >
          CONTACTEZ-MOI
        </Link>
      </div>
    </>
  );
};
