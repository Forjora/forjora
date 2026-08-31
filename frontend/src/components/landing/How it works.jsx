const HowItWorksArray=[
    {
     number:"1",
     icon: "👤",
     title:"Create Profile",
     description:"Add your skills, interests, and goals."
    },
    {
     number:"2",
     icon: "🔍",
     title:"Find or Join",
     description:"Look for someone or join an existing team."
    },
    {
     number:"3",
     icon:"💬",
     title:"Connect",
     description:"Start a conversation and get to know each other."
    },
    {
     number:"4",
     icon:"👥",
     title:"Collaborate",
     description:"Chat, share ideas and plan your project together."
    },
    {
        number:"5",
        icon:"🚩",
        title:"Build and achieve",
        description:"Bring your ideas to life and achieve together."
    }
]
const HowItWorks=()=>{
    return(
    <section className="feature-section">
        <div className="feature-container">
        <div className="feature-heading">
            How It Works
        </div>
        <div className="feature-box">
        {HowItWorksArray.map((item,index)=>{
            return(
                <div className="features-pack" key={index}>
                    <span className="feature-number">{item.number}</span>
                    <div className="feature-icon">
                        {item.icon}
                    </div>
                    <h3 className="feature-title">{item.title}</h3>
                    <p className="feature-description">{item.description}</p>
                </div>
          
            )
        })}
        </div>
        </div>
    </section>
    )
}
export default HowItWorks