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
    'faq.q1.question': '¿Necesito visa para viajar a Perú?',
    'faq.q1.answer': 'La mayoría de turistas no necesitan visa para ingresar a Perú por turismo (estancias de hasta 90 días). Verifica los requisitos específicos para tu país de origen.',
    'faq.q2.question': '¿Qué hay de la altitud?',
    'faq.q2.answer': 'Cusco está a 3,400 metros sobre el nivel del mar. Recomendamos llegar un día antes para aclimatarse, beber mucha agua, evitar comidas pesadas y alcohol las primeras horas, y considerar té de coca. Consulta con tu médico si tienes condiciones preexistentes.',
    'faq.q3.question': '¿Pueden asistir niños?',
    'faq.q3.answer': 'Amamos a los niños, pero esta celebración será solo para adultos. Esperamos que comprendas y puedas disfrutar de un momento para ti.',
    'faq.q4.question': '¿Qué tipo de calzado debo usar o evitar?',
    'faq.q4.answer': 'Recomendamos calzado cómodo y cerrado. Para el Día 1, evita tacones altos o stilettos. Para el Día 2 en la laguna, usa zapatos cómodos para caminar en terreno irregular.',
    'faq.q5.question': '¿Dónde y a qué hora se celebrará la ceremonia y la recepción?',
    'faq.q5.answer': 'Día 1 (1 mayo): 11:30 a.m. en Cervecería del Valle Sagrado, Pachar. Día 2 (2 mayo): 11:00 a.m. en Laguna Piuray, Chinchero.',
    'faq.q6.question': '¿Puedo llevar a un acompañante?',
    'faq.q6.answer': 'Por favor revisa tu invitación para confirmar si incluye un plus one. Si tienes dudas, contáctanos.',
    'faq.q7.question': '¿Qué debo hacer si no puedo asistir?',
    'faq.q7.answer': 'Lo entenderemos completamente. Por favor háznoslo saber lo antes posible a través del formulario RSVP o contactándonos directamente.',
    'faq.q8.question': '¿Habrá barra libre?',
    'faq.q8.answer': '¡Sí! Habrá barra libre en ambos días de celebración.',
    'faq.restaurants.title': '¿Dónde comer en Urubamba?',
    'faq.places.title': '¿Qué ver en Cusco y el Valle Sagrado?',
    'faq.places.cusco': 'Cusco ciudad',
    'faq.places.valley': 'Valle Sagrado',
    'faq.places.beyond': 'Más allá del valle',

    // Gifts
    'gifts.title': 'Regalos',
    'gifts.message1': 'El mayor regalo para nosotros es que hagas el viaje y compartas estos días especiales con nosotros. Tu presencia es lo que más valoramos.',
    'gifts.message2': 'Si deseas contribuir a nuestra luna de miel en Rumania, hemos creado un fondo especial. Cualquier aporte será muy apreciado y nos ayudará a crear recuerdos inolvidables.',
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
    'story.vale.text': 'Nos conocimos en abril del 2022 en Cusco. Él acababa de mudarse desde Washington DC y yo llevaba ya un par de años viviendo acá. Fue un match de Tinder y acordamos conocernos en persona después de unos días de conversar.\n\nTuvimos nuestra primera cita en Pucara (un restaurante escondido en Cusco) y desde ese día no dejamos de vernos. Me enamoré de su manera de ver la vida, de su curiosidad insaciable y de cómo me hacía reír. David me mostró una forma distinta de vivir: más presente, más aventurera, más auténtica.\n\nEn agosto del 2023 empezamos a convivir y fue entonces que supe con certeza que era con quien quería pasar mi vida. Nos complementamos perfectamente: yo lo anclo cuando su mente vuela muy lejos, y él me impulsa a soñar más grande de lo que me atrevo.',
    'story.david.title': 'La historia de David',
    'story.david.text': 'Después de meses planeando mi mudanza a Perú, finalmente llegué a Cusco en marzo del 2022. Estaba emocionado pero también nervioso – dejé atrás 15 años en Washington DC para empezar una nueva vida en un país que apenas conocía.\n\nUnas semanas después de llegar, conocí a Vale a través de Tinder. Recuerdo perfectamente nuestra primera cita en Pucara. Me cautivó inmediatamente su energía, su inteligencia y esa sonrisa que ilumina cualquier espacio. Pero más que eso, me encantó lo fácil que era estar con ella.\n\nVale me ha enseñado tanto sobre Perú, sobre la vida, sobre mí mismo. Ella me inspira a ser mejor cada día. Cuando le propuse matrimonio en Japón (después de hacerla escalar una montaña – ups), ella dijo que sí, y supe que había encontrado a mi compañera de vida perfecta.',
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
    'faq.q1.question': 'Do I need a visa to travel to Peru?',
    'faq.q1.answer': 'Most tourists do not need a visa to enter Peru for tourism (stays up to 90 days). Check specific requirements for your country of origin.',
    'faq.q2.question': 'What about the altitude?',
    'faq.q2.answer': 'Cusco is at 3,400 meters above sea level. We recommend arriving a day early to acclimatize, drinking plenty of water, avoiding heavy meals and alcohol the first hours, and considering coca tea. Consult your doctor if you have pre-existing conditions.',
    'faq.q3.question': 'Can children attend?',
    'faq.q3.answer': 'We love children, but this celebration will be adults only. We hope you understand and can enjoy a moment for yourself.',
    'faq.q4.question': 'What type of shoes should I wear or avoid?',
    'faq.q4.answer': 'We recommend comfortable, closed-toe shoes. For Day 1, avoid high heels or stilettos. For Day 2 at the lake, wear comfortable shoes for walking on uneven terrain.',
    'faq.q5.question': 'Where and at what time will the ceremony and reception be held?',
    'faq.q5.answer': 'Day 1 (May 1st): 11:30 a.m. at Cervecería del Valle Sagrado, Pachar. Day 2 (May 2nd): 11:00 a.m. at Laguna Piuray, Chinchero.',
    'faq.q6.question': 'Can I bring a guest?',
    'faq.q6.answer': 'Please check your invitation to confirm if it includes a plus one. If you have questions, contact us.',
    'faq.q7.question': 'What should I do if I can\'t attend?',
    'faq.q7.answer': 'We will understand completely. Please let us know as soon as possible through the RSVP form or by contacting us directly.',
    'faq.q8.question': 'Will there be an open bar?',
    'faq.q8.answer': 'Yes! There will be an open bar on both celebration days.',
    'faq.restaurants.title': 'Where to eat in Urubamba?',
    'faq.places.title': 'What to see in Cusco and the Sacred Valley?',
    'faq.places.cusco': 'Cusco city',
    'faq.places.valley': 'Sacred Valley',
    'faq.places.beyond': 'Beyond the valley',

    // Gifts
    'gifts.title': 'Gifts',
    'gifts.message1': 'The greatest gift for us is that you make the trip and share these special days with us. Your presence is what we value most.',
    'gifts.message2': 'If you wish to contribute to our honeymoon in Romania, we have created a special fund. Any contribution will be greatly appreciated and will help us create unforgettable memories.',
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
    'story.vale.text': 'We met in April 2022 in Cusco. He had just moved from Washington DC and I had been living here for a couple of years. It was a Tinder match and we agreed to meet in person after a few days of chatting.\n\nWe had our first date at Pucara (a hidden restaurant in Cusco) and from that day we didn\'t stop seeing each other. I fell in love with his way of seeing life, his insatiable curiosity and how he made me laugh. David showed me a different way of living: more present, more adventurous, more authentic.\n\nIn August 2023 we started living together and that\'s when I knew for sure he was who I wanted to spend my life with. We complement each other perfectly: I anchor him when his mind flies too far, and he pushes me to dream bigger than I dare.',
    'story.david.title': 'David\'s Story',
    'story.david.text': 'After months planning my move to Peru, I finally arrived in Cusco in March 2022. I was excited but also nervous – I left behind 15 years in Washington DC to start a new life in a country I barely knew.\n\nA few weeks after arriving, I met Vale through Tinder. I perfectly remember our first date at Pucara. I was immediately captivated by her energy, her intelligence and that smile that lights up any space. But more than that, I loved how easy it was to be with her.\n\nVale has taught me so much about Peru, about life, about myself. She inspires me to be better every day. When I proposed to her in Japan (after making her climb a mountain – oops), she said yes, and I knew I had found my perfect life partner.',
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
