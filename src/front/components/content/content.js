import React,{ Component } from 'react'
import './content.css'
import Article from '../article/article'
import axios from 'axios'
class Content extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        axios.get('/data').then(res=>{
            console.log(res)
        });
    }
    render(){
        return(
            <div className="container">
                <div className="section">
                    <div className="col span_2_of_3">
                      <Article></Article>
                        <div className="blog-post">
                            <h1 className="blog-title">Title</h1>
                            <h2 className="date">Posted 22nd Feb 2015</h2>
                            <p className="blog-content">Dolor offendit et consectetur, ut mandaremus est litteris, noster ab ab labore cernantur eu nulla incurreret imitarentur, qui fore malis e doctrina, de anim esse do appellat, proident sint litteris, anim arbitror consequat. Proident illum nulla laborum fore. Sed tamen litteris probant, summis exercitation consequat minim eiusmod hic ea dolor admodum vidisse, aliquip eruditionem id possumus. Si lorem ex culpa. Summis eiusmod a mentitum. Nisi deserunt vidisse a ingeniis velit ex cernantur reprehenderit, est appellat an incididunt ad duis non fabulas ut aute id an offendit adipisicing, ad duis litteris, ubi quid ea anim do appellat veniam aut officia illustriora. Quamquam ubi tamen appellat et eu ex duis pariatur eu qui arbitror exercitation, te laboris exercitation. Vidisse varias quem te amet, esse iudicem do comprehenderit, incididunt a commodo, consequat si summis excepteur ne amet de vidisse se fore, lorem distinguantur consequat varias nescius, quae incididunt qui instituendarum, uibusdam ad summis.</p>
                            <a href="#" className="post-link">Read More...</a>
                        </div>

                        <div className="blog-post">
                            <h1 className="blog-title">Title</h1>
                            <h2 className="date">Posted 12th Feb 2015</h2>
                            <p className="blog-content">Expetendis qui probant, enim arbitror de enim irure ubi e arbitror praetermissum, nulla de probant. Velit incididunt et sint quorum. Ita an sempiternum ita senserit fidelissimae de vidisse est o esse si quid iis deserunt est tempor o ab lorem consequat, et occaecat nam doctrina, ad ex nisi senserit, amet exquisitaque laborum eram iudicem. Sed id cillum aliquip, nulla e de fugiat ingeniis. Eiusmod amet aliqua appellat sunt. Ea amet expetendis litteris, in dolor quamquam proident, quorum consequat id quorum aute iis ut nisi tempor. Ea senserit ne senserit. Qui ad fugiat mandaremus ut iis de sint elit tamen o pariatur nulla varias an dolore, probant nisi varias an multos, aliqua nam nam illum officia, an non praetermissum iis senserit enim ullamco do quid o
            arbitror.</p>
                            <a href="#" className="post-link">Read More...</a>
                        </div>
                    </div>

                    <aside className="col span_1_of_3">
                        <div className="side-post">
                            <img src="#" alt="img" />      {/*呵呵，JSX的img要有 / 啊 */}
                                <p className="side-content">Ut noster tractavissent, summis hic eiusmod te quem. Doctrina velit litteris eu eu fore ingeniis philosophari ne quid o ingeniis ne anim, illum ea iudicem. Pariatur duis dolor hic dolor ad vidisse amet elit ita summis, quo duis te malis.</p>
				        </div>

                            <div className="side-post">
                                <p className="side-content">Ultricies lacus et, non orci gravida purus augue integer, sed turpis. Erat dapibus. 						Eleifend massa scelerisque, aenean penatibus laoreet ut in.</p>
                                <a href="#" className="button">Subscribe!</a>
                            </div>
			        </aside>
		          </div>
                 </div>
        )
    }
}

export default Content