// Game variables
let soundEnabled = false;
let currentSentence = null;

// Known words and their emojis
const knownWords = {
    // Female names
    'תמר': { emoji: '👧', niqqud: 'תַּמָּר' },
    'יעל': { emoji: '👧', niqqud: 'יַעֵל' },
    'מעין': { emoji: '👧', niqqud: 'מַעְיָן' },
    'עדי': { emoji: '👧', niqqud: 'עֲדִי' },
    // Male names
    'אליה': { emoji: '👦', niqqud: 'אֵלִיָּה' },
    // Family
    'סבא': { emoji: '👴', niqqud: 'סַבָּא' },
    'סבתא': { emoji: '👵', niqqud: 'סַבְתָּא' },
    'אבא': { emoji: '👨', niqqud: 'אַבָּא' },
    'אמא': { emoji: '👩', niqqud: 'אִמָּא' },
    // Combined names
    'אמא יפעת': { emoji: '👩', niqqud: 'אִמָּא יִפְעַת' },
    'אבא אורי': { emoji: '👨', niqqud: 'אַבָּא אוּרִי' }
};

// Words that need explanation (with emojis)
const explainedWords = {
    'עוגה': { emoji: '🍰', niqqud: 'עוּגָה' },
    'גן': { emoji: '🏫', niqqud: 'גַּן' },
    'בית': { emoji: '🏠', niqqud: 'בַּיִת' },
    'חלון': { emoji: '🪟', niqqud: 'חַלּוֹן' },
    'דלת': { emoji: '🚪', niqqud: 'דֶּלֶת' },
    'כיסא': { emoji: '🪑', niqqud: 'כִּסֵּא' },
    'תיק': { emoji: '🎒', niqqud: 'תִּיק' },
    'ספר': { emoji: '📚', niqqud: 'סֵפֶר' },
    'עפרון': { emoji: '✏️', niqqud: 'עִפָּרוֹן' },
    'עץ': { emoji: '🌳', niqqud: 'עֵץ' },
    'פרח': { emoji: '🌸', niqqud: 'פֶּרַח' },
    'שמש': { emoji: '☀️', niqqud: 'שֶׁמֶשׁ' },
    'ירח': { emoji: '🌙', niqqud: 'יָרֵחַ' },
    'כוכב': { emoji: '⭐', niqqud: 'כּוֹכָב' },
    'מים': { emoji: '💧', niqqud: 'מַיִם' },
    'אדמה': { emoji: '🌱', niqqud: 'אֲדָמָה' },
    'חול': { emoji: '🏖️', niqqud: 'חוֹל' },
    'אבן': { emoji: '🪨', niqqud: 'אֶבֶן' },
    'ענן': { emoji: '☁️', niqqud: 'עָנָן' },
    'כלב': { emoji: '🐕', niqqud: 'כֶּלֶב' },
    'חתול': { emoji: '🐈', niqqud: 'חָתוּל' },
    'ציפור': { emoji: '🐦', niqqud: 'צִפּוֹר' },
    'דג': { emoji: '🐠', niqqud: 'דָּג' },
    'פרפר': { emoji: '🦋', niqqud: 'פַּרְפַּר' },
    'נמלה': { emoji: '🐜', niqqud: 'נְמָלָה' },
    'דבורה': { emoji: '🐝', niqqud: 'דְּבוֹרָה' },
    'תפוח': { emoji: '🍎', niqqud: 'תַּפּוּחַ' },
    'בננה': { emoji: '🍌', niqqud: 'בָּנָנָה' },
    'ענבים': { emoji: '🍇', niqqud: 'עֲנָבִים' },
    'תות': { emoji: '🍓', niqqud: 'תּוּת' },
    'אריה': { emoji: '🦁', niqqud: 'אַרְיֵה' },
    'פיל': { emoji: '🐘', niqqud: 'פִּיל' },
    'גירף': { emoji: '🦒', niqqud: "גִּ'ירָף" },
    'קוף': { emoji: '🐒', niqqud: 'קוֹף' },
    'נחש': { emoji: '🐍', niqqud: 'נָחָשׁ' },
    'צב': { emoji: '🐢', niqqud: 'צָב' },
    'דינוזאור': { emoji: '🦖', niqqud: 'דִּינוֹזָאוּר' },
    'תה': { emoji: '🍵', niqqud: 'תֵּה' }
};

