import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HomePage = () => {
  return (
    <>
      <div className="relative flex justify-center items-center w-full p-3 shrink pt-12">
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
          <p className="text-gris text-lg md:text-2xl">
            Une approche individualisée et humaine.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 bg-rosebeige text-gris w-full text-center p-6">
        <h2 className="text-3xl">La Kinésiologie c&#8217;est quoi?</h2>
        <p>
          La kinésiologie est l&#8217;étude de la dynamique du mouvement humain
          ainsi que de ses composantes (anatomiques, physiologiques,
          neurologiques, biochimiques, biomécaniques, neuromotrices,
          psychologiques) en interaction avec son environnement. (CKA) En autres
          mots; un spécialiste du corps humain et de l&#8217;activité physique.
        </p>
        <Link
          href="/kinesiologie"
          className="w-52 bg-gris px-3 py-2 flex items-center justify-center font-medium text-center text-white rounded-lg hover:bg-teal-700 hover:scale-105 transtion-all duration-200 focus:ring-2 focus:ring-emerald-400"
        >
          EN SAVOIR PLUS!
        </Link>
      </div>
      <div className="bg-gris text-white w-full text-center p-4">
        <h2 className="font-bold text-3xl">NOS SERVICES</h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Link
            href="/services"
            className="p-3 m-2 w-64 rounded-lg hover:ring-2 ring-white hover:shadow-lg hover:shadow-white focus:scale-105"
          >
            <div>
              <Image src="" alt="" width={200} height={200} />
              <h3>SÉANCES A LA CARTE</h3>
            </div>
          </Link>
          <Link
            href="/services"
            className="p-3 m-2 w-64 rounded-lg hover:ring-2 ring-white hover:shadow-lg hover:shadow-white focus:scale-105"
          >
            <div>
              <Image src="" alt="" width={200} height={200} />
              <h3>MATERNITÉ</h3>
            </div>
          </Link>
          <Link
            href="/services"
            className="p-3 m-2 w-64 rounded-lg hover:ring-2 ring-white hover:shadow-lg hover:shadow-white focus:scale-105"
          >
            <div>
              <Image src="" alt="" width={200} height={200} />
              <h3>50+ EN MOUVEMENT</h3>
            </div>
          </Link>
          <Link
            href="/services"
            className="p-3 m-2 w-64 rounded-lg hover:ring-2 ring-white hover:shadow-lg hover:shadow-white focus:scale-105"
          >
            <div>
              <Image src="" alt="" width={200} height={200} />
              <h3>SANTÉ ABDOMINALE & PELVIENNE</h3>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-1/2 p-2 relative">
          <Image
            src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696343046/quiSab_thmik5.webp"
            alt="photo de Sabrina"
            fill
            resize="(max-width:768px)100vw, 700px"
            // width={1000}
            // height={1000}
            className=""
          />
        </div>
        <div className="sm:w-1/2 max-w-72 p-2 flex flex-col items-center justify-center gap-4 p-6">
          <h2 className="text-2xl text-center">Qui Suis-Je?</h2>
          <p className="text-right">
            Depuis toujours j&#8217;adore bouger et aider les gens. Avec les
            études, j&#8217;ai compris davantage les bienfaits d&#8217;intégrer
            un style de vie actif et maintenant je souhaite vous aider à y
            parvenir… parce que non ce n&#8217;est pas facile! Pour moi la
            kinésiologie c&#8217;est …
          </p>
          <Link
            href="/about"
            className=" w-52 bg-rosebeige px-3 py-2 flex items-center justify-center font-medium text-center text-white rounded-lg hover:bg-teal-700 hover:scale-105 transtion-all duration-200 focus:ring-2 focus:ring-emerald-400"
          >
            EN SAVOIR PLUS!
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center bg-rosebeige w-full text-gris p-6">
        <p className=" text-center text-2xl italic w-2/3">
          ⦁ &#39;&#39; L&#8217;accompagnement que j&#8217;ai reçu était à la
          fois motivant, personnalisé et les exercices recommandés étaient
          clairs et agréables à réaliser. Sabrina fait preuve d&#8217;une grande
          écoute envers les besoins de la personne qu&#8217;elle accompagne,
          sans mettre de jugement, ce qui crée un environnement propice à
          l&#8217;échange. &#39;&#39;
        </p>
        <p className="text-right">- Anna-Kim</p>
      </div>
      <div className="p-6 w-full bg-gris flex flex-col justify-center items-center gap-2 py-4 text-center">
        <p className="text-white text-4xl font-semibold">
          Faites appel à votre Kinésiologue dès aujourd&#8217;hui!
        </p>
        <Link href="/contact" className=" w-52 bg-rosebeige px-3 py-2 flex items-center justify-center font-medium text-center text-white rounded-lg hover:bg-teal-700 hover:scale-105 transtion-all duration-200 focus:ring-2 focus:ring-emerald-400">
          CONTACTEZ-MOI
        </Link>
      </div>
    </>
  );
};
