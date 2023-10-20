import RV from "@/components/RV";
import { Services } from "@/components/Services";
import Image from "next/image";
import React from "react";
import { dancingScript } from "../fonts";
// className="text-2xl sm:text-4xl text-gris font-bold" 
const page = () => {
  return (
    <div className="text-center">
      <div className=" relative pb-6">
        <Image
          src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696963946/openheart_cburqw.webp"
          alt="openheart"
          width={2500}
          height={1500}
        />
        <div className="text-3xl sm:text-5xl lg:text-7xl text-white font-bold text-left z-10 absolute top-20 left-10 lg:top-40 lg:left-32 z-10 lg:w-1/2 pl-5 pb-2">
          <h2 className={dancingScript.className}>Retrouve-toi !</h2>
        </div>
      </div>
      <Services />
      <div id="carte" className="flex flex-col justify-center items-center gap-4 p-6 pt-14">
        <h3 className="text-2xl font-semibold text-vert">LES SÉANCES À LA CARTE</h3>
        <p>
          Ce forfait demande une rencontre Initiale au préalable afin
          d&#8217;évaluer vos besoins et créer un programme adapté.{" "}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-evenly gap-4">
          <div className="w-52 h-36 bg-vert p-6 flex flex-col items-center justify-center gap-2 rounded-lg shadow shadow-gray-500 hover:shadow-lg hover:shadow-gray-500 hover:scale-105">
            <h4 className="text-lg">Rencontre Initiale + Création du programme : </h4>
            <p>90 $ </p>
          </div>
          <div className="w-52 h-36 bg-vert p-6 flex flex-col items-center justify-center gap-2 rounded-lg shadow shadow-gray-500 hover:shadow-lg hover:shadow-gray-500 hover:scale-105">
            <h4 className="text-lg">Séance Individuelle :</h4>
            <p>1H | 70 $</p>
          </div>
          <div className="w-52 h-36 bg-vert p-6 flex flex-col items-center justify-center gap-2 rounded-lg shadow shadow-gray-500 hover:shadow-lg hover:shadow-gray-500 hover:scale-105">
            <h4 className="text-lg"> Séance Semi-Privée (2à3) : </h4>
            <p>1H | 95 $</p>
            <p className="text-xs">*Pour le groupe</p>
          </div>
        </div>
        <RV />
        <p>
          *Un rabais peut s&#8217;appliquer pour la prise de plusieurs Rencontres.
        </p>
        <p>*Membre de la Fédération des Kinésiologue du Québec (FKQ) (reçu disponible pour fin d&#8217;assurance)</p>
      </div>
      <div className="lg:h-screen">
        <h3 id="maternite" className="text-2xl font-semibold text-vert py-14">
          LES FORFAITS AUTOUR DE LA MATERNITÉ
        </h3>
        <div className="flex flex-col lg:flex-row lg:h-5/6 xl:h-2/3 justify-evenly items-center gap-10 p-2">
          <div className="sm:w-2/3 lg:w-1/2 lg:h-full bg-vert p-6 flex flex-col justify-center items-center gap-2 rounded-lg shadow-lg shadow-gray-500 hover:shadow-xl hover:shadow-gray-500 hover:scale-105">
            <h4 className="text-2xl text-rosekine font-semibold pb-4">L&#8217;ESSENTIEL </h4>
            <ul >
              <li>
                <h5 className="font-medium">Rencontre Initiale</h5>
                <ul className="list-inside list-disc pb-2">
                  <li>Évaluation des besoins</li>
                  <li>Fixation des objectifs</li>
                  <li>Vidéo explicative du programme</li>
                </ul>
              </li>
              <li>
                <h5 className="font-medium">Seconde Rencontre</h5>
                <ul className="list-inside list-disc pb-2">
                  <li>Explication des principes de base liés au mouvement et à la grossesse</li>
                </ul>
              </li>
              <li>
                <h5 className="font-medium">Suivis</h5>
                <ul className="list-inside list-disc pb-2">
                  <li>3 Rencontres de  10 minutes</li>
                  <li className="list-none">Réparties sur la durée du forfait</li>
                </ul>
              </li>
            </ul>
            <p className="pb-4">
              Ce forfait permet d&#8217;adapter ton programme selon les symptômes
              qui peuvent survenir et les changements physiologiques liés à la
              grossesse.{" "}
            </p >
            <RV />
          </div>
          <div className="sm:w-2/3 lg:w-1/2 lg:h-full bg-vert p-6 flex flex-col justify-center items-center gap-2 rounded-lg shadow-lg shadow-gray-500 hover:shadow-xl hover:shadow-gray-500 hover:scale-105">
            <h4 className="text-2xl text-rosekine font-semibold">LA PROGRESSION</h4>
            <ul >
              <li>
                <h5 className="font-medium">Rencontre Initiale</h5>
                <ul className="list-inside list-disc pb-2">
                  <li>Évaluation des besoins</li>
                  <li>Fixation des objectifs</li>
                  <li>Vidéo explicative du programme</li>
                </ul>
              </li>
              <li>
                <h5 className="font-medium">Seconde Rencontre</h5>
                <ul className="list-inside list-disc pb-2">
                  <li>Explication des principes de base liés au mouvement et à la grossesse</li>
                </ul>
              </li>
              <li>
                <h5 className="font-medium">Troisième Rencontre</h5>
                <ul className="list-inside list-disc pb-2">
                  <li>Réévaluation des objectifs</li>
                  <li>Vidéo explicative du nouveau programme</li>
                </ul>
              </li>
              <li>
                <h5 className="font-medium">Suivis</h5>
                <ul className="list-inside list-disc pb-2">
                  <li>3 Rencontres de 10 minutes</li>
                  <li className="list-none">Réparties sur la durée du forfait</li>
                </ul>
              </li>
            </ul>
            <p>
              Ce forfait est idéal pour les futures ou les nouvelles mamans qui
              veulent une approche à long terme de l&#8217;intégration d&#8217;un
              style de vie plus actif et adapté à leur évolution.
            </p>
            <RV />
          </div>
        </div>
      </div>
      <div className="lg:h-screen">
        <h3 id="pelvienne" className="text-2xl font-semibold text-vert py-14">
          LES FORFAITS AUTOUR DE LA SANTÉ ABDOMINALE & PELVIENNE
        </h3>
        <div className="flex flex-col lg:flex-row lg:h-5/6 xl:h-2/3 justify-evenly items-center gap-10 p-2">
          <div className="sm:w-2/3 lg:w-1/2 lg:h-full bg-vert p-6 flex flex-col justify-center items-center gap-2 rounded-lg shadow-lg shadow-gray-500 hover:shadow-xl hover:shadow-gray-500 hover:scale-105">
            <h4 className="text-2xl text-rosekine font-semibold">PREMIER PAS</h4>
            <ul >
              <li>
                <h5 className="font-medium">Rencontre Initiale</h5>
                <ul className="list-inside list-disc pb-2">
                  <li>Évaluation des besoins</li>
                  <li>Fixation des objectifs</li>
                  <li>Vidéo explicative du programme</li>
                </ul>
              </li>
              <li>
                <h5 className="font-medium">Seconde Rencontre</h5>
                <ul className="list-inside list-disc pb-2">
                  <li>Explication des principes de base de la santé abdominale et pelvienne</li>
                </ul>
              </li>
              <li>
                <h5 className="font-medium">Suivis</h5>
                <ul className="list-inside list-disc pb-2">
                  <li>3 Rencontres de 10 minutes</li>
                  <li className="list-none">Réparties sur la durée du forfait</li>
                </ul>
              </li>
            </ul>
            <p className="pb-4">
              Ce forfait est idéal pour celles qui veulent optimiser leur santé abdominale et pelvienne par le biais de l&#8217;exercice et de l&#8217;éducation. Que ce soit pour la prévention ou aider à guérir certains symptômes (tels que les fuites ou une descente d&#8217;organe), ce programme est pour toi.
            </p>
            <RV />
          </div>
          <div className="sm:w-2/3 lg:w-1/2 lg:h-full bg-vert p-6 flex flex-col justify-center items-center gap-2 rounded-lg shadow-lg shadow-gray-500 hover:shadow-xl hover:shadow-gray-500 hover:scale-105">
            <h4 className="text-2xl text-rosekine font-semibold">L&#8217;INTÉGRATION </h4>
            <p>Ce forfait s&#8217;échelonne sur une période de 12 semaines.</p>
            <ul >
              <li>
                <h5 className="font-medium">Rencontre Mensuelle</h5>
                <ul className="list-inside list-disc pb-2">
                  <li>Évaluation des besoins</li>
                  <li>Fixation des objectifs</li>
                </ul>
              </li>
              <li>
                <h5 className="font-medium">Videos Référencielles</h5>
                <ul className="list-inside list-disc pb-2">
                  <li>
                    Vidéo explicative de chacun de tes programmes (3)
                  </li>
                  <li>Série de vidéos (12) sur la santé abdominale et pelvienne</li>
                </ul>
              </li>
              <li>
                <h5 className="font-medium">Suivis Hebdomadaires</h5>
                <ul className="list-inside list-disc pb-2">
                  <li>9 Rencontres de  10 minutes</li>
                  <li className="list-none">Réparties sur la durée du forfait</li>
                </ul>
              </li>
            </ul>
            <p>
              Ce forfait permet de progresser à son rythme afin de constater de réels changements sur sa santé abdominale et pelvienne. Il aide à prévenir et/ou guérir certains symptômes (tels que les fuites ou une descente d&#8217;organe) tout en changeant progressivement certaines habitudes de vie pour un maintien des effets à très long terme.
            </p>
            <RV />
          </div>
        </div>
      </div>
      <div className="lg:h-screen pb-10">
        <h3 id="50" className="text-2xl font-semibold text-vert py-14">
          LES FORFAITS 50+ EN MOUVEMENT
        </h3>
        <div className="flex flex-col lg:flex-row lg:h-5/6 xl:h-2/3 justify-evenly items-center gap-10 p-2">
          <div className="sm:w-2/3 lg:w-1/2 lg:h-full bg-vert p-6 flex flex-col justify-center items-center gap-2 rounded-lg shadow-lg shadow-gray-500 hover:shadow-xl hover:shadow-gray-500 hover:scale-105">
            <h4 className="text-2xl text-rosekine font-semibold pb-4">EN ACTION</h4>
            <ul >
              <li>
                <h5 className="font-medium">Rencontre Initiale</h5>
                <ul className="list-inside list-disc pb-2">
                  <li>Évaluation des besoins</li>
                  <li>Fixation des objectifs</li>
                </ul>
              </li>
              <li>
                <h5 className="font-medium">Video Référencielle</h5>
                <ul className="list-inside list-disc pb-2">
                  <li>Video explicative du programme</li>
                </ul>
              </li>
              <li>
                <h5 className="font-medium">Suivis</h5>
                <ul className="list-inside list-disc pb-2">
                  <li>6 Rencontres de  10 minutes</li>
                  <li className="list-none">Réparties sur la durée du forfait</li>
                </ul>
              </li>
            </ul>
            <p className="pb-4">
              Ce forfait est idéal pour ceux et celles qui veulent se mettre en action tout en ayant un suivi adapté. Il est conçu pour un accompagnement pendant 3 mois.
            </p>
            <RV />
          </div>
          <div className="sm:w-2/3 lg:w-1/2 lg:h-full bg-vert p-6 flex flex-col justify-center items-center gap-2 rounded-lg shadow-lg shadow-gray-500 hover:shadow-xl hover:shadow-gray-500 hover:scale-105">
            <h4 className="text-2xl text-rosekine font-semibold">
              LA PRISE EN CHARGE COMPLÈTE
            </h4>
            <ul >
              <li>
                <h5 className="font-medium">Rencontre Initiale</h5>
                <ul className="list-inside list-disc pb-2">
                  <li>Évaluation des besoins</li>
                  <li>Fixation des objectifs</li>
                </ul>
              </li>
              <li>
                <h5 className="font-medium">Entrainements Accompagnés</h5>
                <ul className="list-inside list-disc pb-2">
                  <li>En direct (présentiel ou virtuel)</li>
                  <li>3X/semaine</li>
                  <li>Durée de 12 semaines</li>
                </ul>
              </li>
              <li>
                <h5 className="font-medium">Suivis</h5>
                <ul className="list-inside list-disc pb-2">
                  <li>6 Rencontres de  10 minutes</li>
                  <li className="list-none">Réparties sur la durée du forfait</li>
                </ul>
              </li>
            </ul>
            <p>
              Ce forfait permet d&#8217;adapter le programme au fur et à mesure de
              votre évolution et briser la monotonie. Il permet un contact humain à
              chaque séance afin de perfectionner l&#8217;exécution des mouvements
              et aider à la motivation.{" "}
            </p>
            <RV />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b  from-neutral-300 to-white text-2xl p-4 pt-10 pb-10 italic">
        <p>&#39;&#39;Quelle chance de pouvoir atténuer certains malaises et inconforts que la vieillesse m&#8217;a fait découvrir. Merci de partager ton savoir par tes exercices et surtout ton incroyable motivation à les inclure dans mon quotidien afin que je vieillisse plus souple et épanouie.&#39;&#39;</p>
        <p>- Suzanne</p>
      </div>
    </div>
  );
};

export default page;
