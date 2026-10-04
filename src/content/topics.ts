import type { TopicSlug } from '@/i18n/routing';
import type { Locale } from '@/config/site';

export type TopicFaq = { q: string; a: string };
export type TopicFact = { label: string; value: string };
export type TopicBlock = { heading: string; paragraphs: string[]; bullets?: string[] };

export type TopicContent = {
  slug: TopicSlug;
  meta: { title: string; description: string };
  hero: { title: string; subtitle: string };
  intro: string[];
  facts: TopicFact[];
  sections: TopicBlock[];
  faq: TopicFaq[];
};

export const TOPICS: Record<TopicSlug, Record<Locale, TopicContent>> = {
  /* ------------------------------------------------------------------ */
  kinnekswiss: {
    en: {
      slug: 'kinnekswiss',
      meta: {
        title: 'Kinnekswiss Luxembourg – Events, Map & Parc Municipal Guide',
        description:
          'What the Kinnekswiss is, where it lies inside Parc Municipal de Luxembourg, how to reach it by tram, and which events — Kinnekswiss Loves, Spillfest, winter ice rink — take place on the lawn.',
      },
      hero: {
        title: 'Kinnekswiss',
        subtitle: 'The central meadow of Parc Municipal de Luxembourg — the "King\'s meadow"',
      },
      intro: [
        'The Kinnekswiss is the large open lawn at the centre of Parc Municipal de Luxembourg. In Luxembourgish the name means "the King\'s meadow" (Kinnek = king, Wiss = meadow), and it is the single best-known spot in the park.',
        'It works in two ways at once: on an ordinary afternoon it is simply where people sit on the grass, eat lunch, kick a ball or read in the shade, and on event days it becomes the city\'s main open-air venue, with stages, screens and sports pitches set up on the same grass.',
      ],
      facts: [
        { label: 'Where', value: 'Centre of Parc Municipal, ~5 min walk from the Bd Joseph II entrance' },
        { label: 'What it is', value: 'Large open lawn surrounded by mature trees' },
        { label: 'Cost', value: 'Free — no booking, no admission' },
        { label: 'Nearest tram', value: 'T1 to Hamilius or Stäreplaz/Étoile, then 5–10 min on foot' },
      ],
      sections: [
        {
          heading: 'Where is the Kinnekswiss inside the park?',
          paragraphs: [
            'Walk in from the Bd Joseph II entrance and follow the main path; the lawn opens up in the middle of the grounds, a short distance from Villa Vauban and the orangery. Because the park is small and the meadow is its largest open space, you will reach it within a few minutes from any entrance.',
            'The surrounding trees give shade along the edges, benches line parts of the perimeter, and the playgrounds sit a couple of minutes away — which is why families tend to settle here rather than on the smaller lawns.',
          ],
        },
        {
          heading: 'Picnics, sports and everyday use',
          paragraphs: [
            'Outside event dates the Kinnekswiss is ordinary public grass. People bring a blanket, a packed lunch or a takeaway from the shops in Ville-Haute and stay an hour or two. Ball games, frisbee and informal football are part of normal park life here.',
          ],
          bullets: [
            'Bring a blanket — the grass is the point',
            'Shade is available under the trees around the edge',
            'Take your rubbish with you; bins fill quickly on sunny weekends',
            'Avoid the roped-off areas when an event is being set up',
          ],
        },
        {
          heading: 'Events on the Kinnekswiss',
          paragraphs: [
            'The City of Luxembourg uses the lawn as one of its main venues for free open-air programming. The summer series Kinnekswiss Loves brings concerts, screenings, sports and family activities to the meadow; Spillfest, the free children\'s play festival, is held here; and winter editions have included ice rinks and the Wanterpark.',
            'Programmes and dates change every year, and the lawn is closed to casual use while stages are being built and during events. The city publishes the current calendar on vdl.lu — check it before planning a picnic in summer.',
          ],
        },
        {
          heading: 'How to get to the Kinnekswiss',
          paragraphs: [
            'Tram T1 is the simplest approach: ride to Hamilius or Stäreplaz/Étoile and walk 5–10 minutes into the park. Coming from Luxembourg Airport (Findel), T1 runs directly into the city centre, so no change is needed.',
          ],
          bullets: [
            'Tram T1: Hamilius or Stäreplaz/Étoile — free in standard class',
            'From the airport: T1 from Findel – Luxembourg Airport, about 30 minutes in total',
            'On foot: 5 min from Place Guillaume II, 10 min from the Grand Ducal Palace',
            'Parking: Hamilius is the closest car park; street parking is limited',
          ],
        },
      ],
      faq: [
        { q: 'What does Kinnekswiss mean?', a: 'It is Luxembourgish for "the King\'s meadow" — Kinnek (king) and Wiss (meadow). It is the name locals use for the big central lawn of Parc Municipal de Luxembourg.' },
        { q: 'Is the Kinnekswiss part of Parc Municipal de Luxembourg?', a: 'Yes. The Kinnekswiss is the main lawn inside Parc Municipal de Luxembourg, a few minutes\' walk from the Bd Joseph II entrance and from Villa Vauban.' },
        { q: 'Is the Kinnekswiss free to use?', a: 'Yes. The lawn is public and free, with no booking. Only ticketed concerts or special events require a ticket, and those are announced in advance by the city.' },
        { q: 'Which events take place on the Kinnekswiss?', a: 'The summer programme Kinnekswiss Loves, the Spillfest children\'s festival, open-air concerts and screenings, and winter installations such as ice rinks and the Wanterpark. Dates are published on vdl.lu.' },
        { q: 'How do I get to the Kinnekswiss by tram?', a: 'Take tram T1 to Hamilius or Stäreplaz/Étoile and walk 5–10 minutes into the park. Public transport in Luxembourg is free in standard class.' },
        { q: 'Can I picnic on the Kinnekswiss?', a: 'Yes, unless an event is being set up or is running. Bring a blanket, take your rubbish away and use the shaded edges on hot days.' },
      ],
    },
    fr: {
      slug: 'kinnekswiss',
      meta: {
        title: 'Kinnekswiss Luxembourg : événements, carte et guide du parc',
        description:
          'Ce qu\'est la Kinnekswiss, où elle se trouve dans le parc municipal de Luxembourg, comment y accéder en tram et quels événements — Kinnekswiss Loves, Spillfest, patinoire — s\'y déroulent.',
      },
      hero: {
        title: 'Kinnekswiss',
        subtitle: 'La grande pelouse du parc municipal de Luxembourg — la « prairie du Roi »',
      },
      intro: [
        'La Kinnekswiss est la vaste pelouse ouverte au cœur du parc municipal de Luxembourg. En luxembourgeois, ce nom signifie « la prairie du Roi » (Kinnek = roi, Wiss = prairie) : c\'est l\'endroit le plus connu du parc.',
        'Elle a une double vie. L\'après-midi ordinaire, on s\'y assoit dans l\'herbe, on y déjeune, on y joue au ballon ou on y lit à l\'ombre. Les jours de manifestation, elle devient la principale scène en plein air de la ville, avec scènes, écrans et terrains de sport installés sur la même herbe.',
      ],
      facts: [
        { label: 'Où', value: 'Au centre du parc municipal, à ~5 min à pied de l\'entrée Bd Joseph II' },
        { label: 'Ce que c\'est', value: 'Une grande pelouse dégagée entourée d\'arbres matures' },
        { label: 'Coût', value: 'Gratuit — sans réservation ni droit d\'entrée' },
        { label: 'Tram le plus proche', value: 'T1 jusqu\'à Hamilius ou Stäreplaz/Étoile, puis 5 à 10 min à pied' },
      ],
      sections: [
        {
          heading: 'Où se trouve la Kinnekswiss dans le parc ?',
          paragraphs: [
            'Entrez par le boulevard Joseph II et suivez l\'allée principale : la pelouse s\'ouvre au milieu du parc, à peu de distance de la Villa Vauban et de l\'orangerie. Le parc est compact et la pelouse en est le plus grand espace ouvert, vous la rejoignez donc en quelques minutes depuis n\'importe quelle entrée.',
            'Les arbres qui l\'entourent offrent de l\'ombre sur les bords, des bancs longent une partie du périmètre et les aires de jeux sont à deux minutes : c\'est pour cela que les familles s\'y installent plutôt que sur les pelouses plus petites.',
          ],
        },
        {
          heading: 'Pique-niques, jeux et usage quotidien',
          paragraphs: [
            'Hors périodes d\'événements, la Kinnekswiss est une pelouse publique ordinaire. On y apporte une couverture, un repas froid ou un plat à emporter des commerces de la Ville-Haute et l\'on y reste une heure ou deux. Jeux de balle, frisbee et football improvisé font partie de la vie normale du parc.',
          ],
          bullets: [
            'Apportez une couverture — l\'herbe est tout l\'intérêt',
            'De l\'ombre est disponible sous les arbres en bordure',
            'Remportez vos déchets ; les poubelles débordent vite les week-ends ensoleillés',
            'Évitez les zones délimitées pendant le montage d\'un événement',
          ],
        },
        {
          heading: 'Les événements de la Kinnekswiss',
          paragraphs: [
            'La Ville de Luxembourg utilise la pelouse comme l\'un de ses principaux lieux de programmation gratuite en plein air. La série estivale Kinnekswiss Loves y propose concerts, projections, sport et activités familiales ; le Spillfest, la fête gratuite du jeu pour les enfants, s\'y tient ; en hiver on y a installé des patinoires et le Wanterpark.',
            'Les programmes et les dates changent chaque année et la pelouse est fermée à l\'usage libre pendant le montage des scènes et pendant les manifestations. La Ville publie le calendrier en cours sur vdl.lu : à consulter avant d\'organiser un pique-nique en été.',
          ],
        },
        {
          heading: 'Accéder à la Kinnekswiss',
          paragraphs: [
            'Le tram T1 est la solution la plus simple : descendez à Hamilius ou Stäreplaz/Étoile et marchez 5 à 10 minutes jusqu\'au parc. Depuis l\'aéroport de Luxembourg (Findel), le T1 rejoint directement le centre-ville, sans correspondance.',
          ],
          bullets: [
            'Tram T1 : Hamilius ou Stäreplaz/Étoile — gratuit en 2e classe',
            'Depuis l\'aéroport : T1 depuis Findel – Luxembourg Airport, environ 30 minutes',
            'À pied : 5 min depuis la place Guillaume II, 10 min depuis le Palais grand-ducal',
            'Stationnement : Hamilius est le parking le plus proche ; la voirie est limitée',
          ],
        },
      ],
      faq: [
        { q: 'Que signifie Kinnekswiss ?', a: 'Cela veut dire « la prairie du Roi » en luxembourgeois (Kinnek = roi, Wiss = prairie). C\'est le nom que les habitants donnent à la grande pelouse centrale du parc municipal de Luxembourg.' },
        { q: 'La Kinnekswiss fait-elle partie du parc municipal de Luxembourg ?', a: 'Oui. La Kinnekswiss est la pelouse principale du parc municipal de Luxembourg, à quelques minutes de marche de l\'entrée du boulevard Joseph II et de la Villa Vauban.' },
        { q: 'L\'accès à la Kinnekswiss est-il gratuit ?', a: 'Oui. La pelouse est publique et gratuite, sans réservation. Seuls les concerts et événements spéciaux payants demandent un billet, annoncés à l\'avance par la Ville.' },
        { q: 'Quels événements ont lieu sur la Kinnekswiss ?', a: 'Le programme estival Kinnekswiss Loves, le Spillfest pour les enfants, des concerts et projections en plein air, ainsi que des installations hivernales comme les patinoires et le Wanterpark. Les dates sont publiées sur vdl.lu.' },
        { q: 'Comment rejoindre la Kinnekswiss en tram ?', a: 'Prenez le tram T1 jusqu\'à Hamilius ou Stäreplaz/Étoile puis marchez 5 à 10 minutes. Les transports publics sont gratuits en 2e classe au Luxembourg.' },
        { q: 'Peut-on pique-niquer sur la Kinnekswiss ?', a: 'Oui, sauf pendant le montage ou le déroulement d\'un événement. Apportez une couverture, remportez vos déchets et installez-vous à l\'ombre des arbres les jours de chaleur.' },
      ],
    },
    de: {
      slug: 'kinnekswiss',
      meta: {
        title: 'Kinnekswiss Luxemburg: Veranstaltungen, Karte & Stadtpark-Ratgeber',
        description:
          'Was die Kinnekswiss ist, wo sie im Stadtpark Luxemburg liegt, wie Sie mit der Tram hinkommen und welche Veranstaltungen — Kinnekswiss Loves, Spillfest, Wintereisbahn — auf der Wiese stattfinden.',
      },
      hero: {
        title: 'Kinnekswiss',
        subtitle: 'Die zentrale Wiese des Stadtparks Luxemburg — die „Wiese des Königs“',
      },
      intro: [
        'Die Kinnekswiss ist die große offene Wiese in der Mitte des Parc municipal de Luxembourg. Auf Luxemburgisch bedeutet der Name „die Wiese des Königs“ (Kinnek = König, Wiss = Wiese) — sie ist der bekannteste Ort im gesamten Park.',
        'Die Wiese hat zwei Gesichter: An einem gewöhnlichen Nachmittag sitzt man einfach im Gras, isst, spielt Ball oder liest im Schatten. An Veranstaltungstagen wird daraus die wichtigste Open-Air-Bühne der Stadt, mit Bühnen, Leinwänden und Spielfeldern auf demselben Rasen.',
      ],
      facts: [
        { label: 'Wo', value: 'In der Mitte des Stadtparks, ca. 5 Gehminuten vom Eingang Bd Joseph II' },
        { label: 'Was', value: 'Große offene Wiese, umstanden von alten Bäumen' },
        { label: 'Kosten', value: 'Kostenlos — keine Anmeldung, kein Eintritt' },
        { label: 'Nächste Tram', value: 'T1 bis Hamilius oder Stäreplaz/Étoile, dann 5–10 Min. zu Fuß' },
      ],
      sections: [
        {
          heading: 'Wo liegt die Kinnekswiss im Park?',
          paragraphs: [
            'Gehen Sie vom Boulevard Joseph II hinein und folgen Sie dem Hauptweg: Die Wiese öffnet sich in der Mitte der Anlage, unweit der Villa Vauban und der Orangerie. Der Park ist kompakt und die Wiese seine größte Offenfläche — von jedem Eingang sind es nur wenige Minuten.',
            'Die Bäume am Rand spenden Schatten, Bänke säumen Teile des Rands, und die Spielplätze liegen zwei Minuten entfernt. Deshalb setzen sich Familien eher hier als auf den kleineren Wiesen.',
          ],
        },
        {
          heading: 'Picknick, Sport und Alltag',
          paragraphs: [
            'Außerhalb von Veranstaltungen ist die Kinnekswiss eine ganz normale öffentliche Wiese. Man bringt eine Decke mit, ein kaltes Essen oder etwas zum Mitnehmen aus der Oberstadt und bleibt ein bis zwei Stunden. Ballspiele, Frisbee und improvisiertes Fußballspielen gehören zum Alltag hier.',
          ],
          bullets: [
            'Decke mitnehmen — das Gras ist der Sinn der Sache',
            'Schatten gibt es unter den Bäumen am Rand',
            'Abfall wieder mitnehmen; die Papierkörbe sind an sonnigen Wochenenden schnell voll',
            'Abgesperrte Flächen während des Aufbaus meiden',
          ],
        },
        {
          heading: 'Veranstaltungen auf der Kinnekswiss',
          paragraphs: [
            'Die Stadt Luxemburg nutzt die Wiese als einen ihrer wichtigsten Orte für kostenlose Programme im Freien. Die Sommerreihe Kinnekswiss Loves bringt Konzerte, Filmvorführungen, Sport und Familienaktionen auf die Wiese; das Spillfest, das kostenlose Kinderspielfest, findet hier statt; im Winter gab es Eislaufflächen und den Wanterpark.',
            'Programme und Termine ändern sich jährlich, und während Aufbau und Veranstaltung ist die Wiese für die freie Nutzung gesperrt. Die Stadt veröffentlicht den aktuellen Kalender auf vdl.lu — vor einem Sommerpicknick lohnt der Blick darauf.',
          ],
        },
        {
          heading: 'Anfahrt zur Kinnekswiss',
          paragraphs: [
            'Am einfachsten geht es mit der Tram T1: bis Hamilius oder Stäreplaz/Étoile fahren und 5–10 Minuten in den Park gehen. Vom Flughafen Luxemburg (Findel) fährt die T1 direkt in die Innenstadt, ohne Umsteigen.',
          ],
          bullets: [
            'Tram T1: Hamilius oder Stäreplaz/Étoile — in der 2. Klasse kostenlos',
            'Vom Flughafen: T1 ab Findel – Luxembourg Airport, insgesamt rund 30 Minuten',
            'Zu Fuß: 5 Min. ab Place Guillaume II, 10 Min. ab Großherzoglichem Palast',
            'Parken: Hamilius ist am nächsten; Parkplätze am Straßenrand sind knapp',
          ],
        },
      ],
      faq: [
        { q: 'Was bedeutet Kinnekswiss?', a: 'Auf Luxemburgisch heißt es „die Wiese des Königs“ (Kinnek = König, Wiss = Wiese). So nennen Einheimische die große zentrale Wiese des Stadtparks von Luxemburg.' },
        { q: 'Gehört die Kinnekswiss zum Parc municipal de Luxembourg?', a: 'Ja. Die Kinnekswiss ist die Hauptwiese im Stadtpark von Luxemburg, wenige Gehminuten vom Eingang am Boulevard Joseph II und von der Villa Vauban entfernt.' },
        { q: 'Ist die Nutzung der Kinnekswiss kostenlos?', a: 'Ja. Die Wiese ist öffentlich und kostenlos, ohne Anmeldung. Nur kostenpflichtige Konzerte oder Sonderveranstaltungen erfordern ein Ticket; diese kündigt die Stadt vorab an.' },
        { q: 'Welche Veranstaltungen finden auf der Kinnekswiss statt?', a: 'Das Sommerprogramm Kinnekswiss Loves, das Spillfest für Kinder, Open-Air-Konzerte und Filmvorführungen sowie winterliche Installationen wie Eislaufflächen und der Wanterpark. Die Termine stehen auf vdl.lu.' },
        { q: 'Wie komme ich mit der Tram zur Kinnekswiss?', a: 'Mit der Tram T1 bis Hamilius oder Stäreplaz/Étoile, dann 5–10 Minuten zu Fuß. Der öffentliche Verkehr ist in Luxemburg in der 2. Klasse kostenlos.' },
        { q: 'Kann ich auf der Kinnekswiss picknicken?', a: 'Ja, außer während Aufbau oder Durchführung einer Veranstaltung. Decke mitnehmen, Abfall wieder mitnehmen und an heißen Tagen den Schatten am Rand nutzen.' },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  picnic: {
    en: {
      slug: 'picnic',
      meta: {
        title: 'Picnic at Parc Municipal Luxembourg – Best Spots, Kinnekswiss & Tips',
        description:
          'Can you picnic in Parc Municipal de Luxembourg? Best lawns, shade and toilets, what to bring, park rules, dogs and the best time of day — plus the Kinnekswiss.',
      },
      hero: {
        title: 'Picnic in the park',
        subtitle: 'Best lawns, shade, toilets, rules and the best time to go',
      },
      intro: [
        'Yes — picnicking is one of the normal things to do in Parc Municipal de Luxembourg. The park is free, central and full of grass, so on a sunny lunchtime the lawns fill with office workers, families and students.',
        'There is no booking system and no fee. You pick a spot, sit down, and take your rubbish with you when you leave. The only times the lawns are off limits are when an event is being set up or is running on the Kinnekswiss.',
      ],
      facts: [
        { label: 'Allowed?', value: 'Yes — picnics on the lawns are normal and free' },
        { label: 'Best lawn', value: 'Kinnekswiss, the big central meadow' },
        { label: 'Shade', value: 'Plenty under the mature trees around the lawn edges' },
        { label: 'Toilets', value: 'Public toilets near the playground areas' },
      ],
      sections: [
        {
          heading: 'The best places to picnic',
          paragraphs: [
            'The Kinnekswiss, the large central lawn, is the obvious choice: flat, open, close to the playgrounds and with trees all around its edge. If you want somewhere quieter, the smaller lawns and the benches along the side paths are calmer on summer weekends.',
            'Shade matters in July and August. The perimeter of the lawns, under the plane trees and chestnuts, stays comfortable even at midday; the open middle of the Kinnekswiss gets full sun.',
          ],
          bullets: [
            'Kinnekswiss — big, social, close to everything',
            'Edges of the lawns — shade and quieter',
            'Benches along the side paths — good for a quick lunch',
            'Near the playgrounds — best with children',
          ],
        },
        {
          heading: 'What to bring',
          paragraphs: [
            'There are shops, bakeries and takeaways in Ville-Haute within a few minutes of the park, so most people buy food on the way. Everything else is on you — the park has grass, benches, bins and public toilets near the playgrounds, but no café inside every corner of the grounds.',
          ],
          bullets: [
            'A blanket or mat — the grass is the whole point',
            'Water, especially on hot days',
            'A bag for your rubbish',
            'Sun protection for the open middle of the lawn',
          ],
        },
        {
          heading: 'Rules and good practice',
          paragraphs: [
            'The park is a public space maintained by the City of Luxembourg, and the rules are the usual ones: keep it clean, do not pick plants, keep dogs under control and off the playgrounds, and stay off areas closed for events. Open barbecues and glass bottles are not part of ordinary park use here.',
            'When an event is being set up on the Kinnekswiss — stages, fencing, sports pitches — the cordoned area is closed. It is worth checking the city\'s event calendar before planning a summer picnic on the main lawn.',
          ],
        },
        {
          heading: 'Best time for a picnic',
          paragraphs: [
            'Weekday lunchtime is when the park feels most local; weekend afternoons in summer are the busiest. Early evening is pleasant and cooler, with the light coming through the trees.',
            'From May to September the weather is reliable enough to picnic; October still works on a dry day, and the autumn colours make it worthwhile. In winter the lawns are often wet, so benches are the better option.',
          ],
        },
      ],
      faq: [
        { q: 'Can you have a picnic in Parc Municipal de Luxembourg?', a: 'Yes. Picnicking on the lawns is normal and free. There is no booking and no fee; you simply pick a spot and take your rubbish with you.' },
        { q: 'Where is the best place to picnic in the park?', a: 'The Kinnekswiss, the large central lawn, is the classic spot — open, flat and close to the playgrounds. The shaded edges of the lawns are better on hot days or when you want quiet.' },
        { q: 'Are there toilets in Parc Municipal de Luxembourg?', a: 'Yes, public toilets are available near the playground areas. They are the nearest option for a picnic in the park.' },
        { q: 'Are barbecues allowed in the park?', a: 'No. Open barbecues and fires are not part of normal use of the park. Bring cold food or something bought on the way.' },
        { q: 'Are dogs allowed while picnicking?', a: 'Dogs are allowed in the park but must be kept under control, cleaned up after and kept off the playgrounds.' },
        { q: 'Is there shade for a picnic?', a: 'Yes — the mature plane trees and chestnuts around the edges of the lawns give plenty of shade, while the open middle of the Kinnekswiss is in full sun.' },
      ],
    },
    fr: {
      slug: 'picnic',
      meta: {
        title: 'Pique-nique au parc municipal de Luxembourg : pelouses et conseils',
        description:
          'Peut-on pique-niquer au parc municipal de Luxembourg ? Meilleures pelouses, ombre, toilettes, règles, chiens et meilleur moment — avec la Kinnekswiss.',
      },
      hero: {
        title: 'Pique-nique dans le parc',
        subtitle: 'Meilleures pelouses, ombre, toilettes, règles et meilleur moment',
      },
      intro: [
        'Oui — le pique-nique fait partie des usages normaux du parc municipal de Luxembourg. Le parc est gratuit, central et plein d\'herbe : à l\'heure du déjeuner ensoleillé, les pelouses se remplissent d\'employés du quartier, de familles et d\'étudiants.',
        'Il n\'y a ni réservation ni droit d\'entrée. On choisit un endroit, on s\'installe et l\'on remporte ses déchets en partant. Les seules périodes où les pelouses sont inaccessibles sont le montage et le déroulement d\'un événement sur la Kinnekswiss.',
      ],
      facts: [
        { label: 'Autorisé ?', value: 'Oui — pique-niquer sur les pelouses est courant et gratuit' },
        { label: 'Meilleure pelouse', value: 'La Kinnekswiss, la grande prairie centrale' },
        { label: 'Ombre', value: 'Abondante sous les arbres matures en bordure' },
        { label: 'Toilettes', value: 'Toilettes publiques près des aires de jeux' },
      ],
      sections: [
        {
          heading: 'Où s\'installer',
          paragraphs: [
            'La Kinnekswiss, la grande pelouse centrale, est le choix évident : plate, dégagée, proche des aires de jeux et bordée d\'arbres. Si vous cherchez plus de calme, les pelouses plus petites et les bancs le long des allées latérales sont plus tranquilles les week-ends d\'été.',
            'L\'ombre compte en juillet et en août. Le pourtour des pelouses, sous les platanes et les marronniers, reste agréable même à midi ; le centre dégagé de la Kinnekswiss est en plein soleil.',
          ],
          bullets: [
            'Kinnekswiss — grande, conviviale, proche de tout',
            'Bordures des pelouses — ombre et tranquillité',
            'Bancs le long des allées — pratiques pour un déjeuner rapide',
            'Près des aires de jeux — idéal avec des enfants',
          ],
        },
        {
          heading: 'Quoi apporter',
          paragraphs: [
            'Commerces, boulangeries et plats à emporter de la Ville-Haute sont à quelques minutes du parc : la plupart des gens achètent à manger en chemin. Pour le reste, c\'est à vous — le parc offre de l\'herbe, des bancs, des poubelles et des toilettes publiques près des jeux, mais pas de café à chaque coin.',
          ],
          bullets: [
            'Une couverture ou un tapis — l\'herbe est tout l\'intérêt',
            'De l\'eau, surtout par temps chaud',
            'Un sac pour vos déchets',
            'Une protection solaire pour le centre dégagé de la pelouse',
          ],
        },
        {
          heading: 'Règles et bonnes pratiques',
          paragraphs: [
            'Le parc est un espace public entretenu par la Ville de Luxembourg, avec les règles habituelles : laisser propre, ne pas cueillir de plantes, tenir les chiens et les écarter des aires de jeux, ne pas entrer dans les zones fermées pour événement. Les barbecues ouverts et les bouteilles en verre ne font pas partie des usages courants ici.',
            'Lorsqu\'un événement s\'installe sur la Kinnekswiss — scènes, barrières, terrains — la zone délimitée est fermée. Mieux vaut consulter le calendrier des événements de la Ville avant d\'organiser un pique-nique estival sur la grande pelouse.',
          ],
        },
        {
          heading: 'Quand pique-niquer',
          paragraphs: [
            'Le midi en semaine, le parc est le plus « local » ; les week-ends d\'après-midi d\'été sont les plus fréquentés. La fin d\'après-midi est agréable et plus fraîche, avec la lumière qui traverse les arbres.',
            'De mai à septembre, la météo permet de pique-niquer sans hésiter ; octobre convient encore par temps sec et les couleurs d\'automne valent le détour. En hiver, les pelouses sont souvent humides : les bancs sont alors préférables.',
          ],
        },
      ],
      faq: [
        { q: 'Peut-on pique-niquer au parc municipal de Luxembourg ?', a: 'Oui. Pique-niquer sur les pelouses est courant et gratuit. Il n\'y a ni réservation ni droit d\'entrée : on choisit un endroit et l\'on remporte ses déchets.' },
        { q: 'Où pique-niquer dans le parc ?', a: 'La Kinnekswiss, la grande pelouse centrale, est l\'endroit classique : ouverte, plate et proche des aires de jeux. Les bords ombragés des pelouses conviennent mieux les jours de chaleur ou pour plus de calme.' },
        { q: 'Y a-t-il des toilettes dans le parc municipal ?', a: 'Oui, des toilettes publiques sont disponibles près des aires de jeux. C\'est l\'option la plus proche pour un pique-nique.' },
        { q: 'Les barbecues sont-ils autorisés ?', a: 'Non. Les barbecues et les feux ouverts ne font pas partie des usages normaux du parc. Apportez un repas froid ou acheté en chemin.' },
        { q: 'Les chiens sont-ils admis pendant le pique-nique ?', a: 'Les chiens sont admis dans le parc, mais doivent être tenus, leurs déjections ramassées, et ils ne doivent pas accéder aux aires de jeux.' },
        { q: 'Y a-t-il de l\'ombre ?', a: 'Oui — les platanes et marronniers matures en bordure des pelouses offrent beaucoup d\'ombre, tandis que le centre dégagé de la Kinnekswiss est en plein soleil.' },
      ],
    },
    de: {
      slug: 'picnic',
      meta: {
        title: 'Picknick im Stadtpark Luxemburg: beste Wiesen & Tipps',
        description:
          'Darf man im Parc municipal de Luxemburg picknicken? Beste Wiesen, Schatten, Toiletten, Regeln, Hunde und die beste Uhrzeit — inklusive Kinnekswiss.',
      },
      hero: {
        title: 'Picknick im Park',
        subtitle: 'Beste Wiesen, Schatten, Toiletten, Regeln und die beste Uhrzeit',
      },
      intro: [
        'Ja — Picknicken gehört im Parc municipal de Luxembourg zum ganz normalen Parkalltag. Der Park ist kostenlos, zentral und voller Gras: An sonnigen Mittagen füllen sich die Wiesen mit Büroangestellten aus dem Viertel, Familien und Studierenden.',
        'Es gibt keine Anmeldung und keine Gebühr. Man sucht sich einen Platz, setzt sich und nimmt den Abfall wieder mit. Einzige Ausnahme: Während auf der Kinnekswiss eine Veranstaltung aufgebaut wird oder läuft, sind die betroffenen Flächen gesperrt.',
      ],
      facts: [
        { label: 'Erlaubt?', value: 'Ja — Picknick auf den Wiesen ist üblich und kostenlos' },
        { label: 'Beste Wiese', value: 'Die Kinnekswiss, die große zentrale Wiese' },
        { label: 'Schatten', value: 'Reichlich unter den alten Bäumen am Wiesenrand' },
        { label: 'Toiletten', value: 'Öffentliche Toiletten bei den Spielplätzen' },
      ],
      sections: [
        {
          heading: 'Die besten Plätze',
          paragraphs: [
            'Die Kinnekswiss, die große Wiese in der Mitte, ist die naheliegende Wahl: flach, offen, nah bei den Spielplätzen und ringsum von Bäumen gesäumt. Wer es ruhiger mag, findet auf den kleineren Wiesen und auf den Bänken an den Nebenwegen an Sommerwochenenden mehr Ruhe.',
            'Im Juli und August zählt der Schatten. Am Rand der Wiesen unter Platanen und Kastanien bleibt es auch mittags angenehm; die offene Mitte der Kinnekswiss liegt in voller Sonne.',
          ],
          bullets: [
            'Kinnekswiss — groß, gesellig, nah an allem',
            'Wiesenränder — Schatten und Ruhe',
            'Bänke an den Nebenwegen — gut für eine schnelle Pause',
            'Nähe der Spielplätze — ideal mit Kindern',
          ],
        },
        {
          heading: 'Was mitnehmen?',
          paragraphs: [
            'Geschäfte, Bäckereien und Imbisse in der Oberstadt liegen wenige Minuten entfernt; die meisten kaufen ihr Essen auf dem Weg. Den Rest bringen Sie selbst mit: Der Park bietet Gras, Bänke, Abfalleimer und öffentliche Toiletten bei den Spielplätzen, aber kein Café an jeder Ecke.',
          ],
          bullets: [
            'Eine Decke — das Gras ist der ganze Sinn',
            'Wasser, besonders an heißen Tagen',
            'Eine Tüte für den Abfall',
            'Sonnenschutz für die offene Mitte der Wiese',
          ],
        },
        {
          heading: 'Regeln und gute Praxis',
          paragraphs: [
            'Der Park ist eine öffentliche Anlage der Stadt Luxemburg, und die Regeln sind die üblichen: sauber halten, keine Pflanzen pflücken, Hunde anleinen und von den Spielplätzen fernhalten, gesperrte Veranstaltungsflächen respektieren. Offenes Grillen und Glasflaschen gehören hier nicht zum normalen Parkgebrauch.',
            'Wird auf der Kinnekswiss eine Veranstaltung aufgebaut — Bühnen, Zäune, Spielfelder — ist der abgesperrte Bereich tabu. Vor einem Sommerpicknick auf der Hauptwiese lohnt ein Blick in den Veranstaltungskalender der Stadt.',
          ],
        },
        {
          heading: 'Wann picknicken?',
          paragraphs: [
            'Werktags mittags wirkt der Park am „einheimischsten“; an Sommerwochenenden ist der Nachmittag am vollsten. Der frühe Abend ist angenehm und kühler, wenn das Licht durch die Bäume fällt.',
            'Von Mai bis September lässt es sich zuverlässig picknicken; im Oktober geht es an trockenen Tagen ebenfalls, und die Herbstfarben entschädigen. Im Winter sind die Wiesen oft feucht — dann sind Bänke die bessere Wahl.',
          ],
        },
      ],
      faq: [
        { q: 'Darf man im Parc municipal de Luxembourg picknicken?', a: 'Ja. Picknick auf den Wiesen ist üblich und kostenlos. Es gibt keine Anmeldung und keine Gebühr; Sie suchen sich einen Platz und nehmen den Abfall wieder mit.' },
        { q: 'Wo picknickt man am besten im Park?', a: 'Die Kinnekswiss, die große zentrale Wiese, ist der klassische Ort — offen, flach und nah bei den Spielplätzen. Die schattigen Wiesenränder sind an heißen Tagen oder für mehr Ruhe besser.' },
        { q: 'Gibt es Toiletten im Stadtpark Luxemburg?', a: 'Ja, öffentliche Toiletten befinden sich bei den Spielplätzen. Sie sind beim Picknick die nächstgelegene Option.' },
        { q: 'Ist Grillen im Park erlaubt?', a: 'Nein. Offenes Grillen und Feuer gehören nicht zum normalen Gebrauch des Parks. Bringen Sie kaltes Essen mit oder kaufen Sie unterwegs.' },
        { q: 'Sind Hunde beim Picknick erlaubt?', a: 'Hunde sind im Park erlaubt, müssen aber angeleint sein, Hinterlassenschaften sind zu entfernen, und auf die Spielplätze gehören sie nicht.' },
        { q: 'Gibt es Schattenplätze?', a: 'Ja — die alten Platanen und Kastanien am Rand der Wiesen spenden viel Schatten, während die offene Mitte der Kinnekswiss in voller Sonne liegt.' },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  playground: {
    en: {
      slug: 'playground',
      meta: {
        title: 'Playground at Parc Municipal Luxembourg – Pirate Ship, Ages & Hours',
        description:
          'The playgrounds of Parc Municipal de Luxembourg: the pirate-ship structure, suitable ages, surface, nearby toilets and benches, opening hours and how to reach them by tram.',
      },
      hero: {
        title: 'Playground',
        subtitle: 'Pirate-ship structure, open lawns and shade — free, in the middle of the city',
      },
      intro: [
        'Parc Municipal de Luxembourg has children\'s playgrounds inside the grounds, and the best known of them is the large wooden pirate-ship structure with its masts, bridges and slides. It is free, and on a sunny afternoon it is the busiest corner of the park.',
        'The playgrounds sit within a couple of minutes of the Kinnekswiss lawn, so the usual family routine is simple: play, then picnic on the grass, or the other way round. Benches for parents, shade and public toilets are all close by.',
      ],
      facts: [
        { label: 'Cost', value: 'Free — no ticket for the playgrounds' },
        { label: 'Best known', value: 'The wooden pirate-ship play structure' },
        { label: 'Also here', value: 'Swings, slides, climbing frames and open lawns' },
        { label: 'Facilities', value: 'Benches, shade, public toilets nearby' },
      ],
      sections: [
        {
          heading: 'What is there',
          paragraphs: [
            'The centrepiece is a large play structure built as a pirate ship, with decks, rope bridges, ladders and slides. Around it are the usual swings, smaller slides and climbing elements, plus open grass for running and ball games.',
            'Because the equipment is large and has several levels, it suits children from about 3 up to around 12; toddlers have their own lower elements. Surfaces under the equipment are designed to soften falls, but supervision is still expected — especially at weekends.',
          ],
        },
        {
          heading: 'Opening hours',
          paragraphs: [
            'The park itself is open every day with free access. The City of Luxembourg sets seasonal closing times for the playgrounds: in practice they are used during daylight hours and are closed in the evening. Before a late visit, check the current times published on vdl.lu.',
            'In bad weather the wooden structures stay slippery for a while after rain, and in winter the playgrounds close earlier than in summer.',
          ],
        },
        {
          heading: 'Facilities for parents',
          paragraphs: [
            'Benches surround the play area and the mature trees around it give shade, so it is a comfortable place to sit while children play. Public toilets are available near the playgrounds, and the nearest shops and cafés are a few minutes away in Ville-Haute.',
          ],
          bullets: [
            'Benches around the play area',
            'Shade from mature trees',
            'Public toilets nearby',
            'Kinnekswiss lawn two minutes away for a picnic',
            'Shops and cafés in Ville-Haute, 5 minutes on foot',
          ],
        },
        {
          heading: 'Getting there',
          paragraphs: [
            'Take tram T1 to Hamilius or Stäreplaz/Étoile and walk 5–10 minutes into the park; the playgrounds are a short distance inside. Public transport in Luxembourg is free in standard class, so no ticket is needed.',
            'If you drive, the Hamilius car park is the closest large option — street parking in Ville-Haute is limited. Pushchairs manage the park paths easily: they are broad and mostly paved.',
          ],
        },
      ],
      faq: [
        { q: 'Is there a playground in Parc Municipal de Luxembourg?', a: 'Yes, the park has children\'s playgrounds including a well-known wooden pirate-ship structure with bridges and slides, plus swings, climbing frames and open lawns.' },
        { q: 'Is the playground free?', a: 'Yes. The playgrounds are part of the free public park — there is no admission fee or ticket.' },
        { q: 'What age is the pirate-ship playground suitable for?', a: 'The large structure suits children roughly from 3 to 12, with lower elements for toddlers. Young children should be supervised on the raised decks.' },
        { q: 'What are the playground opening hours?', a: 'The park is open daily, while the city sets seasonal closing times for the playgrounds — in practice daylight hours, earlier in winter. Check vdl.lu for the current times.' },
        { q: 'Are there toilets near the playground?', a: 'Yes, public toilets are available close to the playground area, along with benches and shade.' },
        { q: 'How do I reach the playground by public transport?', a: 'Tram T1 to Hamilius or Stäreplaz/Étoile, then a 5–10 minute walk into the park. Public transport in Luxembourg is free in standard class.' },
      ],
    },
    fr: {
      slug: 'playground',
      meta: {
        title: 'Aire de jeux du parc municipal de Luxembourg : bateau pirate et horaires',
        description:
          'Les aires de jeux du parc municipal de Luxembourg : le bateau pirate en bois, les âges, le sol, les toilettes et bancs à proximité, les horaires et l\'accès en tram.',
      },
      hero: {
        title: 'Aire de jeux',
        subtitle: 'Bateau pirate, pelouses ouvertes et ombre — gratuit, en plein centre',
      },
      intro: [
        'Le parc municipal de Luxembourg compte plusieurs aires de jeux, dont la plus connue est la grande structure en bois en forme de bateau pirate, avec mâts, ponts et toboggans. Elle est gratuite et, les après-midis ensoleillés, c\'est le coin le plus animé du parc.',
        'Les aires de jeux se trouvent à deux minutes de la pelouse de la Kinnekswiss : la routine des familles est donc simple — jouer, puis pique-niquer sur l\'herbe, ou l\'inverse. Bancs pour les parents, ombre et toilettes publiques sont à proximité.',
      ],
      facts: [
        { label: 'Coût', value: 'Gratuit — aucun billet pour les aires de jeux' },
        { label: 'Le plus connu', value: 'La structure de jeu en bois en forme de bateau pirate' },
        { label: 'Également', value: 'Balançoires, toboggans, structures d\'escalade et pelouses' },
        { label: 'Équipements', value: 'Bancs, ombre, toilettes publiques à proximité' },
      ],
      sections: [
        {
          heading: 'Ce qu\'on y trouve',
          paragraphs: [
            'La pièce maîtresse est une grande structure en forme de bateau pirate, avec ponts, passerelles de corde, échelles et toboggans. Autour se trouvent les balançoires habituelles, des toboggans plus petits et des éléments d\'escalade, ainsi que de l\'herbe ouverte pour courir et jouer au ballon.',
            'Parce que la structure est grande et comporte plusieurs niveaux, elle convient aux enfants d\'environ 3 à 12 ans ; les tout-petits disposent d\'éléments plus bas. Les sols sous les jeux sont amortissants, mais la surveillance reste nécessaire, surtout le week-end.',
          ],
        },
        {
          heading: 'Horaires',
          paragraphs: [
            'Le parc lui-même est ouvert tous les jours avec un accès libre. La Ville de Luxembourg fixe des horaires de fermeture saisonniers pour les aires de jeux : en pratique, elles sont utilisées aux heures de jour et fermées le soir. Avant une visite tardive, vérifiez les horaires en vigueur sur vdl.lu.',
            'Par mauvais temps, les structures en bois restent glissantes un moment après la pluie, et en hiver les aires de jeux ferment plus tôt qu\'en été.',
          ],
        },
        {
          heading: 'Pour les parents',
          paragraphs: [
            'Des bancs entourent l\'aire de jeux et les arbres matures alentour donnent de l\'ombre : on peut s\'asseoir confortablement pendant que les enfants jouent. Des toilettes publiques sont disponibles à proximité, et les commerces et cafés les plus proches sont à quelques minutes dans la Ville-Haute.',
          ],
          bullets: [
            'Bancs autour de l\'aire de jeux',
            'Ombre des arbres matures',
            'Toilettes publiques à proximité',
            'Pelouse de la Kinnekswiss à deux minutes pour le pique-nique',
            'Commerces et cafés de la Ville-Haute à 5 minutes à pied',
          ],
        },
        {
          heading: 'Accès',
          paragraphs: [
            'Prenez le tram T1 jusqu\'à Hamilius ou Stäreplaz/Étoile et marchez 5 à 10 minutes jusqu\'au parc ; les aires de jeux sont à faible distance à l\'intérieur. Les transports publics étant gratuits en 2e classe, aucun billet n\'est nécessaire.',
            'En voiture, le parking Hamilius est l\'option la plus proche : le stationnement en voirie dans la Ville-Haute est limité. Les poussettes circulent facilement sur les allées du parc, larges et majoritairement revêtues.',
          ],
        },
      ],
      faq: [
        { q: 'Y a-t-il une aire de jeux au parc municipal de Luxembourg ?', a: 'Oui, le parc compte plusieurs aires de jeux, dont la célèbre structure en bois en forme de bateau pirate avec passerelles et toboggans, ainsi que balançoires, structures d\'escalade et pelouses.' },
        { q: 'L\'aire de jeux est-elle gratuite ?', a: 'Oui. Les aires de jeux font partie du parc public gratuit : aucun droit d\'entrée ni billet.' },
        { q: 'À quel âge convient le bateau pirate ?', a: 'La grande structure convient environ de 3 à 12 ans, avec des éléments plus bas pour les tout-petits. Les jeunes enfants doivent être surveillés sur les ponts surélevés.' },
        { q: 'Quels sont les horaires de l\'aire de jeux ?', a: 'Le parc est ouvert tous les jours, mais la Ville fixe des horaires de fermeture saisonniers pour les aires de jeux : en pratique aux heures de jour, plus tôt en hiver. Consultez vdl.lu.' },
        { q: 'Y a-t-il des toilettes près de l\'aire de jeux ?', a: 'Oui, des toilettes publiques sont disponibles à proximité, avec des bancs et de l\'ombre.' },
        { q: 'Comment rejoindre l\'aire de jeux en transports publics ?', a: 'Tram T1 jusqu\'à Hamilius ou Stäreplaz/Étoile, puis 5 à 10 minutes de marche. Les transports publics sont gratuits en 2e classe au Luxembourg.' },
      ],
    },
    de: {
      slug: 'playground',
      meta: {
        title: 'Spielplatz im Stadtpark Luxemburg: Piratenschiff & Öffnungszeiten',
        description:
          'Die Spielplätze des Parc municipal de Luxembourg: das Piratenschiff, geeignete Alter, Untergrund, Toiletten und Bänke, Öffnungszeiten und Anfahrt mit der Tram.',
      },
      hero: {
        title: 'Spielplatz',
        subtitle: 'Piratenschiff, offene Wiesen und Schatten — kostenlos, mitten in der Stadt',
      },
      intro: [
        'Im Parc municipal de Luxembourg gibt es mehrere Spielplätze; am bekanntesten ist die große Holzstruktur in Form eines Piratenschiffs mit Masten, Brücken und Rutschen. Sie ist kostenlos und an sonnigen Nachmittagen der lebhafteste Winkel des Parks.',
        'Die Spielplätze liegen zwei Minuten von der Wiese Kinnekswiss entfernt — der übliche Familienablauf ist also einfach: erst spielen, dann auf der Wiese picknicken oder umgekehrt. Bänke für Eltern, Schatten und öffentliche Toiletten sind in der Nähe.',
      ],
      facts: [
        { label: 'Kosten', value: 'Kostenlos — kein Ticket für die Spielplätze' },
        { label: 'Bekanntestes', value: 'Die Holzstruktur in Form eines Piratenschiffs' },
        { label: 'Außerdem', value: 'Schaukeln, Rutschen, Kletterelemente und offene Wiesen' },
        { label: 'Ausstattung', value: 'Bänke, Schatten, öffentliche Toiletten in der Nähe' },
      ],
      sections: [
        {
          heading: 'Was es gibt',
          paragraphs: [
            'Mittelpunkt ist die große Piratenschiff-Struktur mit Decks, Seilbrücken, Leitern und Rutschen. Drumherum liegen die üblichen Schaukeln, kleinere Rutschen und Kletterelemente sowie offenes Gras zum Laufen und Ballspielen.',
            'Weil das Gerät groß und mehrstöckig ist, passt es für Kinder von etwa 3 bis 12 Jahren; Kleinkinder haben eigene niedrigere Elemente. Die Böden unter den Geräten sind fallmindernd, Aufsicht bleibt dennoch nötig — besonders am Wochenende.',
          ],
        },
        {
          heading: 'Öffnungszeiten',
          paragraphs: [
            'Der Park selbst ist täglich frei zugänglich. Für die Spielplätze legt die Stadt Luxemburg saisonale Schließzeiten fest: In der Praxis werden sie während der Tagesstunden genutzt und sind abends geschlossen. Vor einem späten Besuch die aktuellen Zeiten auf vdl.lu prüfen.',
            'Bei schlechtem Wetter bleiben die Holzteile nach Regen eine Zeitlang rutschig, und im Winter schließen die Spielplätze früher als im Sommer.',
          ],
        },
        {
          heading: 'Für Eltern',
          paragraphs: [
            'Bänke umgeben den Spielbereich, und die alten Bäume ringsum spenden Schatten — man sitzt angenehm, während die Kinder spielen. Öffentliche Toiletten liegen in der Nähe, Geschäfte und Cafés sind in der Oberstadt wenige Minuten entfernt.',
          ],
          bullets: [
            'Bänke rund um den Spielbereich',
            'Schatten von alten Bäumen',
            'Öffentliche Toiletten in der Nähe',
            'Wiese Kinnekswiss zwei Minuten entfernt für ein Picknick',
            'Geschäfte und Cafés in der Oberstadt, 5 Gehminuten',
          ],
        },
        {
          heading: 'Anfahrt',
          paragraphs: [
            'Mit der Tram T1 bis Hamilius oder Stäreplaz/Étoile und 5–10 Minuten zu Fuß in den Park; die Spielplätze liegen kurz danach. Der öffentliche Verkehr ist in der 2. Klasse kostenlos, ein Ticket ist also nicht nötig.',
            'Mit dem Auto ist das Parkhaus Hamilius die nächste größere Option — Parkplätze am Straßenrand sind in der Oberstadt knapp. Kinderwagen kommen auf den breiten, überwiegend befestigten Wegen gut voran.',
          ],
        },
      ],
      faq: [
        { q: 'Gibt es einen Spielplatz im Parc municipal de Luxembourg?', a: 'Ja, der Park hat mehrere Spielplätze, darunter die bekannte Holzstruktur in Form eines Piratenschiffs mit Brücken und Rutschen, außerdem Schaukeln, Kletterelemente und offene Wiesen.' },
        { q: 'Ist der Spielplatz kostenlos?', a: 'Ja. Die Spielplätze gehören zum kostenlosen öffentlichen Park — es gibt keinen Eintritt und kein Ticket.' },
        { q: 'Für welches Alter ist das Piratenschiff geeignet?', a: 'Die große Struktur passt etwa für Kinder von 3 bis 12 Jahren, mit niedrigeren Elementen für Kleinkinder. Jüngere Kinder sollten auf den erhöhten Decks beaufsichtigt werden.' },
        { q: 'Welche Öffnungszeiten hat der Spielplatz?', a: 'Der Park ist täglich offen, die Stadt legt saisonale Schließzeiten für die Spielplätze fest — in der Praxis Tagesstunden, im Winter früher. Aktuelle Zeiten auf vdl.lu.' },
        { q: 'Gibt es Toiletten in der Nähe des Spielplatzes?', a: 'Ja, öffentliche Toiletten liegen nahe beim Spielbereich, ebenso Bänke und Schattenplätze.' },
        { q: 'Wie komme ich mit öffentlichen Verkehrsmitteln zum Spielplatz?', a: 'Tram T1 bis Hamilius oder Stäreplaz/Étoile, dann 5–10 Minuten zu Fuß. Der öffentliche Verkehr ist in Luxemburg in der 2. Klasse kostenlos.' },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  events: {
    en: {
      slug: 'events',
      meta: {
        title: 'Events at Parc Municipal Luxembourg – Kinnekswiss Loves, Spillfest & Winter',
        description:
          'Events held in Parc Municipal de Luxembourg: the summer Kinnekswiss Loves programme, the Spillfest children\'s festival, concerts and the winter ice rink and Wanterpark — with dates and travel tips.',
      },
      hero: {
        title: 'Events in the park',
        subtitle: 'Kinnekswiss Loves, Spillfest, concerts and the winter programme',
      },
      intro: [
        'Parc Municipal de Luxembourg is one of the City of Luxembourg\'s main venues for free open-air events. Most of them happen on the Kinnekswiss, the big central lawn, which turns from picnic grass into a stage, a cinema or a sports pitch depending on the season.',
        'Programmes change every year. The city publishes the current calendar on vdl.lu, and this page explains what typically runs, when, and how it affects a normal visit to the park.',
      ],
      facts: [
        { label: 'Main venue', value: 'Kinnekswiss, the central lawn of the park' },
        { label: 'Typical season', value: 'Summer programme, with winter installations' },
        { label: 'Cost', value: 'Most events are free' },
        { label: 'Dates', value: 'Published annually on vdl.lu' },
      ],
      sections: [
        {
          heading: 'Kinnekswiss Loves (summer)',
          paragraphs: [
            'Kinnekswiss Loves is the summer programme the city runs on the lawn: open-air concerts, film screenings, sports taster sessions and family activities spread over the warm months. It is free and it is the reason the Kinnekswiss is at its busiest between roughly June and September.',
            'During the programme parts of the lawn are occupied by stages, screens and equipment, so casual picnics move to the edges. It also means arriving by public transport is the sensible choice.',
          ],
        },
        {
          heading: 'Spillfest (children\'s festival)',
          paragraphs: [
            'Spillfest is the city\'s free play festival for children, held on the Kinnekswiss. Instead of stages it fills the lawn with games, workshops and activity stands, and it draws families from across the country for a day.',
            'If you are visiting Luxembourg City with children at that time, it is worth planning an hour or two around it — the playgrounds, toilets and shade of the park are all right there.',
          ],
        },
        {
          heading: 'Winter: ice rink and Wanterpark',
          paragraphs: [
            'In winter the same lawn has hosted seasonal installations: an ice rink, the Wanterpark and the wider Winterlights programme that runs through the city around the Christmas markets. Dates and content vary from year to year.',
            'Because these are winter events, they finish early in the evening and the surrounding paths can be wet or icy — sensible shoes help.',
          ],
        },
        {
          heading: 'Practical notes for event days',
          paragraphs: [
            'On event days the park stays free, but it is much busier than usual and the lawn itself may be closed to casual use. The city advises arriving by public transport, and the tram makes that easy.',
          ],
          bullets: [
            'Tram T1 to Hamilius or Stäreplaz/Étoile — free in standard class',
            'Hamilius is the nearest car park; street parking is limited',
            'Check the current dates on vdl.lu before travelling',
            'Expect parts of the Kinnekswiss to be fenced off during set-up',
            'Bring something to sit on if you plan to stay on the grass',
          ],
        },
      ],
      faq: [
        { q: 'Which events take place in Parc Municipal de Luxembourg?', a: 'The summer Kinnekswiss Loves programme, the Spillfest children\'s festival, open-air concerts and screenings, and in winter installations such as the ice rink and Wanterpark. Most take place on the Kinnekswiss lawn.' },
        { q: 'Are events in the park free?', a: 'Most of the city\'s open-air programming in the park is free, including Kinnekswiss Loves and Spillfest. Some concerts or special events may require a ticket.' },
        { q: 'When is Kinnekswiss Loves?', a: 'It runs during the summer months, with dates announced each year by the City of Luxembourg. Check the current programme on vdl.lu before planning your visit.' },
        { q: 'What is Spillfest?', a: 'Spillfest is the free children\'s play festival organised by the City of Luxembourg on the Kinnekswiss, with games, workshops and activity stands for families.' },
        { q: 'Is there a Christmas market or ice rink in the park?', a: 'Winter installations on the Kinnekswiss have included an ice rink and the Wanterpark as part of the city\'s Winterlights season. The exact offer changes from year to year.' },
        { q: 'Can I still use the park during an event?', a: 'Yes, the paths and most of the grounds stay open, but the area used by the event — usually part of the Kinnekswiss — is closed while it is set up and running.' },
      ],
    },
    fr: {
      slug: 'events',
      meta: {
        title: 'Événements du parc municipal de Luxembourg : Kinnekswiss Loves, Spillfest',
        description:
          'Les événements du parc municipal de Luxembourg : le programme estival Kinnekswiss Loves, le Spillfest, les concerts et les installations hivernales — dates et conseils pratiques.',
      },
      hero: {
        title: 'Événements dans le parc',
        subtitle: 'Kinnekswiss Loves, Spillfest, concerts et programme d\'hiver',
      },
      intro: [
        'Le parc municipal de Luxembourg est l\'un des principaux lieux d\'événements en plein air de la Ville de Luxembourg. La plupart se déroulent sur la Kinnekswiss, la grande pelouse centrale, qui se transforme selon la saison en scène, en cinéma ou en terrain de sport.',
        'Les programmes changent chaque année. La Ville publie le calendrier en cours sur vdl.lu ; cette page explique ce qui a lieu d\'ordinaire, à quelle période, et comment cela influence une visite normale du parc.',
      ],
      facts: [
        { label: 'Lieu principal', value: 'La Kinnekswiss, la pelouse centrale du parc' },
        { label: 'Saison', value: 'Programme d\'été, avec installations d\'hiver' },
        { label: 'Coût', value: 'La plupart des événements sont gratuits' },
        { label: 'Dates', value: 'Publiées chaque année sur vdl.lu' },
      ],
      sections: [
        {
          heading: 'Kinnekswiss Loves (été)',
          paragraphs: [
            'Kinnekswiss Loves est le programme estival de la Ville sur la pelouse : concerts en plein air, projections de films, initiations sportives et activités familiales réparties sur les mois chauds. Il est gratuit et c\'est la raison pour laquelle la Kinnekswiss est la plus animée entre juin et septembre environ.',
            'Pendant le programme, une partie de la pelouse est occupée par des scènes, des écrans et du matériel : les pique-niques se déplacent vers les bords. C\'est aussi une bonne raison d\'arriver en transports publics.',
          ],
        },
        {
          heading: 'Spillfest (fête du jeu)',
          paragraphs: [
            'Le Spillfest est la fête gratuite du jeu pour les enfants organisée par la Ville sur la Kinnekswiss. Plutôt que des scènes, la pelouse se remplit de jeux, d\'ateliers et de stands d\'activités, et attire pour une journée des familles de tout le pays.',
            'Si vous visitez Luxembourg-Ville avec des enfants à cette période, cela vaut la peine d\'y consacrer une heure ou deux : les aires de jeux, les toilettes et l\'ombre du parc sont sur place.',
          ],
        },
        {
          heading: 'Hiver : patinoire et Wanterpark',
          paragraphs: [
            'En hiver, la même pelouse a accueilli des installations saisonnières : une patinoire, le Wanterpark et le programme plus large Winterlights qui traverse la ville autour des marchés de Noël. Le contenu varie d\'une année à l\'autre.',
            'Ces événements hivernaux se terminent tôt dans la soirée et les allées peuvent être humides ou glacées : des chaussures adaptées sont utiles.',
          ],
        },
        {
          heading: 'Conseils pratiques les jours d\'événement',
          paragraphs: [
            'Les jours d\'événement, le parc reste gratuit, mais il est bien plus fréquenté et la pelouse peut être fermée à l\'usage libre. La Ville conseille d\'arriver en transports publics, ce que le tram rend facile.',
          ],
          bullets: [
            'Tram T1 jusqu\'à Hamilius ou Stäreplaz/Étoile — gratuit en 2e classe',
            'Hamilius est le parking le plus proche ; la voirie est limitée',
            'Vérifiez les dates en cours sur vdl.lu avant de venir',
            'Une partie de la Kinnekswiss peut être clôturée pendant le montage',
            'Prévoyez de quoi vous asseoir si vous restez sur l\'herbe',
          ],
        },
      ],
      faq: [
        { q: 'Quels événements ont lieu au parc municipal de Luxembourg ?', a: 'Le programme estival Kinnekswiss Loves, le Spillfest pour les enfants, des concerts et projections en plein air, et en hiver des installations comme la patinoire et le Wanterpark. La plupart se tiennent sur la pelouse de la Kinnekswiss.' },
        { q: 'Les événements du parc sont-ils gratuits ?', a: 'La plupart des programmations en plein air de la Ville sont gratuites, notamment Kinnekswiss Loves et le Spillfest. Certains concerts ou événements spéciaux peuvent être payants.' },
        { q: 'Quand a lieu Kinnekswiss Loves ?', a: 'Le programme se déroule pendant les mois d\'été, avec des dates annoncées chaque année par la Ville de Luxembourg. Consultez le programme en cours sur vdl.lu avant votre visite.' },
        { q: 'Qu\'est-ce que le Spillfest ?', a: 'Le Spillfest est la fête gratuite du jeu pour les enfants organisée par la Ville de Luxembourg sur la Kinnekswiss, avec jeux, ateliers et stands d\'activités pour les familles.' },
        { q: 'Y a-t-il un marché de Noël ou une patinoire dans le parc ?', a: 'Les installations hivernales sur la Kinnekswiss ont compris une patinoire et le Wanterpark, dans le cadre de la saison Winterlights de la ville. L\'offre exacte change chaque année.' },
        { q: 'Peut-on profiter du parc pendant un événement ?', a: 'Oui, les allées et la majeure partie du parc restent ouvertes, mais la zone utilisée par la manifestation — généralement une partie de la Kinnekswiss — est fermée pendant le montage et l\'événement.' },
      ],
    },
    de: {
      slug: 'events',
      meta: {
        title: 'Veranstaltungen im Stadtpark Luxemburg: Kinnekswiss Loves & Spillfest',
        description:
          'Veranstaltungen im Parc municipal de Luxembourg: das Sommerprogramm Kinnekswiss Loves, das Spillfest, Konzerte sowie Wintereisbahn und Wanterpark — mit Terminen und Tipps.',
      },
      hero: {
        title: 'Veranstaltungen im Park',
        subtitle: 'Kinnekswiss Loves, Spillfest, Konzerte und das Winterprogramm',
      },
      intro: [
        'Der Parc municipal de Luxembourg ist einer der wichtigsten Orte der Stadt Luxemburg für Veranstaltungen im Freien. Die meisten finden auf der Kinnekswiss statt, der großen Wiese in der Mitte, die je nach Saison zur Bühne, zum Kino oder zum Spielfeld wird.',
        'Die Programme wechseln jährlich. Die Stadt veröffentlicht den aktuellen Kalender auf vdl.lu; diese Seite erklärt, was typischerweise läuft, wann — und wie sich das auf einen normalen Parkbesuch auswirkt.',
      ],
      facts: [
        { label: 'Hauptort', value: 'Die Kinnekswiss, die zentrale Wiese des Parks' },
        { label: 'Saison', value: 'Sommerprogramm, dazu winterliche Installationen' },
        { label: 'Kosten', value: 'Die meisten Veranstaltungen sind kostenlos' },
        { label: 'Termine', value: 'Jährlich auf vdl.lu veröffentlicht' },
      ],
      sections: [
        {
          heading: 'Kinnekswiss Loves (Sommer)',
          paragraphs: [
            'Kinnekswiss Loves ist das Sommerprogramm der Stadt auf der Wiese: Open-Air-Konzerte, Filmvorführungen, Sport-Schnupperangebote und Familienaktionen über die warmen Monate verteilt. Es ist kostenlos und der Grund dafür, dass die Kinnekswiss zwischen etwa Juni und September am vollsten ist.',
            'Während des Programms belegen Bühnen, Leinwände und Technik Teile der Wiese; Picknicks weichen an den Rand. Es ist auch ein guter Grund, mit dem öffentlichen Verkehr anzureisen.',
          ],
        },
        {
          heading: 'Spillfest (Kinderspielfest)',
          paragraphs: [
            'Das Spillfest ist das kostenlose Kinderspielfest der Stadt auf der Kinnekswiss. Statt Bühnen füllen Spiele, Werkstätten und Aktionsstände die Wiese, und für einen Tag kommen Familien aus dem ganzen Land.',
            'Wer in dieser Zeit mit Kindern in der Stadt ist, sollte ein bis zwei Stunden dafür einplanen — Spielplätze, Toiletten und Schatten liegen direkt dabei.',
          ],
        },
        {
          heading: 'Winter: Eisbahn und Wanterpark',
          paragraphs: [
            'Im Winter waren auf derselben Wiese saisonale Installationen zu Gast: eine Eisbahn, der Wanterpark und das stadtweite Programm Winterlights rund um die Weihnachtsmärkte. Inhalte ändern sich von Jahr zu Jahr.',
            'Winterveranstaltungen enden früh am Abend, und die Wege können nass oder glatt sein — festes Schuhwerk hilft.',
          ],
        },
        {
          heading: 'Praktisches für Veranstaltungstage',
          paragraphs: [
            'An Veranstaltungstagen bleibt der Park kostenlos, ist aber deutlich voller, und die Wiese kann für die freie Nutzung gesperrt sein. Die Stadt empfiehlt die Anreise mit dem öffentlichen Verkehr, und die Tram macht das einfach.',
          ],
          bullets: [
            'Tram T1 bis Hamilius oder Stäreplaz/Étoile — in der 2. Klasse kostenlos',
            'Hamilius ist das nächste Parkhaus; Parkplätze am Straßenrand sind knapp',
            'Aktuelle Termine vor der Reise auf vdl.lu prüfen',
            'Teile der Kinnekswiss können während des Aufbaus abgesperrt sein',
            'Etwas zum Sitzen mitnehmen, wenn Sie auf dem Gras bleiben wollen',
          ],
        },
      ],
      faq: [
        { q: 'Welche Veranstaltungen finden im Parc municipal de Luxembourg statt?', a: 'Das Sommerprogramm Kinnekswiss Loves, das Kinderspielfest Spillfest, Open-Air-Konzerte und Vorführungen sowie im Winter Installationen wie Eisbahn und Wanterpark. Die meisten finden auf der Wiese Kinnekswiss statt.' },
        { q: 'Sind die Veranstaltungen im Park kostenlos?', a: 'Die meisten Open-Air-Programme der Stadt sind kostenlos, darunter Kinnekswiss Loves und Spillfest. Einzelne Konzerte oder Sonderveranstaltungen können kostenpflichtig sein.' },
        { q: 'Wann findet Kinnekswiss Loves statt?', a: 'Das Programm läuft in den Sommermonaten; die Termine werden jedes Jahr von der Stadt Luxemburg bekannt gegeben. Prüfen Sie das aktuelle Programm auf vdl.lu.' },
        { q: 'Was ist das Spillfest?', a: 'Das Spillfest ist das kostenlose Kinderspielfest der Stadt Luxemburg auf der Kinnekswiss, mit Spielen, Werkstätten und Aktionsständen für Familien.' },
        { q: 'Gibt es im Park einen Weihnachtsmarkt oder eine Eisbahn?', a: 'Winterliche Installationen auf der Kinnekswiss umfassten eine Eisbahn und den Wanterpark im Rahmen der Winterlights-Saison der Stadt. Das genaue Angebot ändert sich jährlich.' },
        { q: 'Kann ich den Park während einer Veranstaltung nutzen?', a: 'Ja, Wege und der Großteil der Anlage bleiben offen; nur der von der Veranstaltung genutzte Bereich — meist ein Teil der Kinnekswiss — ist während Aufbau und Durchführung gesperrt.' },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  'how-to-get-there': {
    en: {
      slug: 'how-to-get-there',
      meta: {
        title: 'How to Get to Parc Municipal Luxembourg – Tram T1, Airport & Parking',
        description:
          'Directions to Parc Municipal de Luxembourg: tram T1 from Luxembourg Airport (Findel), free public transport, bus stops, walking routes from the old town and parking at Hamilius.',
      },
      hero: {
        title: 'How to get there',
        subtitle: 'Tram T1 from the airport, free public transport, walking routes and parking',
      },
      intro: [
        'Parc Municipal de Luxembourg sits in Ville-Haute, the upper town, at 38 Bd Joseph II (Plus Code J47F+95 Luxembourg). Because it is central and because public transport in Luxembourg is free in standard class, almost nobody needs a car to reach it.',
        'The simplest route is tram T1. It links Findel – Luxembourg Airport with the city centre and stops at Hamilius and Stäreplaz/Étoile, both a short walk from the park entrances.',
      ],
      facts: [
        { label: 'Address', value: '38 Bd Joseph II, 1840 Ville-Haute Luxembourg' },
        { label: 'Plus Code', value: 'J47F+95 Luxembourg' },
        { label: 'Tram', value: 'T1 to Hamilius or Stäreplaz/Étoile, then 5–10 min on foot' },
        { label: 'Fare', value: 'Free in standard class since 2020' },
      ],
      sections: [
        {
          heading: 'From Luxembourg Airport (Findel)',
          paragraphs: [
            'Tram T1 serves the Findel – Luxembourg Airport stop and runs straight into the city centre. Ride it to Hamilius or Stäreplaz/Étoile and walk 5–10 minutes to the Bd Joseph II entrance: about 30 minutes door to door, with no ticket to buy.',
            'A taxi or ride-hailing car is faster outside rush hour but costs money, and for a central park it is rarely worth it.',
          ],
        },
        {
          heading: 'By tram and bus',
          paragraphs: [
            'Tram T1 crosses the city and is the backbone of the network: Hamilius and Stäreplaz/Étoile are the stops to aim for. Several city bus lines also serve the streets around Bd Royal, Av. Émile Reuter and Hamilius.',
            'Public transport in Luxembourg has been free in standard class since 2020 for everyone — residents and visitors alike. First class on trains and a few special services remain chargeable, but a normal tram or bus ride costs nothing.',
          ],
          bullets: [
            'Tram T1: Hamilius, Stäreplaz/Étoile',
            'City buses: stops around Bd Royal and Av. Émile Reuter',
            'Current lines and times: mobiliteit.lu or the Mobilitéit app',
            'No ticket needed in standard class',
          ],
        },
        {
          heading: 'On foot and by bike',
          paragraphs: [
            'The park is a 5-minute walk from Place Guillaume II and about 10 minutes from the Grand Ducal Palace, so it fits into any walking tour of the upper town. Cycling is easy too: the park paths are broad and level, and city bike-share docking points are spread around Ville-Haute.',
          ],
        },
        {
          heading: 'Parking near the park',
          paragraphs: [
            'Driving is the least convenient option: Ville-Haute is dense and street parking is mostly short-stay. If you do come by car, use one of the city car parks and walk the last few minutes.',
          ],
          bullets: [
            'Hamilius — closest large car park, a short walk away',
            'Royal / Boulevard Royal — convenient for the northern entrances',
            'Glacis — surface car park used during big events',
            'On event days at the Kinnekswiss, take public transport instead',
          ],
        },
      ],
      faq: [
        { q: 'How do I get to Parc Municipal de Luxembourg by public transport?', a: 'Take tram T1 to Hamilius or Stäreplaz/Étoile and walk 5–10 minutes to the Bd Joseph II entrance. City buses also stop around Bd Royal and Av. Émile Reuter. Standard class is free.' },
        { q: 'How long does it take from Luxembourg Airport?', a: 'About 30 minutes: tram T1 from Findel – Luxembourg Airport to Hamilius or Stäreplaz/Étoile, then a 5–10 minute walk. No ticket is needed in standard class.' },
        { q: 'Is public transport in Luxembourg really free?', a: 'Yes. Since 2020 buses, trams and standard-class trains are free throughout the country for everyone. First class on trains and some special services remain chargeable.' },
        { q: 'Where can I park near Parc Municipal de Luxembourg?', a: 'The Hamilius car park is closest; Royal and Glacis are also within walking distance. Street parking in Ville-Haute is limited and mostly short-stay.' },
        { q: 'Can I walk to the park from the old town?', a: 'Yes — about 5 minutes from Place Guillaume II and around 10 minutes from the Grand Ducal Palace, which makes it an easy stop on a walking tour.' },
        { q: 'What is the exact address of the park?', a: '38 Bd Joseph II, 1840 Ville-Haute Luxembourg. The Plus Code is J47F+95 Luxembourg.' },
      ],
    },
    fr: {
      slug: 'how-to-get-there',
      meta: {
        title: 'Accès au parc municipal de Luxembourg : tram T1, aéroport et parking',
        description:
          'Itinéraires vers le parc municipal de Luxembourg : tram T1 depuis l\'aéroport de Findel, transports publics gratuits, arrêts de bus, accès à pied depuis la vieille ville et stationnement Hamilius.',
      },
      hero: {
        title: 'Comment venir',
        subtitle: 'Tram T1 depuis l\'aéroport, transports gratuits, accès à pied et stationnement',
      },
      intro: [
        'Le parc municipal de Luxembourg se trouve dans la Ville-Haute, au 38 boulevard Joseph II (Plus Code J47F+95 Luxembourg). Comme il est central et que les transports publics sont gratuits en 2e classe au Luxembourg, la voiture n\'est presque jamais nécessaire.',
        'L\'itinéraire le plus simple est le tram T1. Il relie l\'arrêt Findel – Luxembourg Airport au centre-ville et dessert Hamilius et Stäreplaz/Étoile, tous deux à quelques minutes à pied des entrées du parc.',
      ],
      facts: [
        { label: 'Adresse', value: '38 Bd Joseph II, 1840 Ville-Haute Luxembourg' },
        { label: 'Plus Code', value: 'J47F+95 Luxembourg' },
        { label: 'Tram', value: 'T1 jusqu\'à Hamilius ou Stäreplaz/Étoile, puis 5 à 10 min à pied' },
        { label: 'Tarif', value: 'Gratuit en 2e classe depuis 2020' },
      ],
      sections: [
        {
          heading: 'Depuis l\'aéroport de Luxembourg (Findel)',
          paragraphs: [
            'Le tram T1 dessert l\'arrêt Findel – Luxembourg Airport et rejoint directement le centre-ville. Descendez à Hamilius ou Stäreplaz/Étoile et marchez 5 à 10 minutes jusqu\'à l\'entrée du boulevard Joseph II : environ 30 minutes au total, sans acheter de titre de transport.',
            'Un taxi est plus rapide hors heure de pointe, mais il coûte cher et, pour un parc central, il est rarement utile.',
          ],
        },
        {
          heading: 'En tram et en bus',
          paragraphs: [
            'Le tram T1 traverse la ville et constitue l\'épine dorsale du réseau : Hamilius et Stäreplaz/Étoile sont les arrêts à viser. Plusieurs lignes de bus urbains desservent aussi les rues autour du boulevard Royal, de l\'avenue Émile Reuter et de Hamilius.',
            'Les transports publics sont gratuits en 2e classe depuis 2020 pour tous, résidents comme visiteurs. La 1re classe des trains et quelques services spéciaux restent payants, mais un trajet normal en tram ou en bus ne coûte rien.',
          ],
          bullets: [
            'Tram T1 : Hamilius, Stäreplaz/Étoile',
            'Bus urbains : arrêts autour du boulevard Royal et de l\'avenue Émile Reuter',
            'Lignes et horaires : mobiliteit.lu ou l\'application Mobilitéit',
            'Aucun billet nécessaire en 2e classe',
          ],
        },
        {
          heading: 'À pied et à vélo',
          paragraphs: [
            'Le parc est à 5 minutes à pied de la place Guillaume II et à une dizaine de minutes du Palais grand-ducal : il s\'intègre à toute visite à pied de la ville haute. Le vélo fonctionne aussi très bien : les allées du parc sont larges et planes, et les stations de vélos en libre-service sont réparties dans la Ville-Haute.',
          ],
        },
        {
          heading: 'Se garer près du parc',
          paragraphs: [
            'La voiture est l\'option la moins pratique : la Ville-Haute est dense et le stationnement en voirie est surtout de courte durée. Si vous venez en voiture, utilisez l\'un des parkings de la ville et terminez à pied.',
          ],
          bullets: [
            'Hamilius — le grand parking le plus proche, à quelques minutes',
            'Royal / boulevard Royal — pratique pour les entrées nord',
            'Glacis — parking de surface utilisé lors des grands événements',
            'Les jours d\'événement à la Kinnekswiss, privilégiez les transports publics',
          ],
        },
      ],
      faq: [
        { q: 'Comment rejoindre le parc municipal de Luxembourg en transports publics ?', a: 'Prenez le tram T1 jusqu\'à Hamilius ou Stäreplaz/Étoile et marchez 5 à 10 minutes jusqu\'à l\'entrée du boulevard Joseph II. Des bus desservent aussi le boulevard Royal et l\'avenue Émile Reuter. La 2e classe est gratuite.' },
        { q: 'Combien de temps depuis l\'aéroport de Luxembourg ?', a: 'Environ 30 minutes : tram T1 depuis Findel – Luxembourg Airport jusqu\'à Hamilius ou Stäreplaz/Étoile, puis 5 à 10 minutes à pied. Aucun billet en 2e classe.' },
        { q: 'Les transports publics sont-ils vraiment gratuits au Luxembourg ?', a: 'Oui. Depuis 2020, bus, trams et trains en 2e classe sont gratuits dans tout le pays pour tous. La 1re classe des trains et certains services spéciaux restent payants.' },
        { q: 'Où se garer près du parc municipal ?', a: 'Le parking Hamilius est le plus proche ; Royal et Glacis sont également accessibles à pied. Le stationnement en voirie dans la Ville-Haute est limité et surtout de courte durée.' },
        { q: 'Peut-on venir à pied depuis la vieille ville ?', a: 'Oui — environ 5 minutes depuis la place Guillaume II et une dizaine de minutes depuis le Palais grand-ducal : une halte facile dans une visite à pied.' },
        { q: 'Quelle est l\'adresse exacte du parc ?', a: '38 Bd Joseph II, 1840 Ville-Haute Luxembourg. Le Plus Code est J47F+95 Luxembourg.' },
      ],
    },
    de: {
      slug: 'how-to-get-there',
      meta: {
        title: 'Anfahrt Stadtpark Luxemburg: Tram T1, Flughafen & Parken',
        description:
          'Anfahrt zum Parc municipal de Luxembourg: Tram T1 ab Flughafen Findel, kostenloser Nahverkehr, Bushaltestellen, Wege aus der Altstadt und Parken am Hamilius.',
      },
      hero: {
        title: 'Anfahrt',
        subtitle: 'Tram T1 ab Flughafen, kostenloser Nahverkehr, Fußwege und Parken',
      },
      intro: [
        'Der Parc municipal de Luxembourg liegt in der Oberstadt (Ville-Haute), 38 Bd Joseph II (Plus Code J47F+95 Luxembourg). Weil er zentral liegt und der öffentliche Verkehr in Luxemburg in der 2. Klasse kostenlos ist, braucht kaum jemand ein Auto.',
        'Am einfachsten geht es mit der Tram T1. Sie verbindet die Haltestelle Findel – Luxembourg Airport mit der Innenstadt und hält an Hamilius und Stäreplaz/Étoile, beide nur wenige Gehminuten von den Parkeingängen entfernt.',
      ],
      facts: [
        { label: 'Adresse', value: '38 Bd Joseph II, 1840 Ville-Haute Luxembourg' },
        { label: 'Plus Code', value: 'J47F+95 Luxembourg' },
        { label: 'Tram', value: 'T1 bis Hamilius oder Stäreplaz/Étoile, dann 5–10 Min. zu Fuß' },
        { label: 'Tarif', value: 'Seit 2020 in der 2. Klasse kostenlos' },
      ],
      sections: [
        {
          heading: 'Vom Flughafen Luxemburg (Findel)',
          paragraphs: [
            'Die Tram T1 bedient die Haltestelle Findel – Luxembourg Airport und fährt direkt in die Innenstadt. Bis Hamilius oder Stäreplaz/Étoile fahren und 5–10 Minuten zum Eingang am Bd Joseph II gehen: rund 30 Minuten insgesamt, ohne Ticketkauf.',
            'Ein Taxi ist außerhalb der Stoßzeiten schneller, kostet aber Geld — für einen zentralen Park lohnt es sich selten.',
          ],
        },
        {
          heading: 'Mit Tram und Bus',
          paragraphs: [
            'Die Tram T1 durchquert die Stadt und ist das Rückgrat des Netzes: Hamilius und Stäreplaz/Étoile sind die Zielhaltestellen. Mehrere Stadtbuslinien bedienen außerdem die Straßen um Boulevard Royal, Avenue Émile Reuter und Hamilius.',
            'Der öffentliche Verkehr ist in Luxemburg seit 2020 in der 2. Klasse für alle kostenlos — Einheimische wie Gäste. Die 1. Klasse in Zügen und einzelne Sonderdienste bleiben kostenpflichtig; eine normale Fahrt mit Tram oder Bus kostet nichts.',
          ],
          bullets: [
            'Tram T1: Hamilius, Stäreplaz/Étoile',
            'Stadtbusse: Haltestellen um Boulevard Royal und Avenue Émile Reuter',
            'Linien und Zeiten: mobiliteit.lu oder die Mobilitéit-App',
            'In der 2. Klasse kein Ticket nötig',
          ],
        },
        {
          heading: 'Zu Fuß und mit dem Rad',
          paragraphs: [
            'Der Park liegt 5 Gehminuten von der Place Guillaume II und rund 10 Minuten vom Großherzoglichen Palast entfernt und passt damit in jeden Rundgang durch die Oberstadt. Auch mit dem Rad ist es einfach: Die Parkwege sind breit und eben, Stationen des Fahrradverleihs verteilen sich über die Oberstadt.',
          ],
        },
        {
          heading: 'Parken in der Nähe',
          paragraphs: [
            'Das Auto ist die unpraktischste Option: Die Oberstadt ist dicht bebaut, Parkplätze am Straßenrand sind meist kurzzeitbegrenzt. Wer dennoch fährt, nutzt eines der städtischen Parkhäuser und geht die letzten Minuten zu Fuß.',
          ],
          bullets: [
            'Hamilius — das nächste große Parkhaus, wenige Minuten entfernt',
            'Royal / Boulevard Royal — günstig für die nördlichen Eingänge',
            'Glacis — Parkplatz an der Oberfläche, bei Großveranstaltungen genutzt',
            'An Veranstaltungstagen auf der Kinnekswiss: öffentlicher Verkehr',
          ],
        },
      ],
      faq: [
        { q: 'Wie komme ich mit öffentlichen Verkehrsmitteln zum Parc municipal de Luxembourg?', a: 'Mit der Tram T1 bis Hamilius oder Stäreplaz/Étoile und 5–10 Minuten zu Fuß zum Eingang am Bd Joseph II. Busse halten außerdem am Boulevard Royal und an der Avenue Émile Reuter. Die 2. Klasse ist kostenlos.' },
        { q: 'Wie lange dauert die Fahrt vom Flughafen?', a: 'Etwa 30 Minuten: Tram T1 ab Findel – Luxembourg Airport bis Hamilius oder Stäreplaz/Étoile, dann 5–10 Minuten zu Fuß. In der 2. Klasse kein Ticket nötig.' },
        { q: 'Ist der Nahverkehr in Luxemburg wirklich kostenlos?', a: 'Ja. Seit 2020 sind Busse, Trams und Züge in der 2. Klasse landesweit für alle kostenlos. Die 1. Klasse in Zügen und einige Sonderdienste bleiben kostenpflichtig.' },
        { q: 'Wo kann ich in der Nähe des Parks parken?', a: 'Das Parkhaus Hamilius liegt am nächsten; Royal und Glacis sind ebenfalls zu Fuß erreichbar. Parkplätze am Straßenrand sind in der Oberstadt knapp und meist kurzzeitbegrenzt.' },
        { q: 'Kann ich aus der Altstadt zu Fuß kommen?', a: 'Ja — rund 5 Minuten ab Place Guillaume II und etwa 10 Minuten ab Großherzoglichem Palast; damit ist der Park eine einfache Station auf einem Rundgang.' },
        { q: 'Wie lautet die genaue Adresse des Parks?', a: '38 Bd Joseph II, 1840 Ville-Haute Luxembourg. Der Plus Code ist J47F+95 Luxembourg.' },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  'nearby-attractions': {
    en: {
      slug: 'nearby-attractions',
      meta: {
        title: 'Nearby Attractions to Parc Municipal Luxembourg – Old Town & Pétrusse',
        description:
          'What to see within 5–15 minutes of Parc Municipal de Luxembourg: Villa Vauban, Place Guillaume II, the Grand Ducal Palace, the Pétrusse valley, Chemin de la Corniche and the Grund.',
      },
      hero: {
        title: 'Nearby attractions',
        subtitle: 'Everything within a 5–15 minute walk of the park',
      },
      intro: [
        'Parc Municipal de Luxembourg sits inside Ville-Haute, so the main sights of Luxembourg City are on its doorstep. Most of the places below are reached on foot in under fifteen minutes, without transport.',
        'A natural half day is: the park, Villa Vauban inside it, then out to Place Guillaume II and the Grand Ducal Palace, down into the Pétrusse valley, and back up via the Chemin de la Corniche.',
      ],
      facts: [
        { label: 'In the park', value: 'Villa Vauban – Musée d\'Art de la Ville' },
        { label: '5 minutes', value: 'Place Guillaume II, shopping streets of Ville-Haute' },
        { label: '10 minutes', value: 'Grand Ducal Palace, Notre-Dame Cathedral' },
        { label: '15 minutes', value: 'Pétrusse valley, Chemin de la Corniche, the Grund' },
      ],
      sections: [
        {
          heading: 'Inside the park',
          paragraphs: [
            'Villa Vauban – Musée d\'Art de la Ville stands in the park itself: a 19th-century villa, once the first seat of the European Court of Justice, now the city\'s art museum with a permanent collection and temporary exhibitions. Villa Louvigny, also in the grounds, hosted the Eurovision Song Contest in 1962 and 1966.',
            'The orangery, the bandstand area and the sculpture groups are worth a short detour on the way through.',
          ],
        },
        {
          heading: 'Five minutes away',
          paragraphs: [
            'Place Guillaume II (Knuedler) is the main square of the upper town, with the city hall, cafés and a market on certain days. Around it are the shopping streets of Ville-Haute — the obvious place to buy a picnic before heading back into the park.',
          ],
        },
        {
          heading: 'Ten minutes away',
          paragraphs: [
            'The Grand Ducal Palace, the official residence of the Grand Duke, stands on the main street of the old town, with the Chamber of Deputies next to it. Notre-Dame Cathedral and the Lëtzebuerg City Museum are also within ten minutes.',
          ],
        },
        {
          heading: 'Fifteen minutes away',
          paragraphs: [
            'The Pétrusse valley is a sunken park along the river below the upper town, with paths, playgrounds and the remains of the fortress — a quiet contrast to the formal lawns above.',
            'From there, the Chemin de la Corniche is the terraced viewpoint over the Grund that locals call the most beautiful balcony in Europe, and a staircase or the public lift takes you down into the Grund itself, the old riverside quarter.',
          ],
        },
      ],
      faq: [
        { q: 'What is near Parc Municipal de Luxembourg?', a: 'Villa Vauban inside the park, Place Guillaume II five minutes away, the Grand Ducal Palace and Notre-Dame Cathedral about ten minutes away, and the Pétrusse valley, Chemin de la Corniche and the Grund within fifteen.' },
        { q: 'Is Villa Vauban inside the park?', a: 'Yes. Villa Vauban – Musée d\'Art de la Ville stands inside Parc Municipal de Luxembourg and is the city\'s art museum.' },
        { q: 'How far is the Grand Ducal Palace from the park?', a: 'About a 10-minute walk through the upper town. Place Guillaume II is roughly halfway, around 5 minutes from the park.' },
        { q: 'Can I walk from the park to the Grund?', a: 'Yes. Walk down into the Pétrusse valley or follow the Chemin de la Corniche, then take the stairs or the public lift down to the Grund — around 15 minutes in total.' },
        { q: 'How long do I need for the park and the old town?', a: 'Allow a half day: one to two hours for the park, then an hour or two for Place Guillaume II, the palace and the viewpoints over the Grund.' },
        { q: 'Is the Pétrusse valley worth visiting?', a: 'Yes — it is a quiet, sunken green corridor below the upper town with fortress remains and playgrounds, and it connects easily to the Chemin de la Corniche and the Grund.' },
      ],
    },
    fr: {
      slug: 'nearby-attractions',
      meta: {
        title: 'Autour du parc municipal de Luxembourg : vieille ville et Pétrusse',
        description:
          'Que voir à 5–15 minutes du parc municipal de Luxembourg : la Villa Vauban, la place Guillaume II, le Palais grand-ducal, la vallée de la Pétrusse, le Chemin de la Corniche et le Grund.',
      },
      hero: {
        title: 'Aux alentours',
        subtitle: 'Tout est à 5 à 15 minutes à pied du parc',
      },
      intro: [
        'Le parc municipal de Luxembourg se trouve dans la Ville-Haute : les principaux sites de la capitale sont donc à sa porte. La plupart des lieux ci-dessous s\'atteignent à pied en moins de quinze minutes, sans transport.',
        'Une demi-journée naturelle : le parc, la Villa Vauban à l\'intérieur, puis la place Guillaume II et le Palais grand-ducal, la descente dans la vallée de la Pétrusse et le retour par le Chemin de la Corniche.',
      ],
      facts: [
        { label: 'Dans le parc', value: 'Villa Vauban – Musée d\'Art de la Ville' },
        { label: 'À 5 minutes', value: 'Place Guillaume II, rues commerçantes de la Ville-Haute' },
        { label: 'À 10 minutes', value: 'Palais grand-ducal, cathédrale Notre-Dame' },
        { label: 'À 15 minutes', value: 'Vallée de la Pétrusse, Chemin de la Corniche, Grund' },
      ],
      sections: [
        {
          heading: 'Dans le parc',
          paragraphs: [
            'La Villa Vauban – Musée d\'Art de la Ville se dresse dans le parc même : une villa du XIXe siècle, premier siège de la Cour de justice des Communautés européennes, devenue le musée d\'art de la ville avec une collection permanente et des expositions temporaires. La Villa Louvigny, également dans l\'enceinte, a accueilli le Concours Eurovision de la chanson en 1962 et 1966.',
            'L\'orangerie, le kiosque et les groupes sculptés méritent un petit détour sur le chemin.',
          ],
        },
        {
          heading: 'À cinq minutes',
          paragraphs: [
            'La place Guillaume II (Knuedler) est la grande place de la ville haute, avec l\'hôtel de ville, des terrasses et un marché certains jours. Autour s\'étendent les rues commerçantes de la Ville-Haute — l\'endroit évident pour acheter un pique-nique avant de retourner au parc.',
          ],
        },
        {
          heading: 'À dix minutes',
          paragraphs: [
            'Le Palais grand-ducal, résidence officielle du Grand-Duc, se dresse dans la rue principale de la vieille ville, à côté de la Chambre des députés. La cathédrale Notre-Dame et le Lëtzebuerg City Museum sont également à dix minutes.',
          ],
        },
        {
          heading: 'À quinze minutes',
          paragraphs: [
            'La vallée de la Pétrusse est un parc encaissé le long de la rivière, en contrebas de la ville haute, avec allées, aires de jeux et vestiges de la forteresse : un contraste paisible avec les pelouses ordonnées d\'en haut.',
            'De là, le Chemin de la Corniche est la terrasse panoramique sur le Grund que les habitants surnomment le plus beau balcon d\'Europe ; un escalier ou l\'ascenseur public permet de descendre dans le Grund, l\'ancien quartier riverain.',
          ],
        },
      ],
      faq: [
        { q: 'Qu\'y a-t-il près du parc municipal de Luxembourg ?', a: 'La Villa Vauban dans le parc, la place Guillaume II à cinq minutes, le Palais grand-ducal et la cathédrale Notre-Dame à une dizaine de minutes, la vallée de la Pétrusse, le Chemin de la Corniche et le Grund à quinze minutes.' },
        { q: 'La Villa Vauban est-elle dans le parc ?', a: 'Oui. La Villa Vauban – Musée d\'Art de la Ville se trouve à l\'intérieur du parc municipal de Luxembourg et abrite le musée d\'art de la ville.' },
        { q: 'Le Palais grand-ducal est-il loin du parc ?', a: 'Environ 10 minutes de marche par la ville haute. La place Guillaume II se trouve à peu près à mi-chemin, vers 5 minutes du parc.' },
        { q: 'Peut-on descendre à pied du parc vers le Grund ?', a: 'Oui. Descendez dans la vallée de la Pétrusse ou suivez le Chemin de la Corniche, puis empruntez les escaliers ou l\'ascenseur public jusqu\'au Grund — environ 15 minutes au total.' },
        { q: 'Combien de temps prévoir pour le parc et la vieille ville ?', a: 'Comptez une demi-journée : une à deux heures pour le parc, puis une ou deux heures pour la place Guillaume II, le palais et les points de vue sur le Grund.' },
        { q: 'La vallée de la Pétrusse vaut-elle la visite ?', a: 'Oui — c\'est un corridor vert encaissé et tranquille sous la ville haute, avec des vestiges de forteresse et des aires de jeux, relié facilement au Chemin de la Corniche et au Grund.' },
      ],
    },
    de: {
      slug: 'nearby-attractions',
      meta: {
        title: 'Umgebung Stadtpark Luxemburg: Altstadt & Pétrusse-Tal',
        description:
          'Sehenswürdigkeiten in 5–15 Gehminuten des Parc municipal de Luxembourg: Villa Vauban, Place Guillaume II, Großherzoglicher Palast, Pétrusse-Tal, Chemin de la Corniche und Grund.',
      },
      hero: {
        title: 'In der Umgebung',
        subtitle: 'Alles in 5 bis 15 Gehminuten vom Park entfernt',
      },
      intro: [
        'Der Parc municipal de Luxembourg liegt in der Oberstadt (Ville-Haute): Die wichtigsten Sehenswürdigkeiten der Hauptstadt liegen direkt vor der Tür. Die meisten der unten genannten Orte sind in weniger als 15 Minuten zu Fuß erreichbar, ohne Verkehrsmittel.',
        'Ein naheliegender halber Tag: der Park, darin die Villa Vauban, dann weiter zur Place Guillaume II und zum Großherzoglichen Palast, hinunter ins Pétrusse-Tal und zurück über den Chemin de la Corniche.',
      ],
      facts: [
        { label: 'Im Park', value: 'Villa Vauban – Musée d\'Art de la Ville' },
        { label: '5 Minuten', value: 'Place Guillaume II, Einkaufsstraßen der Oberstadt' },
        { label: '10 Minuten', value: 'Großherzoglicher Palast, Kathedrale Notre-Dame' },
        { label: '15 Minuten', value: 'Pétrusse-Tal, Chemin de la Corniche, Grund' },
      ],
      sections: [
        {
          heading: 'Im Park selbst',
          paragraphs: [
            'Die Villa Vauban – Musée d\'Art de la Ville steht im Park: eine Villa aus dem 19. Jahrhundert, erster Sitz des Europäischen Gerichtshofs, heute Kunstmuseum der Stadt mit Sammlung und Wechselausstellungen. Die Villa Louvigny, ebenfalls auf dem Gelände, war 1962 und 1966 Austragungsort des Eurovision Song Contest.',
            'Orangerie, Musikpavillon und Skulpturengruppen lohnen einen kurzen Abstecher auf dem Weg.',
          ],
        },
        {
          heading: 'In fünf Minuten',
          paragraphs: [
            'Die Place Guillaume II (Knuedler) ist der Hauptplatz der Oberstadt mit Rathaus, Cafés und an manchen Tagen Markt. Drumherum liegen die Einkaufsstraßen der Ville-Haute — der naheliegende Ort, um ein Picknick zu kaufen und in den Park zurückzukehren.',
          ],
        },
        {
          heading: 'In zehn Minuten',
          paragraphs: [
            'Der Großherzogliche Palast, offizielle Residenz des Großherzogs, steht in der Hauptstraße der Altstadt, daneben die Abgeordnetenkammer. Auch die Kathedrale Notre-Dame und das Lëtzebuerg City Museum liegen innerhalb von zehn Minuten.',
          ],
        },
        {
          heading: 'In fünfzehn Minuten',
          paragraphs: [
            'Das Pétrusse-Tal ist ein tiefliegender Park entlang des Flusses unterhalb der Oberstadt, mit Wegen, Spielplätzen und Resten der Festung — ein ruhiger Kontrast zu den geordneten Wiesen oben.',
            'Von dort führt der Chemin de la Corniche, die Aussichtsterrasse über den Grund, die Einheimische den schönsten Balkon Europas nennen; über die Treppe oder den öffentlichen Aufzug gelangen Sie hinunter in den Grund, das alte Viertel am Fluss.',
          ],
        },
      ],
      faq: [
        { q: 'Was liegt in der Nähe des Parc municipal de Luxembourg?', a: 'Die Villa Vauban im Park, die Place Guillaume II in fünf Minuten, Großherzoglicher Palast und Kathedrale Notre-Dame in etwa zehn Minuten sowie Pétrusse-Tal, Chemin de la Corniche und Grund innerhalb von 15 Minuten.' },
        { q: 'Liegt die Villa Vauban im Park?', a: 'Ja. Die Villa Vauban – Musée d\'Art de la Ville steht im Parc municipal de Luxembourg und beherbergt das Kunstmuseum der Stadt.' },
        { q: 'Wie weit ist der Großherzogliche Palast vom Park entfernt?', a: 'Etwa 10 Gehminuten durch die Oberstadt. Die Place Guillaume II liegt ungefähr auf halbem Weg, rund 5 Minuten vom Park.' },
        { q: 'Kann ich vom Park zu Fuß in den Grund gehen?', a: 'Ja. Gehen Sie ins Pétrusse-Tal hinunter oder folgen Sie dem Chemin de la Corniche und nehmen Sie dann Treppe oder öffentlichen Aufzug in den Grund — insgesamt etwa 15 Minuten.' },
        { q: 'Wie viel Zeit brauche ich für Park und Altstadt?', a: 'Planen Sie einen halben Tag: ein bis zwei Stunden für den Park, danach ein bis zwei Stunden für Place Guillaume II, Palast und die Aussichtspunkte über den Grund.' },
        { q: 'Lohnt sich das Pétrusse-Tal?', a: 'Ja — es ist ein ruhiger, tiefliegender Grünkorridor unter der Oberstadt mit Festungsresten und Spielplätzen und leicht mit Chemin de la Corniche und Grund zu verbinden.' },
      ],
    },
  },
};

export function getTopic(slug: TopicSlug, locale: Locale): TopicContent {
  return TOPICS[slug][locale];
}

/** Related topics shown at the bottom of every topic page. */
export const RELATED_TOPICS: Record<TopicSlug, TopicSlug[]> = {
  kinnekswiss: ['events', 'picnic', 'playground', 'how-to-get-there'],
  picnic: ['kinnekswiss', 'playground', 'events', 'nearby-attractions'],
  playground: ['picnic', 'kinnekswiss', 'events', 'how-to-get-there'],
  events: ['kinnekswiss', 'picnic', 'how-to-get-there', 'nearby-attractions'],
  'how-to-get-there': ['nearby-attractions', 'kinnekswiss', 'events', 'playground'],
  'nearby-attractions': ['how-to-get-there', 'kinnekswiss', 'events', 'picnic'],
};
