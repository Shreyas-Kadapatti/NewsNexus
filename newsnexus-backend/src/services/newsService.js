class NewsService {
  constructor(newsModel) {
    this.newsModel = newsModel;
  }

  async fetchAllNews() {
    try {
      return await this.newsModel.find();
    } catch (error) {
      throw new Error('Error fetching news articles: ' + error.message);
    }
  }

  async fetchNewsById(id) {
    try {
      return await this.newsModel.findById(id);
    } catch (error) {
      throw new Error('Error fetching news article: ' + error.message);
    }
  }

  async addNews(newsData) {
    try {
      const newsArticle = new this.newsModel(newsData);
      return await newsArticle.save();
    } catch (error) {
      throw new Error('Error adding news article: ' + error.message);
    }
  }

  async editNews(id, newsData) {
    try {
      return await this.newsModel.findByIdAndUpdate(id, newsData, { new: true });
    } catch (error) {
      throw new Error('Error updating news article: ' + error.message);
    }
  }

  async removeNews(id) {
    try {
      return await this.newsModel.findByIdAndDelete(id);
    } catch (error) {
      throw new Error('Error deleting news article: ' + error.message);
    }
  }
}

export default NewsService;