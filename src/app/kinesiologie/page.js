import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="bg-orange-200 p-5">
      <div className="pt-24 flex flex-col items-center justify-center text-center gap-4">
        <h2 className=" text-5xl text-lime-800">La Kinésiologie c&#8217;est quoi?</h2>
        <p>
          La kinésiologie est l&#8217;étude de la dynamique du mouvement humain ainsi
          que de ses composantes (anatomiques, physiologiques, neurologiques,
          biochimiques, biomécaniques, neuromotrices, psychologiques) en
          interaction avec son environnement. (CKA)
        </p>
        <p>
          En autres mots; un spécialiste du corps humain et de l&#8217;activité
          physique.
        </p>
      </div>
      <div>
        <h3>Rééducation périnéale et pelvienne</h3>
        <p>Vise à optimiser l&#8217;efficience des muscles du plancher pelvien. </p>
        <p>
          <span>Autour de la maternité-</span> dans cette étape cruciale de la
          vie, il est encore plus important de prendre soin de soi et de bouger
          de manière sécuritaire et adapté. Adopter un style de vie actif va
          avoir des bénéfices pour la maman et le bébé. Un programme adapté
          permet, entre autres, d&#8217;éviter les blessures, de facilité la
          grossesse, l&#8217;accouchement et la récupération post-accouchement, de
          prévenir ou d&#8217;améliorer les douleurs causées par les compensations
          posturales.{" "}
        </p>
        <p>
          <span>Être une femme (ou même un homme) -</span> Prendre en charge sa
          santé abdominale et pelvienne est crucial afin d&#8217;améliorer ou prévenir
          certains symptômes. Vous vivez avec des fuites urinaires, des douleurs
          pelviennes, une vessie hyperactive, de la constipation, etc. -
          Consulter vous aidera à réduire vos symptômes afin d&#8217;améliorer votre
          qualité de vie.{" "}
        </p>
        <Image src="" alt="" width={1000} height={1000} />
        {/* (IMAGE : cœur périnée à côté du texte)  */}
        <Link href="/article">
          EN SAVOIR PLUS SUR LES BIENFAITS DE L&#8217;AP PRÉ-NATALE
        </Link>
        <Link href="/article">
          EN SAVOIR PLUS SUR LES BIENFAITS DE L&#8217;AP POST-NATALE
        </Link>
        <Link href="/article">
          EN SAVOIR PLUS SUR LES BIENFAITS DE L&#8217;AP SANTÉE PELVIENNE
        </Link>
      </div>
      <div>
        <h3>50 + en mouvement</h3>
        <p>Vise le maintien de son autonomie le plus longtemps possible.</p>
        <p>
          Nous savons tous qu&#8217;il est si important de bouger afin de vieillir de
          manière optimale. Un programme adapté vous permettra d&#8217;intégrer
          l&#8217;activité physique de manière sécuritaire et efficace.{" "}
        </p>
        <Link href="">BIENFAITS ACTIVITÉ PHYSIQUE 50+</Link>
      </div>
      <div>
        <h3>S&#8217;entrainer pour soulager la douleur</h3>
        <p>
          Certaines douleurs récurrentes peuvent être liées à notre travail
          et/ou notre posture. Un entrainement spécifique aidera, entre autres,
          à relâcher certaines tensions et rééquilibrer votre musculature ce qui
          soulagera vos zones douloureuses. Avec son approche globale, un
          kinésiologue peut aider significativement sur le long terme à vivre
          une vie avec moins de douleur.{" "}
        </p>
      </div>
      <div>
        <h3>Un kinésiologue </h3>
        <p>
          Est un professionnel de la santé qui vous accompagne vers des
          objectifs précis. Il vous aide à intégrer un style de vie actif afin
          de réduire la sédentarité et favoriser une meilleure santé globale.{" "}
        </p>
        <Link href="/about">EN SAVOIR PLUS SUR MON APPROCHE</Link>
      </div>
      <p>Osez-vous laissez accompagner !</p>
    </div>
  );
};

export default page;
