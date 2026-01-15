import React, { createContext, useContext, useState } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Navbar
    'nav.home': 'Home',
    'nav.schedule': 'Agenda',
    'nav.trip': 'El viaje',
    'nav.rsvp': 'Confirma tu asistencia',
    'nav.faq': 'FAQs',
    'nav.gifts': 'Regalos',
    'nav.story': 'Nuestra historia',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': 'Valeria & David',
    'hero.subtitle': 'Nuestra boda',
    'hero.date1': 'Wedding Fest – 1 de mayo',
    'hero.location1': 'Pachar, Ollantaytambo, Cusco',
    'hero.date2': 'Laguna y Tradición – 2 de mayo',
    'hero.location2': 'Playa La Sirena, Laguna Piuray, Chinchero, Cusco',
    'hero.intro': 'Nos casamos en el Valle Sagrado de los Incas en Cusco. El lugar donde nos conocimos y donde seguimos echando raíces.',
    'hero.btn.schedule': 'Ver Agenda',
    'hero.btn.rsvp': 'Asistencia',

    // Schedule
    'schedule.title': 'Agenda',
    'schedule.intro': 'Serán 2 días de celebraciones, baile, comida rica, tradición y diversión. No será una boda típica, serán dos encuentros casuales donde disfrutaremos con nuestras personas más importantes, entre ellas tú.',
    'schedule.day1.date': 'Viernes, 1 de mayo 2026',
    'schedule.day1.time': '11:30 a.m.',
    'schedule.day1.event': 'Wedding Fest – Ceremonia y fiesta',
    'schedule.day1.description': 'Con ustedes como testigos y en presencia de nuestros padres, diremos "sí" para reafirmarnos como compañeros de vida. La ceremonia será a las 12:00 p.m. (pedimos puntualidad). La celebraremos será en la Cervecería del Valle con música en vivo, comida rica y mucha alegría.',
    'schedule.day1.dress.title': 'Código de vestimenta',
    'schedule.day1.dress.code': 'Casual, blanco, beige y colores tierra',
    'schedule.day1.dress.reference': 'Ver referencias de Pinterest',
    'schedule.day1.location.title': '¿Dónde?',
    'schedule.day1.location.address': 'Cervecería del Valle Sagrado - Taproom Pachar',
    'schedule.day1.location.note': 'Importante: esta sede de la Cervecería está en Ollantaytambo a 20 minutos de Urubamba.',
    'schedule.day2.date': 'Sábado, 2 de mayo 2026',
    'schedule.day2.time': '11:00 a.m.',
    'schedule.day2.event': 'Laguna y Tradición – Almuerzo para honrar a Cusco',
    'schedule.day2.description': 'Queremos honrar esta tierra hermosa que tanto nos ha enseñado. Disfrutaremos de tradiciones cuzqueñas, un delicioso almuerzo, música típica y lo más importante: compartir más tiempo con ustedes.',
    'schedule.day2.dress.title': 'Código de vestimenta',
    'schedule.day2.dress.code': 'Sport Casual (ir abrigados)',
    'schedule.day2.location.title': '¿Dónde?',
    'schedule.day2.location.address': 'Playa La Sirena, Laguna Piuray, Chinchero, Cusco',

    // Trip
    'trip.title': 'El viaje',
    'trip.flights.title': 'Vuelos',
    'trip.flights.description': 'Tendrás que llegar al Aeropuerto de Cusco (Alejandro Velasco Astete). Una vez en Cusco ciudad, te recomendamos tomar un taxi privado hacia tu hospedaje en el Valle Sagrado que es un recorrido de aproximadamente 1 hora y 30 minutos, rodeado de hermosos paisajes andinos.',
    'trip.transport.title': 'Traslado desde el aeropuerto',
    'trip.transport.description': 'Podrás coordinar tu taxi desde y hacia el aeropuerto directamente con el contacto de tu hospedaje. De todas formas, te compartimos una lista de taxistas de confianza con quienes podrás coordinar tus traslados directamente.',
    'trip.transport.drivers': 'Taxistas de confianza',
    'trip.transport.cost': 'Costo aproximado: 120-150 soles por trayecto ($35-$45)',
    'trip.shuttle.title': 'Servicio de transporte de cortesía',
    'trip.shuttle.description': 'Para las celebraciones del 1 y 2 de mayo, contaremos con un servicio de transporte que hará paradas en los hoteles Andean Wings, Tambo del Inka y Tierra Viva. También hará una parada en una zona céntrica de Urubamba (en la Plaza de Armas).',

    // Accommodation
    'accommodation.title': 'Hospedaje',
    'accommodation.subtitle': 'Nuestra organizadora de bodas, Diana, nos ha ayudado a investigar buenas opciones de alojamiento en Urubamba y sus alrededores, y es donde recomendamos hospedarse. Nota: Mayo es temporada alta por lo que les recomendamos reservar con anticipación.',
    'accommodation.ownOption': 'Por supuesto, también puedes encontrar tu propio alojamiento que mejor te convenga. Estos eventos se llevan a cabo en una región turística popular, por lo que hay muchas opciones disponibles en línea.',
    'accommodation.visit': 'Ver sitio web',
    'accommodation.tierraviva.description': 'Cadena confiable; buena relación calidad-precio.',
    'accommodation.tierraviva.location': 'Urubamba – 7 min de la cervecería',
    'accommodation.tierraviva.notes': '$80 - $130 por noche (incluye desayuno y 10% de cargo de servicio). Usa el código promocional "BODA-V&D" en la web para tarifas especiales. (Ciudadanos peruanos: +18% IGV a pagar en el hotel)',
    'accommodation.tambo.description': 'Resort de lujo cerca del centro de Urubamba.',
    'accommodation.tambo.location': 'Urubamba centro',
    'accommodation.tambo.notes': 'Precios para ocupación doble empiezan en $261 + 10% Cargo de Servicio + ~$35 Fee de Destino = $322/noche, incluyendo desayuno (Peruanos deberán pagar 18% IGV adicional sobre la tarifa base). Estas tarifas están disponibles del 27/4/26 al 6/5/26, y tienen cancelación gratuita hasta el 15/4/26. Para reservar, completa el formulario en el enlace y envía a corporativo@intursa.com.pe',

    // RSVP
    'rsvp.title': 'Confirma tu asistencia',
    'rsvp.description': 'Si estás aquí es porque significas mucho para nosotros y deseamos que seas parte de nuestra unión. Tu confirmación nos ayuda a organizar todo con calma y amor.',
    'rsvp.intro': 'Si todo se alinea para que puedas estar aquí, por favor confirma tu asistencia tan pronto como puedas, o antes del 1 de febrero, usando el siguiente enlace:',
    'rsvp.deadline': 'Por favor confirma tu asistencia antes del 1 de febrero de 2026.',
    'rsvp.button': 'Ir al formulario de asistencia',
    'rsvp.thanks': 'Gracias por tomarte el tiempo de confirmar. ¡Nos emociona celebrar contigo!',

    // FAQ
    'faq.title': 'Preguntas frecuentes',
    'faq.q1.question': '¿Necesito visa?',
    'faq.q1.answer': 'Los ciudadanos estadounidenses no necesitan visa para visitar Perú.',
    'faq.q2.question': '¿Qué hay de la altitud?',
    'faq.q2.answer': 'Para que puedan aclimatarse sin problemas a la altitud (más de 2900 m s. n. m.), les recomendamos llegar al menos un día antes. Evita consumir alcohol o alimentos pesados o frituras ese día. Descansa, ya que te esperan dos días de pura celebración.',
    'faq.q3.question': '¿Pueden asistir niños?',
    'faq.q3.answer': '¡Nos encantan los niños! Sin embargo, las invitaciones serán específicas y les pedimos que solo traigan a los niños que aparecen en su invitación.',
    'faq.q4.question': '¿Qué tipo de calzado debo usar o evitar?',
    'faq.q4.answer': 'Aquí en el Valle Sagrado muchos de los caminos no están pavimentados, a menudo son de tierra y rocosos. Por lo que las botas o el calzado cerrado y abrigado son las mejores opciones para disfrutar cómodamente de este entorno. Por favor, no tacones.',
    'faq.q5.question': '¿Dónde y a qué hora se celebrará la ceremonia y la recepción?',
    'faq.q5.answer': 'La ceremonia y la fiesta se celebrarán en la Cervecería del Valle de Pachar, ubicado a 20 minutos de la ciudad de Urubamba. Iniciaremos la ceremonia a las 12:00 m por lo que pedimos llegar 15 a 30 minutos con antelación. El transporte de cortesía pasará por los hoteles arriba mencionados con antelación, estaremos comunicándoles cerca a la fecha esos detalles.',
    'faq.q6.question': '¿Puedo llevar a un acompañante?',
    'faq.q6.answer': 'Si recibiste una invitación para un acompañante o el nombre de tu acompañante aparece en tu invitación, ¡sí! De lo contrario, nos encantaría que nuestra boda fuera un evento íntimo con familiares y amigos cercanos.',
    'faq.q7.question': '¿Qué debo hacer si no puedo asistir?',
    'faq.q7.answer': 'Sin duda, te extrañaremos. Si no puedes asistir, por favor avísanos lo antes posible y marca en el link de asistencia el botón de "no", para que podamos planificar con tranquilidad. ¡Gracias!',
    'faq.q8.question': '¿Habrá barra libre?',
    'faq.q8.answer': '¡Sí! Disfrutarás de cervezas artesanales, vinos y bebidas no alcohólicas.',
    'faq.restaurants.title': '¿Dónde comer en Urubamba?',
    'faq.places.title': '¿Qué ver en Cusco y el Valle Sagrado?',
    'faq.places.subtitle': 'También, si prefieren lugares que no estén muy llenos de turistas, hay muchos lugares que ver más allá de Machu Picchu, y podemos hacer otras recomendaciones, ¡avísennos!',
    'faq.places.cusco': 'Cusco ciudad',
    'faq.places.valley': 'Valle Sagrado',
    'faq.places.beyond': 'Más allá del valle',

    // Gifts
    'gifts.title': 'Regalos',
    'gifts.message1': 'Agradecemos enormemente su esfuerzo por viajar hasta Cusco y permitirnos celebrar juntos. Para nosotros, eso es más de lo que podríamos pedir. No esperamos regalos, pero si aún así desean obsequiarnos algo, en lugar de regalos materiales, los invitamos a contribuir a nuestro Fondo para la Luna de Miel, con el cual planeamos visitar Rumania en mayo después de la celebración de la boda.',
    'gifts.message2': 'Si prefieres hacer tu contribución mediante transferencia, aquí encontrarás los datos necesarios. Agradecemos de corazón tu apoyo y cariño.',
    'gifts.thanks': 'Con amor y gratitud, Vale & David',
    'gifts.banking.title': 'Datos bancarios',
    'gifts.banking.soles': 'Soles',
    'gifts.banking.dollars': 'Dólares',
    'gifts.banking.account': 'Cuenta',
    'gifts.banking.phone': 'Teléfono',
    'gifts.banking.beneficiaries': 'Destinatarios',

    // Story
    'story.title': 'Nuestra historia',
    'story.vale.title': 'La historia de Vale',
    'story.vale.text': 'En abril del 2022, decidí mudarme al Valle Sagrado y buscando una casita para alquilar, me contacté con una señora que le alquilaba una casa a un estadounidense, me dijo que en un mes él regresaría a su país y la casa estaría disponible.\n\nElla, la dueña, no estaba en ese momento en Perú y me contactó con el inquilino para que me mostrara la propiedad. Era David, un chico con una sonrisa que me transmitió enseguida confianza. Él me mostraba la casa pero yo no podía dejar de pensar "qué ordenado es este chico".\n\nDesde ahí nos volvimos muy amigos y poco a poco descubrimos que ambos disfrutamos mucho viajar y vivir en la naturaleza. Nuestra relación fue evolucionando hasta una formal en donde juntamos dos mundos distintos, algo que especialmente sentimos cuando empezamos a convivir (agosto 2023).\n\nSiempre con mucho respeto por el estilo de vida de cada uno, pudimos encontrar un tejido poderoso de visiones y formas. Puedo decir que hoy somos un gran equipo que se nutre mutuamente.',
    'story.david.title': 'La historia de David',
    'story.david.text': 'Una presencia mágica llegó, siempre sonriente, con energía positiva y calidez. Ella usaba ropa blanca frecuentemente, pensé que era un ángel. Luego descubrí que usaba ropa blanca para Kundalini Yoga 🙂\n\nEstábamos fascinados el uno con el otro, admirando la experiencia, los intereses y el conocimiento del otro; y también reconfortados por nuestros valores en común.\n\nDespués de conocernos, durante muchos meses estuvimos geográficamente separados, en Lima, en el extranjero, o en un pueblo lejano. Pero persistimos; yo persistí, buscando cualquier oportunidad que pudiera para verla, para conocerla mejor, y pronto ella se mudó al pueblo vecino y podía verla casi todos los días.\n\nContinuamente aprendemos a comunicarnos mejor y a apoyarnos con amor. Y a divertirnos, a saludar a la vida con una sonrisa, risas y gratitud.',
    'story.timeline.title': 'Nuestra línea del tiempo',
    'story.timeline.met': 'Abril 2022',
    'story.timeline.metLabel': 'Nos conocemos en Cusco',
    'story.timeline.moved': 'Agosto 2023',
    'story.timeline.movedLabel': 'Empezamos a convivir',
    'story.timeline.engaged': 'Mayo 2025',
    'story.timeline.engagedLabel': 'Pedida en Japón',
    'story.timeline.wedding': 'Mayo 2026',
    'story.timeline.weddingLabel': '¡Nos casamos!',
    'story.photos.title': 'Momentos especiales',

    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': '¿Tienes alguna pregunta? No dudes en contactarnos.',
    'contact.diana.role': 'Organizadora de bodas',
    'contact.david.role': 'Novio',
    'contact.valeria.role': 'Novia',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.schedule': 'Schedule',
    'nav.trip': 'The Trip',
    'nav.rsvp': 'RSVP',
    'nav.faq': 'FAQ',
    'nav.gifts': 'Gifts',
    'nav.story': 'Our Story',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Valeria & David',
    'hero.subtitle': 'Our Wedding',
    'hero.date1': 'Wedding Fest – May 1st',
    'hero.location1': 'Pachar, Ollantaytambo, Cusco',
    'hero.date2': 'Lake & Tradition – May 2nd',
    'hero.location2': 'Playa La Sirena, Laguna Piuray, Chinchero, Cusco',
    'hero.intro': 'We are getting married in the Sacred Valley of the Incas in Cusco. The place where we met and where we continue to put down roots.',
    'hero.btn.schedule': 'View Schedule',
    'hero.btn.rsvp': 'RSVP',

    // Schedule
    'schedule.title': 'Schedule',
    'schedule.intro': 'It will be 2 days of celebrations, dancing, delicious food, tradition, and fun. It won\'t be a typical wedding—it will be two casual gatherings where we\'ll enjoy with our most important people, including you.',
    'schedule.day1.date': 'Friday, May 1st, 2026',
    'schedule.day1.time': '11:30 a.m.',
    'schedule.day1.event': 'Wedding Fest – Ceremony and Celebration',
    'schedule.day1.description': 'With you as witnesses, we will say "I do" to reaffirm ourselves as life partners. The ceremony will be at 12:00 p.m. (please be punctual) and then we will celebrate at the Brewery with live music, traditional food and lots of joy.',
    'schedule.day1.dress.title': 'Dress Code',
    'schedule.day1.dress.code': 'Casual – white, beige and earth tones',
    'schedule.day1.dress.reference': 'View Pinterest references',
    'schedule.day1.location.title': 'Where?',
    'schedule.day1.location.address': 'Cervecería del Valle Sagrado - Taproom Pachar',
    'schedule.day1.location.note': '*This Cervecería del Valle location is in the district of Ollantaytambo, 20 minutes from Urubamba. Urubamba district is the area where we recommend you choose your accommodation, as it is closer to the event on May 2nd as well.',
    'schedule.day2.date': 'Saturday, May 2nd, 2026',
    'schedule.day2.time': '11:00 a.m.',
    'schedule.day2.event': 'Lake & Traditions – Lunch to honor Cusco',
    'schedule.day2.description': 'We added an extra day to the celebration to enjoy Cusco traditions, a delicious lunch, traditional music, and most importantly to share more time with all of you.',
    'schedule.day2.dress.title': 'Dress Code',
    'schedule.day2.dress.code': 'Casual (bring layers in case it\'s cold)',
    'schedule.day2.location.title': 'Where?',
    'schedule.day2.location.address': 'Playa La Sirena, Laguna Piuray, Chinchero, Cusco',

    // Trip
    'trip.title': 'The Trip',
    'trip.flights.title': 'Flights',
    'trip.flights.description': 'You will need to fly to Cusco airport (CUZ). Some airlines have partnerships that can connect you from the US to Cusco on the same itinerary. You can also consider booking an itinerary to arrive to Lima (LIM), and then book a separate flight from Lima to Cusco. We do this second option more often, as it provides more flight options and is usually a little less expensive, but it might be less convenient for some. If you decide on this second option, make sure you leave sufficient time for your layover (at least 3-4 hours), as you will have to clear immigration and customs before passing through security again to go to the domestic terminal (or you may choose to stay and spend time visiting the city of Lima as well). Feel free to contact Dave with questions/advice on these itineraries, as he\'s done the trip many times.\n\nFrom the Cusco airport, we recommend taking a private taxi to the Sacred Valley, a journey of approximately 1 hour and 30 minutes, surrounded by beautiful Andean landscapes.',
    'trip.transport.title': 'Airport Transfer',
    'trip.transport.description': 'You can likely arrange your transportation to and from the airport directly with your hotel. However, we\'ve also included a list of reliable taxi drivers in the Sacred Valley who can arrange your transfers.',
    'trip.transport.drivers': 'Trusted Drivers',
    'trip.transport.cost': 'Approximate cost: 120-150 Peruvian Soles ($35-$45) per trip',
    'trip.shuttle.title': 'Complimentary Shuttle Service',
    'trip.shuttle.description': 'For the May 1st and 2nd celebrations, we will have a shuttle service with stops at Andean Wings, Tambo del Inka, and Tierra Viva hotels. It will also stop at a central location in Urubamba (Plaza de Armas).',

    // Accommodation
    'accommodation.title': 'Accommodation',
    'accommodation.subtitle': 'Our wedding planner, Diana, has helped us research great lodging options in Urubamba and surroundings, and this is where we recommend staying. Note: May is high season so we recommend booking in advance.',
    'accommodation.ownOption': 'Of course also feel free to find your own accommodation that best suits you. These events are taking place in a popular tourist region, so there are many options available online.',
    'accommodation.visit': 'Visit website',
    'accommodation.tierraviva.description': 'Reliable chain; good value for money.',
    'accommodation.tierraviva.location': 'Urubamba – 7 min from brewery',
    'accommodation.tierraviva.notes': '$80 - $130 per night (includes breakfast, and 10% service charge). Use promo code "BODA-V&D" on the website for special rates. (Peruvian citizens: +18% VAT to be paid at hotel)',
    'accommodation.tambo.description': 'Luxury resort near Urubamba city center.',
    'accommodation.tambo.location': 'Urubamba downtown',
    'accommodation.tambo.notes': 'Prices for double-occupancy start at $261 + 10% Service Charge + ~$35 Destination Fee = $322/night, including breakfast (Peruvians will need to pay an additional 18% VAT applied to the base rate). These rates are available from 4/27/26 - 5/6/26, and have free cancellation until 4/15/26. To reserve, complete the form at the link below, and email to corporativo@intursa.com.pe',

    // RSVP
    'rsvp.title': 'RSVP',
    'rsvp.description': 'If you\'re here, it\'s because you mean a lot to us and we want you to be part of our union. Your confirmation helps us plan everything with care and love.',
    'rsvp.intro': 'If everything falls into place for you to be here, please confirm your attendance as soon as you are able, or by February 1st, using the following link:',
    'rsvp.deadline': 'Please confirm your attendance before February 1st, 2026.',
    'rsvp.button': 'Go to RSVP form',
    'rsvp.thanks': 'Thank you for taking the time to confirm. We\'re excited to celebrate with you!',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.q1.question': 'Do I need a visa?',
    'faq.q1.answer': 'U.S. citizens do not need a visa to visit Peru.',
    'faq.q2.question': 'What about the altitude?',
    'faq.q2.answer': 'To help you acclimatize to the altitude (over 9,500 ft above sea level), we recommend arriving at least one day early. Avoid drinking alcohol or eating fatty foods that day. Rest, as there will be two days of pure celebration ahead.',
    'faq.q3.question': 'Can children attend?',
    'faq.q3.answer': 'We love children! But this experience is primarily designed for adult invitees. If you plan to bring your children, please be prepared to make your own arrangements for them as necessary.',
    'faq.q4.question': 'What type of shoes should I wear or avoid?',
    'faq.q4.answer': 'Here in this rural area, many paths are unpaved, often of dirt and rocky. The terrain can be uneven, so close-toed warm shoes are the best option to comfortably enjoy this environment. High heels are not recommended.',
    'faq.q5.question': 'Where and at what time will the ceremony and reception be held?',
    'faq.q5.answer': 'The ceremony and reception will be held at the Cerveceria del Valle Sagrado in Pachar, located 20 minutes from the city of Urubamba. The ceremony will begin at 12:00 PM, please arrive 15 to 30 minutes early. Complimentary transportation will pick you up from the two hotels mentioned above; we will communicate those details closer to the date.',
    'faq.q6.question': 'Can I bring a guest?',
    'faq.q6.answer': 'If you received an invitation for a guest or your guest\'s name is listed on your invitation, then yes! Otherwise, we would love for our wedding to be an intimate event with family and close friends.',
    'faq.q7.question': 'What should I do if I can\'t attend?',
    'faq.q7.answer': 'We will certainly miss you. If you cannot attend, please let us know as soon as possible and select the "no" button on the RSVP link so we can plan accordingly. Thank you!',
    'faq.q8.question': 'Will there be an open bar?',
    'faq.q8.answer': 'Yes! Beers, wines, and non-alcoholic beverages are on us.',
    'faq.restaurants.title': 'Where to eat in Urubamba?',
    'faq.places.title': 'What to see in Cusco and the Sacred Valley?',
    'faq.places.subtitle': 'Also, if you prefer sites that are not very crowded with tourists, there are many places to see beyond Machu Picchu, and we can make other recommendations, let us know!',
    'faq.places.cusco': 'Cusco city',
    'faq.places.valley': 'Sacred Valley',
    'faq.places.beyond': 'Beyond the valley',

    // Gifts
    'gifts.title': 'Gifts',
    'gifts.message1': 'We really appreciate your effort to travel so far to share in our celebration, and for us, that\'s more than we could ask for. Gifts are not at all expected or required. But if you still feel that you would like to give something, instead of physical gifts we invite you to contribute to our Honeymoon Fund, where we are planning to visit Romania in May following the wedding celebration.',
    'gifts.message2': '',
    'gifts.thanks': 'With love and gratitude, Vale & David',
    'gifts.banking.title': 'Banking Details',
    'gifts.banking.soles': 'Soles',
    'gifts.banking.dollars': 'Dollars',
    'gifts.banking.account': 'Account',
    'gifts.banking.phone': 'Phone',
    'gifts.banking.beneficiaries': 'Beneficiaries',

    // Story
    'story.title': 'Our Story',
    'story.vale.title': 'Vale\'s Story',
    'story.vale.text': 'In April 2022, I decided to move to the Sacred Valley and while looking for a little house to rent, I contacted a lady who was renting a house to an American. She told me that in a month he would return to his country and the house would be available.\n\nShe, the owner, was not in Peru at the time and connected me with the tenant to show me the property. It was David, a guy with a smile that immediately gave me confidence. He was showing me the house but I couldn\'t stop thinking "how tidy this guy is."\n\nFrom there we became very good friends and little by little we discovered that we both really enjoy traveling and living in nature. Our relationship evolved into a formal one where we brought together two different worlds, something we especially felt when we started living together (August 2023).\n\nAlways with great respect for each other\'s lifestyle, we were able to find a powerful weave of visions and ways. I can say that today we are a great team that nourishes each other.',
    'story.david.title': 'David\'s Story',
    'story.david.text': 'A magical presence arrived, always smiling, with positive energy and warmth. She often wore white clothes, I thought she was an angel. Later I found out that she wore white clothes for Kundalini Yoga 🙂\n\nWe were fascinated by one another, admiring each other\'s experience, interests, knowledge; and also comforted by our common values.\n\nAfter meeting, for many months we were often geographically apart, in Lima, abroad, or in a town far away. But we persisted; I persisted, finding any opportunity I could to see her, to know her better, and soon she moved to the neighboring town and I could see her nearly every day.\n\nWe continually learn to communicate better and support each other with love. And to have fun, to greet life with a smile, laughter, and gratitude.',
    'story.timeline.title': 'Our Timeline',
    'story.timeline.met': 'April 2022',
    'story.timeline.metLabel': 'We meet in Cusco',
    'story.timeline.moved': 'August 2023',
    'story.timeline.movedLabel': 'We move in together',
    'story.timeline.engaged': 'May 2025',
    'story.timeline.engagedLabel': 'Engagement in Japan',
    'story.timeline.wedding': 'May 2026',
    'story.timeline.weddingLabel': 'We get married!',
    'story.photos.title': 'Special Moments',

    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Have any questions? Don\'t hesitate to contact us.',
    'contact.diana.role': 'Wedding Planner',
    'contact.david.role': 'Groom',
    'contact.valeria.role': 'Bride',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);

  // Defensive fallback: prevents a blank screen if the Provider is ever missing
  // (or if a bundling/module-resolution issue causes context mismatch).
  if (!context) {
    if (import.meta.env.DEV) {
      console.warn('useLanguage used without LanguageProvider; using fallback context.');
    }

    return {
      language: 'es',
      toggleLanguage: () => {},
      t: (key: string) => {
        return (
          translations.es[key as keyof typeof translations.es] ||
          translations.en[key as keyof typeof translations.en] ||
          key
        );
      },
    };
  }

  return context;
};