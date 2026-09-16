const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '1234',
    port: 5432,
});

app.get('/articles', async (req, res) => {
    const { category } = req.query;

    try {
        let result;

        if (!category || category === 'All') {
            result = await pool.query('SELECT * FROM articles ORDER BY publish_date DESC');
        } else {
            result = await pool.query(
                'SELECT * FROM articles WHERE category = $1 ORDER BY publish_date DESC',
                [category],
            );
        }

        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

app.get('/video', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM video ORDER BY id');
        res.json(result.rows);
    } catch (err) {
        console.error('❌ Videos query error:', err.message);
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/blog/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const postResult = await pool.query(
            `
            SELECT
                id,
                title,
                slug,
                category,
                author_name AS "authorName",
                TO_CHAR(publication_date, 'Month DD, YYYY') AS "publicationDate",
                reading_time AS "readingTime",
                introduction
            FROM blog_posts
            WHERE id = $1
            `,
            [id],
        );

        if (postResult.rows.length === 0) {
            return res.status(404).json({
                message: 'Blog post not found',
            });
        }

        const post = postResult.rows[0];

        const sectionsResult = await pool.query(
            `
            SELECT
                id,
                title,
                content,
                sort_order AS "sortOrder"
            FROM blog_sections
            WHERE post_id = $1
            ORDER BY sort_order ASC
            `,
            [post.id],
        );

        res.json({
            ...post,
            sections: sectionsResult.rows,
        });
    } catch (error) {
        console.error('GET /api/blog/:id error:', error);

        res.status(500).json({
            message: 'Server error',
        });
    }
});

app.get('/api/blog', async (req, res) => {
    try {
        const result = await pool.query(
            `
            SELECT
                id,
                title,
                slug,
                category,
                author_name AS "authorName",
                TO_CHAR(publication_date, 'Month DD, YYYY') AS "publicationDate",
                reading_time AS "readingTime",
                introduction
            FROM blog_posts
            ORDER BY publication_date DESC
            `,
        );

        res.json(result.rows);
    } catch (error) {
        console.error('GET /api/blog error:', error);

        res.status(500).json({
            message: 'Server error',
        });
    }
});

app.post('/api/contact', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, message } = req.body;

        if (!firstName || !lastName || !email || !message) {
            return res.status(400).json({ error: 'Заполните обязательные поля' });
        }

        const result = await pool.query(
            `INSERT INTO contact_requests (first_name, last_name, email, phone, message)
             VALUES ($1, $2, $3, $4, $5)
             RETURNING id, created_at`,
            [firstName, lastName, email, phone, message],
        );

        res.status(201).json({
            success: true,
            id: result.rows[0].id,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

app.get('/api/faq', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT id, question, answer FROM faq ORDER BY sort_order ASC',
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