// Verbs with their niqqud
const verbs = {
    'הלך': { niqqud: 'הָלַךְ' },
    'הלכה': { niqqud: 'הָלְכָה' },
    'אכל': { niqqud: 'אָכַל' },
    'אכלה': { niqqud: 'אָכְלָה' },
    'קרא': { niqqud: 'קָרָא' },
    'קראה': { niqqud: 'קָרְאָה' },
    'כתב': { niqqud: 'כָּתַב' },
    'כתבה': { niqqud: 'כָּתְבָה' },
    'ישב': { niqqud: 'יָשַׁב' },
    'ישבה': { niqqud: 'יָשְׁבָה' },
    'פתח': { niqqud: 'פָּתַח' },
    'פתחה': { niqqud: 'פָּתְחָה' },
    'סגר': { niqqud: 'סָגַר' },
    'סגרה': { niqqud: 'סָגְרָה' },
    'הניח': { niqqud: 'הִנִּיחַ' },
    'הניחה': { niqqud: 'הִנִּיחָה' },
    'ראה': { niqqud: 'רָאָה' },
    'ראתה': { niqqud: 'רָאֲתָה' },
    'נגע': { niqqud: 'נָגַע' },
    'נגעה': { niqqud: 'נָגְעָה' },
    'הסתכל': { niqqud: 'הִסְתַּכֵּל' },
    'הסתכלה': { niqqud: 'הִסְתַּכְּלָה' },
    'ספר': { niqqud: 'סָפַר' }, // As a verb (to count)
    'ספרה': { niqqud: 'סָפְרָה' }, // As a verb (to count)
    'שתה': { niqqud: 'שָׁתָה' },
    'שתתה': { niqqud: 'שָׁתְתָה' },
    'שיחק': { niqqud: 'שִׂחֵק' },
    'שיחקה': { niqqud: 'שִׂחֲקָה' },
    'מצא': { niqqud: 'מָצָא' },
    'מצאה': { niqqud: 'מָצְאָה' },
    'ליטף': { niqqud: 'לִטֵּף' },
    'ליטפה': { niqqud: 'לִטְּפָה' },
    'האכיל': { niqqud: 'הֶאֱכִיל' },
    'האכילה': { niqqud: 'הֶאֱכִילָה' }
};

// Prepositions with their niqqud
const prepositions = {
    'את': { niqqud: 'אֶת' },
    'על': { niqqud: 'עַל' },
    'ב': { niqqud: 'בְּ' },
    'ל': { niqqud: 'לְ' },
    'מ': { niqqud: 'מִ' },
    'מן': { niqqud: 'מִן' },
    'כמו': { niqqud: 'כְּמוֹ' },
    'עד': { niqqud: 'עַד' },
    'עם': { niqqud: 'עִם' },
    'בין': { niqqud: 'בֵּין' },
    'מתחת': { niqqud: 'מִתַּחַת' },
    'מעל': { niqqud: 'מֵעַל' },
    'ליד': { niqqud: 'לְיַד' },
    'מול': { niqqud: 'מוּל' },
    'בתוך': { niqqud: 'בְּתוֹךְ' },
    'מאחורי': { niqqud: 'מֵאֲחוֹרֵי' },
    'לפני': { niqqud: 'לִפְנֵי' },
    'אחרי': { niqqud: 'אַחֲרֵי' }
};

