import { ServiceItem, DessertHighlight, Review } from '../types';

import heroImg from '../assets/images/chocolate_hero_dessert_1786059429844.jpg';
import ambianceImg from '../assets/images/chocolate_sarayi_real_ambiance_1786059962658.jpg';
import waffleImg from '../assets/images/specialty_waffle_coffee_1786059451474.jpg';
import logoImg from '../assets/images/chocolate_sarayi_logo_1786059833818.jpg';

export const COMPANY_INFO = {
  name: "Chocolate Sarayi Alger",
  tagline: "Coffee shop moderne, pâtisseries artisanales & chocolats d'exception",
  phone: "0562416399",
  formattedPhone: "0562 41 63 99",
  whatsappPhone: "213562416399",
  address: "GARDEN CITY, Alger",
  city: "Alger",
  hours: "Tous les jours de 08h00 à 23h30",
  email: "contact@chocolatesarayi-alger.com",
  heroImage: heroImg,
  ambianceImage: ambianceImg,
  waffleImage: waffleImg,
  logoImage: logoImg,
  description: "Coffee shop familial et chaleureux, spécialisé dans les cafés de qualité, les boissons chaudes et froides, les pâtisseries artisanales et les desserts faits maison. Nous offrons un cadre calme, moderne et convivial, idéal pour se retrouver en famille ou entre amis, travailler, étudier ou simplement profiter d'un moment de détente dans une ambiance accueillante.",
  longDescription: "Inspiré par le design scandinave raffiné et la générosité des grands cafés gourmands, Chocolate Sarayi Alger à Garden City combine une décoration minimaliste avec des éléments en bois noble, des plantes vertes apaisantes, un éclairage tamisé et de baies vitrées baignées de lumière naturelle. Que vous veniez pour un espresso de spécialité, une crêpe nappée de pur chocolat belge, un petit-déjeuner en famille ou une session de travail au calme avec Wi-Fi haut débit, nous vous garantissons une expérience d'exception."
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'cafe-specialite',
    title: "Café de Spécialité",
    category: 'boissons',
    description: "Grains sélectionnés avec soin et torréfiés sur mesure pour des arômes intenses et équilibrés.",
    iconName: 'Coffee',
    popular: true,
    tag: "Signature"
  },
  {
    id: 'boissons-chaudes',
    title: "Boissons Chaudes",
    category: 'boissons',
    description: "Espresso, cappuccino crémeux, caffe latte, chocolat chaud fondant au chocolat belge et séléction de thés affinés.",
    iconName: 'CupSoda',
    popular: true
  },
  {
    id: 'boissons-froides',
    title: "Boissons Froides & Rafraîchissantes",
    category: 'boissons',
    description: "Iced coffee, frappés gourmands, smoothies aux fruits frais et jus de saison pressés à la minute.",
    iconName: 'GlassWater'
  },
  {
    id: 'desserts-maison',
    title: "Desserts Faits Maison",
    category: 'desserts',
    description: "Créations sucrées préparées chaque jour avec des ingrédients frais de première qualité.",
    iconName: 'Cake',
    popular: true,
    tag: "Incontournable"
  },
  {
    id: 'patisseries-artisanales',
    title: "Pâtisseries Artisanales",
    category: 'desserts',
    description: "Tartelettes, éclairs revisités, mille-feuilles croustillants et spécialités gourmandes.",
    iconName: 'Dessert'
  },
  {
    id: 'gateaux-cheesecakes',
    title: "Gâteaux & Cheesecakes",
    category: 'desserts',
    description: "Cheesecakes onctueux au speculoos ou fruits rouges, gâteaux moelleux au chocolat fondu.",
    iconName: 'PieChart',
    popular: true
  },
  {
    id: 'crepes-gaufres-pancakes',
    title: "Crêpes, Gaufres & Pancakes",
    category: 'desserts',
    description: "Moelleux et croustillants, généreusement nappés de chocolat belge, noisettes, fruits frais et chantilly.",
    iconName: 'Cookie',
    popular: true,
    tag: "Best-Seller"
  },
  {
    id: 'glaces-desserts-glaces',
    title: "Glaces & Desserts Glacés",
    category: 'desserts',
    description: "Coupes glacées gourmandes, sorbets rafraîchissants et affogato au ristretto fumant.",
    iconName: 'IceCream'
  },
  {
    id: 'brunch-petit-dejeuner',
    title: "Petit-déjeuner & Brunch",
    category: 'formules',
    description: "Formules complètes avec viennoiseries croustillantes, oeufs, pancakes, jus frais et café au choix.",
    iconName: 'Utensils',
    popular: true
  },
  {
    id: 'formules-gouter',
    title: "Formules Goûter Gourmand",
    category: 'formules',
    description: "Combinaison parfaite d'une boisson chaude ou froide et d'une pâtisserie ou crêpe signature à prix doux.",
    iconName: 'Sparkles'
  },
  {
    id: 'consommation-sur-place',
    title: "Consommation Sur Place",
    category: 'prestations',
    description: "Un espace moderne et chaleureux avec tables spacieuses, banquettes confortables et climatisation douce.",
    iconName: 'Armchair'
  },
  {
    id: 'vente-a-emporter',
    title: "Vente à Emporter",
    category: 'prestations',
    description: "Emballages hermétiques et éco-responsables pour emporter vos boissons et douceurs préférées.",
    iconName: 'ShoppingBag'
  },
  {
    id: 'livraison-domicile',
    title: "Livraison à Domicile",
    category: 'prestations',
    description: "Service de livraison rapide à Alger pour recevoir vos pâtisseries et cafés tout frais chez vous.",
    iconName: 'Truck',
    popular: true
  },
  {
    id: 'wifi-gratuit',
    title: "Wi-Fi Gratuit & Espace Coworking",
    category: 'prestations',
    description: "Connexion fibre haut débit gratuite et prises électriques pour étudiants, freelances et professionnels.",
    iconName: 'Wifi'
  },
  {
    id: 'espace-familial',
    title: "Espace Familial & Convivial",
    category: 'prestations',
    description: "Ambiance calme et sécurisée adaptée aux familles avec enfants, dans un cadre serein et chaleureux.",
    iconName: 'Users'
  },
  {
    id: 'anniversaires-evenements',
    title: "Organisation d'Anniversaires & Événements",
    category: 'prestations',
    description: "Réservation d'espaces dédiés pour vos célébrations, anniversaires et petites fêtes privées.",
    iconName: 'PartyPopper',
    tag: "Sur Mesure"
  },
  {
    id: 'gateaux-personnalises',
    title: "Commandes de Gâteaux Personnalisés",
    category: 'desserts',
    description: "Création sur commande de gâteaux événementiels personnalisés selon vos thèmes et saveurs favorites.",
    iconName: 'Gift',
    popular: true
  },
  {
    id: 'reservations-tables',
    title: "Réservations de Tables",
    category: 'prestations',
    description: "Garantissez votre table pour un rendez-vous, une réunion d'affaires ou un moment en famille.",
    iconName: 'CalendarCheck'
  },
  {
    id: 'cartes-cadeaux',
    title: "Cartes Cadeaux Gourmandes",
    category: 'prestations',
    description: "Offrez un moment d'exception à vos proches avec nos cartes cadeaux utilisables sur toute la carte.",
    iconName: 'CreditCard'
  },
  {
    id: 'service-traiteur',
    title: "Service Traiteur pour Événements",
    category: 'prestations',
    description: "Prestation traiteur sucrée et pause café premium pour vos séminaires, réunions et événements d'entreprise.",
    iconName: 'ChefHat'
  }
];

