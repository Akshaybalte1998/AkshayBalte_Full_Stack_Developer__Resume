import React from 'react';
import PropTypes from 'prop-types';

const Project = () => {
  // Sample project data
  const projects = [
    {
      title: "AgroMaart - Online Fertilizer Shop",
      icon: "ri-shopping-cart-fill",
      description: "Built a user-friendly web application to make fertilizer shop management easier and improve communication between shop owners, farmers, and delivery staff. The app includes Role-Based Access, giving each user group specific tools: shop owners can manage inventory and orders, farmers can browse products, see prices, place orders, and track deliveries, while delivery staff can update delivery status in real-time to keep everyone informed. Spring Security ensures safe login and data protection. This platform has made fertilizer distribution more efficient by connecting all users on one platform, reducing manual work, and boosting transparency in operations.",
      additionalInfo: "Technologies: React, HTML, CSS, Spring Boot, Hibernate, MySQL",
      imageSrc: require('../../assets/images/AgroMart.webp'),
      animation: "fade-left",
    },
    {
      title: "Music Recommendation System",
      icon: "ri-music-fill",
      description: "Built a music recommendation system using Python that suggests songs based on what users like and their listening history. The system uses methods like collaborative filtering and content-based filtering to analyze songs and user behavior. It creates personalized song recommendations for each user, making their listening experience better. Data is processed with tools like Pandas and NumPy to ensure the system understands user preferences accurately. Machine learning algorithms from Scikit-Learn are used to improve how well recommendations match what users want. The system can work with large amounts of music data, allowing it to grow with more users. By offering relevant song suggestions, it helps keep users engaged and satisfied. Overall, this music recommendation system provides a fun and customized experience for users.",
      additionalInfo: "Technologies: Python, Flask, TensorFlow, Spotify API",
      imageSrc: require('../../assets/images/Music.webp'),
      animation: "fade-right",
    },
    {
      title: "Drug Review Using NLP",
      icon: "ri-brain-fill",
      description: "Created a system to analyze drug reviews using Natural Language Processing (NLP) to understand what users are saying. The project collected drug reviews from different online platforms to build a diverse dataset. Text preprocessing was done to clean the data, including breaking down the text into words and removing unnecessary words. Sentiment analysis was used to find out if each review was positive, negative, or neutral. Important words related to how well drugs work and any side effects were identified using techniques like Term Frequency-Inverse Document Frequency (TF-IDF). The results were shown in easy-to-understand visuals, highlighting trends in what people think about different drugs. This analysis gives helpful insights for doctors and patients, allowing them to make better decisions about medications. Overall, the NLP system helps improve understanding of drug reviews and supports better patient care.",
      additionalInfo: "Technologies: Python, Flask, NLP, TensorFlow",
      imageSrc: require('../../assets/images/drug.webp'),
      animation: "fade-left",
    },
  ];

  return (
    <section id="project" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Projects</h2>
        </div>
        <div style={styles.timelineContent}>
          {projects.map((project, index) => (
            <TimelineCard key={index} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Timeline Card Component with dynamic color styles
const TimelineCard = ({ title, icon, description, additionalInfo, imageSrc, animation, index }) => {
  const cardStyle = {
    ...styles.cardContainer,
    backgroundColor: colorPalette[index % colorPalette.length], // Dynamic background color
  };

  return (
    <div className="timeline-card" style={cardStyle} data-aos={animation}>
      <div style={styles.iconContainer}>
        <img src={imageSrc} alt={`Icon for ${title}`} style={styles.iconImage} />
      </div>
      <div style={styles.cardContent}>
        <h3 style={styles.cardTitle}>
          {icon && <i className={`${icon} mr-2`} aria-hidden="true"></i>} {title}
        </h3>
        <p style={styles.cardDescription}>{description}</p>
        {additionalInfo && <p style={styles.cardAdditionalInfo}>{additionalInfo}</p>}
      </div>
    </div>
  );
};

TimelineCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  description: PropTypes.string.isRequired,
  additionalInfo: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  animation: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

// Color palette for the cards
const colorPalette = ['#e3f2fd', '#e8f5e9', '#fff3e0', '#f3e5f5', '#fbe9e7'];

// CSS-in-JS Styles
const styles = {
  section: {
    padding: '4rem 2rem',
    background: 'linear-gradient(135deg, #d7e9f7, #e1f5fe)',
    borderRadius: '1rem',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '1rem',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  sectionTitle: {
    color: '#0288d1',
    fontWeight: '600',
    fontSize: '2.8rem',
    marginBottom: '1rem',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
  },
  timelineContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
  },
  cardContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    padding: '1.5rem',
    borderRadius: '1rem',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    ':hover': {
      transform: 'scale(1.03)',
      boxShadow: '0 8px 18px rgba(0, 0, 0, 0.15)',
    },
  },
  iconContainer: {
    flexShrink: 0,
  },
  iconImage: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '50%',
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontWeight: '700',
    fontSize: '1.8rem',
    color: '#0277bd',
  },
  cardDescription: {
    fontSize: '1rem',
    color: '#455a64',
    marginTop: '0.75rem',
  },
  cardAdditionalInfo: {
    fontSize: '0.9rem',
    color: '#607d8b',
    marginTop: '0.5rem',
    fontStyle: 'italic',
  },
};

export default Project;
