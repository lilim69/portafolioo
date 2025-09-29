// Función de máquina de escribir mejorada
function typeWriter(elementId, text, speed, callback) {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  let i = 0;
  
  // Limpiar el contenido inicial
  element.innerHTML = '';
  element.style.borderRight = '2px solid var(--neon-lila)';
  
  function typing() {
    if (i < text.length) {
      element.innerHTML = text.substring(0, i + 1);
      i++;
      setTimeout(typing, speed);
    } else {
      // Efecto de cursor parpadeante al terminar
      setTimeout(() => {
        element.style.borderRight = 'none';
        if (callback) callback();
      }, 500);
    }
  }
  
  typing();
}

// Función para animar la entrada de elementos
function animateElement(elementId, animationClass, delay = 0) {
  setTimeout(() => {
    const element = document.getElementById(elementId);
    if (element) {
      element.classList.add(animationClass);
    }
  }, delay);
}

// Función para crear efectos de partículas
function createParticles() {
  const container = document.querySelector('.hero');
  if (!container) return;
  
  const particleCount = 15;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
      position: absolute;
      width: 2px;
      height: 2px;
      background: var(--neon-cyan);
      border-radius: 50%;
      pointer-events: none;
      z-index: 5;
      animation: particleFloat ${3 + Math.random() * 4}s infinite ease-in-out;
      animation-delay: ${Math.random() * 2}s;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      box-shadow: 0 0 6px var(--neon-cyan);
    `;
    
    container.appendChild(particle);
  }
}

// =================================
// MATRIX BACKGROUND EFFECT FOR PROJECTS
// =================================
function initProjectsMatrixEffect() {
  const canvas = document.getElementById('projectsMatrixCanvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  const chars = 'HTMLCSSJS{}[]<>()/**/=>,.;:@#$%';
  const charArray = chars.split('');
  
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  
  const drops = [];
  for (let x = 0; x < columns; x++) {
    drops[x] = Math.random() * -100;
  }
  
  function draw() {
    ctx.fillStyle = 'rgba(4, 1, 24, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
      const text = charArray[Math.floor(Math.random() * charArray.length)];
      
      const colors = ['#00D4FF', '#B26BE8', '#FF4EC8'];
      ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
      
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  
  setInterval(draw, 35);
}

// =================================
// MATRIX BACKGROUND EFFECT
// =================================
function initMatrixEffect() {
  const canvas = document.getElementById('matrixCanvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  // Set canvas size
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // Matrix characters
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*(){}[]<>/|\\~`';
  const charArray = chars.split('');
  
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  
  const drops = [];
  for (let x = 0; x < columns; x++) {
    drops[x] = 1;
  }
  
  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#00ff41';
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
      const text = charArray[Math.floor(Math.random() * charArray.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  
  setInterval(draw, 35);
}

// =================================
// CODE TYPING ANIMATION
// =================================
function initCodeTyping() {
  const codeText = `const miExperiencia = {
  colaborativo: '1 año en proyectos de equipo',
  formacion: {
    bootcamp: 'Desarrollo Web Completo',
    carrera: 'Desarrollo Informático'
  },
  pasion: 'Crear experiencias digitales únicas',
  objetivo: 'Seguir creciendo y aprendiendo'
};

console.log('¡Lista para nuevos desafíos!');`;

  const element = document.getElementById('typing-code');
  if (!element) return;
  
  let i = 0;
  const speed = 50;
  
  function typeCode() {
    if (i < codeText.length) {
      element.innerHTML = codeText.substring(0, i + 1) + '<span class="cursor">|</span>';
      i++;
      setTimeout(typeCode, speed);
    } else {
      // Remove cursor after typing is complete
      element.innerHTML = codeText;
    }
  }
  
  // Start typing when section becomes visible
  const skillsSection = document.querySelector('.skills-section');
  if (skillsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(typeCode, 1000); // Start after 1 second
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    
    observer.observe(skillsSection);
  }
}

// =================================
// SKILLS CIRCLES ANIMATIONS
// =================================
function initSkillsCirclesAnimations() {
  const skillCircles = document.querySelectorAll('.skill-circle');
  
  if (skillCircles.length === 0) return;
  
  // Animate circles when section becomes visible
  const skillsSection = document.querySelector('.skills-section');
  if (skillsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start animations with delay
          skillCircles.forEach((circle, index) => {
            setTimeout(() => {
              animateCircle(circle);
            }, index * 200);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    
    observer.observe(skillsSection);
  }
  
  // Add hover effects
  skillCircles.forEach((circle) => {
    const progressCircle = circle.querySelector('.progress-circle');
    const skillName = circle.querySelector('.skill-name');
    const skillPercentage = circle.querySelector('.skill-percentage');
    
    circle.addEventListener('mouseenter', () => {
      if (progressCircle) {
        progressCircle.style.filter = 'drop-shadow(0 0 15px currentColor)';
      }
      if (skillName) {
        skillName.style.transform = 'scale(1.1)';
      }
      if (skillPercentage) {
        skillPercentage.style.transform = 'scale(1.2)';
      }
    });
    
    circle.addEventListener('mouseleave', () => {
      if (progressCircle) {
        progressCircle.style.filter = 'none';
      }
      if (skillName) {
        skillName.style.transform = 'scale(1)';
      }
      if (skillPercentage) {
        skillPercentage.style.transform = 'scale(1)';
      }
    });
  });
}

function animateCircle(circleElement) {
  const percentage = parseInt(circleElement.getAttribute('data-percentage'));
  const progressCircle = circleElement.querySelector('.progress-circle');
  const percentageText = circleElement.querySelector('.skill-percentage');
  
  if (!progressCircle || !percentageText) return;
  
  // Calculate the stroke-dashoffset based on percentage
  const circumference = 2 * Math.PI * 45; // radius is 45
  const offset = circumference - (percentage / 100) * circumference;
  
  // Start animation
  let currentPercentage = 0;
  const increment = percentage / 60; // 60 frames for smooth animation
  
  const animate = () => {
    if (currentPercentage < percentage) {
      currentPercentage += increment;
      const currentOffset = circumference - (currentPercentage / 100) * circumference;
      
      progressCircle.style.strokeDashoffset = currentOffset;
      percentageText.textContent = Math.round(currentPercentage) + '%';
      
      requestAnimationFrame(animate);
    } else {
      // Final values
      progressCircle.style.strokeDashoffset = offset;
      percentageText.textContent = percentage + '%';
    }
  };
  
  animate();
}

// =================================
// CARRUSEL INFINITO DE PROYECTOS - OPTIMIZADO
// =================================
class SimpleProjectCarousel {
  constructor() {
    this.track = document.getElementById('simpleCarouselTrack');
    this.cards = document.querySelectorAll('.simple-project-card');
    this.prevBtn = document.getElementById('simplePrevBtn');
    this.nextBtn = document.getElementById('simpleNextBtn');
    
    if (!this.track || this.cards.length === 0) return;
    
    this.cardWidth = 0;
    this.totalCards = this.cards.length;
    this.currentIndex = 0;
    this.isTransitioning = false;
    this.autoplayInterval = null;
    this.isHovering = false;
    
    this.allCards = [];
    this.visibleCards = 1;
    
    this.init();
  }
  
  init() {
    this.calculateDimensions();
    this.setupInfiniteCarousel();
    this.setupEventListeners();
    this.updateCarousel(false);
    this.startAutoplay();
    
    window.addEventListener('resize', () => this.handleResize());
  }
  
  calculateDimensions() {
    const windowWidth = window.innerWidth;
    
    if (windowWidth >= 1200) {
      this.visibleCards = 3;
    } else if (windowWidth >= 768) {
      this.visibleCards = 2;
    } else {
      this.visibleCards = 1;
    }
    
    const gap = 20;
    this.cardWidth = (this.cards[0]?.offsetWidth || 300) + gap;
  }
  
  setupInfiniteCarousel() {
    this.track.innerHTML = '';
    
    for (let i = this.totalCards - this.visibleCards; i < this.totalCards; i++) {
      const index = (i + this.totalCards) % this.totalCards;
      const clone = this.cards[index].cloneNode(true);
      clone.classList.add('clone', 'clone-start');
      this.track.appendChild(clone);
    }
    
    this.cards.forEach(card => {
      const original = card.cloneNode(true);
      original.classList.add('original');
      this.track.appendChild(original);
    });
    
    for (let i = 0; i < this.visibleCards; i++) {
      const clone = this.cards[i].cloneNode(true);
      clone.classList.add('clone', 'clone-end');
      this.track.appendChild(clone);
    }
    
    this.allCards = this.track.querySelectorAll('.simple-project-card');
    this.currentIndex = this.visibleCards;
    
    // Agregar eventos de hover a todas las tarjetas
    this.allCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        this.isHovering = true;
        this.pauseAutoplay();
      });
      
      card.addEventListener('mouseleave', () => {
        this.isHovering = false;
        this.startAutoplay();
      });
    });
  }
  
  setupEventListeners() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prevSlide());
    }
    
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.nextSlide());
    }
    
    this.setupTouchEvents();
    
    this.track.addEventListener('transitionend', () => this.handleTransitionEnd());
  }
  
  setupTouchEvents() {
    let startX = null;
    let currentX = null;
    let isDragging = false;
    
    this.track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
      this.pauseAutoplay();
    });
    
    this.track.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      currentX = e.touches[0].clientX;
    });
    
    this.track.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      isDragging = false;
      
      if (startX && currentX) {
        const diff = startX - currentX;
        
        if (Math.abs(diff) > 50) {
          if (diff > 0) {
            this.nextSlide();
          } else {
            this.prevSlide();
          }
        }
      }
      
      startX = null;
      currentX = null;
      this.startAutoplay();
    });
  }
  
  handleResize() {
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => {
      const oldVisibleCards = this.visibleCards;
      this.calculateDimensions();
      
      if (oldVisibleCards !== this.visibleCards) {
        this.setupInfiniteCarousel();
        this.updateCarousel(false);
      }
    }, 250);
  }
  
  handleTransitionEnd() {
    if (!this.isTransitioning) return;
    
    this.isTransitioning = false;
    
    if (this.currentIndex >= this.totalCards + this.visibleCards) {
      this.currentIndex = this.visibleCards;
      this.updateCarousel(false);
    } else if (this.currentIndex < this.visibleCards) {
      this.currentIndex = this.totalCards;
      this.updateCarousel(false);
    }
  }
  
  nextSlide() {
    if (this.isTransitioning) return;
    
    this.isTransitioning = true;
    this.currentIndex++;
    this.updateCarousel(true);
  }
  
  prevSlide() {
    if (this.isTransitioning) return;
    
    this.isTransitioning = true;
    this.currentIndex--;
    this.updateCarousel(true);
  }
  
  updateCarousel(animate = true) {
    if (animate) {
      this.track.style.transition = 'transform 0.6s linear';
    } else {
      this.track.style.transition = 'none';
    }
    
    const translateX = -this.currentIndex * this.cardWidth;
    this.track.style.transform = `translateX(${translateX}px)`;
    
    if (!animate) {
      this.track.offsetHeight;
    }
  }
  
  startAutoplay() {
    if (this.isHovering) return;
    
    this.pauseAutoplay();
    this.autoplayInterval = setInterval(() => {
      if (!this.isHovering) {
        this.nextSlide();
      }
    }, 3000);
  }
  
  pauseAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }
  
  destroy() {
    this.pauseAutoplay();
    window.removeEventListener('resize', this.handleResize);
  }
}