// Sentence templates
const sentenceTemplates = [
    // Female sentences
    '{name} הלכה לגן',
    '{name} אכלה עוגה',
    '{name} קראה ספר',
    '{name} כתבה בעפרון',
    '{name} ישבה על כיסא',
    '{name} פתחה את הדלת',
    '{name} סגרה את החלון',
    '{name} הניחה את התיק',
    '{name} ראתה פרח',
    '{name} נגעה בעץ',
    '{name} הסתכלה על השמש',
    '{name} ראתה את הירח',
    '{name} ספרה כוכבים',
    '{name} שתתה מים',
    '{name} נגעה באדמה',
    '{name} שיחקה בחול',
    '{name} מצאה אבן',
    '{name} ראתה ענן',
    '{name} ראתה את הכוכב',
    '{name} נגעה באבן',
    '{name} הסתכלה על הירח',
    '{name} שתתה מים',
    '{name} שיחקה באדמה',
    '{name} מצאה פרח',
    '{name} ראתה את הענן',
    '{name} ראתה כלב',
    '{name} ליטפה חתול',
    '{name} האכילה ציפור',
    '{name} ראתה דג',
    '{name} ראתה פרפר',
    '{name} הסתכלה על נמלה',
    '{name} ראתה דבורה',
    '{name} אכלה תפוח',
    '{name} אכלה בננה',
    '{name} אכלה ענבים',
    '{name} אכלה תות',
    '{name} ראתה אריה',
    '{name} ראתה פיל',
    '{name} ראתה גירף',
    '{name} ראתה קוף',
    '{name} ראתה נחש',
    '{name} ראתה צב',
    '{name} ראתה ציפור',
    // Male sentences
    '{name} הלך לגן',
    '{name} אכל עוגה',
    '{name} קרא ספר',
    '{name} כתב בעפרון',
    '{name} ישב על כיסא',
    '{name} פתח את הדלת',
    '{name} סגר את החלון',
    '{name} הניח את התיק',
    '{name} ראה פרח',
    '{name} נגע בעץ',
    '{name} הסתכל על השמש',
    '{name} ראה את הירח',
    '{name} ספר כוכבים',
    '{name} שתה מים',
    '{name} נגע באדמה',
    '{name} שיחק בחול',
    '{name} מצא אבן',
    '{name} ראה ענן',
    '{name} ראה את הכוכב',
    '{name} נגע באבן',
    '{name} הסתכל על הירח',
    '{name} שתה מים',
    '{name} שיחק באדמה',
    '{name} מצא פרח',
    '{name} ראה את הענן',
    '{name} ראה כלב',
    '{name} ליטף חתול',
    '{name} האכיל ציפור',
    '{name} ראה דג',
    '{name} ראה פרפר',
    '{name} הסתכל על נמלה',
    '{name} ראה דבורה',
    '{name} אכל תפוח',
    '{name} אכל בננה',
    '{name} אכל ענבים',
    '{name} אכל תות',
    '{name} ראה אריה',
    '{name} ראה פיל',
    '{name} ראה גירף',
    '{name} ראה קוף',
    '{name} ראה נחש',
    '{name} ראה צב',
    '{name} ראה ציפור',
    // Family sentences
    'אמא הביאה עוגה',
    'אבא קנה ספר',
    'סבא סיפר סיפור',
    'סבתא אפתה עוגה',
    'אמא קנתה תיק',
    'אבא תיקן את החלון',
    'סבא שתה תה',
    'סבתא קראה ספר',
    'אמא ראתה פרח',
    'אבא שתה מים',
    'סבא ראה ענן',
    'סבתא ראתה כוכב',
    'אמא פתחה את הדלת',
    'אבא סגר את החלון',
    'סבא נגע בעץ',
    'סבתא הסתכלה על הירח',
    'אמא הניחה את התיק',
    'אבא כתב בעפרון',
    'סבא מצא אבן',
    'סבתא שיחקה בחול',
    'אמא ראתה כלב',
    'אבא ליטף חתול',
    'סבא האכיל ציפור',
    'סבתא ראתה דג',
    'אמא ראתה פרפר',
    'אבא הסתכל על נמלה',
    'סבא ראה דבורה',
    'סבתא אכלה תפוח',
    'אמא אכלה בננה',
    'אבא אכל ענבים',
    'סבא אכל תות',
    'סבתא ראתה אריה',
    'אמא ראתה פיל',
    'אבא ראה גירף',
    'סבא ראה קוף',
    'סבתא ראתה נחש',
    'אמא ראתה צב',
    'אבא ראה ציפור'
];

// DOM elements
const sentenceElement = document.getElementById('sentence');
const soundButton = document.getElementById('sound-toggle');
const nextButton = document.getElementById('next-sentence');
const imageModal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close-modal');

