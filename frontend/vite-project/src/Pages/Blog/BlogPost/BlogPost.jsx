import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Photos } from '../../../../../Photos';

import styles from './BlogPost.module.scss';

const API_URL = 'http://localhost:5000/api';

function BlogPost() {
    const { id } = useParams();

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [showAllSections, setShowAllSections] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            try {
                setLoading(true);

                const response = await fetch(`${API_URL}/blog/${id}`);

                if (!response.ok) {
                    throw new Error('Failed to load blog post');
                }

                const data = await response.json();

                setPost(data);
            } catch (error) {
                console.error(error);
                setError('Не удалось загрузить статью');
            } finally {
                setLoading(false);
            }
        };

        getPost();
    }, [id]);

    if (loading) {
        return <div className={styles.status}>Loading...</div>;
    }

    if (error || !post) {
        return <div className={styles.status}>{error || 'Article not found'}</div>;
    }

    const visibleSections = showAllSections ? post.sections : post.sections.slice(0, 2);

    const hasHiddenSections = post.sections.length > 2;

    return (
        <main className={styles.blogPost}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.introduction} id="introduction">
                        <div className={styles.innerIntroduction}>
                            <h2>Introduction</h2>
                            <p>{post.introduction}</p>
                        </div>
                    </section>

                    <article className={styles.article}>
                        {visibleSections.map((section) => (
                            <section
                                className={styles.section}
                                id={`section-${section.id}`}
                                key={section.id}>
                                <h2>{section.title}</h2>
                                <p>{section.content}</p>
                                <p>{section.content}</p>
                            </section>
                        ))}

                        {hasHiddenSections && (
                            <button
                                className={styles.readButton}
                                onClick={() => setShowAllSections((prev) => !prev)}>
                                {showAllSections ? 'Show Less' : 'Read Full Blog'}
                                <img
                                    src={Photos.arrowDown}
                                    alt=""
                                    style={{
                                        transform: showAllSections
                                            ? 'rotate(180deg)'
                                            : 'rotate(0deg)',
                                        transition: 'transform 0.3s ease',
                                    }}
                                />
                            </button>
                        )}
                    </article>
                </div>

                <aside className={styles.sidebar}>
                    <div className={styles.reactions}>
                        <div className={styles.reactionsInner}>
                            <span className={styles.reaction}>
                                <img src={Photos.like} alt="" /> 24.5k
                            </span>

                            <span className={styles.reaction}>
                                <img src={Photos.views} alt="" /> 50k
                            </span>

                            <span className={styles.reaction}>
                                <img src={Photos.share} alt="" /> 206
                            </span>
                        </div>
                    </div>

                    <div className={styles.meta}>
                        <div className={styles.metaItem}>
                            <span>Publication Date</span>
                            <strong>{post.publicationDate}</strong>
                        </div>

                        <div className={styles.metaItem}>
                            <span>Category</span>
                            <strong>{post.category}</strong>
                        </div>

                        <div className={styles.metaItem}>
                            <span>Reading Time</span>
                            <strong>{post.readingTime} Min</strong>
                        </div>

                        <div className={styles.metaItem}>
                            <span>Author Name</span>
                            <strong>{post.authorName}</strong>
                        </div>
                    </div>

                    <div className={styles.tableOfContents}>
                        <div className={styles.tableOfContentsInner}>
                            <h3>Table of Contents</h3>

                            <nav className={styles.table}>
                                {post.sections.map((section) => (
                                    <li>
                                        <a href={`#section-${section.id}`} key={section.id}>
                                            {section.title}
                                        </a>
                                    </li>
                                ))}
                            </nav>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
}

export default BlogPost;
