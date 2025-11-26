const { useState, useEffect, useRef } = React;

/* Simple small app that reads window.RESUME_DATA and window.BLOG_POSTS
   No external icons, minimal layout.
*/

function Header({ personal }) {
  return (
    <div className="header">
      <div className="avatar">{personal.name.split(' ')[0].slice(0,2).toUpperCase()}</div>
      <div>
        <div className="name">{personal.name}</div>
        <div className="role">{personal.location} · {personal.email}</div>
      </div>
    </div>
  );
}

function Sidebar({ data, onSelectPost }) {
  return (
    <aside className="sidebar panel">
      <Header personal={data.personal} />
      <div className="section">
        <h4>ABOUT</h4>
        <div className="small">{data.objective}</div>
      </div>

      <div className="section">
        <h4>EDUCATION</h4>
        <div className="small">{data.education.degree} — {data.education.school}</div>
        <div className="small">Period: {data.education.period} · CGPA: {data.education.cgpa}</div>
      </div>

      <div className="section">
        <h4>SKILLS</h4>
        {data.skills.map((g, i) => (
          <div key={i} style={{marginBottom:8}}>
            <div className="small" style={{marginBottom:6}}>{g.category}</div>
            {g.items.map((s, idx) => <span key={idx} className="skill-badge">{s}</span>)}
          </div>
        ))}
      </div>

      <div className="section">
        <h4>CERTIFICATIONS</h4>
        {data.certificates.map((c,i) => <div key={i} className="small">{c.title} — {c.issuer} ({c.date})</div>)}
      </div>

      <div className="footer">GitHub · <a href={data.personal.github} target="_blank">{data.personal.github.replace('https://','')}</a></div>
    </aside>
  );
}

function PostList({ posts, onSelect }) {
  return (
    <div className="posts">
      {posts.map(p => (
        <div key={p.id} className="post-card panel">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div>
              <div className="post-title">{p.title}</div>
              <div className="small">{p.category} · {p.readTime} · {p.date}</div>
            </div>
            <div>
              <button className="btn" onClick={() => onSelect(p)}>&#128214; Read</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function PostView({ post, onBack }) {
  if (!post) return (
    <div className="panel">
      <div style={{textAlign:'center', padding:40}}>
        <div style={{fontSize:48}}>📄</div>
        <div className="small">Select a post from the list</div>
      </div>
    </div>
  );

  // render basic markdown-like headings & code fences simply
  const lines = post.content.split('\n').map((ln,i) => {
    if (ln.trim().startsWith('###')) return <h3 key={i} style={{fontFamily:'Inconsolata', color:'#dff7ff'}}>{ln.replace('###','').trim()}</h3>;
    if (ln.trim().startsWith('```')) return null;
    if (ln.includes('nmap -sC') || ln.includes('gobuster')) {
      return <pre key={i} className="code">{ln.trim()}</pre>;
    }
    return <p key={i} className="small">{ln}</p>;
  });

  return (
    <div className="panel">
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12}}>
        <div>
          <div className="post-title">{post.title}</div>
          <div className="small">{post.date} · {post.readTime}</div>
        </div>
        <div>
          <button className="btn" onClick={onBack}>&larr; Back</button>
        </div>
      </div>

      <div>{lines}</div>
    </div>
  );
}

function ResumeView({ data }) {
  return (
    <div className="panel">
      <h3 className="post-title">Resume</h3>
      <div className="small" style={{marginTop:8}}>
        <strong>Location:</strong> {data.personal.location}<br/>
        <strong>Email:</strong> <a href={`mailto:${data.personal.email}`}>{data.personal.email}</a><br/>
        <strong>Phone:</strong> {data.contactCard.phone}<br/>
        <strong>Website:</strong> <a href={data.personal.website} target="_blank">{data.personal.website}</a>
      </div>

      <div style={{marginTop:16}}>
        <h4 className="small" style={{color:'#9ff'}}>Experience</h4>
        {data.experience.map((e,i) => (
          <div key={i} style={{marginTop:8}}>
            <div style={{fontWeight:700}}>{e.role} — <span className="small">{e.org}</span></div>
            <div className="small">{e.period}</div>
            <ul>
              {e.points.map((p,pi) => <li key={pi} className="small">{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function App(){
  const [selected, setSelected] = useState(null);
  const [viewResume, setViewResume] = useState(false);
  const posts = window.BLOG_POSTS || [];
  const resume = window.RESUME_DATA || {};

  return (
    <div className="container">
      <Sidebar data={resume} onSelectPost={p=>{setSelected(p); setViewResume(false)}} />

      <main>
        <div style={{display:'flex', justifyContent:'space-between', gap:12, marginBottom:16}}>
          <div style={{display:'flex', gap:8}}>
            <button className="btn" onClick={()=>{setViewResume(false); setSelected(null)}}>📰 Posts</button>
            <button className="btn" onClick={()=>{setViewResume(true); setSelected(null)}}>📁 Resume</button>
          </div>

          <div style={{display:'flex', gap:8}}>
            <a className="btn" href={resume.personal.github} target="_blank">GitHub</a>
            <a className="btn" href={resume.personal.linkedin} target="_blank">LinkedIn</a>
          </div>
        </div>

        {!viewResume && (
          <div>
            <PostList posts={posts} onSelect={(p)=>{setSelected(p)}} />
            <div style={{marginTop:14}}>
              <PostView post={selected} onBack={()=>setSelected(null)} />
            </div>
          </div>
        )}

        {viewResume && <ResumeView data={resume} />}
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
