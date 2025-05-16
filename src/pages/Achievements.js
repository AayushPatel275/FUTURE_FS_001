function Achievements() {
  const certifications = [
    {
      title: "NPTEL Certification",
      courses: [
        {
          name: "Data Structures and Algorithms using Java",
          issuer: "NPTEL",
          year: "2024",
          description: "Comprehensive course covering fundamental data structures and algorithms implementation in Java."
        },
        {
          name: "Database Management Systems",
          issuer: "NPTEL",
          year: "2024",
          description: "In-depth study of database concepts, SQL, normalization, and database design principles."
        }
      ]
    }
  ];

  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '1000px', 
      margin: '0 auto',
      backgroundColor: '#f8f9fa',
      borderRadius: '15px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{
        textAlign: 'center',
        color: '#2c3e50',
        marginBottom: '2rem',
        fontSize: '2.5rem',
        fontWeight: 'bold'
      }}>Certifications & Achievements</h2>

      {certifications.map((cert, index) => (
        <div key={index} style={{
          marginBottom: '2rem',
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '1.5rem',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
        }}>
          <h3 style={{
            color: '#3498db',
            marginBottom: '1rem',
            fontSize: '1.8rem',
            borderBottom: '2px solid #e9ecef',
            paddingBottom: '0.5rem'
          }}>{cert.title}</h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {cert.courses.map((course, courseIndex) => (
              <div key={courseIndex} style={{
                background: 'linear-gradient(135deg, #f6f9fc 0%, #eef2f7 100%)',
                padding: '1.5rem',
                borderRadius: '10px',
                transition: 'transform 0.2s ease-in-out',
                ':hover': {
                  transform: 'translateY(-5px)'
                }
              }}>
                <h4 style={{
                  color: '#2c3e50',
                  marginBottom: '0.5rem',
                  fontSize: '1.3rem',
                  fontWeight: 'bold'
                }}>{course.name}</h4>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                  color: '#666'
                }}>
                  <span>Issuer: {course.issuer}</span>
                  <span>Year: {course.year}</span>
                </div>

                <p style={{
                  color: '#555',
                  lineHeight: '1.6',
                  marginBottom: '1rem'
                }}>{course.description}</p>

                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  flexWrap: 'wrap'
                }}>
                  <span style={{
                    background: '#e9ecef',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '15px',
                    fontSize: '0.9rem',
                    color: '#2c3e50'
                  }}>
                    {course.issuer}
                  </span>
                  <span style={{
                    background: '#e9ecef',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '15px',
                    fontSize: '0.9rem',
                    color: '#2c3e50'
                  }}>
                    {course.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .certification-card {
          animation: fadeIn 0.5s ease-in;
        }
      `}</style>
    </div>
  );
}

export default Achievements;