// Speech synthesis setup
const speech = new SpeechSynthesisUtterance();
speech.lang = 'he-IL';
speech.rate = 0.8;

// Initialize the game
function initGame() {
    setupEventListeners();
    generateNewSentence();
}

// Generate a new sentence
function generateNewSentence() {
    // Choose a random template
    const template = sentenceTemplates[Math.floor(Math.random() * sentenceTemplates.length)];
    
    // Get appropriate names based on the template
    let names;
    if (template.includes('הלכה') || template.includes('אכלה') || template.includes('קראה') || 
        template.includes('כתבה') || template.includes('ישבה') || template.includes('פתחה') || 
        template.includes('סגרה') || template.includes('הניחה') || template.includes('ראתה') || 
        template.includes('נגעה') || template.includes('הסתכלה') || template.includes('ספרה') || 
        template.includes('שתתה') || template.includes('שיחקה') || template.includes('מצאה')) {
        // Female names
        names = ['תמר', 'יעל', 'מעין', 'עדי'];
    } else if (template.includes('הלך') || template.includes('אכל') || template.includes('קרא') || 
               template.includes('כתב') || template.includes('ישב') || template.includes('פתח') || 
               template.includes('סגר') || template.includes('הניח') || template.includes('ראה') || 
               template.includes('נגע') || template.includes('הסתכל') || template.includes('ספר') || 
               template.includes('שתה') || template.includes('שיחק') || template.includes('מצא')) {
        // Male names
        names = ['אליה'];
    } else if (template.includes('אמא')) {
        names = ['אמא יפעת'];
    } else if (template.includes('אבא')) {
        names = ['אבא אורי'];
    } else if (template.includes('סבתא')) {
        names = ['סבתא'];
    } else if (template.includes('סבא')) {
        names = ['סבא'];
    }
    
    const randomName = names[Math.floor(Math.random() * names.length)];
    const sentence = template.replace('{name}', randomName);
    
    currentSentence = sentence;
    displaySentence(sentence);
}

// Function to get emoji for a word
function getEmojiForWord(word) {
    // Special case for 'ספר' - check if it's used as a noun (book) or verb (count)
    if (word === 'ספר') {
        // Check if the previous word is a verb (like 'קרא', 'קנה', etc.)
        const words = currentSentence.split(' ');
        const index = words.indexOf(word);
        if (index > 0) {
            const prevWord = words[index - 1];
            if (verbs[prevWord] || prevWord === 'קנה' || prevWord === 'הביא' || prevWord === 'קרא') {
                return explainedWords[word]?.emoji; // Return emoji for book
            }
        }
        return null; // Return null for verb (count)
    }
    
    // Don't show emoji for verbs or prepositions
    if (verbs[word] || prepositions[word]) {
        return null;
    }
    
    // Handle definite articles
    if (word.startsWith('ה')) {
        const baseWord = word.substring(1);
        const emoji = explainedWords[baseWord]?.emoji;
        if (emoji) {
            return 'ה' + emoji;
        }
    }
    
    // Handle prepositions
    if (word.startsWith('ב') || word.startsWith('ל')) {
        const baseWord = word.substring(1);
        const emoji = explainedWords[baseWord]?.emoji;
        if (emoji) {
            return word[0] + emoji;
        }
    }
    
    // Handle plural forms
    if (word.endsWith('ים') || word.endsWith('ות')) {
        const baseWord = word.substring(0, word.length - 2);
        const emoji = explainedWords[baseWord]?.emoji;
        if (emoji) {
            return emoji + emoji; // Show two emojis for plural
        }
    }
    
    // Regular case
    return explainedWords[word]?.emoji || knownWords[word]?.emoji;
}

