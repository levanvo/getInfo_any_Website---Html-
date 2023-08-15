import axios from 'axios';
import cheerio from 'cheerio';

export const ok = async (req, res) => {
    const url = 'https://merchize.com/';
    try {
        const response = await axios.get(url);
        const html = response.data;

        const $ = cheerio.load(html);

        // Ví dụ: Lấy tiêu đề của trang
        const title = $('title').text();
        console.log('Tiêu đề trang:', title);

        // Ví dụ: Lấy nội dung của thẻ p đầu tiên trong trang
        const firstParagraph = $('p').first().text();
        if (firstParagraph) {
            console.log('Nội dung thẻ p đầu tiên:', firstParagraph);
        } else {
            console.log('Không tìm thấy thẻ p.');
        }
        // return res.status(200).json("ok")
    } catch (err) {
        return res.status(400).json({ message: "Loi try-catch: ===============", err });
    };
};





