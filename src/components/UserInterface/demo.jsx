import React from 'react';
import PropTypes from 'prop-types';

const Services = () => {
  return (
    <section id="services" style={styles.section}>
      <div style={styles.container}>
        {/* Education Section */}
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Educational Journey</h2>
        </div>

        <div style={styles.timelineContainer}>
          <div style={styles.timelineContent}>
            <TimelineCard
              title="CDAC"
              icon="ri-graduation-cap-fill"
              description="PG-DAC, IACSD, Pune"
              date="March 2024 – August 2024"
              additionalInfo="60.8%"
              imageSrc={require('../../assets/images/cdac_logo.png')}
              animation="fade-left"
            />

            <TimelineCard
              title="Internship"
              icon="ri-robot-2-fill"
              description="Machine Learning Intern, Aiverient, Pune"
              date="June 2022 – February 2023"
              additionalInfo="Worked on ML algorithms and data analysis."
              imageSrc={require('../../assets/images/Aivarient.png')}
              animation="fade-right"
            />

            <TimelineCard
              title="B.Tech Mechanical Engineering"
              icon="ri-graduation-cap-fill"
              description="DKTE Textile and Engineering Institute, Ichalkaranji"
              date="2016 – 2020"
              additionalInfo="7.78 CGPA"
              imageSrc={require('../../assets/images/btech.png')}
              animation="fade-left"
            />

            <TimelineCard
              title="HSC"
              icon="ri-school-fill"
              description="A.K. Junior College, Atpadi"
              date="2014 – 2016"
              additionalInfo="67.54%"
              imageSrc={require('../../assets/images/hsc.png')}
              animation="fade-right"
            />

            <TimelineCard
              title="SSC"
              icon="ri-school-fill"
              description="Shree Bhavnai Vidyalaya, Atpadi"
              date="2014"
              additionalInfo="90.60%"
              imageSrc={require('../../assets/images/ssc.png')}
              animation="fade-left"
            />
          </div>
        </div>

        {/* Projects Section */}
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Projects</h2>
        </div>

        <div style={styles.timelineContainer}>
          <div style={styles.timelineContent}>
            <TimelineCard
              title="AgroMaart - Online Agriculture Marketplace"
              icon="ri-shopping-cart-fill"
              description="Platform connecting farmers, buyers, and delivery personnel in a seamless marketplace."
              date="2023"
              additionalInfo="Technologies: React, HTML, CSS, Spring Boot, Hibernate, MySQL"
              imageSrc={require('../../assets/images/AgroMart.webp')}
              animation="fade-left"
            />

            <TimelineCard
              title="Music Recommendation System"
              icon="ri-music-fill"
              description="A personalized music recommendation system leveraging user preferences and listening history."
              date="2023"
              additionalInfo="Technologies: Python, Flask, TensorFlow, Spotify API"
              imageSrc={require('../../assets/images/Music.webp')}
              animation="fade-right"
            />

            <TimelineCard
              title="Drug Review Using NLP"
              icon="ri-brain-fill"
              description="An analysis tool to interpret and categorize drug reviews using natural language processing."
              date="2023"
              additionalInfo="Technologies: Python, Flask, NLP, TensorFlow"
              imageSrc={require('../../assets/images/drug.webp')}
              animation="fade-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineCard = ({ title, icon, description, date, additionalInfo, imageSrc, animation }) => (
  <div style={styles.cardContainer}>
    <div style={styles.iconContainer}>
      <img src={imageSrc} alt={`Icon for ${title}`} style={styles.iconImage} />
    </div>
    <div style={styles.cardContent}>
      <div data-aos={animation} data-aos-duration="1200" style={styles.timelineCard}>
        <h3 style={styles.cardTitle}>
          {icon && <i className={`${icon} mr-2`}></i>} {title}
        </h3>
        <p style={styles.cardDescription}>{description}</p>
        {date && <p style={styles.cardDate}>{date}</p>}
        {additionalInfo && <p style={styles.cardAdditionalInfo}>{additionalInfo}</p>}
      </div>
    </div>
  </div>
);

TimelineCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  description: PropTypes.string.isRequired,
  date: PropTypes.string,
  additionalInfo: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  animation: PropTypes.string.isRequired,
};

const styles = {
  section: {
    padding: '4rem 2rem',
    background: 'linear-gradient(135deg, #f3e5f5, #f1f8e9)',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  sectionTitle: {
    color: '#8e24aa',
    fontWeight: 'bold',
    fontSize: '2.75rem',
    marginBottom: '0.5rem',
    textTransform: 'uppercase',
    letterSpacing: '1.2px',
  },
  timelineContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
  },
  timelineContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  cardContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    backgroundColor: '#fce4ec',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    transition: 'transform 0.3s ease',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  cardContainerHover: {
    transform: 'scale(1.05)',
  },
  cardContent: {
    flex: 1,
  },
  timelineCard: {
    padding: '1.25rem',
    borderRadius: '0.75rem',
    backgroundColor: '#f3e5f5',
  },
  iconContainer: {
    flexShrink: 0,
  },
  iconImage: {
    width: '70px',
    height: '70px',
    objectFit: 'cover',
    borderRadius: '50%',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: '1.6rem',
    color: '#6a1b9a',
  },
  cardDescription: {
    fontSize: '1rem',
    color: '#37474f',
    marginTop: '0.5rem',
  },
  cardDate: {
    fontStyle: 'italic',
    color: '#8d6e63',
    marginTop: '0.25rem',
  },
  cardAdditionalInfo: {
    fontSize: '0.9rem',
    color: '#6d4c41',
    marginTop: '0.25rem',
  },
};

export default Services;
