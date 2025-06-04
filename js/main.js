document.addEventListener('DOMContentLoaded', function() {
    // Имитация загрузки (в реальном проекте используйте window.onload)
    setTimeout(function() {
        const loader = document.querySelector('.loader');
        const content = document.querySelector('.content');
        
        // Плавно скрываем лоадер
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        
        // Показываем контент
        content.classList.remove('hidden');
        content.classList.add('visible');
        
        // Удаляем лоадер из DOM после анимации
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 1200); // Время задержки для демонстрации
});


// Магнитный курсор
const cursor = document.createElement('div');
cursor.classList.add('magnetic-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

document.querySelectorAll('a, button, .portfolio-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
    });
});

// Переводчик
document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('languageToggle');
    const translations = {
        'ru': {
            'subtitle': 'Разносторонний разработчик',
            'programsTitle': 'Программы',
            'ideTitle': 'Интегрированные среды разработки (IDE):',
            'utilsTitle': 'Прочие утилиты (OU):',
            'languagesTitle': 'Языки',
            'oftenUsedTitle': 'Часто используемые:',
            'learningTitle': 'Активно изучаемые:',
            'aboutTitle': 'Обо мне',
            'ageTitle': 'Возраст:',
            'ageText': '14 лет',
            'genderTitle': 'Пол:',
            'genderText': 'Мужской',
            'countryTitle': 'Страна:',
            'countryText': 'Россия',
            'spokenLanguagesTitle': 'Языки:',
            'spokenLanguagesText': 'Русский, Английский',
            'projectsTitle': 'Проекты',
            'infoTitle': 'Информация',
            'infoText': 'В ближайшем будущем я планирую значительно расширить портфолио. В планах — реализация как небольших вспомогательных проектов, так и, возможно, более масштабных инициатив',
            'contactsTitle': 'Контакты',
            'discordTitle': 'Discord:',
            'telegramTitle': 'Telegram:'
        },
        'en': {
            'subtitle': 'Versatile Developer',
            'programsTitle': 'Programs',
            'ideTitle': 'IDE:',
            'utilsTitle': 'Other Utilities:',
            'languagesTitle': 'Languages',
            'oftenUsedTitle': 'Frequently used:',
            'learningTitle': 'Actively learning:',
            'aboutTitle': 'About me',
            'ageTitle': 'Age:',
            'ageText': '14 years',
            'genderTitle': 'Gender:',
            'genderText': 'Male',
            'countryTitle': 'Country:',
            'countryText': 'Russia',
            'spokenLanguagesTitle': 'Language:',
            'spokenLanguagesText': 'Russian, English',
            'projectsTitle': 'Projects',
            'infoTitle': 'Information',
            'infoText': 'In the near future, I plan to significantly expand my portfolio. Plans include both small auxiliary projects and, possibly, larger initiatives',
            'contactsTitle': 'Contacts',
            'discordTitle': 'Discord:',
            'telegramTitle': 'Telegram:'
        }
    };

    let currentLanguage = 'ru';

    languageToggle.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
        document.getElementById('htmlLang').lang = currentLanguage;
        languageToggle.textContent = currentLanguage === 'ru' ? 'EN' : 'RU';
        
        for (const [key, value] of Object.entries(translations[currentLanguage])) {
            const element = document.getElementById(key);
            if (element) {
                if (key.endsWith('Text') && element.tagName === 'P') {
                    element.textContent = value;
                } else {
                    element.textContent = value;
                }
            }
        }
    });

    if (window.location.hash === '#en') {
        languageToggle.click();
    }
});
