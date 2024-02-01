import { Divider } from "@nextui-org/react";
import { FC } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import HomePageJobCard from "../components/HomePageJobCard";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import IconHolder from "../components/UtilComponents/IconHolder";

//HARDCODED DATA (waiting for backend)
const adsIt = [
  {
    companyName: "Tech Inovatori d.o.o.",
    role: "Full Stack Inženjer",
    description:
      "Tražimo talentiranog inženjera s strašću za inovacije koji će se pridružiti našem dinamičnom timu. Uzbudljivi projekti čekaju pravog kandidata koji napreduje u suradničkom okruženju.",
  },
  {
    companyName: "Digitalna Dinamika d.o.o.",
    role: "UX/UI Dizajner",
    description:
      "Tražimo kreativni um s osjećajem za dizajn koji će oblikovati angažirana korisnička iskustva. Pridružite nam se u oblikovanju intuitivnih sučelja koja redefiniraju digitalnu interakciju i korisničko zadovoljstvo.",
  },
  {
    companyName: "CodeCrafters Rješenja",
    role: "Inženjer softvera (Backend)",
    description:
      "Pridružite nam se u timu backend čarobnjaka u izgradnji skalabilnih rješenja za izazove budućnosti. Tražimo strastvene inženjere koji se ističu u izradi robusnog i učinkovitog koda.",
  },
  {
    companyName: "Nexus Tehnologije d.o.o.",
    role: "Voditelj proizvoda",
    description:
      "Tražimo vizionarskog vođu koji će voditi strategiju i provedbu proizvoda. Ako ste strastveni u isporuci utjecajnih proizvoda i oblikovanju korisničkih iskustava, želimo čuti od vas.",
  },
  {
    companyName: "ByteBlast Inovacije",
    role: "Znanstvenik podataka",
    description:
      "Uzbudljiva prilika za entuzijasta podataka da zaroni u kompleksne skupove podataka i izvuče smislene spoznaje. Pridružite nam se u korištenju pristupa vođenih podacima kako biste riješili stvarne probleme.",
  },
  {
    companyName: "Infinity Softverska Rješenja",
    role: "QA Inženjer",
    description:
      "Tražimo pedantnog QA inženjera koji će osigurati najviše standarde kvalitete naših softverskih proizvoda. Ako imate oko za detalje i strast za isporukom besprijekornih iskustava, razgovarajmo.",
  },
  {
    companyName: "Streamline Tehnologije d.o.o.",
    role: "DevOps Inženjer",
    description:
      "Pridružite nam se u timu DevOps stručnjaka u optimizaciji naših razvojnih i implementacijskih cjevovoda. Tražimo vješte inženjere koji mogu automatizirati i optimizirati naše procese za maksimalnu učinkovitost.",
  },
  {
    companyName: "Kvantne Računalne Sustave",
    role: "Znanstvenik istraživač",
    description:
      "Uzbudljiva prilika za znatiželjni um istražiti granicu kvantnog računarstva. Pridružite nam se istraživačkom timu u pomicanju granica tehnologije i otključavanju novih mogućnosti.",
  },
];

