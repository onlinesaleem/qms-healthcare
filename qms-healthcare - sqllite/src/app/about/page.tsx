"use client"
// src/app/about/page.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './About.module.css';

interface PageContent {
  id: number;
  page: string;
  title: string;
  content: string;
  imageUrl:string;
}

export default function AboutPage() {
  const [pageContent, setPageContent] = useState<PageContent[]>([]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get('/api/allContent');
        const aboutContent = response.data.filter(
          (content: PageContent) => content.page === 'about'
        );
        setPageContent(aboutContent);
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
        <div key={item.id} className={styles.aboutContainer}>
          <h1>{item.title}</h1>
          <p>{item.content}</p>
          <img src={item.imageUrl} alt={item.title} />
        </div>
      ))}
    </div>
  );
}