// =================================
// ANIMACIÓN AVANZADA DEL SVG DE RAYOS
// =================================
function initAdvancedLightningAnimation() {
  const svg = document.querySelector('.advanced-lightning-svg');
  if (!svg) return;
  
  function createRandomLightning() {
    const lightningPaths = svg.querySelectorAll('.plasma-stream');
    
    lightningPaths.forEach(path => {
      const randomDelay = Math.random() * 2;
      const randomDuration = 0.1 + Math.random() * 0.3;
      
      setTimeout(() => {
        path.style.opacity = '1';
        path.style.strokeWidth = '5';
        path.style.filter = 'drop-shadow(0 0 10px currentColor)';
        
        setTimeout(() => {
          path.style.opacity = '0.3';
          path.style.strokeWidth = '2';
          path.style.filter = 'none';
        }, randomDuration * 1000);
      }, randomDelay * 1000);
    });
  }
  
  setInterval(createRandomLightning, 3000);
  createRandomLightning();
  
  const particles = svg.querySelectorAll('.energy-particle');
  particles.forEach((particle, index) => {
    const radius = 80 + index * 20;
    const speed = 3 + index * 0.5;
    
    let angle = 0;
    
    function animateParticle() {
      angle += speed;
      const x = 175 + Math.cos(angle * Math.PI / 180) * radius;
      const y = 175 + Math.sin(angle * Math.PI / 180) * radius;
      
      particle.setAttribute('cx', x);
      particle.setAttribute('cy', y);
      
      const scale = 1 + Math.sin(angle * Math.PI / 90) * 0.3;
      particle.setAttribute('r', (2 * scale).toString());
      
      requestAnimationFrame(animateParticle);
    }
    
    animateParticle();
  });
  
  svg.addEventListener('click', () => {
    const burst = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    burst.setAttribute('cx', '175');
    burst.setAttribute('cy', '175');
    burst.setAttribute('r', '10');
    burst.setAttribute('fill', 'none');
    burst.setAttribute('stroke', 'var(--neon-cyan)');
    burst.setAttribute('stroke-width', '3');
    
    svg.appendChild(burst);
    
    burst.animate([
      { r: '10', opacity: 1, strokeWidth: '3' },
      { r: '150', opacity: 0, strokeWidth: '1' }
    ], {
      duration: 1000,
      easing: 'ease-out'
    }).onfinish = () => burst.remove();
    
    createLightningBurst();
  });
  
  function createLightningBurst() {
    const colors = ['var(--neon-cyan)', 'var(--neon-pink)', 'var(--neon-lila)'];
    
    for (let i = 0; i < 8; i++) {
      const angle = (360 / 8) * i;
      const x1 = 175;
      const y1 = 175;
      const x2 = 175 + Math.cos(angle * Math.PI / 180) * 100;
      const y2 = 175 + Math.sin(angle * Math.PI / 180) * 100;
      
      const lightning = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      lightning.setAttribute('x1', x1.toString());
      lightning.setAttribute('y1', y1.toString());
      lightning.setAttribute('x2', x1.toString());
      lightning.setAttribute('y2', y1.toString());
      lightning.setAttribute('stroke', colors[i % colors.length]);
      lightning.setAttribute('stroke-width', '2');
      lightning.setAttribute('opacity', '0.8');
      
      svg.appendChild(lightning);
      
      setTimeout(() => {
        lightning.style.transition = 'all 0.3s ease-out';
        lightning.setAttribute('x2', x2.toString());
        lightning.setAttribute('y2', y2.toString());
        
        setTimeout(() => {
          lightning.style.opacity = '0';
          setTimeout(() => lightning.remove(), 300);
        }, 300);
      }, i * 50);
    }
  }
}

