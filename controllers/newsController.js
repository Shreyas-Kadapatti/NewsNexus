class NewsController {
    constructor(newsService) {
        this.newsService = newsService;
    }

    async getAllNews(req, res) {
        try {
            const news = await this.newsService.fetchAllNews();
            res.status(200).json(news);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching news', error });
        }
    }

    async getNewsById(req, res) {
        const { id } = req.params;
        try {
            const news = await this.newsService.fetchNewsById(id);
            if (!news) {
                return res.status(404).json({ message: 'News not found' });
            }
            res.status(200).json(news);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching news', error });
        }
    }

    async createNews(req, res) {
        const newsData = req.body;
        try {
            const newNews = await this.newsService.addNews(newsData);
            res.status(201).json(newNews);
        } catch (error) {
            res.status(500).json({ message: 'Error creating news', error });
        }
    }

    async updateNews(req, res) {
        const { id } = req.params;
        const newsData = req.body;
        try {
            const updatedNews = await this.newsService.editNews(id, newsData);
            if (!updatedNews) {
                return res.status(404).json({ message: 'News not found' });
            }
            res.status(200).json(updatedNews);
        } catch (error) {
            res.status(500).json({ message: 'Error updating news', error });
        }
    }

    async deleteNews(req, res) {
        const { id } = req.params;
        try {
            const deletedNews = await this.newsService.removeNews(id);
            if (!deletedNews) {
                return res.status(404).json({ message: 'News not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting news', error });
        }
    }
}

module.exports = NewsController;