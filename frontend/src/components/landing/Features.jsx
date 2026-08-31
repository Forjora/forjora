const cardpack =[
  { 
   Icon:"👥",
   Title: "AI & Team Matching",
   Description:"Our AI finds the best teammates based on skills, goals and compatibility."
  },
  { 
   Icon:"🛡️",
   Title:"Build Your Network",
   Description:"We prioritize your privacy and provide a safe environment for meaningful connections."
  },
  { 
   Icon:"🤝",
   Title:"Projects & Oppurtunities",
   Description:"Connect with like-minded students and expand your professional network."
  },
  { 
   Icon:"🚀",
   Title:"Stay Up to Date with Events",
   Description:"Discover hackathons, research opportunities and projects that match your interests."
  },
  { 
   Icon:"📆",
   Title:"Safe and Secure",
   Description:"Never miss important events, hackathons and workshops happening around you."
  }
]
const Features=()=>{
  return(   
    <section section className="features">
    <h3 className="feature-heading">Everything you need to build the perfect team</h3>
  <div className="card-container">
 {cardpack.map((item,index)=>{
  return(
  <div className="card"
   key={index}
   style={{animationDelay: `${index * 0.3}s`}}
  >
    <div className="card-icon">{item.Icon}</div>
    <div className="card-title">{item.Title}</div>
    <div className="card-description">{item.Description}</div>
  </div>
  ) 
 })}
</div>
</section>
)
}
export default Features;