// =================================
// CONTACT FORM HANDLING
// =================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Obtener valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const projectType = document.getElementById('projectType').value;
    const message = document.getElementById('message').value;
    
    // Crear mailto link
    const mailtoLink = `mailto:rayocamila01@gmail.com?subject=${encodeURIComponent(subject + ' - ' + projectType)}&body=${encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\nTipo de Proyecto: ${projectType}\n\nMensaje:\n${message}`)}`;
    
    // Abrir cliente de correo
    window.location.href = mailtoLink;
    
    // Mostrar mensaje de confirmación
    showFormConfirmation();
    
    // Limpiar formulario
    form.reset();
  });
}

function showFormConfirmation() {
  const confirmation = document.createElement('div');
  confirmation.className = 'form-confirmation';
  confirmation.innerHTML = `
    <div class="confirmation-content">
      <i class="fas fa-check-circle"></i>
      <p>Se abrió tu cliente de correo. Envía el mensaje para contactarme.</p>
    </div>
  `;
  
  confirmation.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(4, 1, 24, 0.95);
    backdrop-filter: blur(15px);
    border: 2px solid var(--neon-cyan);
    border-radius: 15px;
    padding: 2rem;
    z-index: 10000;
    box-shadow: 0 0 40px rgba(0, 212, 255, 0.4);
    animation: fadeInScale 0.5s ease-out;
  `;
  
  document.body.appendChild(confirmation);
  
  setTimeout(() => {
    confirmation.style.animation = 'fadeOutScale 0.5s ease-out';
    setTimeout(() => confirmation.remove(), 500);
  }, 3000);
}

