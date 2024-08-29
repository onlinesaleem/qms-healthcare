"use client"
import { useEffect, useState } from 'react';
import styles from './Home.module.css';
import axios from 'axios';

interface PageContent {
  id: number;
  page: string;
  title: string;
  content: string;
  imageUrl?: string; // Optional image URL
}

export default function HomePage() {
  const [pageContent, setPageContent] = useState<PageContent[]>([]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get('/api/allContent');
        const homeContent = response.data.filter(
          (content: PageContent) => content.page === 'home'
        );
        setPageContent(homeContent);
      } catch (error) {
        console.error('Failed to fetch content:', error);
      }
    };

    fetchContent();
  }, []);

  if (pageContent.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {pageContent.map((item) => (
        <div key={item.id} className={styles.homeContainer}>
          <h1>{item.title}</h1>
          <p>{item.content}</p>
          {item.imageUrl && (
            <img src={item.imageUrl} alt={item.title} className={styles.image} />
          )}
        </div>
      ))}
    </div>
  );
}
