import './App.css';

// Helper function to create Facebook video embed URL
// Usage: getFacebookVideoEmbed('https://www.facebook.com/reel/1403509070847327/')
function getFacebookVideoEmbed(videoUrl) {
  if (!videoUrl) return '';
  // Ensure URL ends with / for proper embedding
  const urlWithSlash = videoUrl.endsWith('/') ? videoUrl : `${videoUrl}/`;
  const encodedUrl = encodeURIComponent(urlWithSlash);
  // Using responsive width (500px) and proper height for better compatibility
  return `https://www.facebook.com/plugins/video.php?height=476&href=${encodedUrl}&show_text=false&width=500&t=0`;
}

function App() {
  // Add your Facebook video URLs here
  // To get a Facebook video URL:
  // 1. Go to your Facebook page/post with the video
  // 2. Click on the video to open it
  // 3. Click the three dots (...) menu
  // 4. Select "Copy link" or "Embed"
  // 5. Use the video post URL (format: https://www.facebook.com/yourpage/videos/video-id/)
  // 6. Replace the URLs below with your actual Facebook video URLs
  const facebookVideos = [
    "https://www.facebook.com/reel/1403509070847327", // Facebook Reel video
    "https://www.facebook.com/yourpage/videos/video-id-2/", // Replace with your Facebook video URL
    "https://www.facebook.com/yourpage/videos/video-id-3/", // Replace with your Facebook video URL
    "https://www.facebook.com/yourpage/videos/video-id-4/", // Replace with your Facebook video URL
  ];
  return (
    <div className="App">
      <header className="SiteHeader">
        <div className="Container HeaderContent">
          <div className="Brand">
            <div className="BrandMark">IBA</div>
            <div className="BrandText">
              <h1>IBA AUTOMOBILE</h1>
              <p>Repair • Service • Roadside Assistance</p>
            </div>
          </div>
          <nav className="Nav">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#team">Team</a>
            <a href="#contact" className="Button Button--small">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="Hero">
          <div className="Container HeroGrid">
            <div className="HeroText">
              <h2>Reliable Tractor and Tyre Repairs</h2>
              <p>
                Expert maintenance and tyre services for tractors, trucks, and
                farm equipment. Fast turnaround, honest pricing, and on-site
                support when you need it.
              </p>
              <div className="HeroActions">
                <a href="#contact" className="Button Button--primary">
                  Book a Repair
                </a>
                <a href="#services" className="Button Button--ghost">
                  View Services
                </a>
              </div>
              <ul className="Badges">
                <li>24/7 Emergency</li>
                <li>Farm Callouts</li>
                <li>OEM & Aftermarket Tyres</li>
              </ul>
            </div>
            <div className="HeroMedia">
              <img
                src="/images/tractor.avif"
                alt="Tractor tyre being repaired in workshop"
                className="HeroImage"
              />
            </div>
          </div>
        </section>

        <section id="services" className="Section Section--alt">
          <div className="Container">
            <h3 className="SectionTitle">Our Services</h3>
            <div className="Cards">
              <article className="Card">
                <div className="CardIcon">🔧</div>
                <h4>Tractor Repairs</h4>
                <p>
                  Engine diagnostics, hydraulics, brakes, electrics, and routine
                  servicing.
                </p>
              </article>
              <article className="Card">
                <div className="CardIcon">🛞</div>
                <h4>Tyre Replacement</h4>
                <p>
                  Supply, fit, and balance for agricultural, truck, and utility
                  vehicles.
                </p>
              </article>
              <article className="Card">
                <div className="CardIcon">🚚</div>
                <h4>Mobile Callouts</h4>
                <p>
                  On-farm and roadside assistance to get you moving without
                  delays.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="about" className="Section">
          <div className="Container TwoCol">
            <div>
              <h3 className="SectionTitle">About Us</h3>
              <p>
                We are a dedicated tractor and tyre workshop with decades of
                experience supporting farmers and transport operators. Our
                certified mechanics and tyre specialists deliver dependable
                workmanship backed by quality parts.
              </p>
              <ul className="List">
                <li>Certified technicians</li>
                <li>Same-day turnaround on common jobs</li>
                <li>Warranty on parts and labour</li>
              </ul>
            </div>
            <div className="AboutMedia">
              <img
                src="/images/pic3.jfif"
                alt="Tractor service and repair workshop"
              />
            </div>
          </div>
        </section>

        <section id="team" className="Section Section--alt">
          <div className="Container">
            <h3 className="SectionTitle">Our Team</h3>
            <p className="SectionSubtitle">
              Meet the experienced professionals behind our workshop
            </p>
            <div className="TeamGrid">
              <div className="TeamCard">
                <div className="TeamPhoto">
                  <img
                    src="/images/pic.jfif"
                    alt="John Smith - Senior Mechanic"
                  />
                </div>
                <div className="TeamInfo">
                  <h4>Mohd Nabi</h4>
                  <p className="TeamRole">Senior Mechanic</p>
                  <p className="TeamExpertise">
                    Expertise: Engine diagnostics, hydraulic systems, electrical
                    repairs
                  </p>
                  <p className="TeamExperience">10+ years experience</p>
                </div>
              </div>
              <div className="TeamCard">
                <div className="TeamPhoto">
                  <img
                    src="/images/chand.jfif"
                    alt="Sarah Johnson - Tyre Specialist"
                  />
                </div>
                <div className="TeamInfo">
                  <h4>Ather Ali (Chand)</h4>
                  <p className="TeamRole">Tyre Specialist</p>
                  <p className="TeamExpertise">
                    Expertise: Agricultural tyres, truck tyres, tyre fitting and
                    balancing
                  </p>
                  <p className="TeamExperience">15+ years experience</p>
                </div>
              </div>
              <div className="TeamCard">
                <div className="TeamPhoto">
                  <img
                    src="/images/pic2.jfif"
                    alt="Mike Williams - Mobile Service Technician"
                  />
                </div>
                <div className="TeamInfo">
                  <h4>Asim Zaidi</h4>
                  <p className="TeamRole">Mobile Service Technician</p>
                  <p className="TeamExpertise">
                    Expertise: On-site repairs, emergency callouts, roadside
                    assistance
                  </p>
                  <p className="TeamExperience">10+ years experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="Section">
          <div className="Container">
            <h3 className="SectionTitle">Our Workshop</h3>
            <p className="SectionSubtitle">Watch our team in action</p>
            <div className="VideoGallery">
              {facebookVideos.map((videoUrl, index) => {
                const isValidVideo = videoUrl && 
                  videoUrl.includes('facebook.com') && 
                  (videoUrl.includes('/reel/') || videoUrl.includes('/videos/')) &&
                  !videoUrl.includes('yourpage') && 
                  !videoUrl.includes('video-id');
                
                // Use the exact iframe code for the first video
                const isFirstVideo = index === 0 && videoUrl.includes('1403509070847327');
                
                return (
                  <div key={index} className="VideoItem">
                    {isValidVideo ? (
                      <div style={{ width: '100%', position: 'relative' }}>
                        {isFirstVideo ? (
                          // Direct embed using the exact code provided
                          <iframe 
                            src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1403509070847327%2F&show_text=false&width=500&t=0" 
                            width="100%" 
                            height="476" 
                            style={{
                              border: 'none',
                              overflow: 'hidden',
                              maxWidth: '100%',
                              minHeight: '476px',
                              display: 'block'
                            }} 
                            scrolling="no" 
                            frameBorder="0" 
                            allowFullScreen={true} 
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            title={`Workshop Video ${index + 1}`}
                            onLoad={() => console.log('Facebook video iframe loaded')}
                            onError={() => console.error('Facebook video iframe failed to load')}
                          ></iframe>
                        ) : (
                          <iframe
                            src={getFacebookVideoEmbed(videoUrl)}
                            width="100%"
                            height="476"
                            style={{
                              border: 'none',
                              overflow: 'hidden',
                              maxWidth: '100%',
                              minHeight: '476px',
                              display: 'block'
                            }}
                            scrolling="no"
                            frameBorder="0"
                            allowFullScreen={true}
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            title={`Workshop Video ${index + 1}`}
                          ></iframe>
                        )}
                        <div style={{ marginTop: '12px', textAlign: 'center' }}>
                          <a 
                            href={videoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ 
                              color: 'var(--brand)', 
                              textDecoration: 'none',
                              fontSize: '14px'
                            }}
                          >
                            Watch on Facebook ↗
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="VideoPlaceholder">
                        <p>📹 Add your Facebook video URL</p>
                        <p className="VideoPlaceholderHint">
                          Edit the facebookVideos array in App.js<br/>
                          Use your Facebook video post URL or Reel URL
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="Section Section--highlight">
          <div className="Container ContactGrid">
            <div>
              <h3 className="SectionTitle">Contact & Hours</h3>
              <p className="Lead">
                Call now for bookings or emergency assistance.
              </p>
              <div className="ContactDetails">
                <p>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+919466388996">+91 9466388996</a>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:service-iba@gmail.com">
                    service-iba@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Address:</strong> Main Road Sainthal HafizGanj
                </p>
                <p>
                  <strong>Hours:</strong> Mon–Sat 7:00–18:00 • 24/7 Emergencies
                </p>
              </div>
            </div>
            <form className="ContactForm" onSubmit={(e) => e.preventDefault()}>
              <div className="FieldGroup">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="FieldGroup">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Best contact number"
                  required
                />
              </div>
              <div className="FieldGroup">
                <label htmlFor="message">How can we help?</label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Brief description of the issue"
                />
              </div>
              <button className="Button Button--primary" type="submit">
                Request Callback
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="SiteFooter">
        <div className="Container FooterGrid">
          <div>
            <strong>IBA AUTOMOBILE</strong>
            <p>Trusted repairs, tyres, and mobile assistance.</p>
          </div>
          <div className="FooterLinks">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="FooterMeta">
            <p>© {new Date().getFullYear()} IBA AUTOMOBILE</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