// Agregar estilos para la confirmación
const confirmationStyles = document.createElement('style');
confirmationStyles.textContent = `
  @keyframes fadeInScale {
    from { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
    to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  }
  
  @keyframes fadeOutScale {
    from { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    to { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
  }
  
  .confirmation-content {
    text-align: center;
    color: white;
  }
  
  .confirmation-content i {
    font-size: 3rem;
    color: var(--neon-cyan);
    text-shadow: 0 0 20px var(--neon-cyan);
    margin-bottom: 1rem;
  }
  
  .confirmation-content p {
    font-size: 1.1rem;
    margin: 0;
    color: rgba(255, 255, 255, 0.9);
  }
`;
document.head.appendChild(confirmationStyles);

// Agregar estilos de animación para partículas
function addParticleStyles() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes particleFloat {
      0%, 100% {
        transform: translateY(0) translateX(0) scale(1);
        opacity: 0.4;
      }
      25% {
        transform: translateY(-20px) translateX(10px) scale(1.2);
        opacity: 0.8;
      }
      50% {
        transform: translateY(-40px) translateX(-10px) scale(0.8);
        opacity: 1;
      }
      75% {
        transform: translateY(-20px) translateX(15px) scale(1.1);
        opacity: 0.6;
      }
    }
    
    @keyframes lightningPulse {
      0%, 100% { 
        opacity: 0.3;
        stroke-width: 2;
      }
      50% { 
        opacity: 1;
        stroke-width: 4;
      }
    }
    
    .fade-in {
      animation: fadeIn 1s ease-in-out forwards;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .slide-in-right {
      animation: slideInRight 0.8s ease-out forwards;
    }
    
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    .bounce-in {
      animation: bounceIn 1s ease-out forwards;
    }
    
    @keyframes bounceIn {
      0% { opacity: 0; transform: scale(0.3); }
      50% { opacity: 1; transform: scale(1.1); }
      100% { opacity: 1; transform: scale(1); }
    }
    
    @keyframes fadeInUp {
      from { 
        opacity: 0; 
        transform: translateY(30px); 
      }
      to { 
        opacity: 1; 
        transform: translateY(0); 
      }
    }
    
    .cursor {
      animation: blink 1s infinite;
    }
    
    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}

