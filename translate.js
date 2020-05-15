const {Translate} = require('@google-cloud/translate').v2;
const translate = new Translate();

const text = '번역 API 성공했다';
const target = 'en';

async function translateText() {
  let [translations] = await translate.translate(text, target);
  translations = Array.isArray(translations) ? translations : [translations];
  console.log('Translations:');
  translations.forEach((translation, i) => {
    console.log(`${translation}`);
  });
}

translateText();