export const DESSERT_HIGHLIGHTS: DessertHighlight[] = [
  {
    id: 'crepe-sarayi',
    name: "La Crêpe Fondante Chocolate Sarayi",
    category: "Signature",
    description: "Crêpe artisanale dorée garnie de fraises fraîches, éclats de noisettes torréfiées et une cascades de trois chocolats belges fondus (Noir, Lait, Blanc).",
    priceTag: "Spécialité Maison",
    image: heroImg,
    badge: "100% Chocolat Belge",
    ingredients: ["Pâte artisanale", "Chocolat Belge Pur", "Fruits frais", "Noisettes grillées"]
  },
  {
    id: 'gaufre-liegeoise',
    name: "Gaufre Royale & Glace Vanille",
    category: "Croustillant",
    description: "Gaufre de Liège caramélisée servie tiède, surmontée d'une boule de glace artisanale à la vanille de Madagascar et nappage caramel salé.",
    priceTag: "Incontournable",
    image: waffleImg,
    badge: "Fait Maison",
    ingredients: ["Gaufre croustillante", "Glace artisanale", "Sauce caramel au beurre salé"]
  },
  {
    id: 'cheesecakes-speculoos',
    name: "Cheesecake Speculoos & Caramel",
    category: "Pâtisserie",
    description: "Texture crémeuse fondante sur un biscuit aux épices Speculoos, recouvert d'un coulis caramel beurre salé fait maison.",
    priceTag: "Favori du Chef",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800",
    badge: "Crémeux & Gourmand",
    ingredients: ["Cream cheese premium", "Speculoos", "Caramel au beurre salé"]
  },
  {
    id: 'cappuccino-art',
    name: "Cappuccino de Spécialité & Latte Art",
    category: "Café",
    description: "Espresso double shot extrait de grains pur arabica torréfiés, accompagné d'une mousse de lait veloutée façon latte art.",
    priceTag: "Grand Cru",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=800",
    badge: "Pure Arabica",
    ingredients: ["Grains torréfiés", "Lait frais", "Micro-mousse onctueuse"]
  }
];

