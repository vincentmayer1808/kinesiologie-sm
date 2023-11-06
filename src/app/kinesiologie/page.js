import Link from "next/link";
import React from "react";
import { dancingScript } from "../fonts";

const page = () => {
  return (
    <div className="bg-stone-200 p-5 text-gris">
      <div className=" flex flex-col items-center justify-center text-center gap-4 pb-6">
        <h2 className=" text-5xl text-pilates">
          La Kinésiologie c&#8217;est quoi?
        </h2>
        <p className="italic">
          La kinésiologie est l&#8217;étude de la dynamique du mouvement humain
          ainsi que de ses composantes (anatomiques, physiologiques,
          neurologiques, biochimiques, biomécaniques, neuromotrices,
          psychologiques) en interaction avec son environnement. (CKA)
        </p>
        <p>
          En autres mots; un spécialiste du corps humain et de l&#8217;activité
          physique.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 pb-6">
        <h3 className="font-semibold text-vert text-xl">Kinésiologie autour de la maternité</h3>
        <p className="text-pilates text-center">Vise à vivre une grossesse et un post-partum en toute sécurité et avec le moins d&#8217;inconforts possibles.</p>
        <div className="flex flex-col justify-center gap-4 items-center text-center pb-6">
          <p className=" w-2/3">
          Dans cette étape cruciale de la vie, il est encore plus important de prendre soin de soi et de bouger de manière sécuritaire et adaptée. Adopter un style de vie actif va avoir des bénéfices pour la maman et le bébé. Un programme adapté permet, entre autres, d&#8217;éviter les blessures, de faciliter la grossesse, l&#8217;accouchement, la récupération post-accouchement ainsi que de prévenir ou d&#8217;améliorer les douleurs causées par les compensations posturales liées à la maternité.
          </p>
          <Link
            href="/services#maternite"
            className="p-2 rounded ring-2 ring-vert hover:text-pilates hover:scale-105 hover:ring-pilates"
          >
            EN SAVOIR PLUS
          </Link>
       
        </div>
      </div>
      <div className="flex flex-col justify-center gap-4 items-center pb-6">
        <h3 className="font-semibold text-vert text-xl">
        Kinésiologie pour la rééducation abdominale & pelvienne
        </h3>
        <p className="text-pilates text-center">
          Vise à optimiser l&#8217;efficience des muscles du plancher pelvien.{" "}
        </p>
        <p className="w-2/3 text-center">
        Prendre en charge sa santé abdominale et pelvienne est cruciale afin d&#8217;améliorer ou prévenir certains symptômes. Vous vivez avec des fuites urinaires, des douleurs pelviennes, une vessie hyperactive, de la constipation ou autres - Consulter en kinésiologie vous aidera à réduire vos symptômes afin d&#8217;améliorer votre qualité de vie.
        </p>

        <Link href="/services#pelvienne" className="p-2 mb-6 rounded ring-2 ring-vert hover:text-pilates hover:scale-105 hover:ring-pilates">
          EN SAVOIR PLUS
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center pb-6 gap-4">
        <h3 className="font-semibold text-vert text-xl text-center">
          50 + en mouvement
        </h3>
        <p className="text-pilates text-center">
          Vise le maintien de son autonomie le plus longtemps possible.
        </p>
        <p className="text-center w-2/3">
          Nous savons tous qu&#8217;il est si important de bouger afin de
          vieillir de manière optimale. Un programme adapté vous permettra
          d&#8217;intégrer l&#8217;activité physique de manière sécuritaire et
          efficace.{" "}
        </p>
        <Link href="/services#50" className="p-2 mb-6 rounded ring-2 ring-vert hover:text-pilates hover:scale-105 hover:ring-pilates"
        >
          EN SAVOIR PLUS
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center pb-6 gap-4">
        <h3 className="font-semibold text-vert text-xl text-center">
          S&#8217;entrainer pour soulager les inconforts.
        </h3>
        <p className="text-center w-2/3">
        Certaines douleurs récurrentes peuvent être liées à notre travail et/ou notre posture. Un entrainement spécifique aidera, entre autres, à relâcher certaines tensions et à rééquilibrer votre musculature ce qui soulagera vos zones douloureuses. Avec son approche globale, un kinésiologue peut vous aider significativement sur le long terme à vivre une vie avec moins de douleur.
        </p>
        <Link href="/services#carte" className="p-2 mb-6 rounded ring-2 ring-vert hover:text-pilates hover:scale-105 hover:ring-pilates"
        >
          EN SAVOIR PLUS
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center pb-6 gap-4">
        <h3 className="font-semibold text-vert text-xl text-center">
          Un kinésiologue{" "}
        </h3>
        <p className="text-center w-2/3">
        Est un professionnel de la santé qui vpus accompagne vers des objectifs précis. Il vous aide à intégrer un style de vie actif afin de réduire la sédentarité et favoriser une meilleure santé globale.
        </p>
        <Link href="/about" className="p-2 mb-6 rounded ring-2 ring-vert hover:text-pilates hover:scale-105 hover:ring-pilates"
        >
          MON APPROCHE
        </Link>
      </div>
      <p className="font-semibold text-pilates text-5xl text-center pb-10">
        <span className={dancingScript.className}> Osez vous laisser accompagner !</span>
      </p>
    </div>
  );
};

export default page;
