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
    'hero.title': 'VALERIA & DAVID',
    'hero.subtitle': 'Nuestra boda',
    'hero.date1': '1 de mayo – Wedding Fest',
    'hero.location1': 'Pachar, Ollantaytambo, Cusco',
    'hero.date2': '2 de mayo – Laguna y tradición',
    'hero.location2': 'Laguna Piuray, Chinchero, Cusco',
    'hero.intro': 'Nos casamos en el Valle Sagrado de los Incas, rodeados de montañas, historia y naturaleza. Queremos compartir este momento especial contigo.',
    'hero.btn.schedule': 'Ver Agenda',
    'hero.btn.rsvp': 'Confirmar asistencia',

    // Schedule
    'schedule.title': 'Agenda',
    'schedule.day1.date': 'Viernes, 1 de mayo 2026',
    'schedule.day1.time': '11:30 a.m.',
    'schedule.day1.event': 'Wedding Fest – Ceremonia y fiesta',
    'schedule.day1.description': 'Con ustedes como testigos diremos "sí" para reafirmarnos como compañeros de vida. La ceremonia será a las 12:00 p.m. (pedimos puntualidad) y luego celebraremos en la Cervecería del Valle con música en vivo, comida tradicional y mucha alegría.',
    'schedule.day1.dress.title': 'Código de vestimenta',
    'schedule.day1.dress.code': 'Casual, blanco, beige y colores tierra',
    'schedule.day1.dress.reference': 'Ver referencias de Pinterest',
    'schedule.day1.location.title': '¿Dónde?',
    'schedule.day1.location.address': 'Cervecería del Valle Sagrado - Taproom Pachar, Paradero Puente Pachar, Pachar, Peru',
    'schedule.day1.location.note': 'Importante: esta sede de la Cervecería está en Ollantaytambo a 20 minutos de Urubamba.',
    'schedule.day2.date': 'Sábado, 2 de mayo 2026',
    'schedule.day2.time': '11:00 a.m.',
    'schedule.day2.event': 'Laguna y Tradición – Almuerzo para honrar a Cusco',
    'schedule.day2.description': 'Queremos honrar esta tierra hermosa que tanto nos ha enseñado. Disfrutaremos de tradiciones cuzqueñas, un delicioso almuerzo, música típica y lo más importante: compartir más tiempo con ustedes.',
    'schedule.day2.dress.title': 'Código de vestimenta',
    'schedule.day2.dress.code': 'Sport Casual (ir abrigados)',
    'schedule.day2.location.title': '¿Dónde?',
    'schedule.day2.location.address': 'Laguna Piuray, Chinchero, Cusco',

    // Trip
    'trip.title': 'El viaje',
    'trip.flights.title': 'Llegada',
    'trip.flights.description': 'Tendrás que llegar al Aeropuerto de Cusco (Alejandro Velasco Astete). Una vez en Cusco ciudad, te recomendamos tomar un taxi privado hacia tu hospedaje en el Valle Sagrado que es un recorrido de aproximadamente 1 hora y 30 minutos, rodeado de hermosos paisajes andinos.',
    'trip.transport.title': 'Transporte',
    'trip.transport.description': 'Podrás coordinar tu taxi desde y hacia el aeropuerto directamente con el contacto de tu hospedaje. De todas formas, te compartimos una lista de taxistas de confianza con quienes podrás coordinar tus traslados directamente.',
    'trip.transport.drivers': 'Taxistas de confianza',
    'trip.transport.cost': 'Costo aproximado: 120-150 soles por trayecto (1.5 horas hasta Urubamba)',
    'trip.shuttle.title': 'Servicio de transporte de cortesía',
    'trip.shuttle.description': 'Para las celebraciones del 1 y 2 de mayo, contaremos con un servicio de transporte que hará paradas en los hoteles Tierra Viva y Tambo del Inka. También hará una parada en una zona céntrica de Urubamba.',

    // Accommodation
    'accommodation.title': 'Hospedaje',
    'accommodation.subtitle': 'Nuestra organizadora de bodas nos ha ayudado a investigar buenas opciones de alojamiento en Urubamba y sus alrededores.',
    'accommodation.visit': 'Ver sitio web',
    'accommodation.tierraviva.description': 'Cadena confiable; buena relación calidad-precio.',
    'accommodation.tierraviva.location': 'Urubamba – 7 min de la cervecería',
    'accommodation.tierraviva.notes': 'Usa el código promocional "BODA-V&D" para tarifas especiales. (Ciudadanos peruanos: +18% IGV a pagar en el hotel)',
    'accommodation.tambo.description': 'Resort de lujo cerca del centro de Urubamba.',
    'accommodation.tambo.location': 'Urubamba centro',
    'accommodation.tambo.notes': '50% de descuento. Para reservar, completa el formulario y envía a corporativo@intursa.com.pe',

    // RSVP
    'rsvp.title': 'Confirma tu asistencia',
    'rsvp.description': 'Si estás aquí es porque significas mucho para nosotros y deseamos que seas parte de nuestra unión. Tu confirmación nos ayuda a organizar todo con calma y amor.',
    'rsvp.deadline': 'Por favor confirma tu asistencia antes del 1 de marzo de 2026.',
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
    'faq.q8.answer': '¡Sí! Cervezas, vinos y bebidas no alcohólicas van por nuestra cuenta.',
    'faq.restaurants.title': '¿Dónde comer en Urubamba?',
    'faq.places.title': '¿Qué ver en Cusco y el Valle Sagrado?',
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
    'story.vale.text': 'En abril del 2022, decidí mudarme al Valle Sagrado y buscando una casita para alquilar, me contacté con una señora que le alquilaba una casa a un estadounidense, me dijo que en un mes él regresaría a su país y la casa estaría disponible. Ella, la dueña, no estaba en ese momento en Perú y me contactó con el inquilino para que me mostrara la propiedad. Era David, un chico con una sonrisa que me transmitió enseguida confianza. Él me mostraba la casa pero yo no podía dejar de pensar "qué ordenado es este chico". Desde ahí nos volvimos muy amigos y poco a poco descubrimos que ambos disfrutamos mucho viajar y vivir en la naturaleza. Nuestra relación fue evolucionando hasta una formal en donde juntamos dos mundos distintos, algo que especialmente sentimos cuando empezamos a convivir (agosto 2023). Siempre con mucho respeto por el estilo de vida de cada uno, pudimos encontrar un tejido poderoso de visiones y formas. Puedo decir que hoy somos un gran equipo que se nutre mutuamente.',
    'story.david.title': 'La historia de David',
    'story.david.text': '',
    'story.timeline.title': 'Nuestra línea del tiempo',
    'story.timeline.met': 'Abril 2022',
    'story.timeline.metLabel': 'Nos conocemos en Cusco',
    'story.timeline.moved': 'Agosto 2023',
    'story.timeline.movedLabel': 'Empezamos a convivir',
    'story.timeline.engaged': 'Octubre 2024',
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
    'hero.title': 'VALERIA & DAVID',
    'hero.subtitle': 'Our Wedding',
    'hero.date1': 'May 1st – Wedding Fest',
    'hero.location1': 'Pachar, Ollantaytambo, Cusco',
    'hero.date2': 'May 2nd – Lake & Traditions',
    'hero.location2': 'Laguna Piuray, Chinchero, Cusco',
    'hero.intro': 'We are getting married in the Sacred Valley of the Incas, surrounded by mountains, history and nature. We want to share this special moment with you.',
    'hero.btn.schedule': 'View Schedule',
    'hero.btn.rsvp': 'RSVP',

    // Schedule
    'schedule.title': 'Schedule',
    'schedule.day1.date': 'Friday, May 1st, 2026',
    'schedule.day1.time': '11:30 a.m.',
    'schedule.day1.event': 'Wedding Fest – Ceremony and Celebration',
    'schedule.day1.description': 'With you as witnesses, we will say "I do" to reaffirm ourselves as life partners. The ceremony will be at 12:00 p.m. (please be punctual) and then we will celebrate at the Brewery with live music, traditional food and lots of joy.',
    'schedule.day1.dress.title': 'Dress Code',
    'schedule.day1.dress.code': 'Casual, white, beige and earth tones',
    'schedule.day1.dress.reference': 'View Pinterest references',
    'schedule.day1.location.title': 'Where?',
    'schedule.day1.location.address': 'Cervecería del Valle Sagrado - Taproom Pachar, Paradero Puente Pachar, Pachar, Peru',
    'schedule.day1.location.note': 'Important: this brewery location is in Ollantaytambo, 20 minutes from Urubamba.',
    'schedule.day2.date': 'Saturday, May 2nd, 2026',
    'schedule.day2.time': '11:00 a.m.',
    'schedule.day2.event': 'Lake & Traditions – Lunch to honor Cusco',
    'schedule.day2.description': 'We want to honor this beautiful land that has taught us so much. We will enjoy Cusco traditions, a delicious lunch, typical music and most importantly: share more time with you.',
    'schedule.day2.dress.title': 'Dress Code',
    'schedule.day2.dress.code': 'Sport Casual (dress warmly)',
    'schedule.day2.location.title': 'Where?',
    'schedule.day2.location.address': 'Laguna Piuray, Chinchero, Cusco',

    // Trip
    'trip.title': 'The Trip',
    'trip.flights.title': 'Arrival',
    'trip.flights.description': 'You will need to arrive at Cusco Airport (Alejandro Velasco Astete). Once in Cusco city, we recommend taking a private taxi to your accommodation in the Sacred Valley, which is approximately 1 hour and 30 minutes, surrounded by beautiful Andean landscapes.',
    'trip.transport.title': 'Transportation',
    'trip.transport.description': 'You can coordinate your taxi to and from the airport directly with your accommodation. We also share a list of trusted taxi drivers you can contact directly.',
    'trip.transport.drivers': 'Trusted Drivers',
    'trip.transport.cost': 'Approximate cost: 120-150 soles per trip (1.5 hours to Urubamba)',
    'trip.shuttle.title': 'Complimentary Shuttle Service',
    'trip.shuttle.description': 'For the May 1st and 2nd celebrations, we will have a shuttle service with stops at Tierra Viva and Tambo del Inka hotels. It will also stop at a central location in Urubamba.',

    // Accommodation
    'accommodation.title': 'Accommodation',
    'accommodation.subtitle': 'Our wedding planner has helped us research great lodging options in Urubamba and surroundings.',
    'accommodation.visit': 'Visit website',
    'accommodation.tierraviva.description': 'Reliable chain; good value for money.',
    'accommodation.tierraviva.location': 'Urubamba – 7 min from brewery',
    'accommodation.tierraviva.notes': 'Use promo code "BODA-V&D" for special wedding rates. (Peruvian citizens: +18% VAT to be paid at hotel)',
    'accommodation.tambo.description': 'Luxury resort near Urubamba city center.',
    'accommodation.tambo.location': 'Urubamba downtown',
    'accommodation.tambo.notes': '50% discount. To book, complete the form and email to corporativo@intursa.com.pe',

    // RSVP
    'rsvp.title': 'RSVP',
    'rsvp.description': 'If you\'re here, it\'s because you mean a lot to us and we want you to be part of our union. Your confirmation helps us plan everything with care and love.',
    'rsvp.deadline': 'Please confirm your attendance before March 1st, 2026.',
    'rsvp.button': 'Go to RSVP form',
    'rsvp.thanks': 'Thank you for taking the time to confirm. We\'re excited to celebrate with you!',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.q1.question': 'Do I need a visa?',
    'faq.q1.answer': 'U.S. citizens do not need a visa to visit Peru.',
    'faq.q2.question': 'What about the altitude?',
    'faq.q2.answer': 'To help you acclimatize to the altitude (over 2,900 m above sea level), we recommend arriving at least one day before. Avoid alcohol, heavy meals, or fried foods that day. Rest up, as two days of pure celebration await you.',
    'faq.q3.question': 'Can children attend?',
    'faq.q3.answer': 'We love kids! However, invitations will be specific, and we ask that you only bring the children named on your invitation.',
    'faq.q4.question': 'What type of shoes should I wear or avoid?',
    'faq.q4.answer': 'Here in the Sacred Valley, many paths are unpaved, often dirt and rocky. Boots or closed, warm footwear are the best options to comfortably enjoy this environment. Please, no heels.',
    'faq.q5.question': 'Where and at what time will the ceremony and reception be held?',
    'faq.q5.answer': 'The ceremony and party will be held at Cervecería del Valle in Pachar, located 20 minutes from Urubamba city. We will start the ceremony at 12:00 p.m., so we ask you to arrive 15 to 30 minutes early. The complimentary shuttle will pick up from the hotels mentioned above in advance; we will communicate those details closer to the date.',
    'faq.q6.question': 'Can I bring a guest?',
    'faq.q6.answer': 'If you received an invitation for a guest or your guest\'s name appears on your invitation, yes! Otherwise, we would love for our wedding to be an intimate event with close family and friends.',
    'faq.q7.question': 'What should I do if I can\'t attend?',
    'faq.q7.answer': 'We will definitely miss you. If you can\'t attend, please let us know as soon as possible and mark "no" on the RSVP link so we can plan with peace of mind. Thank you!',
    'faq.q8.question': 'Will there be an open bar?',
    'faq.q8.answer': 'Yes! Beers, wines, and non-alcoholic beverages are on us.',
    'faq.restaurants.title': 'Where to eat in Urubamba?',
    'faq.places.title': 'What to see in Cusco and the Sacred Valley?',
    'faq.places.cusco': 'Cusco city',
    'faq.places.valley': 'Sacred Valley',
    'faq.places.beyond': 'Beyond the valley',

    // Gifts
    'gifts.title': 'Gifts',
    'gifts.message1': 'We greatly appreciate your effort to travel to Cusco and allow us to celebrate together. For us, that is more than we could ask for. We don\'t expect gifts, but if you still wish to give us something, instead of material gifts, we invite you to contribute to our Honeymoon Fund, with which we plan to visit Romania in May after the wedding celebration.',
    'gifts.message2': 'If you prefer to make your contribution via bank transfer, you will find the necessary details here. We thank you from the bottom of our hearts for your support and love.',
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
    'story.vale.text': 'In April 2022, I decided to move to the Sacred Valley and while looking for a little house to rent, I contacted a lady who was renting a house to an American. She told me that in a month he would return to his country and the house would be available. She, the owner, was not in Peru at the time and connected me with the tenant to show me the property. It was David, a guy with a smile that immediately gave me confidence. He was showing me the house but I couldn\'t stop thinking "how tidy this guy is." From there we became very good friends and little by little we discovered that we both really enjoy traveling and living in nature. Our relationship evolved into a formal one where we brought together two different worlds, something we especially felt when we started living together (August 2023). Always with great respect for each other\'s lifestyle, we were able to find a powerful weave of visions and ways. I can say that today we are a great team that nourishes each other.',
    'story.david.title': 'David\'s Story',
    'story.david.text': '',
    'story.timeline.title': 'Our Timeline',
    'story.timeline.met': 'April 2022',
    'story.timeline.metLabel': 'We meet in Cusco',
    'story.timeline.moved': 'August 2023',
    'story.timeline.movedLabel': 'We move in together',
    'story.timeline.engaged': 'October 2024',
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

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