const adsHospitality = [
  {
    companyName: "Luksuzni Resort Rivijera",
    role: "Recepcijski Službenik",
    description:
      "Tražimo srdačnog i energičnog recepcijskog službenika koji će pružiti vrhunsku uslugu našim gostima. role uključuje upravljanje rezervacijama, doček gostiju i pružanje informacija o objektu i lokalnoj okolini.",
  },
  {
    companyName: "Boutique Hotel Miramare",
    role: "Konobar",
    description:
      "Pridružite se našem timu kao konobar u našem boutique hotelu s pet zvjezdica. Tražimo ljubazne, iskusne osobe koje će pružiti vrhunsku uslugu gostima tijekom obroka i pića uz prepoznatljiv osmijeh.",
  },
  {
    companyName: "Planinski Chalet Vista",
    role: "Sobar/Sobarica",
    description:
      "Pozivamo stručne sobare/sobarice da se pridruže našem timu u prekrasnom planinskom chaletu. Odgovornosti uključuju održavanje čistoće i reda u sobama te pružanje gostima udoban i ugodan boravak.",
  },
  {
    companyName: "Eko Resort Zeleni Raj",
    role: "Kuhar",
    description:
      "Tražimo kreativnog i strastvenog kuhara za naš eko resort usred prirode. Pridružite se našem timu u pripremi ukusnih jela s lokalnim sastojcima te osigurajte nezaboravno iskustvo okusa našim gostima.",
  },
  {
    companyName: "Gradska Vila Adria",
    role: "Recepcijski Menadžer",
    description:
      "Pozivamo iskusne recepcijske menadžere da preuzmu ključnu ulogu u upravljanju našim hotelom u srcu grada. Odgovornosti uključuju vođenje tima, upravljanje rezervacijama i osiguranje izvrsne usluge gostima.",
  },
  {
    companyName: "Seoska Gostionica Sunčani Breg",
    role: "Kuhinjski Pomoćnik",
    description:
      "Tražimo entuzijastičnog kuhinjskog pomoćnika koji će podržati naše kuhare u pripremi ukusnih jela. role uključuje pripremu sastojaka, čišćenje kuhinje i podršku u održavanju visokih standarda higijene.",
  },
  {
    companyName: "Spa Hotel Oaza Mir",
    role: "Spa Terapeut",
    description:
      "Pridružite se našem timu kao Spa terapeut i pružite našim gostima opuštajuće i revitalizirajuće tretmane. Tražimo stručne terapeute koji će stvoriti miran i ugodan prostor za naše goste.",
  },
  {
    companyName: "Obiteljski Pansion Slatka Kuća",
    role: "Gostinski Radnik",
    description:
      "Pozivamo ljubazne gostinske radnike da se pridruže našem obiteljskom pansionu. Odgovornosti uključuju brigu o gostima, posluživanje obroka, čišćenje i osiguravanje ugodnog boravka u našem domu.",
  },
];

const adsConstruction = [
  {
    companyName: "Graditeljstvo Plus d.o.o.",
    role: "Glavni Građevinski Inženjer",
    description:
      "Tražimo iskusnog glavnog građevinskog inženjera za vođenje projekata. Odgovornosti uključuju planiranje, nadzor gradilišta i osiguravanje usklađenosti s prdescriptionima. Pridružite nam se i budite ključni dio našeg tima.",
  },
  {
    companyName: "Arhitektonski Dizajn & Građenje",
    role: "Arhitekt",
    description:
      "Pozivamo kreativne arhitekte da se pridruže našem timu. Vaša uloga obuhvaća projektiranje, izradu nacrta i suradnju s klijentima kako bismo stvorili funkcionalne i estetski privlačne objekte.",
  },
  {
    companyName: "Betonski Majstori d.o.o.",
    role: "Betonski Radnik",
    description:
      "Tražimo vješte betonske radnike za izvođenje različitih građevinskih radova. Iskustvo u lijevanju betona i upotrebi građevinskih alata je prednost. Pridružite se našem timu i gradimo zajedno.",
  },
  {
    companyName: "Elektrogradnja Ltd.",
    role: "Električar",
    description:
      "Pridružite se našem timu kao električar i sudjelujte u instalaciji električnih sustava u novim građevinama. Iskustvo u radu s električnim instalacijama je poželjno. Postanite dio našeg tima i gradimo zajedno.",
  },
  {
    companyName: "Zidarska ekipa 'Kameni Temelj'",
    role: "Zidar",
    description:
      "Zidarska ekipa 'Kameni Temelj' traži vješte zidare za izgradnju zidova, temelja i drugih građevinskih struktura. Iskustvo u zidanju i kvalitetan rad su ključni. Pridružite nam se i gradimo čvrste temelje zajedno.",
  },
  {
    companyName: "Krovopokrivački Radovi d.o.o.",
    role: "Krovopokrivač",
    description:
      "Pozivamo vještog krovopokrivača da se pridruži našem timu. Vaše odgovornosti uključuju postavljanje krovova, izradu konstrukcija i upotrebu različitih materijala. Pridružite se i gradimo krovove koji traju.",
  },
  {
    companyName: "Građevinska Mehanizacija 'Bulldozer'",
    role: "Operater Građevinske Mehanizacije",
    description:
      "Tražimo iskusne operatere građevinske mehanizacije za vožnju i održavanje teške opreme. Iskustvo u radu s bagerima, buldožerima i drugim strojevima je prednost. Pridružite se našem timu i gradimo budućnost zajedno.",
  },
  {
    companyName: "Sanitarna Instalacija 'Vodovod'",
    role: "Vodoinstalater",
    description:
      "Sanitarna Instalacija 'Vodovod' traži vješte vodoinstalatere za instalaciju vodovodnih sustava. Iskustvo u montaži cijevi, popravcima i održavanju je poželjno. Pridružite se našem timu i gradimo zajedno funkcionalne sustave.",
  },
];

