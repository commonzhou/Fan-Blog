import React,{ Component } from 'react'
import './article.css'

class Article extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="blog-post">
                <h1 className="blog-title">Title</h1>
                <h2 className="date">Posted 28th Feb 2015</h2>
                <p className="blog-content">Ut noster tractavissent, summis hic eiusmod te quem. Doctrina velit litteris eu
        eu fore ingeniis philosophari ne quid o ingeniis ne anim, illum ea iudicem. Pariatur duis dolor hic dolor ad vidisse amet elit ita summis, quo duis te  malis, velit nostrud ingeniis. Appellat elit tamen iudicem multos, mentitum quae sed appellat illustriora. Velit commodo cernantur se si anim do labore, probant ab aliqua aut non laborum fidelissimae. Ex quae se fugiat, et malis officia in et enim cillum ita incididunt, a irure amet an ingeniis.</p>
                <a href="#" className="post-link">Read More...</a>
            </div>
        )
    }
}

export default Article
