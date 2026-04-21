import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectData } from '../data/projects';
import './ProjectDetail.css';

const ProtectedImage = ({ src, alt, className }) => (
  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    <img
      src={src}
      alt={alt || ''}
      className={className}
      loading="lazy"
      draggable="false"
      onContextMenu={(e) => e.preventDefault()}
      style={{ userSelect: 'none', WebkitUserDrag: 'none', width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
    />
    <div style={{
      position: 'absolute', top: '50%', left: '50%',
      transform: 'translate(-50%, -50%)',
      color: '#ffffff', fontSize: '1.5vw', opacity: 0.5,
      fontWeight: '600', pointerEvents: 'none', letterSpacing: '0.2em',
      whiteSpace: 'nowrap', textTransform: 'uppercase',
      userSelect: 'none',
      textShadow: 'none'
    }}>
      © studio.m.arch
    </div>
    <div style={{
      position: 'absolute', top: 0, left: 0,
      width: '100%', height: '100%', background: 'transparent'
    }} />
  </div>
);

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="project-not-found container">
        <h2>Project not found</h2>
        <Link to="/portfolio" className="back-link">← Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <div className="container">

        {/* Header */}
        <div className="detail-header">
          <Link to="/portfolio" className="back-link">← Back to Portfolio</Link>
          <h1 className="detail-title">{project.title}</h1>
          <div className="detail-meta">
            <span>{project.category}</span>
          </div>
        </div>

        {/* Main Cover Image */}
        <div className="detail-main-image">
          <ProtectedImage src={project.image} alt={project.title} />
        </div>

        {/* Gallery Grid */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="detail-gallery">
            {project.gallery.map((imgUrl, index) => (
              <div className="gallery-item" key={index}>
                <ProtectedImage src={imgUrl} alt={`${project.title} — image ${index + 1}`} />
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default ProjectDetail;