// Function to get niqqud for a word
function getNiqqudForWord(word) {
    // Special case for 'ספר' - check if it's used as a noun (book) or verb (count)
    if (word === 'ספר') {
        // Check if the previous word is a verb (like 'קרא', 'קנה', etc.)
        const words = currentSentence.split(' ');
        const index = words.indexOf(word);
        if (index > 0) {
            const prevWord = words[index - 1];
            if (verbs[prevWord] || prevWord === 'קנה' || prevWord === 'הביא' || prevWord === 'קרא') {
                return explainedWords[word]?.niqqud; // Return niqqud for book
            }
        }
        return verbs[word]?.niqqud; // Return niqqud for count
    }
    
    // Check if it's a verb
    if (verbs[word]) {
        return verbs[word].niqqud;
    }
    
    // Check if it's a preposition
    if (prepositions[word]) {
        return prepositions[word].niqqud;
    }
    
    // Handle definite articles
    if (word.startsWith('ה')) {
        const baseWord = word.substring(1);
        const niqqud = explainedWords[baseWord]?.niqqud;
        if (niqqud) {
            return 'הַ' + niqqud;
        }
    }
    
    // Handle prepositions
    if (word.startsWith('ב') || word.startsWith('ל')) {
        const baseWord = word.substring(1);
        const niqqud = explainedWords[baseWord]?.niqqud;
        if (niqqud) {
            return word[0] + niqqud;
        }
    }
    
    // Handle plural forms
    if (word.endsWith('ים') || word.endsWith('ות')) {
        const baseWord = word.substring(0, word.length - 2);
        const niqqud = explainedWords[baseWord]?.niqqud;
        if (niqqud) {
            return niqqud + 'ים'; // Add plural ending
        }
    }
    
    // Regular case
    return explainedWords[word]?.niqqud || knownWords[word]?.niqqud || word;
}

// Display the sentence with highlighted words
function displaySentence(sentence) {
    sentenceElement.innerHTML = '';
    const words = sentence.split(' ');
    
    words.forEach(word => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'word';
        
        // Always show niqqud
        wordSpan.textContent = getNiqqudForWord(word);
        
        // Check if word needs explanation
        if (getEmojiForWord(word)) {
            wordSpan.classList.add('highlighted');
            wordSpan.addEventListener('click', () => showEmoji(word));
        }
        
        // Add sound functionality if enabled
        if (soundEnabled) {
            wordSpan.addEventListener('click', () => speakWord(word));
        }
        
        sentenceElement.appendChild(wordSpan);
        sentenceElement.appendChild(document.createTextNode(' '));
    });
}

// Show emoji for a word
function showEmoji(word) {
    const emoji = getEmojiForWord(word);
    if (emoji) {
        modalImage.textContent = emoji;
        modalImage.style.fontSize = '100px';
        imageModal.style.display = 'block';
    }
}

// Speak a word
function speakWord(word) {
    speech.text = word;
    window.speechSynthesis.speak(speech);
}

// Setup event listeners
function setupEventListeners() {
    // Sound toggle
    soundButton.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        soundButton.style.backgroundColor = soundEnabled ? '#2ecc71' : '#3498db';
        soundButton.querySelector('.sound-text').textContent = soundEnabled ? 'כבה הקראה' : 'הפעל הקראה';
        
        // Update click handlers for all words in current sentence
        const words = sentenceElement.querySelectorAll('.word');
        words.forEach(wordSpan => {
            // Remove existing click handlers
            const newWordSpan = wordSpan.cloneNode(true);
            wordSpan.parentNode.replaceChild(newWordSpan, wordSpan);
            
            // Get the original word without niqqud
            const word = newWordSpan.textContent;
            const originalWord = Object.keys(knownWords).find(key => knownWords[key].niqqud === word) ||
                               Object.keys(explainedWords).find(key => explainedWords[key].niqqud === word) ||
                               word;
            
            // Add emoji click handler
            if (getEmojiForWord(originalWord)) {
                newWordSpan.addEventListener('click', () => showEmoji(originalWord));
            }
            
            // Add sound functionality if enabled
            if (soundEnabled) {
                newWordSpan.addEventListener('click', () => speakWord(originalWord));
            }
        });
    });
    
    // Next sentence
    nextButton.addEventListener('click', generateNewSentence);
    
    // Close modal
    closeModal.addEventListener('click', () => {
        imageModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === imageModal) {
            imageModal.style.display = 'none';
        }
    });
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', initGame); 