const adsSales = [
  {
    companyName: "Tvrtka Tehnička Rješenja",
    role: "Prodajni Predstavnik",
    description:
      "Pridružite se našem dinamičnom timu prodaje i potaknite rast prihoda identificirajući i zatvarajući nove poslovne prilike. Potrebne su izvrsne komunikacijske i pregovaračke vještine. Ako ste motivirani i usmjereni na rezultate, želimo vas!",
  },
  {
    companyName: "Globalna Marketinška Agencija",
    role: "Account Executive",
    description:
      "Tražimo ambiciozne pojedince za upravljanje korisničkim računima i izgradnju jakih odnosa. Odgovornosti uključuju razvoj strategija, održavanje prezentacija i postizanje prodajnih ciljeva. Pridružite nam se i oslobodite svoj prodajni potencijal!",
  },
  {
    companyName: "Inovativna Softverska Rješenja",
    role: "Voditelj razvoja poslovanja",
    description:
      "Uzbudljiva prilika za proaktivnog lidera za proširenje naše baze klijenata i poticanje rasta poslovanja. Odgovornosti uključuju identificiranje tržišnih trendova, razvoj strategija i vođenje visokoproduktivnog prodajnog tima. Pridružite nam se i ostvarite utjecaj!",
  },
  {
    companyName: "Digitalna Oglasna Agencija",
    role: "Voditelj prodaje",
    description:
      "Tražimo iskusnog voditelja prodaje koji će voditi naš tim prodaje prema uspjehu. Odgovornosti uključuju postavljanje prodajnih ciljeva, vođenje članova tima i razvoj prodajnih strategija. Ako ste motivirani lider, želimo vas čuti!",
  },
  {
    companyName: "Tvrtka za financijske usluge",
    role: "Financijski savjetnik",
    description:
      "Pridružite nam se kao financijski savjetnik i pomozite klijentima u postizanju njihovih financijskih ciljeva. Odgovornosti uključuju procjenu potreba klijenata, pružanje financijskih savjeta i preporuke investicijskih strategija. Ako vas zanima financije, prijavite se odmah!",
  },
  {
    companyName: "Startup za e-trgovinu",
    role: "Voditelj korisničkih računa",
    description:
      "Tražimo talentirane voditelje korisničkih računa za izgradnju i održavanje odnosa s našim klijentima. Odgovornosti uključuju razumijevanje potreba klijenata, prikazivanje proizvoda i osiguranje zadovoljstva korisnika. Pridružite nam se i rastite s nama!",
  },
  {
    companyName: "Tvrtka za rješenja u zdravstvu",
    role: "Prodajni savjetnik",
    description:
      "Pridružite se našem timu kao prodajni savjetnik i pomozite zdravstvenim organizacijama poboljšati skrb pacijenata s našim inovativnim rješenjima. Odgovornosti uključuju pronalaženje potencijalnih klijenata, provođenje demonstracija proizvoda i zatvaranje prodaje. Ako vas zanima zdravstvo, prijavite se odmah!",
  },
  {
    companyName: "Agencija za nekretnine",
    role: "Agent za nekretnine",
    description:
      "Tražimo motivirane pojedince za pridruživanje našem timu kao agenti za nekretnine. Odgovornosti uključuju pronalaženje potencijalnih kupaca, organiziranje otvorenih kuća i pregovaranje o ugovorima. Ako ste samostalni i komunikativni, želimo vas u našem timu!",
  },
];
const HomePage: FC = () => {
  const handleSearchButtonHover = () => {};
  return (
    <>
      <div className="flex flex-col place-content-center mb-12 mt-6">
        <div className="flex justify-around">
          <Link
            to={"/search"}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            className="group w-2/6 h-44 rounded-3xl flex items-center justify-center bg-gray-200  hover:bg-theme-blue-500 transition duration-500 ease-in-out"
          >
            <div
              className="flex flex-col justify-center items-center"
              onMouseEnter={handleSearchButtonHover}
            >
              <h3 className="text-4xl text-black group-hover:text-white">
                Pretraži poslove
              </h3>
              <div className="mt-3" style={{ width: "80px", height: "auto" }}>
                <IconHolder
                  Icon={BiSearchAlt}
                  size={90}
                  className="group-hover:text-white"
                />
              </div>
            </div>
          </Link>
          <Link
            to={"/submit-new-ad"}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            className="group w-2/6 h-44 rounded-3xl flex items-center justify-center bg-gray-200 hover:bg-theme-blue-500 transition duration-400 ease-in-out"
          >
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-4xl group-hover:text-white">Predaj oglas</h3>
              <div className="mt-3" style={{ width: "80px", height: "auto" }}>
                <IconHolder
                  Icon={IoMdAddCircleOutline}
                  size={90}
                  className="group-hover:text-white text-black"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="mt-5 flex flex-col place-items-start">
        <h2 className="text-6xl mt-12 mb-1">Izdvojeni oglasi</h2>
        <Divider className="mb-12" />
        <Link to="/IT" className="text-3xl text-black">
          IT i Telekomunikacije
        </Link>
        <div className="flex w-full overflow-x-auto p-5">
          {adsIt.map((ad) => {
            return (
              <HomePageJobCard
                companyName={ad.companyName}
                role={ad.role}
                description={ad.description}
              />
            );
          })}
        </div>
      </div>
      <Divider />
      <div className="mt-5 flex flex-col place-items-start">
        <Link to="/IT" className="text-3xl text-black">
          Ugostiteljstvo
        </Link>
        <div className="flex w-full overflow-x-auto p-5">
          {adsHospitality.map((ad) => {
            return (
              <HomePageJobCard
                companyName={ad.companyName}
                role={ad.role}
                description={ad.description}
              />
            );
          })}
        </div>
      </div>
      <Divider />
      <div className="mt-5 flex flex-col place-items-start">
        <Link to="/IT" className="text-3xl text-black">
          Građevinarstvo
        </Link>
        <div className="flex w-full overflow-x-auto p-5">
          {adsConstruction.map((ad) => {
            return (
              <HomePageJobCard
                companyName={ad.companyName}
                role={ad.role}
                description={ad.description}
              />
            );
          })}
        </div>
      </div>
      <Divider />
      <div className="mt-5 flex flex-col place-items-start">
        <Link to="/IT" className="text-3xl text-black">
          Prodaja
        </Link>
        <div className="flex w-full overflow-x-auto p-5">
          {adsSales.map((ad) => {
            return (
              <HomePageJobCard
                companyName={ad.companyName}
                role={ad.role}
                description={ad.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