export const GOOGLE_REVIEWS_INFO = {
  rating: 4.1,
  totalReviews: 327,
  topics: [
    { name: "Sucré", count: 21 },
    { name: "Crêpe", count: 19 },
    { name: "Milkshake", count: 9 },
    { name: "Cheesecake", count: 9 },
    { name: "Service", count: 15 },
    { name: "Cadre", count: 12 }
  ]
};

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: "عبد القادر حمادو",
    role: "Local Guide • 91 avis • 479 photos",
    rating: 5,
    comment: "Excellent, j'ai aimé l'ambiance lumière jaune style bambou mashallah, pas de musique très propre et les crêpes était délicieuse et l'assiette très généreuse mashallah.",
    date: "Il y a 2 mois",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 'rev-2',
    author: "Catherine",
    role: "Local Guide • 13 avis • 31 photos",
    rating: 5,
    comment: "🌟 Très belle découverte ! Endroit chaleureux et accueillant, parfait pour se détendre. Les pancakes sont absolument délicieux 😍, bien présentés et très gourmands.",
    date: "Il y a 6 mois",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 'rev-3',
    author: "Riadh Ghozlane",
    role: "5 avis",
    rating: 5,
    comment: "Je tiens à remercier cet établissement que j’ai eu le plaisir de visiter. Étant déjà client chez eux, c’est toujours un plaisir d’y revenir. J’ai beaucoup apprécié l’endroit : un cadre calme, spacieux et très agréable où l’on se sent tout à fait bien.",
    date: "Il y a un mois",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 'rev-4',
    author: "Ziad",
    role: "Local Guide • 183 avis • 1377 photos",
    rating: 5,
    comment: "J’ai eu l’occasion de découvrir Chocolate Sarayi, et j’ai été agréablement surpris. L’endroit est calme, parfait pour se détendre ou discuter tranquillement. Le personnel est très accueillant, souriant et à l’écoute.",
    date: "Il y a un an",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 'rev-5',
    author: "Maya Soum",
    role: "Local Guide • 15 avis • 4 photos",
    rating: 5,
    comment: "Très bien. Les crêpes sont excellentes et les cheesecakes aussi. Les serveurs sont agréables et le service est rapide. La déco est top et la salle est très propre. Parfait.",
    date: "Il y a 10 mois",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 'rev-6',
    author: "Redda BEN",
    role: "Local Guide • 347 avis • 1089 photos",
    rating: 5,
    comment: "Je viens de découvrir. Ma foi, très bonne impression. Le fondant au chocolat est juste parfait. Le service est impeccable.",
    date: "Il y a un an",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 'rev-7',
    author: "Mari_world",
    role: "Local Guide • 210 avis • 1250 photos",
    rating: 5,
    comment: "Je tiens à partager ma satisfaction constante avec Chocolate Sarayi. À chaque visite, nous sommes impressionnés par la qualité exceptionnelle de leurs desserts (Brownie, Crêpes spéculoos, Sushi, Brownie pistachio...).",
    date: "Il y a un an",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 'rev-8',
    author: "Celia Mess",
    role: "Local Guide • 30 avis • 33 photos",
    rating: 4,
    comment: "Très surprise par la taille généreuse de la crêpe ! Les assiettes sont très copieuses et cela fait un excellent brunch bien gourmand.",
    date: "Il y a 10 mois",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 'rev-9',
    author: "Lina Mimosa",
    role: "Local Guide • 14 avis • 5 photos",
    rating: 5,
    comment: "Très bonne expérience, personnel sympathique et souriant, service rapide et tout ce qu'on a consommé était bon, bravo et bonne continuation.",
    date: "Il y a 11 mois",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=150"
  }
];

export const FAQS = [
  {
    question: "Où se situe exactement Chocolate Sarayi à Alger ?",
    answer: "Nous sommes idéalement situés à GARDEN CITY, Alger. L'établissement bénéficie de places de stationnement à proximité et d'un accès facile."
  },
  {
    question: "Proposez-vous des réservations de tables pour groupes ou événements ?",
    answer: "Oui ! Vous pouvez réserver une table directement via notre formulaire de contact sur le site ou en nous appelant au 0562416399 pour vos réservations, anniversaires ou réunions."
  },
  {
    question: "Comment commander un gâteau personnalisé ?",
    answer: "Il vous suffit de remplir le formulaire de contact en sélectionnant l'objet 'Commandes de gâteaux personnalisés' ou de nous contacter au 0562416399 au moins 24 à 48h à l'avance."
  },
  {
    question: "Avez-vous le Wi-Fi gratuit pour étudier ou travailler ?",
    answer: "Absolument ! Nous proposons un réseau Wi-Fi haut débit gratuit et un cadre calme avec prises électriques adaptées aux étudiants et télétravailleurs."
  },
  {
    question: "Proposez-vous la livraison à domicile ?",
    answer: "Oui, nous proposons la livraison à domicile et au bureau à Alger pour vos envies de café et de pâtisseries fraîches."
  }
];
