export default class SpaceService {
  static async getSpace() {
    try {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}