export default class Translator{
  getTranslation(response) {
    return response.data.translations[0].translatedText;
  }

  createRequest(value) {
    let translateApiEndpoint = "https://translation.googleapis.com/language/translate/v2?"
    let targetLanguage = "target="
    let spanish = "es&";
    let apiKey = "key=&";
    let query = "q=";
    let request = translateApiEndpoint + targetLanguage + spanish + apiKey + query + value;
    return request;
  }

  async handleRequest(request) {
    return fetch(request).then((response) => {
      return response.json();
    }).then((response) => {
      return this.getTranslation(response);
    });
  }

  async translate(value) {
    try {
      if (value) {
        let request = this.createRequest(value);
        return this.handleRequest(request);
      } else {
        return '';
      }
    } catch(e) {
      console.log(e);
    }
  }
}
