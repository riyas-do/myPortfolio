const techStack = ['Node.js', 'JavaScript', 'TypeScript', 'GraphQL', 'GCP', 'MongoDB', 'PostgreSQL', 'Microservices', 'Git', 'API Development', 'Cloud Computing',
    'Web Development', 'Debugging', 'Jest'];
export default function TechStack(){
    return <>
       <h2>Skills</h2>
       <div>
            { techStack.map(skill=>(<span key= {skill} style={{borderRadius: "2px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      margin: "5px",
      padding: "6px 12px",
      display: "inline-block"}}>{skill}</span>)  
            )}
       </div>
    </>
}