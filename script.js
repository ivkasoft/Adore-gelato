const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const data = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            message: form.message.value
        };

        try {

            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbx9jGrCmHC1JZ967vzp6siHb5_K_PxX8NdFL7AQWG1TvODxNRVhrgc3B5EQdnyCQYoy/exec",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }
            );

            if (response.ok) {
                alert("Съобщението е изпратено успешно!");
                form.reset();
            } else {
                alert("Грешка при изпращане.");
            }

        } catch (error) {
            console.error(error);
            alert("Грешка при връзката.");
        }

    });

}

const translations = {
            bg: {
                "nav-about": "За Нас", "nav-flavors": "Вкусове", "nav-coffee": "Кафе", "nav-milkshakes": "Шейкове", 
                "nav-partnership": "Партньорство", "nav-locations": "Локации", "hero-p": "Преживяване Среща Емоция",
                "about-h1": "А кои сме ние?", "about-p1": "Ние сме малък екип с голям опит в производството и продажбата на италианско джелато. Нашата мечта е да накараме хората да се усмихват, след всяка малка хапка от нашето джелато.",
                "about-p2": "Наричаме го Adore gelato, което означава <q>обожавам сладолед</q>. Сервираме щастието във фунийка, поднесена с много любов и грижа.", "flav-h2": "Нашите Вкусове",
                "f1-h": "Signature Cioccolato", "f1-p": "Интензивен шоколадов вкус", "f2-h": "Frutti di Bosco", "f2-p": "Свежест от горски плодове",
                "f3-h": "Classic Vanilla", "f3-p": "Истинска бурбонска ванилия", "f4-h": "Pistachio di Bronte", "f4-p": "Премиум шамфъстък",
                "flav-btn": "Виж всички вкусове", "coff-h2": "Кафе & Афогато", "coff-p": "Завършете вашето джелато преживяване с чаша перфектно приготвено италианско кафе. Ние подбираме най-добрите зърна, за да гарантираме аромат и плътност във всяка чаша.", "coff-p2": "Или изберете Афогато, което на италиански означава \"удавен\", улавя същността на този десерт. Това италианско удоволствие, породено от комбинацията на еспресо и сладолед, e любимо лакомство на хора по целия свят.",
                "milk-h2": "Млечни шейкове", "milk-p": "Насладете се на гъсти и кремообразни млечни шейкове, приготвени с нашето занаятчийско джелато. Изберете любимия си вкус и му се насладете по нов начин.",
                "part-h2": "Партньорство", "part-p": "Желаете ли да предложите автентично италианско джелато във вашия обект? Ние предлагаме B2B решения за ресторанти, хотели и кафенета.",
                "part-btn": "Станете наш партньор", "loc-h2": "Нашите обекти","contact-h2": "Контакти", "cont-h2": "Свържете се с нас", "cont-send": "Изпрати",

                "page-h1": "Нашето Джелато", "phil-h2": "Философия на качеството",
                "phil-p": "Богатият и наситен вкус на нашето джелато се базира на качественото прясно мляко и първокласна животинска сметана, които влагаме в производството му. Нашите майстори знаят как да ги обработят, за да получат добре познатия му вид с най-изявени вкусови качества.",
                "card1-h": "Автентичност", "card1-p": "Истинско италианско джелато, произведено по оригинални рецепти директно от сърцето на Италия.",
                "card2-h": "Натуралност", "card2-p": "Пълномаслено мляко, животинска сметана, пресни плодове и подбрани ядки. Без изкуствени оцветители.",
                "card3-h": "Разнообразие", "card3-p": "През годината произвеждаме повече от 30 вида джелато и сорбети, за да задоволим и най-взискателните небца.",
                "menu-pre": "Изберете своя любим", "menu-h2": "Меню Вкусове",
                "cat1-h": "Класически", "cat2-h": "Специални", "cat3-h": "Сезонни",
                "b2b-h2": "Гъвкави партньорски условия", "b2b-p": "Специални предложения за хотели, ресторанти и събития.",
                "b2b-btn": "Свържете се с нас",
                "cat1-1": "Сметана", "cat1-2": "Ванилия", "cat1-3": "Шоколад", "cat1-6": "Страчатела",
                "cat2-1": "Тирамису", "cat2-2": "Пистачио", "cat2-6": "Маскарпоне с кайсии",
                "cat3-1": "Плодови сорбета", "cat3-2": "Шоколад с ром", "cat3-4": "Бял шоколад с малини"
            },
            en: {
                "nav-about": "About Us", "nav-flavors": "Flavors", "nav-coffee": "Coffee", "nav-milkshakes": "Milkshakes", 
                "nav-partnership": "Partnership", "nav-locations": "Locations", "hero-p": "Experience Meets Emotion",
                "about-h1": "Who are we?", "about-p1": "We are a small team with a lot of experience in the production and sale of Italian gelato. Our dream is to make people smile after every little bite of our gelato.",
                "about-p2": "We call it Adore gelato, which means \"I adore ice cream.\" We serve happiness in a cone, presented with lots of love and care.", "flav-h2": "Our Flavors",
                "f1-h": "Signature Cioccolato", "f1-p": "Intense chocolate experience", "f2-h": "Wild Berry", "f2-p": "Freshness of forest fruits",
                "f3-h": "Classic Vanilla", "f3-p": "Real Bourbon vanilla", "f4-h": "Pistachio di Bronte", "f4-p": "Premium Sicilian pistachio",
                "flav-btn": "View all flavors", "coff-h2": "Coffee & Affogato", "coff-p": "Complete your gelato experience with a cup of perfectly brewed Italian coffee. We select the best beans to guarantee flavor and density in every cup.", "coff-p2": "Or opt for the Affogato, which means \"drowned\" in Italian, and captures the essence of this dessert. This Italian delight, created by combining espresso and ice cream, is a favorite treat for people all over the world.", "milk-h2": "Milkshakes", "milk-p": "Enjoy thick and creamy milkshakes made with our artisanal gelato. Choose your favorite flavor and enjoy it in a new way.",
                "part-h2": "Partnership", "part-p": "Do you want to offer authentic Italian gelato in your establishment? We offer B2B solutions for restaurants, hotels and cafes.",
                "part-btn": "Become a partner", "loc-h2": "Our Locations","contact-h2": "Contacts", "cont-h2": "Contact Us", "cont-send": "Send",
		"page-h1": "Our Gelato", "phil-h2": "Philosophy of Quality",
                "phil-p": "The rich and rich taste of our gelato is based on the quality fresh milk and first-class animal cream that we use in its production. Our craftsmen know how to process them to obtain its well-known appearance with the most prominent taste qualities.",
                "card1-h": "Authentic", "card1-p": "Real Italian gelato, made according to original recipes directly from the heart of Italy.",
                "card2-h": "Natural", "card2-p": "Whole milk, animal cream, fresh fruit and selected nuts. No artificial colors.",
                "card3-h": "Variety", "card3-p": "During the year, we produce more than 30 types of gelato and sorbets to satisfy even the most demanding palates.",
                "menu-pre": "Choose your favorite", "menu-h2": "Flavor Menu",
                "cat1-h": "Classic", "cat2-h": "Specialties", "cat3-h": "Seasonal",
                "b2b-h2": "B2B & Partnerships", "b2b-p": "Special offers for hotels, restaurants, and events.",
                "b2b-btn": "Contact Us",
                "cat1-1": "Cream", "cat1-2": "Vanilla", "cat1-3": "Chocolate", "cat1-6": "Stracciatella",
                "cat2-1": "Tiramisu", "cat2-2": "Pistachio", "cat2-6": "Mascarpone & Apricot",
                "cat3-1": "Fruit Sorbets", "cat3-2": "Chocolate & Rum", "cat3-4": "White Chocolate & Raspberry"
            }
        };

        function changeLang(lang, btn) {
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[lang][key]) el.innerText = translations[lang][key];
            });
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.documentElement.lang = lang;
        }

        // Mobile Menu Toggle
        const menuToggle = document.getElementById('mobile-menu');
        const navMenu = document.getElementById('nav-menu');
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => navMenu.classList.remove('active'));
        });

        function slide(direction) {
            const slider = document.getElementById('flavorSlider');
            const scrollAmount = 370;
            slider.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
