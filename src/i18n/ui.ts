import type { Locale } from './config';

export const ui = {
    es: {
        meta: {
            lang: 'es',
            portfolioTitle: 'Portafolio Cristian Maidana',
        },
        language: {
            label: 'Cambiar idioma',
            selfLabel: 'Español',
            enLabel: 'English',
        },
        nav: {
            home: 'Inicio',
            projects: 'Proyectos',
            about: 'Sobre mí',
            contact: 'Contacto',
            resume: 'Currículum',
        },
        home: {
            eyebrow: 'JUNIOR DEVELOPER. SYSTEMS STUDENT',
            title: 'Hola, soy Cristian',
            description:
                'Desarrollador junior con experiencia en frontend, backend, arquitectura y diseño visual. Apasionado por crear experiencias digitales modernas con estética premium y movimiento dinámico.',
            actions: {
                projects: 'Ver proyectos',
                contact: 'Contactarme',
            },
            code: {
                focus: 'Interfaces modernas',
                status: 'Disponible para trabajar',
            },
            stats: [
                { value: '4°', label: 'Año universitario' },
                { value: 'Full', label: 'Stack académico' },
                { value: 'UI', label: 'Mobile' },
            ],
        },
        projects: {
            eyebrow: 'Proyectos destacados',
            title: 'Proyectos académicos realizados como productos reales.',
            eco: {
                kicker: 'MOBILE APP',
                name: 'EcoUshuaia',
                description: [
                    'Aplicación móvil enfocada en reciclaje urbano y gestión ambiental desarrollada con Flutter.',
                    'La app permite visualizar contenedores ecológicos en mapas interactivos, consultar puntos de reciclaje y acceder a novedades y eventos mediante una interfaz moderna orientada a dispositivos móviles.',
                    'Desarrollé la arquitectura de la aplicación, la interfaz de usuario, la navegación entre pantallas, la integración con APIs REST y los sistemas de mapas y geolocalización.',
                ],
                links: {
                    github: 'GitHub',
                    details: 'Detalles',
                },
                images: {
                    calendar: 'Calendario',
                    map: 'Mapa',
                    settings: 'Configuración',
                },
            },
            food: {
                kicker: 'MOBILE APP',
                name: 'Alimentos',
                description: [
                    'Aplicación móvil enfocada en obtener información de productos alimenticios.',
                    'La app permite visualizar diversas categorías de productos alimenticios, consultar categorías y productos, ver las características y el nivel de los alimentos, y agregar nuevos alimentos mediante una cámara nativa.',
                    'Desarrollé la navegación entre pantallas, la integración con la API de alimentos y la cámara integrada para analizar nuevos productos.',
                ],
                links: {
                    github: 'GitHub',
                    details: 'Detalles',
                },
                images: {
                    home: 'Inicio',
                    favorites: 'Favoritos',
                },
            },
        },
        about: {
            eyebrow: 'Perfil',
            title: 'Base técnica, criterio visual y ganas de crecer.',
            profileName: 'Cristian Maidana',
            profileParagraphs: [
                'Estudiante avanzado de Licenciatura en Sistemas orientado al desarrollo de software de calidad.',
                'Me interesa el diseño de arquitecturas escalables, la integración entre frontend y backend y las bases de datos relacionales.',
            ],
            technologyTitle: 'Tecnologías',
            technologyParagraph:
                'A lo largo de la cursada universitaria aprendí patrones de diseño con Java, modelado de datos y normalización con PostgreSQL, concurrencia, estructuras de datos, recursividad con Pascal y criterio a la hora de elegir e implementar diferentes tecnologías según el problema.',
        },
        contact: {
            eyebrow: 'Contacto',
            title: 'Construyamos algo juntos',
            fields: {
                name: {
                    label: 'Nombre',
                    placeholder: 'Tu nombre',
                },
                email: {
                    label: 'Email',
                    placeholder: 'Tu email',
                },
                message: {
                    label: 'Mensaje',
                    placeholder: 'Tu mensaje',
                },
            },
            submit: 'Enviar mensaje',
        },
        detailLayout: {
            back: 'Volver',
            backAria: 'Volver',
        },
        detailEco: {
            imageAlts: [
                'Pantalla de calendario',
                'Pantalla de edición de datos',
                'Pantalla de mapa',
                'Pantalla de detalle de novedades',
                'Pantalla de filtros',
                'Pantalla de configuración',
                'Pantalla de registro',
            ],
            intro: {
                eyebrow: 'Proyecto mobile',
                title: 'EcoUshuaia',
                lead: 'EcoUshuaia es un sistema orientado a mejorar la localización, consulta y disposición de residuos urbanos en la ciudad de Ushuaia mediante una aplicación móvil.',
            },
            context: {
                eyebrow: 'Contexto',
                title: 'Historia',
                paragraphs: [
                    'Desarrollé EcoUshuaia para resolver una necesidad concreta de la ciudad: facilitar la localización de contenedores, mejorar la disposición de residuos y centralizar información útil en una aplicación móvil.',
                    'Este proyecto me permitió profundizar en arquitectura modular en Flutter, consumo de APIs REST, autenticación con JWT, modelado relacional y geoespacial con PostgreSQL/PostGIS, e integración entre Flutter y código nativo iOS con Swift para mapas, búsqueda y navegación.',
                ],
            },
            process: {
                eyebrow: 'Proceso',
                title: 'Etapas del proyecto',
                steps: [
                    {
                        title: 'Diseño',
                        body: 'Fue mi primera experiencia diseñando una aplicación completa desde cero. En esta etapa aprendí a transformar una idea general en pantallas, recorridos y decisiones funcionales concretas, entendiendo que diseñar no es solo lo visual, sino también organizar cómo el usuario comprende y usa el sistema.',
                    },
                    {
                        title: 'Arquitectura',
                        body: 'En esta etapa trabajé en cómo estructurar internamente la aplicación para que pudiera crecer y mantenerse con orden. Aprendí a separar responsabilidades, organizar el proyecto por módulos y capas, y adaptar la arquitectura a medida que la complejidad real de la app fue aumentando.',
                    },
                    {
                        title: 'Frontend',
                        body: 'Acá desarrollé la parte visible e interactiva de la aplicación con Flutter y Dart. Aprendí a construir pantallas, componentes, navegación y manejo de estado, conectando la interfaz con el comportamiento real del sistema de forma clara y mantenible.',
                    },
                    {
                        title: 'Backend',
                        body: 'En esta etapa me enfoqué en la lógica del servidor, la API, las validaciones y la autenticación con JWT usando Django REST Framework. Aprendí a organizar y exponer la información que necesita la app, entendiendo el backend como una capa central para el funcionamiento seguro y consistente del sistema.',
                    },
                    {
                        title: 'Base de datos',
                        body: 'Trabajé en el modelado de la información del sistema con PostgreSQL y PostGIS, definiendo tablas, relaciones y datos geoespaciales. Aprendí a estructurar mejor la información, revisar y actualizar el modelo con el tiempo y ajustar la base de datos para que representara de forma más sólida el problema real.',
                    },
                    {
                        title: 'Extras',
                        body: 'Una parte importante del proyecto fue la integración de Mapbox para mapa, búsqueda y navegación. Esto me permitió profundizar en servicios geográficos y en la integración entre Flutter y código nativo iOS con Swift, además de reforzar conocimientos en APIs REST, autenticación segura y datos geoespaciales.',
                    },
                ],
            },
            firstSteps: {
                eyebrow: 'Inicio del proyecto',
                title: '¿Cómo fueron los primeros pasos?',
                requirements: {
                    title: 'Buscar requerimientos',
                    paragraph:
                        'La identificación de requisitos se realizó mediante el análisis del problema a resolver y la investigación de aplicaciones y servicios similares relacionados con reciclaje, gestión ambiental y navegación geográfica. A partir de ese relevamiento se definieron las funcionalidades principales, los flujos de uso esperados y las necesidades de los distintos tipos de usuarios, evaluando tanto características que finalmente fueron implementadas como otras que quedaron fuera del alcance inicial del proyecto.',
                    imageAlt: 'Documento de requerimientos',
                    experienceTitle: 'Mi experiencia',
                    experience: [
                        'Análisis y priorización de necesidades.',
                        'Investigación de aplicaciones similares.',
                        'Definición del alcance del proyecto.',
                        'Elaboración de requisitos funcionales y no funcionales.',
                    ],
                },
                useCases: {
                    title: 'Casos de uso',
                    paragraph:
                        'Con los requisitos definidos, se desarrollaron los casos de uso para organizar y representar las distintas interacciones previstas dentro de la aplicación. Esta etapa permitió validar el alcance funcional del sistema y servir como base para las decisiones de diseño y desarrollo posteriores.',
                    imageAlt: 'Diagrama de casos de uso',
                    experienceTitle: 'Mi experiencia',
                    experience: [
                        'Traducción de requisitos a funcionalidades concretas.',
                        'Identificación de actores y responsabilidades.',
                        'Modelado de interacciones entre usuarios y sistema.',
                        'Definición del alcance funcional de la aplicación.',
                    ],
                },
                database: {
                    title: 'Diagrama de la base de datos',
                    paragraph:
                        'Se diseñó la base de datos relacional del sistema definiendo las entidades, atributos y relaciones necesarias para soportar las funcionalidades de la aplicación, asegurando una organización consistente y escalable de la información.',
                    imageAlt: 'Diagrama de base de datos',
                    experienceTitle: 'Mi experiencia',
                    experience: [
                        'La construcción de la base de datos fue un proceso iterativo que evolucionó junto con el proyecto. Inicialmente se definió un modelo simple compuesto por las entidades principales, como usuarios, zonas, calendarios, sensores, contenedores, residuos y mapas. A medida que avanzaba el análisis y se profundizaba en los requisitos del sistema, surgieron nuevas relaciones, restricciones y entidades necesarias para representar correctamente el funcionamiento de la aplicación.',
                        'Este proceso de refinamiento constante me permitió comprender la importancia de contar con una base sólida desde las primeras etapas del diseño, al mismo tiempo que incorporaba mejoras derivadas tanto de los conocimientos adquiridos durante la carrera como de las necesidades reales identificadas durante el desarrollo de EcoUshuaia. También reforzó la idea de que el diseño de una base de datos es una tarea evolutiva, donde cada iteración contribuye a obtener una estructura más consistente, escalable y alineada con los objetivos del sistema.',
                        'Uno de los principales aprendizajes fue comprender que el diseño de la base de datos no es una etapa aislada ni definitiva, sino que evoluciona junto con el resto del sistema. Muchas decisiones surgieron o fueron ajustadas durante el desarrollo de funcionalidades, la implementación del backend y la definición de nuevas interacciones entre los usuarios y la aplicación.',
                    ],
                },
            },
            design: {
                eyebrow: 'UI / UX',
                title: 'Primeras etapas del diseño',
                screens: ['Login', 'Signup', 'Home', 'Calendar', 'Map', 'Settings'],
                paragraphs: [
                    'El diseño de EcoUshuaia representó mi primer acercamiento a la construcción completa de una experiencia de usuario para una aplicación móvil. Durante esta etapa busqué desarrollar una interfaz simple, intuitiva y visualmente consistente, tomando como referencia aplicaciones móviles modernas y adaptando sus patrones de diseño a las necesidades específicas del proyecto.',
                    'En un comienzo el enfoque estuvo centrado principalmente en la apariencia individual de cada pantalla y en la distribución de sus elementos. Sin embargo, a medida que avanzó el desarrollo, comprendí que el diseño no se limita únicamente al aspecto visual, sino también a la forma en que los usuarios interactúan con la aplicación y cómo las distintas pantallas, componentes y funcionalidades se conectan entre sí.',
                    'Este proceso me permitió incorporar conceptos relacionados con jerarquía visual, experiencia de usuario, navegación, animaciones y transiciones, buscando que cada interacción se sintiera natural y coherente dentro de la aplicación. El resultado fue una evolución constante del diseño, donde muchas decisiones fueron refinadas a partir de la experiencia obtenida durante el desarrollo y de las nuevas necesidades que surgían a medida que el proyecto crecía.',
                ],
            },
            result: {
                eyebrow: 'Resultado',
                title: 'Diseño final',
                sections: [
                    {
                        title: 'Meta del calendario',
                        paragraphs: [
                            'El calendario fue diseñado para centralizar eventos, novedades y recordatorios dentro de una única interfaz clara y fácil de utilizar. Uno de los principales objetivos fue mantener una experiencia fluida entre los distintos componentes de la pantalla, integrando transiciones, paneles y animaciones que acompañaran las acciones del usuario de forma natural.',
                            'A medida que el diseño evolucionó, se buscó que cada elemento tuviera una función específica y que la información más importante permaneciera siempre accesible. El resultado fue una interfaz más dinámica y conectada, donde la navegación entre fechas, categorías y detalles se integra de manera coherente dentro de una misma experiencia visual.',
                        ],
                    },
                    {
                        title: 'Meta del mapa',
                        paragraphs: [
                            'La pantalla de mapa fue diseñada para concentrar las principales funcionalidades geográficas de la aplicación en una experiencia simple e intuitiva. El objetivo fue permitir que los usuarios visualicen contenedores, exploren distintas zonas de la ciudad, realicen búsquedas y obtengan rutas sin perder el contexto del mapa ni interrumpir su navegación.',
                            'Durante el desarrollo se trabajó especialmente en la integración entre paneles, controles y movimientos de cámara, buscando que las transiciones y animaciones acompañaran cada acción de forma natural. El resultado fue una interfaz dinámica donde la información, las zonas y las herramientas de navegación se encuentran conectadas dentro de una experiencia fluida y consistente.',
                        ],
                    },
                    {
                        title: 'Meta de la configuración y perfil',
                        paragraphs: [
                            'La sección de configuración fue diseñada para centralizar la información personal del usuario y permitir la gestión de sus datos dentro de la aplicación. El objetivo principal fue ofrecer una interfaz clara y accesible donde las acciones más importantes, como la visualización y edición del perfil, pudieran realizarse de forma sencilla y directa.',
                            'Durante el desarrollo se buscó mantener una organización visual consistente con el resto de la aplicación, priorizando la legibilidad de la información y una navegación intuitiva entre las distintas opciones. El resultado fue una experiencia enfocada en la administración de datos personales, integrada de manera natural con el diseño general de EcoUshuaia.',
                        ],
                    },
                ],
            },
            learning: {
                eyebrow: 'Aprendizaje',
                title: 'Qué aprendí',
                paragraphs: [
                    'El desarrollo de EcoUshuaia representó una experiencia de aprendizaje integral que abarcó mucho más que la implementación de una aplicación móvil. A lo largo del proyecto realicé todas las etapas del ciclo de desarrollo, desde el relevamiento de requisitos y la definición de casos de uso hasta el diseño de la base de datos, la arquitectura del sistema, el desarrollo del backend y la construcción de la aplicación móvil.',
                    'Uno de los principales aprendizajes fue comprender que cada decisión dentro de un proyecto de software impacta en múltiples áreas del sistema. Muchas ideas y soluciones evolucionaron con el tiempo, obligándome a revisar diseños previos, replantear estructuras de datos y adaptar funcionalidades a medida que surgían nuevas necesidades y conocimientos.',
                    'En el aspecto técnico, el proyecto me permitió profundizar en desarrollo mobile con Flutter, arquitectura de aplicaciones, diseño de interfaces, experiencia de usuario, integración con APIs REST, bases de datos relacionales y sistemas geoespaciales. También aprendí la importancia de mantener una arquitectura organizada y escalable que facilite la evolución del proyecto a largo plazo.',
                    'Más allá de las tecnologías utilizadas, EcoUshuaia me enseñó a abordar el desarrollo de software como un proceso iterativo de análisis, diseño, implementación y mejora continua, donde el aprendizaje surge tanto de los aciertos como de las decisiones que deben revisarse y perfeccionarse durante el camino. El resultado final no solo fue una aplicación funcional, sino también una experiencia que fortaleció mi capacidad para planificar, diseñar y desarrollar soluciones de software de manera integral.',
                ],
            },
            stack: {
                eyebrow: 'Stack',
                title: 'Tecnologías',
                paragraphs: [
                    'El desarrollo de EcoUshuaia me permitió explorar y aplicar distintas tecnologías a lo largo de todas las etapas de un proyecto de software. La selección de herramientas no se basó únicamente en aprender nuevas tecnologías, sino en comprender cómo cada una podía aportar una solución concreta a los desafíos planteados por la aplicación.',
                    'Durante el proceso experimenté múltiples iteraciones y ajustes, tanto en el diseño como en la arquitectura y la implementación. Muchas decisiones técnicas fueron evolucionando a medida que el proyecto crecía, permitiéndome evaluar ventajas, limitaciones y formas de integración entre las distintas herramientas utilizadas.',
                    'Esta experiencia me ayudó a desarrollar una visión más amplia sobre el desarrollo de software, entendiendo que las tecnologías no funcionan de manera aislada, sino como parte de un ecosistema donde el frontend, el backend, la base de datos, la experiencia de usuario y la arquitectura deben trabajar de forma coordinada para construir una solución consistente y escalable.',
                    'Más allá del dominio técnico adquirido en cada herramienta, uno de los principales aprendizajes fue la capacidad de analizar problemas, investigar alternativas, tomar decisiones de diseño e integrar diferentes tecnologías para alcanzar los objetivos funcionales y técnicos del proyecto.',
                ],
                cards: [
                    {
                        title: 'Flutter',
                        body: 'Tecnología principal utilizada para el desarrollo de la aplicación móvil. Me permitió profundizar en interfaces, navegación, manejo de estado, consumo de APIs y construcción de experiencias multiplataforma.',
                    },
                    {
                        title: 'Django REST Framework',
                        body: 'Framework utilizado para desarrollar la API del proyecto. Me permitió trabajar con autenticación, validaciones, lógica de negocio y comunicación entre cliente y servidor.',
                    },
                    {
                        title: 'PostgreSQL/PostGIS',
                        body: 'Base de datos utilizada para modelar y almacenar la información del sistema, incorporando además capacidades geoespaciales para gestionar ubicaciones y zonas dentro de la aplicación.',
                    },
                    {
                        title: 'Mapbox',
                        body: 'Herramienta utilizada para integrar mapas, búsqueda geográfica y navegación. Me permitió trabajar con servicios geográficos e integración entre Flutter y código nativo.',
                    },
                    {
                        title: 'Otras tecnologías',
                        body: 'También utilicé JWT, Git, herramientas de diseño y conceptos de arquitectura de software para complementar el desarrollo y organización del proyecto.',
                    },
                ],
            },
        },
        detailFood: {
            title: 'Detalle de la app próximamente...',
        },
    },
    en: {
        meta: {
            lang: 'en',
            portfolioTitle: 'Cristian Maidana Portfolio',
        },
        language: {
            label: 'Change language',
            selfLabel: 'English',
            enLabel: 'Spanish',
        },
        nav: {
            home: 'Home',
            projects: 'Projects',
            about: 'About me',
            contact: 'Contact',
            resume: 'Resume',
        },
        home: {
            eyebrow: 'JUNIOR DEVELOPER. SYSTEMS STUDENT',
            title: "Hi, I'm Cristian",
            description:
                'Junior developer with experience in frontend, backend, architecture, and visual design. Passionate about building modern digital experiences with a premium aesthetic and dynamic motion.',
            actions: {
                projects: 'View projects',
                contact: 'Contact me',
            },
            code: {
                focus: 'Modern interfaces',
                status: 'Open to work',
            },
            stats: [
                { value: '4th', label: 'University year' },
                { value: 'Full', label: 'Academic stack' },
                { value: 'UI', label: 'Mobile' },
            ],
        },
        projects: {
            eyebrow: 'Featured projects',
            title: 'Academic projects developed like real products.',
            eco: {
                kicker: 'MOBILE APP',
                name: 'EcoUshuaia',
                description: [
                    'Mobile app focused on urban recycling and environmental management, built with Flutter.',
                    'The app lets users view eco-friendly containers on interactive maps, check recycling points, and access news and events through a modern mobile-oriented interface.',
                    'I built the app architecture, UI, screen navigation, REST API integration, and map and geolocation systems.',
                ],
                links: {
                    github: 'GitHub',
                    details: 'Details',
                },
                images: {
                    calendar: 'Calendar',
                    map: 'Map',
                    settings: 'Settings',
                },
            },
            food: {
                kicker: 'MOBILE APP',
                name: 'Foods',
                description: [
                    'Mobile app focused on browsing and understanding food products.',
                    'The app lets users explore multiple food categories, browse products, review their characteristics and nutritional level, and add new items using a native camera.',
                    'I built the screen navigation, integrated the food API, and connected the built-in camera flow to analyze new products.',
                ],
                links: {
                    github: 'GitHub',
                    details: 'Details',
                },
                images: {
                    home: 'Home',
                    favorites: 'Favorites',
                },
            },
        },
        about: {
            eyebrow: 'Profile',
            title: 'Technical foundation, visual judgment, and room to grow.',
            profileName: 'Cristian Maidana',
            profileParagraphs: [
                "Advanced Bachelor's degree student in Information Systems focused on building high-quality software.",
                'I am interested in scalable architecture design, frontend-backend integration, and relational databases.',
            ],
            technologyTitle: 'Technologies',
            technologyParagraph:
                'Throughout my university studies I learned design patterns with Java, data modeling and normalization with PostgreSQL, concurrency, data structures, recursion with Pascal, and how to choose and implement the right technologies for the right problems.',
        },
        contact: {
            eyebrow: 'Contact',
            title: "Let's build something together",
            fields: {
                name: {
                    label: 'Name',
                    placeholder: 'Your name',
                },
                email: {
                    label: 'Email',
                    placeholder: 'Your email',
                },
                message: {
                    label: 'Message',
                    placeholder: 'Your message',
                },
            },
            submit: 'Send message',
        },
        detailLayout: {
            back: 'Back',
            backAria: 'Go back',
        },
        detailEco: {
            imageAlts: [
                'Calendar screen',
                'Edit data screen',
                'Map screen',
                'News detail screen',
                'Filter screen',
                'Settings screen',
                'Sign up screen',
            ],
            intro: {
                eyebrow: 'Mobile project',
                title: 'EcoUshuaia',
                lead: 'EcoUshuaia is a system designed to improve the location, consultation, and disposal of urban waste in the city of Ushuaia through a mobile application.',
            },
            context: {
                eyebrow: 'Context',
                title: 'Story',
                paragraphs: [
                    'I built EcoUshuaia to solve a concrete local need: make container locations easier to find, improve waste disposal, and centralize useful information in a mobile application.',
                    'This project allowed me to go deeper into modular Flutter architecture, REST API consumption, JWT authentication, relational and geospatial modeling with PostgreSQL/PostGIS, and integration between Flutter and native iOS code in Swift for maps, search, and navigation.',
                ],
            },
            process: {
                eyebrow: 'Process',
                title: 'Project stages',
                steps: [
                    {
                        title: 'Design',
                        body: 'This was my first experience designing a complete application from scratch. At this stage I learned how to turn a broad idea into screens, user flows, and concrete functional decisions, understanding that design is not only visual but also about organizing how people understand and use the system.',
                    },
                    {
                        title: 'Architecture',
                        body: 'At this stage I worked on structuring the application internally so it could grow in an organized way. I learned how to separate responsibilities, organize the project by modules and layers, and adapt the architecture as the real complexity of the app increased.',
                    },
                    {
                        title: 'Frontend',
                        body: 'Here I built the visible and interactive side of the application with Flutter and Dart. I learned how to create screens, components, navigation, and state handling, connecting the interface to the real behavior of the system in a clear and maintainable way.',
                    },
                    {
                        title: 'Backend',
                        body: 'At this stage I focused on server logic, the API, validations, and JWT authentication using Django REST Framework. I learned how to organize and expose the information the app needs, understanding the backend as a core layer for secure and consistent system behavior.',
                    },
                    {
                        title: 'Database',
                        body: 'I worked on modeling the system information with PostgreSQL and PostGIS, defining tables, relationships, and geospatial data. I learned how to structure the information better, revise and update the model over time, and adjust the database so it represented the real problem more solidly.',
                    },
                    {
                        title: 'Extras',
                        body: 'An important part of the project was integrating Mapbox for maps, search, and navigation. This let me go deeper into geographic services and into the integration between Flutter and native iOS code in Swift, while also strengthening my knowledge of REST APIs, secure authentication, and geospatial data.',
                    },
                ],
            },
            firstSteps: {
                eyebrow: 'Project kickoff',
                title: 'What were the first steps like?',
                requirements: {
                    title: 'Finding requirements',
                    paragraph:
                        'Requirements were identified through analysis of the problem to solve and research into similar applications and services related to recycling, environmental management, and geographic navigation. Based on that research, the main features, expected user flows, and needs of different user types were defined, including both features that were ultimately implemented and others that stayed outside the initial scope.',
                    imageAlt: 'Requirements document',
                    experienceTitle: 'What I learned',
                    experience: [
                        'Analyzing and prioritizing needs.',
                        'Researching similar applications.',
                        'Defining the project scope.',
                        'Writing functional and non-functional requirements.',
                    ],
                },
                useCases: {
                    title: 'Use cases',
                    paragraph:
                        'Once the requirements were defined, I created the use cases to organize and represent the different expected interactions inside the application. This stage helped validate the functional scope of the system and served as a foundation for later design and development decisions.',
                    imageAlt: 'Use case diagram',
                    experienceTitle: 'What I learned',
                    experience: [
                        'Translating requirements into concrete features.',
                        'Identifying actors and responsibilities.',
                        'Modeling interactions between users and the system.',
                        'Defining the application functional scope.',
                    ],
                },
                database: {
                    title: 'Database diagram',
                    paragraph:
                        'The relational database for the system was designed by defining the entities, attributes, and relationships needed to support the application features, ensuring a consistent and scalable organization of information.',
                    imageAlt: 'Database diagram',
                    experienceTitle: 'What I learned',
                    experience: [
                        'Building the database was an iterative process that evolved together with the project. At first I defined a simple model with the main entities such as users, zones, calendars, sensors, containers, waste, and maps. As the analysis progressed and the system requirements became clearer, new relationships, constraints, and entities were needed to represent the application correctly.',
                        'This constant refinement helped me understand the importance of having a solid foundation from the earliest design stages while also incorporating improvements derived from what I learned during my degree and from the real needs identified during the development of EcoUshuaia. It also reinforced the idea that database design is an evolving task where each iteration contributes to a more consistent, scalable structure aligned with the system goals.',
                        'One of the main lessons was understanding that database design is not an isolated or final stage. It evolves alongside the rest of the system. Many decisions emerged or were adjusted during feature development, backend implementation, and the definition of new interactions between users and the app.',
                    ],
                },
            },
            design: {
                eyebrow: 'UI / UX',
                title: 'Early design stages',
                screens: ['Login', 'Signup', 'Home', 'Calendar', 'Map', 'Settings'],
                paragraphs: [
                    'Designing EcoUshuaia was my first full approach to building a complete user experience for a mobile app. During this stage I aimed to create a simple, intuitive, and visually consistent interface, using modern mobile apps as references and adapting their design patterns to the specific needs of the project.',
                    'At first the focus was mostly on the individual look of each screen and the distribution of its elements. As development moved forward, I understood that design is not limited to visual appearance, but also to how users interact with the app and how screens, components, and features connect with one another.',
                    'This process helped me incorporate concepts related to visual hierarchy, user experience, navigation, animations, and transitions, aiming for every interaction to feel natural and coherent inside the application. The result was a constant evolution of the design, where many decisions were refined based on development experience and the new needs that appeared as the project grew.',
                ],
            },
            result: {
                eyebrow: 'Result',
                title: 'Final design',
                sections: [
                    {
                        title: 'Calendar goal',
                        paragraphs: [
                            'The calendar was designed to centralize events, news, and reminders inside a single interface that is clear and easy to use. One of the main goals was to maintain a fluid experience across different screen components, integrating transitions, panels, and animations that naturally support user actions.',
                            'As the design evolved, the aim was for each element to have a specific purpose while the most important information always remained accessible. The result was a more dynamic and connected interface where navigation between dates, categories, and details fits coherently inside one visual experience.',
                        ],
                    },
                    {
                        title: 'Map goal',
                        paragraphs: [
                            'The map screen was designed to bring together the main geographic features of the application in a simple and intuitive experience. The goal was to let users view containers, explore different city areas, perform searches, and get routes without losing the map context or interrupting navigation.',
                            'During development I worked especially on the integration between panels, controls, and camera movements, aiming for transitions and animations to support every action naturally. The result was a dynamic interface where information, areas, and navigation tools are connected within a fluid and consistent experience.',
                        ],
                    },
                    {
                        title: 'Settings and profile goal',
                        paragraphs: [
                            'The settings section was designed to centralize the user personal information and allow management of their data inside the app. The main goal was to offer a clear and accessible interface where the most important actions, such as viewing and editing the profile, could be completed in a simple and direct way.',
                            'During development I aimed to keep a visual organization consistent with the rest of the app, prioritizing information readability and intuitive navigation across the different options. The result was an experience focused on personal data management, naturally integrated with EcoUshuaia overall design.',
                        ],
                    },
                ],
            },
            learning: {
                eyebrow: 'Learning',
                title: 'What I learned',
                paragraphs: [
                    'Developing EcoUshuaia was a comprehensive learning experience that went far beyond implementing a mobile application. Throughout the project I worked through every stage of the development cycle, from gathering requirements and defining use cases to database design, system architecture, backend development, and building the mobile app itself.',
                    'One of the main lessons was understanding that every decision inside a software project affects multiple areas of the system. Many ideas and solutions evolved over time, forcing me to revisit earlier designs, rethink data structures, and adapt features as new needs and knowledge emerged.',
                    'On the technical side, the project allowed me to go deeper into mobile development with Flutter, application architecture, interface design, user experience, REST API integration, relational databases, and geospatial systems. I also learned the importance of maintaining an organized and scalable architecture that makes long-term evolution easier.',
                    'Beyond the technologies involved, EcoUshuaia taught me to approach software development as an iterative process of analysis, design, implementation, and continuous improvement, where learning comes from both what works and from the decisions that must be reviewed and refined along the way. The final result was not only a functional application, but also an experience that strengthened my ability to plan, design, and build software solutions in a comprehensive way.',
                ],
            },
            stack: {
                eyebrow: 'Stack',
                title: 'Technologies',
                paragraphs: [
                    'Working on EcoUshuaia allowed me to explore and apply different technologies across every stage of a software project. Tool selection was not only about learning new technologies, but about understanding how each one could provide a concrete solution to the challenges raised by the application.',
                    'Throughout the process I went through multiple iterations and adjustments in design, architecture, and implementation. Many technical decisions evolved as the project grew, allowing me to evaluate strengths, limitations, and integration patterns among the different tools involved.',
                    'This experience helped me develop a broader view of software development, understanding that technologies do not work in isolation, but as part of an ecosystem where frontend, backend, database, user experience, and architecture must work together to build a consistent and scalable solution.',
                    'Beyond the technical knowledge gained with each tool, one of the most important learnings was the ability to analyze problems, research alternatives, make design decisions, and integrate different technologies to achieve the project functional and technical goals.',
                ],
                cards: [
                    {
                        title: 'Flutter',
                        body: 'Main technology used to build the mobile application. It allowed me to go deeper into interfaces, navigation, state handling, API consumption, and cross-platform experience building.',
                    },
                    {
                        title: 'Django REST Framework',
                        body: 'Framework used to build the project API. It let me work with authentication, validations, business logic, and communication between client and server.',
                    },
                    {
                        title: 'PostgreSQL/PostGIS',
                        body: 'Database used to model and store the system information, also adding geospatial capabilities to manage locations and areas inside the application.',
                    },
                    {
                        title: 'Mapbox',
                        body: 'Tool used to integrate maps, geographic search, and navigation. It allowed me to work with geographic services and integration between Flutter and native code.',
                    },
                    {
                        title: 'Other technologies',
                        body: 'I also used JWT, Git, design tools, and software architecture concepts to support the development and organization of the project.',
                    },
                ],
            },
        },
        detailFood: {
            title: 'App detail coming soon...',
        },
    },
} as const satisfies Record<Locale, unknown>;

export type UIStrings = (typeof ui)[Locale];
