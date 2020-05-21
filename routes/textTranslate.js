module.exports = async function(text, target) {
  const {Translate} = require('@google-cloud/translate').v2;
  const translate = new Translate();
  
  let [translations] = await translate.translate(text, target);
  translations = Array.isArray(translations) ? translations : [translations];

  return translations;
}