// Función para el efecto de cursor personalizado
function initCustomCursor() {
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    background: radial-gradient(circle, var(--neon-cyan) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: difference;
    transition: transform 0.1s ease;
    opacity: 0;
  `;
  document.body.appendChild(cursor);
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
    cursor.style.opacity = '0.8';
  });
  
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
  });
  
  const interactiveElements = document.querySelectorAll('a, button, .profile-pic, .advanced-lightning-svg');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(1.5)';
      cursor.style.background = 'radial-gradient(circle, var(--neon-pink) 0%, transparent 70%)';
    });
    
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      cursor.style.background = 'radial-gradient(circle, var(--neon-cyan) 0%, transparent 70%)';
    });
  });
}

// Scroll suave entre secciones
function initSmoothScroll() {
  const heroSection = document.querySelector('.hero');
  const aboutSection = document.querySelector('.about-section');
  const skillsSection = document.querySelector('.skills-section');
  const projectsSection = document.querySelector('.projects-section');
  const contactSection = document.querySelector('.contact-section');
  
  const sections = [heroSection, aboutSection, skillsSection, projectsSection, contactSection].filter(Boolean);
  let currentSectionIndex = 0;
  let isTransitioning = false;
  
  function enableSectionNavigation() {
    sections.forEach((section, index) => {
      if (section) {
        if (index === 0) {
          section.classList.add('active');
          section.classList.remove('inactive');
        } else {
          section.classList.remove('active');
          section.classList.add('inactive');
        }
      }
    });
    
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
  }
  
  function showSection(index) {
    sections.forEach((section, i) => {
      if (section) {
        if (i === index) {
          section.classList.add('active');
          section.classList.remove('inactive');
        } else {
          section.classList.remove('active');
          section.classList.add('inactive');
        }
      }
    });
    
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }
  
  setTimeout(() => {
    enableSectionNavigation();
  }, 1000);
  
  let isScrolling = false;
  let scrollDirection = 0;
  let scrollAccumulator = 0;
  
  window.addEventListener('wheel', (e) => {
    if (document.body.style.overflow !== 'hidden' || isTransitioning) return;
    
    scrollAccumulator += Math.abs(e.deltaY);
    
    if (!isScrolling) {
      isScrolling = true;
      scrollDirection = e.deltaY > 0 ? 1 : -1;
      
      setTimeout(() => {
        if (scrollAccumulator > 100) {
          if (scrollDirection > 0 && currentSectionIndex < sections.length - 1) {
            e.preventDefault();
            navigateToSection(currentSectionIndex + 1);
          } else if (scrollDirection < 0 && currentSectionIndex > 0) {
            e.preventDefault();
            navigateToSection(currentSectionIndex - 1);
          }
        }
        
        isScrolling = false;
        scrollAccumulator = 0;
      }, 200);
    }
    
    if (scrollAccumulator > 50) {
      e.preventDefault();
    }
  }, { passive: false });
  
  window.addEventListener('keydown', (e) => {
    if (document.body.style.overflow !== 'hidden' || isTransitioning) return;
    
    if (e.key === 'ArrowDown' && currentSectionIndex < sections.length - 1) {
      e.preventDefault();
      navigateToSection(currentSectionIndex + 1);
    } else if (e.key === 'ArrowUp' && currentSectionIndex > 0) {
      e.preventDefault();
      navigateToSection(currentSectionIndex - 1);
    }
  });
  
  document.addEventListener('click', (e) => {
    if (e.target.closest('.scroll-arrow')) {
      const arrow = e.target.closest('.scroll-arrow');
      const upArrow = arrow.querySelector('.fa-chevron-up');
      
      if (upArrow) {
        // Flecha hacia arriba - ir a la primera sección
        navigateToSection(0);
      } else if (currentSectionIndex < sections.length - 1) {
        // Flecha hacia abajo - ir a la siguiente sección
        navigateToSection(currentSectionIndex + 1);
      }
    }
  });
  
  function navigateToSection(targetIndex) {
    if (isTransitioning || targetIndex === currentSectionIndex) return;
    
    isTransitioning = true;
    
    const overlay = document.createElement('div');
    overlay.className = 'section-transition';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--bg-dark);
      z-index: 9999;
      opacity: 0;
      transition: all 0.3s ease-in-out;
      pointer-events: none;
    `;
    document.body.appendChild(overlay);
    
    setTimeout(() => overlay.style.opacity = '0.95', 10);
    
    setTimeout(() => {
      showSection(targetIndex);
      currentSectionIndex = targetIndex;
      window.scrollTo(0, 0);
    }, 400);
    
    setTimeout(() => {
      overlay.style.opacity = '0';
      
      setTimeout(() => {
        overlay.remove();
        isTransitioning = false;
      }, 600);
    }, 800);
  }
}

// Intersection Observer para animaciones al hacer scroll
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        
        if (entry.target.classList.contains('about-section')) {
          setTimeout(() => {
            const aboutContent = entry.target.querySelector('.about-content');
            const lightningContainer = entry.target.querySelector('.lightning-container');
            
            if (aboutContent) {
              aboutContent.style.animation = 'fadeInUp 0.8s ease-out forwards';
              
              const paragraphs = aboutContent.querySelectorAll('.about-paragraph');
              const curiosity = aboutContent.querySelector('.about-curiosity');
              
              paragraphs.forEach((p, index) => {
                setTimeout(() => {
                  p.style.animation = 'fadeInUp 0.6s ease-out forwards';
                  p.style.opacity = '1';
                }, index * 150 + 300);
              });
              
              if (curiosity) {
                setTimeout(() => {
                  curiosity.style.animation = 'fadeInUp 0.6s ease-out forwards';
                  curiosity.style.opacity = '1';
                }, paragraphs.length * 150 + 500);
              }
            }
            
            if (lightningContainer) {
              setTimeout(() => {
                lightningContainer.style.animation = 'bounceIn 1s ease-out forwards, floatLightning 8s ease-in-out infinite 1s';
              }, 200);
            }
          }, 100);
        }
      }
    });
  }, observerOptions);
  
  const heroSection = document.querySelector('.hero');
  const aboutSection = document.querySelector('.about-section');
  const projectsSection = document.querySelector('.projects-section');
  const contactSection = document.querySelector('.contact-section');
  
  if (heroSection) observer.observe(heroSection);
  if (aboutSection) observer.observe(aboutSection);
  if (projectsSection) observer.observe(projectsSection);
  if (contactSection) observer.observe(contactSection);
}

// Efectos especiales para el SVG de rayos
function initLightningEffects() {
  const lightningContainer = document.querySelector('.lightning-container');
  const mainLightning = document.querySelector('.main-lightning');
  
  if (lightningContainer) {
    lightningContainer.addEventListener('click', () => {
      lightningContainer.classList.add('lightning-burst');
      
      setTimeout(() => {
        lightningContainer.classList.remove('lightning-burst');
      }, 1000);
      
      createLightningParticles(lightningContainer);
    });
    
    lightningContainer.addEventListener('mouseleave', () => {
      if (mainLightning) {
        mainLightning.style.animation = 'lightningPulse 2s ease-in-out infinite';
      }
    });
  }
}

function createLightningParticles(container) {
  for (let i = 0; i < 8; i++) {
    const particle = document.createElement('div');
    particle.className = 'temp-particle';
    particle.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      background: var(--neon-cyan);
      border-radius: 50%;
      pointer-events: none;
      z-index: 10;
      left: 50%;
      top: 50%;
      box-shadow: 0 0 10px var(--neon-cyan);
    `;
    
    container.appendChild(particle);
    
    const angle = (360 / 8) * i;
    const distance = 100 + Math.random() * 50;
    const duration = 800 + Math.random() * 400;
    
    particle.animate([
      {
        transform: 'translate(-50%, -50%) translate(0, 0) scale(1)',
        opacity: 1
      },
      {
        transform: `translate(-50%, -50%) translate(${Math.cos(angle * Math.PI / 180) * distance}px, ${Math.sin(angle * Math.PI / 180) * distance}px) scale(0)`,
        opacity: 0
      }
    ], {
      duration: duration,
      easing: 'ease-out',
      fill: 'forwards'
    }).onfinish = () => {
      particle.remove();
    };
  }
}

// Función principal de inicialización
function initPortfolio() {
  window.scrollTo(0, 0);
  
  addParticleStyles();
  createParticles();
  initCustomCursor();
  initSmoothScroll();
  initScrollAnimations();
  initLightningEffects();
  initMatrixEffect();
  initProjectsMatrixEffect();
  initCodeTyping();
  initSkillsCirclesAnimations();
  initContactForm();
  
  // Inicializar carrusel de proyectos
  setTimeout(() => {
    new SimpleProjectCarousel();
  }, 1000);
  
  setTimeout(() => {
    const profilePic = document.querySelector('.profile-pic');
    if (profilePic) {
      profilePic.classList.add('bounce-in');
    }
  }, 200);
  
  setTimeout(() => {
    typeWriter("typing-hello", "Hola, soy ", 80, () => {
      setTimeout(() => {
        const socialIcons = document.querySelector('.social-icons');
        if (socialIcons) {
          socialIcons.classList.add('fade-in');
        }
      }, 300);
      
      typeWriter("typing-role", "Desarrolladora Web", 90, () => {
        typeWriter("typing-email", "rayocamila01@gmail.com", 60, () => {
          setTimeout(() => {
            const emailElement = document.getElementById('typing-email');
            if (emailElement) {
              emailElement.style.animation = 'bounce-in 0.5s ease-out forwards';
            }
          }, 100);
        });
      });
    });
  }, 800);
}

// Event listeners
document.addEventListener('DOMContentLoaded', initPortfolio);

// Efecto de parallax sutil para las auroras
document.addEventListener('mousemove', (e) => {
  const auroras = document.querySelector('.auroras');
  const aurorasAbout = document.querySelector('.auroras-about');
  const aurorasContact = document.querySelector('.auroras-contact');
  
  if (auroras) {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    
    auroras.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`;
  }
  
  if (aurorasAbout) {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    
    aurorasAbout.style.transform = `translate(${x * 0.015}px, ${y * 0.015}px)`;
  }
  
  if (aurorasContact) {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    
    aurorasContact.style.transform = `translate(${x * 0.018}px, ${y * 0.018}px)`;
  }
});

window.addEventListener('load', () => {
  const fonts = [
    'https://fonts.googleapis.com/css2?family=Great+Vibes:wght@400&family=Poppins:wght@300;400;600;700&display=swap'
  ];
  
  fonts.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = font;
    document.head.appendChild(link);
  });
});